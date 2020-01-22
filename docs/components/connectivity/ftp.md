# FTP

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that allows for uploading and downloading of files via File Transfer Protocol._

## Events

### Connect Error

[[Event('FTP', 'Connect Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


This event returns the reason if a try to connect was not successful.

### Connection Status

[[Event('FTP', 'Connection Status', 'isConnected')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |is Connected|`boolean`|


This event returns the status of the connection. If it is connect it will return true, else false.

### Disconnect Error

[[Event('FTP', 'Disconnect Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


This event returns the reason if a try to disconnect was not successful.

### Download Done

[[Event('FTP', 'Download Done')]]

This event is invoked when the download is finished.

### Download error

[[Event('FTP', 'Download error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


This event returns the reason if a download was not successful.

### Upload Done

[[Event('FTP', 'Upload Done')]]

This event is invoked when the upload is finished.

### Upload error

[[Event('FTP', 'Upload error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


This event returns the reason if a upload was not successful.

## Methods

### Connect

[[Method('FTP', 'Connect', false)]]

Start the connection to the ftp server.

### Disconnect

[[Method('FTP', 'Disconnect', false)]]

Disconnect the current connection.

### DownloadFile

[[Method('FTP', 'DownloadFile', false, 'remoteFilepath destination')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |remote Filepath|`text`|
    |destination|`text`|


Start downloading a file.

### GetListOfFiles

[[Method('FTP', 'GetListOfFiles', true, 'dir')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |dir|`text`|


Get a list of files in a directory. Returns a empty list if a error occurs.

### UploadFile

[[Method('FTP', 'UploadFile', false, 'filePath newName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Path|`text`|
    |new Name|`text`|


Start uploading a file.

### Delete Dir

[[Method('FTP', 'Delete Dir', false, 'dir')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |dir|`text`|


Delete a directory on the ftp server.

### make Dir

[[Method('FTP', 'make Dir', false, 'dir')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |dir|`text`|


Make/create a directory on the ftp server.

## Properties

### FTP-Server (Host)

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'FTP-Server (Host)')]]

| Type | Default |
|:----:|:-------:|
|text|ftp.example.org|

Set the ftp server url.

### Password

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Password')]]

| Type |
|:----:|
|text|

Set the password to login into the ftp server.

### Port

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Port')]]

| Type | Default |
|:----:|:-------:|
|number|21|

Set the ftp port number.

### Username

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Username')]]

| Type | Default |
|:----:|:-------:|
|text|Your Username|

Set the username to login into the ftp server.

### Working Directory

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Working Directory')]]

| Type | Default |
|:----:|:-------:|
|text|/|

Set the ftp working dir.