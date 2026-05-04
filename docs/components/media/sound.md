# Sound

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">5</span>|

## Overview

A multimedia component that plays sound files and optionally vibrates for the number of milliseconds (thousandths of a second) specified in the Blocks Editor. The name of the sound file to play can be specified either in the Designer or in the Blocks Editor.

 

For supported sound file formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This `` Sound `` component is best for short sound files, such as sound effects, while the `` Player `` component is more efficient for longer sounds, such as songs.

You might get an error if you attempt to play a sound immediately after setting the source.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#VIBRATE)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE) if using [Source](#source)

## Methods

### Pause

Pauses playing the sound if it is being played.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Play

Plays the sound specified by the Source property.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Play%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Resume

Resumes playing the sound after a pause.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Resume%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Sound Normal

Ringer mode that may be audible and may vibrate.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Sound%20Normal%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Sound Silent

Ringer mode that will be silent and will not vibrate.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Sound%20Silent%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Sound Vibrate

Ringer mode that will be silent and will vibrate.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Sound%20Vibrate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop

Stops playing the sound if it is being played.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Vibrate

Vibrates for the specified number of milliseconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Vibrate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22millisecs%22%5D%7D"></div>

| Params | []() |
|--------|------|
|millisecs|<span class="chip chip-number">Number</span>|

### Vibrate Pattern

Vibrate with a given pattern

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Vibrate%20Pattern%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22vibrate%22,%20%22delay%22,%20%22repeat%22%5D%7D"></div>

| Params | []() |
|--------|------|
|vibrate|<span class="chip chip-number">Number</span>|
|delay|<span class="chip chip-number">Number</span>|
|repeat|<span class="chip chip-boolean">Boolean</span>|

## Properties

### Minimum Interval (ms)

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>500</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The minimum interval, in milliseconds, between sounds. If you play a sound, all further Play() calls will be ignored until the interval has elapsed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Minimum%20Interval%20(ms)%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Minimum%20Interval%20(ms)%22,%20%22getter%22:%20false%7D"></div>

### Source

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The name of the sound file. Only certain formats are supported. See http://developer.android.com/guide/appendix/media-formats.html.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20false%7D"></div>
