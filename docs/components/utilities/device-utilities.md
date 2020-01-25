# Device Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that fetches specifications of the device.

??? example "Permissions"
    * [android.permission.READ_PHONE_STATE](https://developer.android.com/reference/android/Manifest.permission.html#READ_PHONE_STATE)

## Events

### Got IMEI

Event to get the IMEI after it was requested.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Got%20IMEI%22,%20%22param%22:%20%5B%22imei%22%5D%7D"></div>

| Params | []() |
|--------|------|
|imei|<span class="chip chip-text">Text</span>|

### Got Serial

Event to get the serial number after it was requested.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Got%20Serial%22,%20%22param%22:%20%5B%22serial%22%5D%7D"></div>

| Params | []() |
|--------|------|
|serial|<span class="chip chip-text">Text</span>|

## Methods

### Copy

Copy text to clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after copying a text to the clipboard.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Copy%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22,%20%22Success%20Toast%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|Success Toast Message|<span class="chip chip-text">Text</span>|

### External Storage Available

<span class="chip chip-number">Returns: <i>Number</i></span>

Available size of external storage in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22External%20Storage%20Available%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### External Storage Total

<span class="chip chip-number">Returns: <i>Number</i></span>

Total external storage size in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22External%20Storage%20Total%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### External Storage Used

<span class="chip chip-number">Returns: <i>Number</i></span>

Size of used-external-storage in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22External%20Storage%20Used%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get IMEI

Get the IMEI of the device. The result will be then at the 'Got IMEI' event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Get%20IMEI%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Serial

A hardware serial number, if available. Alphanumeric only, case-insensitive. For apps targeting SDK higher than N_MR1 this field is set to UNKNOWN.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Get%20Serial%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Has Dangerous Apk Installed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns TRUE if one of 12 known patching or root emulating packages is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Has%20Dangerous%20Apk%20Installed%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Internal Storage Available

<span class="chip chip-number">Returns: <i>Number</i></span>

Size of available internal storage in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Internal%20Storage%20Available%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Internal Storage Total

<span class="chip chip-number">Returns: <i>Number</i></span>

Total size of internal storage in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Internal%20Storage%20Total%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Internal Storage Used

<span class="chip chip-number">Returns: <i>Number</i></span>

Size of used-internal-storage in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Internal%20Storage%20Used%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Adb Debugging Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

This returns TRUE if ADB debugging is enabled, which could be a sign of hacking your app, or a compromised device. Developed by Cian.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Is%20Adb%20Debugging%20Enabled%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Emulator

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns TRUE if the device operating on an emulator. Developed by Cian.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Is%20Emulator%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Installed From Play Store

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns TRUE if the app was installed from Play Store. Developed by Cian.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Is%20Installed%20From%20Play%20Store%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Memory Free

<span class="chip chip-number">Returns: <i>Number</i></span>

Total free RAM size in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Memory%20Free%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Memory Total

<span class="chip chip-number">Returns: <i>Number</i></span>

Total RAM size in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Memory%20Total%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Memory Used

<span class="chip chip-number">Returns: <i>Number</i></span>

Size of used-memory in Gigabytes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Memory%20Used%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Parse

<span class="chip chip-text">Returns: <i>Text</i></span>

Parse a text between two strings. Example: text = abcdef, start = a, end = d, result = bc. If there is a problem the 'if Text Not Found' will be returned.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Parse%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22text%22,%20%22start%22,%20%22end%22,%20%22if%20Text%20Not%20Found%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|start|<span class="chip chip-text">Text</span>|
|end|<span class="chip chip-text">Text</span>|
|if Text Not Found|<span class="chip chip-text">Text</span>|

### Paste

<span class="chip chip-text">Returns: <i>Text</i></span>

Paste text from clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after pasting a text from the clipboard.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Paste%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22Success%20Toast%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|Success Toast Message|<span class="chip chip-text">Text</span>|

## Properties

### Android Version

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the android version of device.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Android%20Version%22,%20%22getter%22:%20true%7D"></div>

### API Version

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The user-visible SDK version of the framework.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22API%20Version%22,%20%22getter%22:%20true%7D"></div>

### Board

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The name of the underlying board, like "goldfish".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Board%22,%20%22getter%22:%20true%7D"></div>

### Bootloader Version

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The system bootloader version number.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Bootloader%20Version%22,%20%22getter%22:%20true%7D"></div>

### Brand

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The consumer-visible brand with which the product/hardware will be associated, if any.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Brand%22,%20%22getter%22:%20true%7D"></div>

### Build Number

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the build number(Software) of the device.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Build%20Number%22,%20%22getter%22:%20true%7D"></div>

### Country Code

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The result is the code of your country.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Country%20Code%22,%20%22getter%22:%20true%7D"></div>

### Device Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the unique device specific 'AndroidID'. Developed by Cian.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Device%20Id%22,%20%22getter%22:%20true%7D"></div>

### Device Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The name of the industrial design.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Device%20Name%22,%20%22getter%22:%20true%7D"></div>

### Fingerprint

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

A string that uniquely identifies this build.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Fingerprint%22,%20%22getter%22:%20true%7D"></div>

### Hardware

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The name of the hardware (from the kernel command line or /proc).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Hardware%22,%20%22getter%22:%20true%7D"></div>

### ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Either a changelist number, or a label like "M4-rc20".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22ID%22,%20%22getter%22:%20true%7D"></div>

### Language Code

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The result is the code of your device language.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Language%20Code%22,%20%22getter%22:%20true%7D"></div>

### Manufacturer

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The manufacturer of the product/hardware.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Manufacturer%22,%20%22getter%22:%20true%7D"></div>

### Model Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The end-user-visible name for the end product.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Model%20Name%22,%20%22getter%22:%20true%7D"></div>

### Product

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The name of the overall product.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Product%22,%20%22getter%22:%20true%7D"></div>

### Radio Version

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the version string for the radio firmware. May return null (if, for instance, the radio is not currently on).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Radio%20Version%22,%20%22getter%22:%20true%7D"></div>

### Serial

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

DEPRECATED. DO NOT USE THIS ANYMORE. USE 'Get Serial' INSTEAD!

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Serial%22,%20%22getter%22:%20true%7D"></div>

### Show Success Toast

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true if 'Show Success Toast' is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Show%20Success%20Toast%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Show%20Success%20Toast%22,%20%22getter%22:%20false%7D"></div>

### Tags

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Comma-separated tags describing the build, like "unsigned,debug".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Tags%22,%20%22getter%22:%20true%7D"></div>

### Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The type of build, like "user" or "eng".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Device%20Utilities%22,%20%22name%22:%20%22Type%22,%20%22getter%22:%20true%7D"></div>
