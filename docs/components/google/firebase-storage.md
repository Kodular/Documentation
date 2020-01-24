# Firebase Storage

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

Firebase Storage to upload files to a Firebase Storage Bucket

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)


## Events

### Delete Failed

Triggers when the file could not be deleted

[[Event('Firebase Storage', 'Delete Failed', 'file', 'message')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Delete Success

Triggers when the file was successfully deleted

[[Event('Firebase Storage', 'Delete Success', 'file')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|


### Download Failed

Triggers when the file could not be downloaded

[[Event('Firebase Storage', 'Download Failed', 'file', 'message')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Download Success

Triggers when the file was successfully downloaded

[[Event('Firebase Storage', 'Download Success', 'file', 'downloadedFile')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|downloaded File|<span class="chip chip-text">Text</span>|


### Upload Failed

Triggers when the file could not be uploaded

[[Event('Firebase Storage', 'Upload Failed', 'file', 'message')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Upload Progress

Triggers when the file upload progress changed

[[Event('Firebase Storage', 'Upload Progress', 'file', 'uploadPath', 'transferredBytes', 'totalBytes')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|upload Path|<span class="chip chip-text">Text</span>|
|transferred Bytes|<span class="chip chip-number">Number</span>|
|total Bytes|<span class="chip chip-number">Number</span>|


### Upload Success

Triggers when the file was successfully uploaded

[[Event('Firebase Storage', 'Upload Success', 'file', 'uploadPath', 'downloadUrl')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|upload Path|<span class="chip chip-text">Text</span>|
|download Url|<span class="chip chip-text">Text</span>|


## Methods

### Delete File

Try to delete a file from Firebase Storage

[[Method('Firebase Storage', 'Delete File', False, 'file')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|


### Download File

Try to download a file from Firebase Storage

[[Method('Firebase Storage', 'Download File', False, 'file', 'toFolder')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|to Folder|<span class="chip chip-text">Text</span>|


### Get Bucket

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the name of the Storage Bucket

[[Method('Firebase Storage', 'Get Bucket', True)]]

### Pause Downloads

Pause all the active downloads

[[Method('Firebase Storage', 'Pause Downloads', False)]]

### Pause Uploads

Pause all the active uploads

[[Method('Firebase Storage', 'Pause Uploads', False)]]

### Resume Downloads

Resume all the active downloads

[[Method('Firebase Storage', 'Resume Downloads', False)]]

### Resume Uploads

Resume all the active uploads

[[Method('Firebase Storage', 'Resume Uploads', False)]]

### Upload File

Try to upload a file to Firebase Storage

[[Method('Firebase Storage', 'Upload File', False, 'file', 'uploadPath')]]

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|upload Path|<span class="chip chip-text">Text</span>|
