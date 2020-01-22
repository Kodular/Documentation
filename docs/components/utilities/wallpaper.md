# Wallpaper

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that provides access to the system''s wallpaper settings._

## Properties

### Save Wallpaper As

<small>Available as Common Property</small>

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