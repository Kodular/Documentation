# FTP

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that allows for uploading and downloading of files via File Transfer Protocol.

## Events

### Connect Error

[[Event('FTP', 'Connect Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


This event returns the reason if a try to connect was not successful.

### Connection Status

[[Event('FTP', 'Connection Status', 'isConnected')]]

| Params | []() |
|--------|------|
|is Connected|Boolean|


This event returns the status of the connection. If it is connect it will return true, else false.

### Disconnect Error

[[Event('FTP', 'Disconnect Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


This event returns the reason if a try to disconnect was not successful.

### Download Done

[[Event('FTP', 'Download Done')]]

This event is invoked when the download is finished.

### Download error

[[Event('FTP', 'Download error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


This event returns the reason if a download was not successful.

### Upload Done

[[Event('FTP', 'Upload Done')]]

This event is invoked when the upload is finished.

### Upload error

[[Event('FTP', 'Upload error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


This event returns the reason if a upload was not successful.

## Methods

### Connect

[[Method('FTP', 'Connect', False)]]

Start the connection to the ftp server.

### Disconnect

[[Method('FTP', 'Disconnect', False)]]

Disconnect the current connection.

### Download File

[[Method('FTP', 'Download File', False, 'remoteFilepath', 'destination')]]

| Params | []() |
|--------|------|
|remote Filepath|Text|
|destination|Text|


Start downloading a file.

### Get List Of Files

[[Method('FTP', 'Get List Of Files', True, 'dir')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|dir|Text|


Get a list of files in a directory. Returns a empty list if a error occurs.

### Upload File

[[Method('FTP', 'Upload File', False, 'filePath', 'newName')]]

| Params | []() |
|--------|------|
|file Path|Text|
|new Name|Text|


Start uploading a file.

### Delete Dir

[[Method('FTP', 'Delete Dir', False, 'dir')]]

| Params | []() |
|--------|------|
|dir|Text|


Delete a directory on the ftp server.

### make Dir

[[Method('FTP', 'make Dir', False, 'dir')]]

| Params | []() |
|--------|------|
|dir|Text|


Make/create a directory on the ftp server.

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