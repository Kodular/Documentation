# Player

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">8</span>|

:mag: {>>Non-Visible component<<}

## Overview

Multimedia component that plays audio and controls phone vibration. The name of a multimedia field is specified in the `` Source `` property, which can be set in the Designer or in the Blocks Editor. The length of time for a vibration is specified in the Blocks Editor in milliseconds (thousandths of a second)

For supported audio formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This component is best for long sound files, such as songs, while the `` Sound `` component is more efficient for short files, such as sound effects.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#VIBRATE)

## Events

### Completed

Indicates that the media has reached the end

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Completed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Other Player Started

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Other%20Player%20Started%22,%20%22param%22:%20%5B%5D%7D"></div>

### PlayerError

The PlayerError event is no longer used. Please use the Screen.ErrorOccurred event instead.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22PlayerError%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

## Methods

### Pause

Suspends playing the media if it is playing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Seek To

Set a position where the source file should start playing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Seek%20To%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

### Set Left Right Volume

Control the left and right volume of the player. Set the volume to a number between 0 and 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Set%20Left%20Right%20Volume%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22left%20Volume%22,%20%22right%20Volume%22%5D%7D"></div>

| Params | []() |
|--------|------|
|left Volume|<span class="chip chip-number">Number</span>|
|right Volume|<span class="chip chip-number">Number</span>|

### Start

Plays the media. If it was previously paused, the playing is resumed
If it was previously stopped, it starts from the beginning.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Start%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop

Stops playing the media and seeks to the beginning of the song.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Vibrate

Vibrates for specified number of milliseconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Vibrate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22milliseconds%22%5D%7D"></div>

| Params | []() |
|--------|------|
|milliseconds|<span class="chip chip-number">Number</span>|

## Properties

### Current Position

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the current position of the source file that is playing.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Current%20Position%22,%20%22getter%22:%20true%7D"></div>

### Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the duration of the source file.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Duration%22,%20%22getter%22:%20true%7D"></div>

### Get TrackInfo

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns a array of track information.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Get%20TrackInfo%22,%20%22getter%22:%20true%7D"></div>

### Is Playing

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Reports whether the media is playing

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Is%20Playing%22,%20%22getter%22:%20true%7D"></div>

### Left Volume

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the current left volume.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Left%20Volume%22,%20%22getter%22:%20true%7D"></div>

### Loop

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

If true, the player will loop when it plays. Setting Loop while the player is playing will affect the current playing.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Loop%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Loop%22,%20%22getter%22:%20false%7D"></div>

### Play Only In Foreground

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

If true, the player will pause playing when leaving the current screen; if false (default option), the player continues playing whenever the current screen is displaying or not.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Play%20Only%20In%20Foreground%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Play%20Only%20In%20Foreground%22,%20%22getter%22:%20false%7D"></div>

### Right Volume

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the current right volume.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Right%20Volume%22,%20%22getter%22:%20true%7D"></div>

### Source

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns the path to the audio source

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20false%7D"></div>

### Volume

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>50</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the volume to a number between 0 and 100.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Player%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20false%7D"></div>
