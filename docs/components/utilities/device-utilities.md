# Device Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that fetches specifications of the device._

## Events

### Got IMEI

[[Event('Device Utilities', 'Got IMEI', 'imei')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |imei|`text`|


_Event to get the IMEI after it was requested._

### Got Serial

[[Event('Device Utilities', 'Got Serial', 'serial')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |serial|`text`|


_Event to get the serial number after it was requested._

## Methods

### CheckForDangerousAPK

[[Method('Device Utilities', 'CheckForDangerousAPK', true)]]

{>>Returns `boolean`<<}

_Returns TRUE if one of 12 known patching or root emulating packages is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian._

### Copy

[[Method('Device Utilities', 'Copy', false, 'text successToastMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |Success Toast Message|`text`|


_Copy text to clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after copying a text to the clipboard._

### ExternalStorageAvailable

[[Method('Device Utilities', 'ExternalStorageAvailable', true)]]

{>>Returns `number`<<}

_Available size of external storage in Gigabytes._

### ExternalStorageTotal

[[Method('Device Utilities', 'ExternalStorageTotal', true)]]

{>>Returns `number`<<}

_Total external storage size in Gigabytes._

### ExternalStorageUsed

[[Method('Device Utilities', 'ExternalStorageUsed', true)]]

{>>Returns `number`<<}

_Size of used-external-storage in Gigabytes._

### GetIMEI

[[Method('Device Utilities', 'GetIMEI', false)]]

_Get the IMEI of the device. The result will be then at the 'Got IMEI' event._

### GetSerial

[[Method('Device Utilities', 'GetSerial', false)]]

_A hardware serial number, if available. Alphanumeric only, case-insensitive. For apps targeting SDK higher than N_MR1 this field is set to UNKNOWN._

### InternalStorageAvailable

[[Method('Device Utilities', 'InternalStorageAvailable', true)]]

{>>Returns `number`<<}

_Size of available internal storage in Gigabytes._

### InternalStorageTotal

[[Method('Device Utilities', 'InternalStorageTotal', true)]]

{>>Returns `number`<<}

_Total size of internal storage in Gigabytes._

### InternalStorageUsed

[[Method('Device Utilities', 'InternalStorageUsed', true)]]

{>>Returns `number`<<}

_Size of used-internal-storage in Gigabytes._

### MemoryFree

[[Method('Device Utilities', 'MemoryFree', true)]]

{>>Returns `number`<<}

_Total free RAM size in Gigabytes._

### MemoryTotal

[[Method('Device Utilities', 'MemoryTotal', true)]]

{>>Returns `number`<<}

_Total RAM size in Gigabytes._

### MemoryUsed

[[Method('Device Utilities', 'MemoryUsed', true)]]

{>>Returns `number`<<}

_Size of used-memory in Gigabytes._

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


_Parse a text between two strings. Example: text = abcdef, start = a, end = d, result = bc. If there is a problem the 'if Text Not Found' will be returned._

### Paste

[[Method('Device Utilities', 'Paste', true, 'successToastMessage')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |Success Toast Message|`text`|


_Paste text from clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after pasting a text from the clipboard._

### Is Adb Debugging Enabled

[[Method('Device Utilities', 'Is Adb Debugging Enabled', true)]]

{>>Returns `boolean`<<}

_This returns TRUE if ADB debugging is enabled, which could be a sign of hacking your app, or a compromised device. Developed by Cian._

### Is Emulator

[[Method('Device Utilities', 'Is Emulator', true)]]

{>>Returns `boolean`<<}

_Returns TRUE if the device operating on an emulator. Developed by Cian._

### Is Installed From Play Store

[[Method('Device Utilities', 'Is Installed From Play Store', true)]]

{>>Returns `boolean`<<}

_Returns TRUE if the app was installed from Play Store. Developed by Cian._

## Properties

### Show Success Toast

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Device Utilities', 'Show Success Toast')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns true if 'Show Success Toast' is enabled._

### Android Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Android Version')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Get the android version of device._

### API Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'API Version')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The user-visible SDK version of the framework._

### Board

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Board')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The name of the underlying board, like "goldfish"._

### Bootloader Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Bootloader Version')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The system bootloader version number._

### Brand

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Brand')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The consumer-visible brand with which the product/hardware will be associated, if any._

### Build Number

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Build Number')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Get the build number(Software) of the device._

### Country Code

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Country Code')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The result is the code of your country._

### Device Name

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Device Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The name of the industrial design._

### Fingerprint

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Fingerprint')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_A string that uniquely identifies this build._

### Device Id

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Device Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the unique device specific 'AndroidID'. Developed by Cian._

### Hardware

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Hardware')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The name of the hardware (from the kernel command line or /proc)._

### ID

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'ID')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Either a changelist number, or a label like "M4-rc20"._

### Language Code

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Language Code')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The result is the code of your device language._

### Manufacturer

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Manufacturer')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The manufacturer of the product/hardware._

### Model Name

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Model Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The end-user-visible name for the end product._

### Product

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Product')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The name of the overall product._

### Radio Version

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Radio Version')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the version string for the radio firmware. May return null (if, for instance, the radio is not currently on)._

### Serial

:warning: ==**Deprecated**==

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Serial')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_DEPRECATED. DO NOT USE THIS ANYMORE. USE 'Get Serial' INSTEAD!_

### Tags

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Tags')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Comma-separated tags describing the build, like "unsigned,debug"._

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Device Utilities', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The type of build, like "user" or "eng"._