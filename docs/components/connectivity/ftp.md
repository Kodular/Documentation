# FTP

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that allows for uploading and downloading of files via File Transfer Protocol.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### Connect Error

This event returns the reason if a try to connect was not successful.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Connect%20Error%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

### Connection Status

This event returns the status of the connection. If it is connect it will return true, else false.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Connection%20Status%22,%20%22param%22:%20%5B%22is%20Connected%22%5D%7D"></div>

| Params | []() |
|--------|------|
|is Connected|<span class="chip chip-boolean">Boolean</span>|

### Disconnect Error

This event returns the reason if a try to disconnect was not successful.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Disconnect%20Error%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

### Download Done

This event is invoked when the download is finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Download%20Done%22,%20%22param%22:%20%5B%5D%7D"></div>

### Download error

This event returns the reason if a download was not successful.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Download%20error%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

### Upload Done

This event is invoked when the upload is finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Upload%20Done%22,%20%22param%22:%20%5B%5D%7D"></div>

### Upload error

This event returns the reason if a upload was not successful.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Upload%20error%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

## Methods

### Connect

Start the connection to the ftp server.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Connect%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Delete Dir

Delete a directory on the ftp server.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Delete%20Dir%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22dir%22%5D%7D"></div>

| Params | []() |
|--------|------|
|dir|<span class="chip chip-text">Text</span>|

### Disconnect

Disconnect the current connection.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Disconnect%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Download File

Start downloading a file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Download%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22remote%20Filepath%22,%20%22destination%22%5D%7D"></div>

| Params | []() |
|--------|------|
|remote Filepath|<span class="chip chip-text">Text</span>|
|destination|<span class="chip chip-text">Text</span>|

### Get List Of Files

<span class="chip chip-list">Returns: <i>List</i></span>

Get a list of files in a directory. Returns a empty list if a error occurs.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Get%20List%20Of%20Files%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22dir%22%5D%7D"></div>

| Params | []() |
|--------|------|
|dir|<span class="chip chip-text">Text</span>|

### make Dir

Make/create a directory on the ftp server.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22make%20Dir%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22dir%22%5D%7D"></div>

| Params | []() |
|--------|------|
|dir|<span class="chip chip-text">Text</span>|

### Upload File

Start uploading a file.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Upload%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%20Path%22,%20%22new%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file Path|<span class="chip chip-text">Text</span>|
|new Name|<span class="chip chip-text">Text</span>|

## Properties

### FTP-Server (Host)

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ftp.example.org</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the ftp server url.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22FTP-Server%20(Host)%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22FTP-Server%20(Host)%22,%20%22getter%22:%20false%7D"></div>

### Password

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the password to login into the ftp server.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Password%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Password%22,%20%22getter%22:%20false%7D"></div>

### Port

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>21</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the ftp port number.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Port%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Port%22,%20%22getter%22:%20false%7D"></div>

### Username

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Your Username</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the username to login into the ftp server.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Username%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Username%22,%20%22getter%22:%20false%7D"></div>

### Working Directory

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>/</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the ftp working dir.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Working%20Directory%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22FTP%22,%20%22name%22:%20%22Working%20Directory%22,%20%22getter%22:%20false%7D"></div>
