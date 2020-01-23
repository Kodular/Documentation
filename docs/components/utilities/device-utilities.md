# Device Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|5|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that fetches specifications of the device.

## Events

### Got IMEI

[[Event('Device Utilities', 'Got IMEI', 'imei')]]

| Params | []() |
|--------|------|
|imei|Text|


Event to get the IMEI after it was requested.

### Got Serial

[[Event('Device Utilities', 'Got Serial', 'serial')]]

| Params | []() |
|--------|------|
|serial|Text|


Event to get the serial number after it was requested.

## Methods

### Has Dangerous Apk Installed

[[Method('Device Utilities', 'Has Dangerous Apk Installed', True)]]

{>>Returns `boolean`<<}

Returns TRUE if one of 12 known patching or root emulating packages is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian.

### Copy

[[Method('Device Utilities', 'Copy', False, 'text', 'successToastMessage')]]

| Params | []() |
|--------|------|
|text|Text|
|Success Toast Message|Text|


Copy text to clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after copying a text to the clipboard.

### External Storage Available

[[Method('Device Utilities', 'External Storage Available', True)]]

{>>Returns `number`<<}

Available size of external storage in Gigabytes.

### External Storage Total

[[Method('Device Utilities', 'External Storage Total', True)]]

{>>Returns `number`<<}

Total external storage size in Gigabytes.

### External Storage Used

[[Method('Device Utilities', 'External Storage Used', True)]]

{>>Returns `number`<<}

Size of used-external-storage in Gigabytes.

### Get IMEI

[[Method('Device Utilities', 'Get IMEI', False)]]

Get the IMEI of the device. The result will be then at the 'Got IMEI' event.

### Get Serial

[[Method('Device Utilities', 'Get Serial', False)]]

A hardware serial number, if available. Alphanumeric only, case-insensitive. For apps targeting SDK higher than N_MR1 this field is set to UNKNOWN.

### Internal Storage Available

[[Method('Device Utilities', 'Internal Storage Available', True)]]

{>>Returns `number`<<}

Size of available internal storage in Gigabytes.

### Internal Storage Total

[[Method('Device Utilities', 'Internal Storage Total', True)]]

{>>Returns `number`<<}

Total size of internal storage in Gigabytes.

### Internal Storage Used

[[Method('Device Utilities', 'Internal Storage Used', True)]]

{>>Returns `number`<<}

Size of used-internal-storage in Gigabytes.

### Memory Free

[[Method('Device Utilities', 'Memory Free', True)]]

{>>Returns `number`<<}

Total free RAM size in Gigabytes.

### Memory Total

[[Method('Device Utilities', 'Memory Total', True)]]

{>>Returns `number`<<}

Total RAM size in Gigabytes.

### Memory Used

[[Method('Device Utilities', 'Memory Used', True)]]

{>>Returns `number`<<}

Size of used-memory in Gigabytes.

### Parse

[[Method('Device Utilities', 'Parse', True, 'text', 'start', 'end', 'ifTextNotFound')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|text|Text|
|start|Text|
|end|Text|
|if Text Not Found|Text|


Parse a text between two strings. Example: text = abcdef, start = a, end = d, result = bc. If there is a problem the 'if Text Not Found' will be returned.

### Paste

[[Method('Device Utilities', 'Paste', True, 'successToastMessage')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|Success Toast Message|Text|


Paste text from clipboard. In case 'Show Success Toast' is true, the toast with your message will be shown after pasting a text from the clipboard.

### Is Adb Debugging Enabled

[[Method('Device Utilities', 'Is Adb Debugging Enabled', True)]]

{>>Returns `boolean`<<}

This returns TRUE if ADB debugging is enabled, which could be a sign of hacking your app, or a compromised device. Developed by Cian.

### Is Emulator

[[Method('Device Utilities', 'Is Emulator', True)]]

{>>Returns `boolean`<<}

Returns TRUE if the device operating on an emulator. Developed by Cian.

### Is Installed From Play Store

[[Method('Device Utilities', 'Is Installed From Play Store', True)]]

{>>Returns `boolean`<<}

Returns TRUE if the app was installed from Play Store. Developed by Cian.

## Properties

### Show Success Toast

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true if 'Show Success Toast' is enabled.

[[PropertyBlockGetterAndSetter('Device Utilities', 'Show Success Toast')]]

### Android Version

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the android version of device.

[[PropertyBlockGetter('Device Utilities', 'Android Version')]]

### API Version

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The user-visible SDK version of the framework.

[[PropertyBlockGetter('Device Utilities', 'API Version')]]

### Board

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The name of the underlying board, like "goldfish".

[[PropertyBlockGetter('Device Utilities', 'Board')]]

### Bootloader Version

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The system bootloader version number.

[[PropertyBlockGetter('Device Utilities', 'Bootloader Version')]]

### Brand

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The consumer-visible brand with which the product/hardware will be associated, if any.

[[PropertyBlockGetter('Device Utilities', 'Brand')]]

### Build Number

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the build number(Software) of the device.

[[PropertyBlockGetter('Device Utilities', 'Build Number')]]

### Country Code

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The result is the code of your country.

[[PropertyBlockGetter('Device Utilities', 'Country Code')]]

### Device Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The name of the industrial design.

[[PropertyBlockGetter('Device Utilities', 'Device Name')]]

### Fingerprint

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

A string that uniquely identifies this build.

[[PropertyBlockGetter('Device Utilities', 'Fingerprint')]]

### Device Id

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the unique device specific 'AndroidID'. Developed by Cian.

[[PropertyBlockGetter('Device Utilities', 'Device Id')]]

### Hardware

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The name of the hardware (from the kernel command line or /proc).

[[PropertyBlockGetter('Device Utilities', 'Hardware')]]

### ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Either a changelist number, or a label like "M4-rc20".

[[PropertyBlockGetter('Device Utilities', 'ID')]]

### Language Code

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The result is the code of your device language.

[[PropertyBlockGetter('Device Utilities', 'Language Code')]]

### Manufacturer

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The manufacturer of the product/hardware.

[[PropertyBlockGetter('Device Utilities', 'Manufacturer')]]

### Model Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The end-user-visible name for the end product.

[[PropertyBlockGetter('Device Utilities', 'Model Name')]]

### Product

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The name of the overall product.

[[PropertyBlockGetter('Device Utilities', 'Product')]]

### Radio Version

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the version string for the radio firmware. May return null (if, for instance, the radio is not currently on).

[[PropertyBlockGetter('Device Utilities', 'Radio Version')]]

### Serial

:warning: ==**Deprecated**==

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

DEPRECATED. DO NOT USE THIS ANYMORE. USE 'Get Serial' INSTEAD!

[[PropertyBlockGetter('Device Utilities', 'Serial')]]

### Tags

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Comma-separated tags describing the build, like "unsigned,debug".

[[PropertyBlockGetter('Device Utilities', 'Tags')]]

### Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The type of build, like "user" or "eng".

[[PropertyBlockGetter('Device Utilities', 'Type')]]