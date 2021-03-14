---
title: "Lag'n'Crash CTF: Hidden Password"
date: "2021-03-14T09:54:37Z"
description: "Write-up for Lag'n'Crash CTF challenge, Hidden Password"
---
# Challenge Overview
[_Skip to solution_](#Solution)

This challenge is under the Forensics category.
> The flag is in the zip… But I can’t figure out the password?

A file named flag.zip is attached. You can download it [here](./flag.zip).

# Solution
This challenge tests the contestant's knowledge of the zip file format. The given
zip file pretends to be encrypted when it is not. Certain flags in the file need
to be changed to remove the fake encryption.

We can use a hex editor to alter the encryption bit in the file header as well as
the central directory record. I will be using `xxd` to do this. We need to change
the two `0x0900`s to `0x0800`:
```
> xxd flag.zip
00000000: 504b 0304 1400 0900 0800 ee05 5451 e031  PK..........TQ.1
00000010: 4db2 3500 0000 3400 0000 0800 0000 666c  M.5...4.......fl
00000020: 6167 2e74 7874 0b71 3575 f10a 4971 4e31  ag.txt.q5u..IqN1
00000030: ca30 8da8 0cad f40b 71ab 8a30 0eca f735  .0......q..0...5
00000040: b42c 8f0c 09ab 4aa9 72aa 8c72 b3c8 f173  .,....J.r..r...s
00000050: 71ca f573 2fc9 01aa 7505 0050 4b01 021f  q..s/...u..PK...
00000060: 0014 0009 0008 00ee 0554 51e0 314d b235  .........TQ.1M.5
00000070: 0000 0034 0000 0008 0024 0000 0000 0000  ...4.....$......
00000080: 0020 0000 0000 0000 0066 6c61 672e 7478  . .......flag.tx
00000090: 740a 0020 0000 0000 0001 0018 0080 3f7c  t.. ..........?|
000000a0: 8837 a6d6 0180 3f7c 8837 a6d6 0121 0faf  .7....?|.7...!..
000000b0: 4e37 a6d6 0150 4b05 0600 0000 0001 0001  N7...PK.........
000000c0: 005a 0000 005b 0000 0039 0074 6865 2066  .Z...[...9.the f
000000d0: 6c61 6720 6973 2068 6572 6521 210d 0a62  lag is here!!..b
000000e0: 7574 2074 6865 7265 2069 7320 6120 7061  ut there is a pa
000000f0: 7373 776f 7264 0d0a 6f72 2069 7320 7468  ssword..or is th
00000100: 6572 653f                                ere?
```
The first one is at the file header on the `0x000` line. The second one is on the
`0x060` line. We can tweak it in a separate file then convert it back:
```bash
> xxd flag.zip > flaghex
> vim flaghex # edit the values
> xxd -r flaghex > fixed.zip
```

The new file should look like:
```
> xxd fixed.zip
00000000: 504b 0304 1400 0800 0800 ee05 5451 e031  PK..........TQ.1
...
00000060: 0014 0008 0008 00ee 0554 51e0 314d b235  .........TQ.1M.5
...
```

Inside the zip, there is a file `flag.txt` containing a string. We will decode it
as base64, then as a URL decoded string:
```
original: TE5DJTdCd2h5XyUyNTFzX3RoM19wYTVzdzByZF8lNDBmNGtlJTdE
base64 decoded: LNC%7Bwhy_%251s_th3_pa5sw0rd_%40f4ke%7D
URL decoded: LNC{why_%1s_th3_pa5sw0rd_@f4ke}
```

And there we have the flag, `LNC{why_%1s_th3_pa5sw0rd_@f4ke}`.

# Reaching the solution
## 1. Guessing what's wrong
From the challenge description, it is not completely obvious that there is no
password. However, on inspection of the zip, we find a string at the bottom:
```
> xxd flag.zip
...
000000c0: 005a 0000 005b 0000 0039 0074 6865 2066  .Z...[...9.the f
000000d0: 6c61 6720 6973 2068 6572 6521 210d 0a62  lag is here!!..b
000000e0: 7574 2074 6865 7265 2069 7320 6120 7061  ut there is a pa
000000f0: 7373 776f 7264 0d0a 6f72 2069 7320 7468  ssword..or is th
00000100: 6572 653f                                ere?
```
> flag is here!!..but there is a password..or is there?

Now, we can guess that there is actually not password. We can also guess that the
encryption is something that is defined by the header.

## 2. Removing the encryption bit
Searching for "zip fake encryption", we find a page which talks about fake
encryption for CTF challenges [here](https://www.programmersought.com/article/33704714691/).

The post describes a slightly crude way of removing encryption, which is to
disable all flags. A more precise way is to disable only the bit responsible for
encryption.

Looking at the [documentation for zip files](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT)
we can see the overall file structure:

```
   4.3.6 Overall .ZIP file format:

      [local file header 1]
      [encryption header 1]
      [file data 1]
      [data descriptor 1]
      . 
      .
      .
      [local file header n]
      [encryption header n]
      [file data n]
      [data descriptor n]
      [archive decryption header] 
      [archive extra data record] 
      [central directory header 1]
      .
      .
      .
      [central directory header n]
      [zip64 end of central directory record]
      [zip64 end of central directory locator] 
      [end of central directory record]
```

Notice that there are two headers: the file headers and the central directory
headers. If we look at their formats, we can see that both have a "general
purpose bit flag" (see section 4.3.7 and 4.3.12).

Now, looking at the specification for the general purpose bit flag (section
4.4.4), we can see that the first bit indicates whether or not the file is
encrypted. We need to turn this bit off to remove the fake encryption.

Our file has `0x0900` as its general purpose bits for both the file header and the
central directory:
```
> xxd flag.zip
00000000: 504b 0304 1400 0900 0800 ee05 5451 e031  PK..........TQ.1
...
00000060: 0014 0009 0008 00ee 0554 51e0 314d b235  .........TQ.1M.5
...
```

It is important to note that the specification uses little-endian, so our bytes
should be `0x0009` which becomes `0000 0000 0000 1001`. Removing the first bit,
we get `0000 0000 0000 1000` which is `0x0008`, which is `0x0800` in
little-endian.

## 3. Eyeballing the encoded strings
To be honest, I didn't believe that the initial string was encoded with base64,
but another teammate told me to try and decode with base64 anyways. After that,
figuring out that the string is URL encoded is a matter of experience.
