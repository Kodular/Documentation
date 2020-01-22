# Device Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that fetches specifications of the device._

## Properties

### Show Success Toast

<small>Available as Common Property</small>

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

:warning: **Deprecated** 

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