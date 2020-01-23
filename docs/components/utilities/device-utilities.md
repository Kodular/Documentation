# Device Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that fetches specifications of the device.

## Events

### Got IMEI

[[Event('Device Utilities', 'Got IMEI', 'imei')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |imei|`text`|


Event to get the IMEI after it was requested.

### Got Serial

[[Event('Device Utilities', 'Got Serial', 'serial')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |serial|`text`|


Event to get the serial number after it was requested.

## Methods

### CheckForDangerousAPK

[[Method('Device Utilities', 'CheckForDangerousAPK', true)]]

{>>Returns `boolean`<<}

Returns TRUE if one of 12 known patching or root emulating packages is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian.

### Copy

[[Method('Device Utilities', 'Copy', false, 'text successToastMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |Success Toast Message|`text`|


Copy text to clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after copying a text to the clipboard.

### ExternalStorageAvailable

[[Method('Device Utilities', 'ExternalStorageAvailable', true)]]

{>>Returns `number`<<}

Available size of external storage in Gigabytes.

### ExternalStorageTotal

[[Method('Device Utilities', 'ExternalStorageTotal', true)]]

{>>Returns `number`<<}

Total external storage size in Gigabytes.

### ExternalStorageUsed

[[Method('Device Utilities', 'ExternalStorageUsed', true)]]

{>>Returns `number`<<}

Size of used-external-storage in Gigabytes.

### GetIMEI

[[Method('Device Utilities', 'GetIMEI', false)]]

Get the IMEI of the device. The result will be then at the 'Got IMEI' event.

### GetSerial

[[Method('Device Utilities', 'GetSerial', false)]]

A hardware serial number, if available. Alphanumeric only, case-insensitive. For apps targeting SDK higher than N_MR1 this field is set to UNKNOWN.

### InternalStorageAvailable

[[Method('Device Utilities', 'InternalStorageAvailable', true)]]

{>>Returns `number`<<}

Size of available internal storage in Gigabytes.

### InternalStorageTotal

[[Method('Device Utilities', 'InternalStorageTotal', true)]]

{>>Returns `number`<<}

Total size of internal storage in Gigabytes.

### InternalStorageUsed

[[Method('Device Utilities', 'InternalStorageUsed', true)]]

{>>Returns `number`<<}

Size of used-internal-storage in Gigabytes.

### MemoryFree

[[Method('Device Utilities', 'MemoryFree', true)]]

{>>Returns `number`<<}

Total free RAM size in Gigabytes.

### MemoryTotal

[[Method('Device Utilities', 'MemoryTotal', true)]]

{>>Returns `number`<<}

Total RAM size in Gigabytes.

### MemoryUsed

[[Method('Device Utilities', 'MemoryUsed', true)]]

{>>Returns `number`<<}

Size of used-memory in Gigabytes.

### Parse

[[Method('Device Utilities', 'Parse', true, 'text start end ifTextNotFound')]]

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|
    |start|`text`|
    |end|`text`|
    |if Text Not Found|`text`|


Parse a text between two strings. Example: text = abcdef, start = a, end = d, result = bc. If there is a problem the 'if Text Not Found' will be returned.

### Paste

[[Method('Device Utilities', 'Paste', true, 'successToastMessage')]]

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |Success Toast Message|`text`|


Paste text from clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after pasting a text from the clipboard.

### Is Adb Debugging Enabled

[[Method('Device Utilities', 'Is Adb Debugging Enabled', true)]]

{>>Returns `boolean`<<}

This returns TRUE if ADB debugging is enabled, which could be a sign of hacking your app, or a compromised device. Developed by Cian.

### Is Emulator

[[Method('Device Utilities', 'Is Emulator', true)]]

{>>Returns `boolean`<<}

Returns TRUE if the device operating on an emulator. Developed by Cian.

### Is Installed From Play Store

[[Method('Device Utilities', 'Is Installed From Play Store', true)]]

{>>Returns `boolean`<<}

Returns TRUE if the app was installed from Play Store. Developed by Cian.

## Properties

### Show Success Toast

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Device Utilities', 'Show Success Toast')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if 'Show Success Toast' is enabled.

### Android Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Android Version')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Get the android version of device.

### API Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'API Version')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The user-visible SDK version of the framework.

### Board

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Board')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The name of the underlying board, like "goldfish".

### Bootloader Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Bootloader Version')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The system bootloader version number.

### Brand

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Brand')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The consumer-visible brand with which the product/hardware will be associated, if any.

### Build Number

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Build Number')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Get the build number(Software) of the device.

### Country Code

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Country Code')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The result is the code of your country.

### Device Name

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Device Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The name of the industrial design.

### Fingerprint

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Fingerprint')]]

| Type | Default |
|:----:|:-------:|
|text|None|

A string that uniquely identifies this build.

### Device Id

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Device Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the unique device specific 'AndroidID'. Developed by Cian.

### Hardware

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Hardware')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The name of the hardware (from the kernel command line or /proc).

### ID

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'ID')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Either a changelist number, or a label like "M4-rc20".

### Language Code

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Language Code')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The result is the code of your device language.

### Manufacturer

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Manufacturer')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The manufacturer of the product/hardware.

### Model Name

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Model Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The end-user-visible name for the end product.

### Product

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Product')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The name of the overall product.

### Radio Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Radio Version')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the version string for the radio firmware. May return null (if, for instance, the radio is not currently on).

### Serial

:warning: ==**Deprecated**==

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Serial')]]

| Type | Default |
|:----:|:-------:|
|text|None|

DEPRECATED. DO NOT USE THIS ANYMORE. USE 'Get Serial' INSTEAD!

### Tags

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Tags')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Comma-separated tags describing the build, like "unsigned,debug".

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The type of build, like "user" or "eng".