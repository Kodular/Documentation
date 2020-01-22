# Firebase Storage

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Firebase Storage to upload files to a Firebase Storage Bucket

## Events

### Delete Failed

[[Event('Firebase Storage', 'Delete Failed', 'file message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |message|`text`|


Triggers when the file could not be deleted

### Delete Success

[[Event('Firebase Storage', 'Delete Success', 'file')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


Triggers when the file was successfully deleted

### Download Failed

[[Event('Firebase Storage', 'Download Failed', 'file message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |message|`text`|


Triggers when the file could not be downloaded

### Download Success

[[Event('Firebase Storage', 'Download Success', 'file downloadedFile')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |downloaded File|`text`|


Triggers when the file was successfully downloaded

### Upload Failed

[[Event('Firebase Storage', 'Upload Failed', 'file message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |message|`text`|


Triggers when the file could not be uploaded

### Upload Progress

[[Event('Firebase Storage', 'Upload Progress', 'file uploadPath transferredBytes totalBytes')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |upload Path|`text`|
    |transferred Bytes|`number`|
    |total Bytes|`number`|


Triggers when the file upload progress changed

### Upload Success

[[Event('Firebase Storage', 'Upload Success', 'file uploadPath downloadUrl')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |upload Path|`text`|
    |download Url|`text`|


Triggers when the file was successfully uploaded

## Methods

### DeleteFile

[[Method('Firebase Storage', 'DeleteFile', false, 'file')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


Try to delete a file from Firebase Storage

### DownloadFile

[[Method('Firebase Storage', 'DownloadFile', false, 'file toFolder')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |to Folder|`text`|


Try to download a file from Firebase Storage

### GetBucket

[[Method('Firebase Storage', 'GetBucket', true)]]

{>>Returns `text`<<}

Get the name of the Storage Bucket

### PauseDownloads

[[Method('Firebase Storage', 'PauseDownloads', false)]]

Pause all the active downloads

### PauseUploads

[[Method('Firebase Storage', 'PauseUploads', false)]]

Pause all the active uploads

### ResumeDownloads

[[Method('Firebase Storage', 'ResumeDownloads', false)]]

Resume all the active downloads

### ResumeUploads

[[Method('Firebase Storage', 'ResumeUploads', false)]]

Resume all the active uploads

### UploadFile

[[Method('Firebase Storage', 'UploadFile', false, 'file uploadPath')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |upload Path|`text`|


Try to upload a file to Firebase Storage