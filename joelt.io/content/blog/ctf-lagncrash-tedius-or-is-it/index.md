---
title: "Lag'n'Crash CTF: Tedious? Or is it?"
date: "2021-03-14T08:13:21Z"
description: "Write-up for Lag'n'Crash CTF challenge, Tedious? Or is it?"
---
# Challenge Overview
[_Skip to solution_](#solution)

> My friend pranked me and hide my secret in one these!

A file named tedious.zip is attached. You can download it [here](./tedious.zip).

# Solution
Extracting the contents of tedious.zip, we get a file called tedious. This is
another zip file that contains a QR directory. Within the QR directory is 4255
other files.

By sorting the files by size, we can find the odd one out:

![1337.zip is the odd one out and has the smallest size](./qr_dir_sorted.png)

Extracting it, we realise that it is a png file containing a QR code. By scanning
the QR code, we get the flag: `LNC{IS_THlS_TH3_R3AL_0N3?}`:

![QR code displayed by 1337.zip](./1337.png)
