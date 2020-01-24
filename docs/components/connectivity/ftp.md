# FTP

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that allows for uploading and downloading of files via File Transfer Protocol.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### Connect Error

This event returns the reason if a try to connect was not successful.

[[Event('FTP', 'Connect Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


### Connection Status

This event returns the status of the connection. If it is connect it will return true, else false.

[[Event('FTP', 'Connection Status', 'isConnected')]]

| Params | []() |
|--------|------|
|is Connected|<span class="chip chip-boolean">Boolean</span>|


### Disconnect Error

This event returns the reason if a try to disconnect was not successful.

[[Event('FTP', 'Disconnect Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


### Download Done

This event is invoked when the download is finished.

[[Event('FTP', 'Download Done')]]

### Download error

This event returns the reason if a download was not successful.

[[Event('FTP', 'Download error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


### Upload Done

This event is invoked when the upload is finished.

[[Event('FTP', 'Upload Done')]]

### Upload error

This event returns the reason if a upload was not successful.

[[Event('FTP', 'Upload error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Connect

Start the connection to the ftp server.

[[Method('FTP', 'Connect', False)]]

### Disconnect

Disconnect the current connection.

[[Method('FTP', 'Disconnect', False)]]

### Download File

Start downloading a file.

[[Method('FTP', 'Download File', False, 'remoteFilepath', 'destination')]]

| Params | []() |
|--------|------|
|remote Filepath|<span class="chip chip-text">Text</span>|
|destination|<span class="chip chip-text">Text</span>|


### Get List Of Files

<span class="chip chip-list">Returns: <i>List</i></span> 

Get a list of files in a directory. Returns a empty list if a error occurs.

[[Method('FTP', 'Get List Of Files', True, 'dir')]]

| Params | []() |
|--------|------|
|dir|<span class="chip chip-text">Text</span>|


### Upload File

Start uploading a file.

[[Method('FTP', 'Upload File', False, 'filePath', 'newName')]]

| Params | []() |
|--------|------|
|file Path|<span class="chip chip-text">Text</span>|
|new Name|<span class="chip chip-text">Text</span>|


### Delete Dir

Delete a directory on the ftp server.

[[Method('FTP', 'Delete Dir', False, 'dir')]]

| Params | []() |
|--------|------|
|dir|<span class="chip chip-text">Text</span>|


### make Dir

Make/create a directory on the ftp server.

[[Method('FTP', 'make Dir', False, 'dir')]]

| Params | []() |
|--------|------|
|dir|<span class="chip chip-text">Text</span>|


## Properties

### FTP-Server (Host)

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ftp.example.org</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the ftp server url.

[[PropertyBlockGetterAndSetter('FTP', 'FTP-Server Host')]]

### Password

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the password to login into the ftp server.

[[PropertyBlockGetterAndSetter('FTP', 'Password')]]

### Port

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>21</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the ftp port number.

[[PropertyBlockGetterAndSetter('FTP', 'Port')]]

### Username

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Your Username</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the username to login into the ftp server.

[[PropertyBlockGetterAndSetter('FTP', 'Username')]]

### Working Directory

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>/</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the ftp working dir.

[[PropertyBlockGetterAndSetter('FTP', 'Working Directory')]]