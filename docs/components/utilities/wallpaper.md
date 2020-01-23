# Wallpaper

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides access to the system''s wallpaper settings.

## Events

### Got Wallpaper

[[Event('Wallpaper', 'Got Wallpaper', 'picture')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |picture|`text`|


Event to detect that the component got the current system wallpaper.

### Wallpaper Changed

[[Event('Wallpaper', 'Wallpaper Changed', 'success')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|


Event to detect that the user has changed the wallpaper. This event will be invoked by the "Set Wallpaper" function.

### Wallpaper Cleared

[[Event('Wallpaper', 'Wallpaper Cleared')]]

Event to detect that the user has cleared/deleted the wallpaper.

## Methods

### Clear

_Block preview not available_

Remove any currently set system wallpaper, reverting to the system's built-in wallpaper.

### ClearWallpaper

_Block preview not available_

Reset all wallpaper to the factory default. This block works only on devices with Android 9+.

### GetWallpaper

_Block preview not available_

Retrieve the current system wallpaper; if no wallpaper is set, the system built-in static wallpaper is returned.

### SetLockScreenWallpaper

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |image|`text`|


Change the current lock screen wallpaper. This block works only on devices with Android 7+.

### SetWallpaper

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |image|`text`|


Change the current system wallpaper.

## Properties

### Save Wallpaper As

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Wallpaper', 'Save Wallpaper As')]]

| Type | Default |
|:----:|:-------:|
|text|wallpaperPicture.png|

After the user clicked on "Get Wallpaper" this will be the name for the wallpaper picture.

### Desired Minimum Height

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Desired Minimum Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the desired minimum height for the wallpaper.

### Desired Minimum Width

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Desired Minimum Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the desired minimum width for the wallpaper.

### Is Set Wallpaper Allowed

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Is Set Wallpaper Allowed')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether the calling package is allowed to set the wallpaper for the calling user. This block works only on devices with Android 7+.

### Is Wallpaper Supported

:eyes: Read-Only property
[[PropertyBlockGetter('Wallpaper', 'Is Wallpaper Supported')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether wallpapers are supported for the calling user. This block works only on devices with Android 6+.