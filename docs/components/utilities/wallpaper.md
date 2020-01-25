# Wallpaper

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Got%20Wallpaper%22,%20%22param%22:%20%5B%22picture%22%5D%7D"></div>

| Params | []() |
|--------|------|
|picture|<span class="chip chip-text">Text</span>|

### Wallpaper Changed

Event to detect that the user has changed the wallpaper. This event will be invoked by the "Set Wallpaper" function.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Wallpaper%20Changed%22,%20%22param%22:%20%5B%22success%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|

### Wallpaper Cleared

Event to detect that the user has cleared/deleted the wallpaper.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Wallpaper%20Cleared%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Clear

Remove any currently set system wallpaper, reverting to the system's built-in wallpaper.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Clear%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Clear Wallpaper

Reset all wallpaper to the factory default. This block works only on devices with Android 9+.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Clear%20Wallpaper%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Wallpaper

Retrieve the current system wallpaper; if no wallpaper is set, the system built-in static wallpaper is returned.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Get%20Wallpaper%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Lock Screen Wallpaper

Change the current lock screen wallpaper. This block works only on devices with Android 7+.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Set%20Lock%20Screen%20Wallpaper%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|

### Set Wallpaper

Change the current system wallpaper.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Set%20Wallpaper%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|

## Properties

### Desired Minimum Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the desired minimum height for the wallpaper.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Desired%20Minimum%20Height%22,%20%22getter%22:%20true%7D"></div>

### Desired Minimum Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the desired minimum width for the wallpaper.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Desired%20Minimum%20Width%22,%20%22getter%22:%20true%7D"></div>

### Is Set Wallpaper Allowed

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns whether the calling package is allowed to set the wallpaper for the calling user. This block works only on devices with Android 7+.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Is%20Set%20Wallpaper%20Allowed%22,%20%22getter%22:%20true%7D"></div>

### Is Wallpaper Supported

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns whether wallpapers are supported for the calling user. This block works only on devices with Android 6+.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Is%20Wallpaper%20Supported%22,%20%22getter%22:%20true%7D"></div>

### Save Wallpaper As

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>wallpaperPicture.png</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

After the user clicked on "Get Wallpaper" this will be the name for the wallpaper picture.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Wallpaper%22,%20%22name%22:%20%22Save%20Wallpaper%20As%22,%20%22getter%22:%20false%7D"></div>
