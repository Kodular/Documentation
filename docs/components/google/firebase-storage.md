# Firebase Storage

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

Firebase Storage to upload files to a Firebase Storage Bucket

## Events

### Delete Failed

[[Event('Firebase Storage', 'Delete Failed', 'file', 'message')]]

| Params | []() |
|--------|------|
|file|Text|
|message|Text|


Triggers when the file could not be deleted

### Delete Success

[[Event('Firebase Storage', 'Delete Success', 'file')]]

| Params | []() |
|--------|------|
|file|Text|


Triggers when the file was successfully deleted

### Download Failed

[[Event('Firebase Storage', 'Download Failed', 'file', 'message')]]

| Params | []() |
|--------|------|
|file|Text|
|message|Text|


Triggers when the file could not be downloaded

### Download Success

[[Event('Firebase Storage', 'Download Success', 'file', 'downloadedFile')]]

| Params | []() |
|--------|------|
|file|Text|
|downloaded File|Text|


Triggers when the file was successfully downloaded

### Upload Failed

[[Event('Firebase Storage', 'Upload Failed', 'file', 'message')]]

| Params | []() |
|--------|------|
|file|Text|
|message|Text|


Triggers when the file could not be uploaded

### Upload Progress

[[Event('Firebase Storage', 'Upload Progress', 'file', 'uploadPath', 'transferredBytes', 'totalBytes')]]

| Params | []() |
|--------|------|
|file|Text|
|upload Path|Text|
|transferred Bytes|Number|
|total Bytes|Number|


Triggers when the file upload progress changed

### Upload Success

[[Event('Firebase Storage', 'Upload Success', 'file', 'uploadPath', 'downloadUrl')]]

| Params | []() |
|--------|------|
|file|Text|
|upload Path|Text|
|download Url|Text|


Triggers when the file was successfully uploaded

## Methods

### Delete File

[[Method('Firebase Storage', 'Delete File', False, 'file')]]

| Params | []() |
|--------|------|
|file|Text|


Try to delete a file from Firebase Storage

### Download File

[[Method('Firebase Storage', 'Download File', False, 'file', 'toFolder')]]

| Params | []() |
|--------|------|
|file|Text|
|to Folder|Text|


Try to download a file from Firebase Storage

### Get Bucket

[[Method('Firebase Storage', 'Get Bucket', True)]]

{>>Returns `text`<<}

Get the name of the Storage Bucket

### Pause Downloads

[[Method('Firebase Storage', 'Pause Downloads', False)]]

Pause all the active downloads

### Pause Uploads

[[Method('Firebase Storage', 'Pause Uploads', False)]]

Pause all the active uploads

### Resume Downloads

[[Method('Firebase Storage', 'Resume Downloads', False)]]

Resume all the active downloads

### Resume Uploads

[[Method('Firebase Storage', 'Resume Uploads', False)]]

Resume all the active uploads

### Upload File

[[Method('Firebase Storage', 'Upload File', False, 'file', 'uploadPath')]]

| Params | []() |
|--------|------|
|file|Text|
|upload Path|Text|


Try to upload a file to Firebase Storage