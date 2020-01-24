# Download

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

The Download component is a non-visible component that allows users to download any file to the device

??? example "Permissions"
    * [android.permission.DOWNLOAD_WITHOUT_NOTIFICATION](https://developer.android.com/reference/android/Manifest.permission.html#DOWNLOAD_WITHOUT_NOTIFICATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### Download Complete

Event to detect if the download is successful finished. You can use the "filePath" to use the downloaded file into your app. The "fileSize" will be returned in bytes.

[[Event('Download', 'Download Complete', 'filePath', 'fileName', 'fileSize')]]

| Params | []() |
|--------|------|
|file Path|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|
|file Size|<span class="chip chip-number">Number</span>|


### On Download Progress Changed

Get the progress (in percentage) of the current download task.

[[Event('Download', 'On Download Progress Changed', 'progress')]]

| Params | []() |
|--------|------|
|progress|<span class="chip chip-number">Number</span>|


### Got File Size

Event to detect file size is ready to be used.

[[Event('Download', 'Got File Size', 'size')]]

| Params | []() |
|--------|------|
|size|<span class="chip chip-number">Number</span>|


### Notification Clicked

Event to detect when the user clicks on a running download, either from a system notification or from the downloads UI.

[[Event('Download', 'Notification Clicked')]]

## Methods

### Download

Start the download process of the given download url.

[[Method('Download', 'Download', False)]]

### Get File Size

Get the file size (in bytes) of a file that is stored online or on your device. The block detect automatic if it is a online path or not. You will get the result in the "Got File Size" event.

[[Method('Download', 'Get File Size', False, 'path')]]

| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Show Download

You can open the download folder with this block.

[[Method('Download', 'Show Download', False)]]

## Properties

### Allow Over Roaming

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set whether this download may proceed over a roaming connection.

[[PropertyBlockGetterAndSetter('Download', 'Allow Over Roaming')]]

### Description

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Downloading file..</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the description that you will see in the download notification.

[[PropertyBlockGetterAndSetter('Download', 'Description')]]

### Download URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set here the url to the file that you want to download.

[[PropertyBlockGetterAndSetter('Download', 'Download URL')]]

### Require Charging

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specify that to run this download, the device needs to be plugged in. Works only for devices with api &gt;= 24.

[[PropertyBlockGetterAndSetter('Download', 'Require Charging')]]

### Require Device Idle

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specify that to run, the download needs the device to be in idle mode. Idle mode is a loose definition provided by the system, which means that the device is not in use, and has not been in use for some time. Works only for devices with api &gt;= 24.

[[PropertyBlockGetterAndSetter('Download', 'Require Device Idle')]]

### Save File As

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>NewFile.png</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set here the new filename for the file that you want to download.

[[PropertyBlockGetterAndSetter('Download', 'Save File As')]]

### Scan By Media Scanner

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If the file to be downloaded is to be scanned by MediaScanner.

[[PropertyBlockGetterAndSetter('Download', 'Scan By Media Scanner')]]

### Show Notification

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Control whether a system notification is posted by the download manager while this download is running or when it is completed.

[[PropertyBlockGetterAndSetter('Download', 'Show Notification')]]

### Suppress Warnings

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If false you will see a toast message with a error message when a error is occurred.

[[PropertyBlockGetterAndSetter('Download', 'Suppress Warnings')]]

### Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Download..</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the title that you will see in the download notification.

[[PropertyBlockGetterAndSetter('Download', 'Title')]]

### Is Download Manager Available

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This function is deprecated. Do not use it anymore. We will remove it in the future. Since we support min API 14 the download manager is by default available. The download manager was added in API 9.

[[PropertyBlockGetter('Download', 'Is Download Manager Available')]]