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


_This event returns the reason if a try to connect was not successful._

### Connection Status

[[Event('FTP', 'Connection Status', 'isConnected')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |is Connected|`boolean`|


_This event returns the status of the connection. If it is connect it will return true, else false._

### Disconnect Error

[[Event('FTP', 'Disconnect Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_This event returns the reason if a try to disconnect was not successful._

### Download Done

[[Event('FTP', 'Download Done')]]

_This event is invoked when the download is finished._

### Download error

[[Event('FTP', 'Download error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_This event returns the reason if a download was not successful._

### Upload Done

[[Event('FTP', 'Upload Done')]]

_This event is invoked when the upload is finished._

### Upload error

[[Event('FTP', 'Upload error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_This event returns the reason if a upload was not successful._

## Methods

### Connect

[[Method('FTP', 'Connect', false)]]

_Start the connection to the ftp server._

### Disconnect

[[Method('FTP', 'Disconnect', false)]]

_Disconnect the current connection._

### DownloadFile

[[Method('FTP', 'DownloadFile', false, 'remoteFilepath destination')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |remote Filepath|`text`|
    |destination|`text`|


_Start downloading a file._

### GetListOfFiles

[[Method('FTP', 'GetListOfFiles', true, 'dir')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |dir|`text`|


_Get a list of files in a directory. Returns a empty list if a error occurs._

### UploadFile

[[Method('FTP', 'UploadFile', false, 'filePath newName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Path|`text`|
    |new Name|`text`|


_Start uploading a file._

### Delete Dir

[[Method('FTP', 'Delete Dir', false, 'dir')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |dir|`text`|


_Delete a directory on the ftp server._

### make Dir

[[Method('FTP', 'make Dir', false, 'dir')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |dir|`text`|


_Make/create a directory on the ftp server._

## Properties

### FTP-Server (Host)

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'FTP-Server (Host)')]]

| Type | Default |
|:----:|:-------:|
|text|ftp.example.org|

_Set the ftp server url._

### Password

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Password')]]

| Type |
|:----:|
|text|

_Set the password to login into the ftp server._

### Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Port')]]

| Type | Default |
|:----:|:-------:|
|number|21|

_Set the ftp port number._

### Username

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Username')]]

| Type | Default |
|:----:|:-------:|
|text|Your Username|

_Set the username to login into the ftp server._

### Working Directory

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('FTP', 'Working Directory')]]

| Type | Default |
|:----:|:-------:|
|text|/|

_Set the ftp working dir._