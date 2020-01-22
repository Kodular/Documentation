# Firebase Storage

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Firebase Storage to upload files to a Firebase Storage Bucket_

## Events

### Delete Failed

[[Event('Firebase Storage', 'Delete Failed', 'file message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |message|`text`|


_Triggers when the file could not be deleted_

### Delete Success

[[Event('Firebase Storage', 'Delete Success', 'file')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


_Triggers when the file was successfully deleted_

### Download Failed

[[Event('Firebase Storage', 'Download Failed', 'file message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |message|`text`|


_Triggers when the file could not be downloaded_

### Download Success

[[Event('Firebase Storage', 'Download Success', 'file downloadedFile')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |downloaded File|`text`|


_Triggers when the file was successfully downloaded_

### Upload Failed

[[Event('Firebase Storage', 'Upload Failed', 'file message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |message|`text`|


_Triggers when the file could not be uploaded_

### Upload Progress

[[Event('Firebase Storage', 'Upload Progress', 'file uploadPath transferredBytes totalBytes')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |upload Path|`text`|
    |transferred Bytes|`number`|
    |total Bytes|`number`|


_Triggers when the file upload progress changed_

### Upload Success

[[Event('Firebase Storage', 'Upload Success', 'file uploadPath downloadUrl')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |upload Path|`text`|
    |download Url|`text`|


_Triggers when the file was successfully uploaded_

## Methods

### DeleteFile

[[Method('Firebase Storage', 'DeleteFile', false, 'file')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|


_Try to delete a file from Firebase Storage_

### DownloadFile

[[Method('Firebase Storage', 'DownloadFile', false, 'file toFolder')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |to Folder|`text`|


_Try to download a file from Firebase Storage_

### GetBucket

[[Method('Firebase Storage', 'GetBucket', true)]]

{>>Returns `text`<<}

_Get the name of the Storage Bucket_

### PauseDownloads

[[Method('Firebase Storage', 'PauseDownloads', false)]]

_Pause all the active downloads_

### PauseUploads

[[Method('Firebase Storage', 'PauseUploads', false)]]

_Pause all the active uploads_

### ResumeDownloads

[[Method('Firebase Storage', 'ResumeDownloads', false)]]

_Resume all the active downloads_

### ResumeUploads

[[Method('Firebase Storage', 'ResumeUploads', false)]]

_Resume all the active uploads_

### UploadFile

[[Method('Firebase Storage', 'UploadFile', false, 'file uploadPath')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file|`text`|
    |upload Path|`text`|


_Try to upload a file to Firebase Storage_