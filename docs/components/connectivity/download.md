# Download

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

The Download component is a non-visible component that allows users to download any file to the device

## Events

### Download Complete

[[Event('Download', 'Download Complete', 'filePath fileName fileSize')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Path|`text`|
    |file Name|`text`|
    |file Size|`number`|


Event to detect if the download is successful finished. You can use the "filePath" to use the downloaded file into your app. The "fileSize" will be returned in bytes.

### On Download Progress Changed

[[Event('Download', 'On Download Progress Changed', 'progress')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |progress|`number`|


Get the progress (in percentage) of the current download task.

### Got File Size

[[Event('Download', 'Got File Size', 'size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |size|`number`|


Event to detect file size is ready to be used.

### Notification Clicked

[[Event('Download', 'Notification Clicked')]]

Event to detect when the user clicks on a running download, either from a system notification or from the downloads UI.

## Methods

### Download

[[Method('Download', 'Download', false)]]

Start the download process of the given download url.

### GetFileSize

[[Method('Download', 'GetFileSize', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


Get the file size (in bytes) of a file that is stored online or on your device. The block detect automatic if it is a online path or not. You will get the result in the "Got File Size" event.

### ShowDownload

[[Method('Download', 'ShowDownload', false)]]

You can open the download folder with this block.

## Properties

### Allow Over Roaming

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Allow Over Roaming')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set whether this download may proceed over a roaming connection.

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Description')]]

| Type | Default |
|:----:|:-------:|
|text|Downloading file..|

Set the description that you will see in the download notification.

### Download URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Download URL')]]

| Type |
|:----:|
|text|

Set here the url to the file that you want to download.

### Require Charging

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Require Charging')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Specify that to run this download, the device needs to be plugged in. Works only for devices with api &gt;= 24.

### Require Device Idle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Require Device Idle')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Specify that to run, the download needs the device to be in idle mode. Idle mode is a loose definition provided by the system, which means that the device is not in use, and has not been in use for some time. Works only for devices with api &gt;= 24.

### Save File As

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Save File As')]]

| Type | Default |
|:----:|:-------:|
|text|NewFile.png|

Set here the new filename for the file that you want to download.

### Scan By Media Scanner

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Scan By Media Scanner')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If the file to be downloaded is to be scanned by MediaScanner.

### Show Notification

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Show Notification')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Control whether a system notification is posted by the download manager while this download is running or when it is completed.

### Suppress Warnings

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Suppress Warnings')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If false you will see a toast message with a error message when a error is occurred.

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Download', 'Title')]]

| Type | Default |
|:----:|:-------:|
|text|Download..|

Set the title that you will see in the download notification.

### Is Download Manager Available

:warning: ==**Deprecated**==

:eyes: Read-Only property
[[PropertyBlockGetter('Download', 'Is Download Manager Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

This function is deprecated. Do not use it anymore. We will remove it in the future. Since we support min API 14 the download manager is by default available. The download manager was added in API 9.