# Wallpaper

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that provides access to the system''s wallpaper settings.

## Events

### Got Wallpaper

[[Event('Wallpaper', 'Got Wallpaper', 'picture')]]

| Params | []() |
|--------|------|
|picture|Text|


Event to detect that the component got the current system wallpaper.

### Wallpaper Changed

[[Event('Wallpaper', 'Wallpaper Changed', 'success')]]

| Params | []() |
|--------|------|
|success|Boolean|


Event to detect that the user has changed the wallpaper. This event will be invoked by the "Set Wallpaper" function.

### Wallpaper Cleared

[[Event('Wallpaper', 'Wallpaper Cleared')]]

Event to detect that the user has cleared/deleted the wallpaper.

## Methods

### Clear

[[Method('Wallpaper', 'Clear', False)]]

Remove any currently set system wallpaper, reverting to the system's built-in wallpaper.

### Clear Wallpaper

[[Method('Wallpaper', 'Clear Wallpaper', False)]]

Reset all wallpaper to the factory default. This block works only on devices with Android 9+.

### Get Wallpaper

[[Method('Wallpaper', 'Get Wallpaper', False)]]

Retrieve the current system wallpaper; if no wallpaper is set, the system built-in static wallpaper is returned.

### Set Lock Screen Wallpaper

[[Method('Wallpaper', 'Set Lock Screen Wallpaper', False, 'image')]]

| Params | []() |
|--------|------|
|image|Text|


Change the current lock screen wallpaper. This block works only on devices with Android 7+.

### Set Wallpaper

[[Method('Wallpaper', 'Set Wallpaper', False, 'image')]]

| Params | []() |
|--------|------|
|image|Text|


Change the current system wallpaper.

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