# Wallpaper

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that provides access to the system''s wallpaper settings._

## Events

### Got Wallpaper

[[Event('Wallpaper', 'Got Wallpaper', 'picture')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |picture|`text`|


_Event to detect that the component got the current system wallpaper._

### Wallpaper Changed

[[Event('Wallpaper', 'Wallpaper Changed', 'success')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|


_Event to detect that the user has changed the wallpaper. This event will be invoked by the "Set Wallpaper" function._

### Wallpaper Cleared

[[Event('Wallpaper', 'Wallpaper Cleared')]]

_Event to detect that the user has cleared/deleted the wallpaper._

## Methods

### Clear

[[Method('Wallpaper', 'Clear', false)]]

_Remove any currently set system wallpaper, reverting to the system's built-in wallpaper._

### ClearWallpaper

[[Method('Wallpaper', 'ClearWallpaper', false)]]

_Reset all wallpaper to the factory default. This block works only on devices with Android 9+._

### GetWallpaper

[[Method('Wallpaper', 'GetWallpaper', false)]]

_Retrieve the current system wallpaper; if no wallpaper is set, the system built-in static wallpaper is returned._

### SetLockScreenWallpaper

[[Method('Wallpaper', 'SetLockScreenWallpaper', false, 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Change the current lock screen wallpaper. This block works only on devices with Android 7+._

### SetWallpaper

[[Method('Wallpaper', 'SetWallpaper', false, 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Change the current system wallpaper._

## Properties

### Save Wallpaper As

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Wallpaper', 'Save Wallpaper As')]]

| Type | Default |
|:----:|:-------:|
|text|wallpaperPicture.png|

_After the user clicked on "Get Wallpaper" this will be the name for the wallpaper picture._

### Desired Minimum Height

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Desired Minimum Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the desired minimum height for the wallpaper._

### Desired Minimum Width

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Desired Minimum Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the desired minimum width for the wallpaper._

### Is Set Wallpaper Allowed

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Is Set Wallpaper Allowed')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns whether the calling package is allowed to set the wallpaper for the calling user. This block works only on devices with Android 7+._

### Is Wallpaper Supported

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Is Wallpaper Supported')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns whether wallpapers are supported for the calling user. This block works only on devices with Android 6+._