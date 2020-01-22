# Firebase Storage

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Firebase Storage to upload files to a Firebase Storage Bucket_

## Methods

### DeleteFile



[[Method('Firebase Storage', 'DeleteFile', false, 'file')]]

**Parameters**

| Name | Type |
|------|------|
|file|`text`|


Try to delete a file from Firebase Storage

### DownloadFile



[[Method('Firebase Storage', 'DownloadFile', false, 'file toFolder')]]

**Parameters**

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

**Parameters**

| Name | Type |
|------|------|
|file|`text`|
|upload Path|`text`|


Try to upload a file to Firebase Storage