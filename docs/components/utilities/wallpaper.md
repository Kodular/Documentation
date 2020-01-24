# Wallpaper

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides access to the system''s wallpaper settings.

??? example "Permissions"
    * [android.permission.SET_WALLPAPER](https://developer.android.com/reference/android/Manifest.permission.html#SET_WALLPAPER)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_SETTINGS)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### Got Wallpaper

Event to detect that the component got the current system wallpaper.

[[Event('Wallpaper', 'Got Wallpaper', 'picture')]]

| Params | []() |
|--------|------|
|picture|<span class="chip chip-text">Text</span>|


### Wallpaper Changed

Event to detect that the user has changed the wallpaper. This event will be invoked by the "Set Wallpaper" function.

[[Event('Wallpaper', 'Wallpaper Changed', 'success')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


### Wallpaper Cleared

Event to detect that the user has cleared/deleted the wallpaper.

[[Event('Wallpaper', 'Wallpaper Cleared')]]

## Methods

### Clear

Remove any currently set system wallpaper, reverting to the system's built-in wallpaper.

[[Method('Wallpaper', 'Clear', False)]]

### Clear Wallpaper

Reset all wallpaper to the factory default. This block works only on devices with Android 9+.

[[Method('Wallpaper', 'Clear Wallpaper', False)]]

### Get Wallpaper

Retrieve the current system wallpaper; if no wallpaper is set, the system built-in static wallpaper is returned.

[[Method('Wallpaper', 'Get Wallpaper', False)]]

### Set Lock Screen Wallpaper

Change the current lock screen wallpaper. This block works only on devices with Android 7+.

[[Method('Wallpaper', 'Set Lock Screen Wallpaper', False, 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


### Set Wallpaper

Change the current system wallpaper.

[[Method('Wallpaper', 'Set Wallpaper', False, 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


## Properties

### Save Wallpaper As

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>wallpaperPicture.png</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

After the user clicked on "Get Wallpaper" this will be the name for the wallpaper picture.

[[PropertyBlockGetterAndSetter('Wallpaper', 'Save Wallpaper As')]]

### Desired Minimum Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the desired minimum height for the wallpaper.

[[PropertyBlockGetter('Wallpaper', 'Desired Minimum Height')]]

### Desired Minimum Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the desired minimum width for the wallpaper.

[[PropertyBlockGetter('Wallpaper', 'Desired Minimum Width')]]

### Is Set Wallpaper Allowed

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether the calling package is allowed to set the wallpaper for the calling user. This block works only on devices with Android 7+.

[[PropertyBlockGetter('Wallpaper', 'Is Set Wallpaper Allowed')]]

### Is Wallpaper Supported

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether wallpapers are supported for the calling user. This block works only on devices with Android 6+.

[[PropertyBlockGetter('Wallpaper', 'Is Wallpaper Supported')]]