# Firebase Storage

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Delete%20Failed%22,%20%22param%22:%20%5B%22file%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Delete Success

Triggers when the file was successfully deleted

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Delete%20Success%22,%20%22param%22:%20%5B%22file%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|

### Download Failed

Triggers when the file could not be downloaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Download%20Failed%22,%20%22param%22:%20%5B%22file%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Download Success

Triggers when the file was successfully downloaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Download%20Success%22,%20%22param%22:%20%5B%22file%22,%20%22downloaded%20File%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|downloaded File|<span class="chip chip-text">Text</span>|

### Upload Failed

Triggers when the file could not be uploaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Upload%20Failed%22,%20%22param%22:%20%5B%22file%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Upload Progress

Triggers when the file upload progress changed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Upload%20Progress%22,%20%22param%22:%20%5B%22file%22,%20%22upload%20Path%22,%20%22transferred%20Bytes%22,%20%22total%20Bytes%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|upload Path|<span class="chip chip-text">Text</span>|
|transferred Bytes|<span class="chip chip-number">Number</span>|
|total Bytes|<span class="chip chip-number">Number</span>|

### Upload Success

Triggers when the file was successfully uploaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Upload%20Success%22,%20%22param%22:%20%5B%22file%22,%20%22upload%20Path%22,%20%22download%20Url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|upload Path|<span class="chip chip-text">Text</span>|
|download Url|<span class="chip chip-text">Text</span>|

## Methods

### Delete File

Try to delete a file from Firebase Storage

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Delete%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|

### Download File

Try to download a file from Firebase Storage

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Download%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%22,%20%22to%20Folder%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|to Folder|<span class="chip chip-text">Text</span>|

### Get Bucket

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the name of the Storage Bucket

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Get%20Bucket%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Pause Downloads

Pause all the active downloads

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Pause%20Downloads%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Pause Uploads

Pause all the active uploads

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Pause%20Uploads%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Resume Downloads

Resume all the active downloads

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Resume%20Downloads%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Resume Uploads

Resume all the active uploads

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Resume%20Uploads%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Upload File

Try to upload a file to Firebase Storage

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Storage%22,%20%22name%22:%20%22Upload%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%22,%20%22upload%20Path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|upload Path|<span class="chip chip-text">Text</span>|
