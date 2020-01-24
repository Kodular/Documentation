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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Download%20Complete%22,%20%22params%22:%20%5B%22file%20Path%22,%20%22file%20Name%22,%20%22file%20Size%22%5D%7D"></div>

| Params | []() |
|--------|------|
|file Path|<span class="chip chip-text">Text</span>|
|file Name|<span class="chip chip-text">Text</span>|
|file Size|<span class="chip chip-number">Number</span>|


### On Download Progress Changed

Get the progress (in percentage) of the current download task.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22On%20Download%20Progress%20Changed%22,%20%22params%22:%20%5B%22progress%22%5D%7D"></div>

| Params | []() |
|--------|------|
|progress|<span class="chip chip-number">Number</span>|


### Got File Size

Event to detect file size is ready to be used.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Got%20File%20Size%22,%20%22params%22:%20%5B%22size%22%5D%7D"></div>

| Params | []() |
|--------|------|
|size|<span class="chip chip-number">Number</span>|


### Notification Clicked

Event to detect when the user clicks on a running download, either from a system notification or from the downloads UI.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Notification%20Clicked%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Download

Start the download process of the given download url.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Download%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get File Size

Get the file size (in bytes) of a file that is stored online or on your device. The block detect automatic if it is a online path or not. You will get the result in the "Got File Size" event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Get%20File%20Size%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22path%22%5D%7D"></div>


| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


### Show Download

You can open the download folder with this block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Show%20Download%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Allow Over Roaming

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set whether this download may proceed over a roaming connection.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Allow%20Over%20Roaming%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Allow%20Over%20Roaming%22,%20%22getter%22:%20false%7D"></div>


### Description

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>Downloading file..</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the description that you will see in the download notification.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20false%7D"></div>


### Download URL

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set here the url to the file that you want to download.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Download%20URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Download%20URL%22,%20%22getter%22:%20false%7D"></div>


### Require Charging

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specify that to run this download, the device needs to be plugged in. Works only for devices with api &gt;= 24.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Require%20Charging%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Require%20Charging%22,%20%22getter%22:%20false%7D"></div>


### Require Device Idle

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specify that to run, the download needs the device to be in idle mode. Idle mode is a loose definition provided by the system, which means that the device is not in use, and has not been in use for some time. Works only for devices with api &gt;= 24.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Require%20Device%20Idle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Require%20Device%20Idle%22,%20%22getter%22:%20false%7D"></div>


### Save File As

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>NewFile.png</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set here the new filename for the file that you want to download.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Save%20File%20As%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Save%20File%20As%22,%20%22getter%22:%20false%7D"></div>


### Scan By Media Scanner

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If the file to be downloaded is to be scanned by MediaScanner.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Scan%20By%20Media%20Scanner%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Scan%20By%20Media%20Scanner%22,%20%22getter%22:%20false%7D"></div>


### Show Notification

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Control whether a system notification is posted by the download manager while this download is running or when it is completed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Show%20Notification%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Show%20Notification%22,%20%22getter%22:%20false%7D"></div>


### Suppress Warnings

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If false you will see a toast message with a error message when a error is occurred.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Suppress%20Warnings%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Suppress%20Warnings%22,%20%22getter%22:%20false%7D"></div>


### Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>Download..</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the title that you will see in the download notification.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>


### Is Download Manager Available

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This function is deprecated. Do not use it anymore. We will remove it in the future. Since we support min API 14 the download manager is by default available. The download manager was added in API 9.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Download%22,%20%22name%22:%20%22Is%20Download%20Manager%20Available%22,%20%22getter%22:%20true%7D"></div>
