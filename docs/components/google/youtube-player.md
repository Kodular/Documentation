# Youtube Player

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 17, Android 4.2.X Jelly Bean</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that plays YouTube videos.  
Note\: For this component to work correctly, set the MIN API to 17 (Android 4.2).

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Error

Use this event to detect that there was any error with the player. Return values: 'UNKNOWN', 'INVALID_PARAMETER_IN_REQUEST', 'HTML_5_PLAYER', 'VIDEO_NOT_FOUND', 'VIDEO_NOT_PLAYABLE_IN_EMBEDDED_PLAYER', 'INVALID_VOLUME' or 'INVALID_SEEK_TO'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Error%22,%20%22params%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


### Fullscreen

Event to get notified when the player enters or exits fullscreen. The variable 'fullscreen' returns true or false.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Fullscreen%22,%20%22params%22:%20%5B%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|


### Initialized

Use this event to start the playing of a normal or instant youtube video.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Initialized%22,%20%22params%22:%20%5B%5D%7D"></div>


### Playback Quality Changed

Use this event to detect that the playback quality was changed. Return values: 'UNKNOWN', 'SMALL', 'MEDIUM', 'LARGE', 'HD720', 'HD1080', 'HIGH_RES' or 'DEFAULT'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Playback%20Quality%20Changed%22,%20%22params%22:%20%5B%22quality%22%5D%7D"></div>

| Params | []() |
|--------|------|
|quality|<span class="chip chip-text">Text</span>|


### Playback Rate Changed

Use this event to detect that the playback rate was changed. Return values: 'UNKNOWN', 'RATE_0_25', 'RATE_0_5', 'RATE_1', 'RATE_1_5' or 'RATE_2'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Playback%20Rate%20Changed%22,%20%22params%22:%20%5B%22rate%22%5D%7D"></div>

| Params | []() |
|--------|------|
|rate|<span class="chip chip-text">Text</span>|


### State Changed

Use this event to detect that the state changes. Return values: 'UNKNOWN', 'UNSTARTED', 'ENDED', 'PLAYING', 'PAUSED', 'BUFFERING' or 'VIDEO_CUED'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22State%20Changed%22,%20%22params%22:%20%5B%22state%22%5D%7D"></div>

| Params | []() |
|--------|------|
|state|<span class="chip chip-text">Text</span>|


## Methods

### Enter Fullscreen

Enter the video in fullscreen mode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Enter%20Fullscreen%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Exit Fullscreen

Exit the video from fullscreen mode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Exit%20Fullscreen%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get Thumbnail From Video Id

<span class="chip chip-text">Returns: <i>Text</i></span> 

This block will return the thumbnail image path from a video id. Use only as example '_bZj-LOXdH8' from a youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Get%20Thumbnail%20From%20Video%20Id%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22video%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|video Id|<span class="chip chip-text">Text</span>|


### Instant Load

Use this block together with the 'Youtube Player' Initialized event. Loads and automatically plays the specified youtube video. Use only as example '_bZj-LOXdH8' from a youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Instant%20Load%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22video%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|video Id|<span class="chip chip-text">Text</span>|


### Load

Loads the specified video's thumbnail and prepares the player to play the video. Does not automatically play the video. Use only as example '_bZj-LOXdH8' from a youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22video%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|video Id|<span class="chip chip-text">Text</span>|


### Pause

Pause the youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Play

Plays the youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Play%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Seek To

Set a position where the youtube video should start playing in seconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Seek%20To%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22%5D%7D"></div>


| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


### Toggle Fullscreen

Toggle the state of the video player.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Toggle%20Fullscreen%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Enable Live Video UI

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If you want to play live videos you must setup the UI accordingly, by calling this method. If enabled, the user can not select a second on the video progress bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Enable%20Live%20Video%20UI%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Enable%20Live%20Video%20UI%22,%20%22getter%22:%20false%7D"></div>


### Start Second

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The time from which the video should start playing.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Start%20Second%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Start%20Second%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Volume

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>50</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the volume to a number between 0 and 100.Use only integer numbers.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Column property getter method.


### Get Current Second

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the current second.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Get%20Current%20Second%22,%20%22getter%22:%20true%7D"></div>


### Get Video Duration

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the video duration in seconds.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Get%20Video%20Duration%22,%20%22getter%22:%20true%7D"></div>


### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Is Fullscreen

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true if the player is in fullscreen mode.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Is%20Fullscreen%22,%20%22getter%22:%20true%7D"></div>


### Row

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Row property getter method.


### Test Video Id

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Use this block to test the youtube player. Powered by Kodular.io

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Test%20Video%20Id%22,%20%22getter%22:%20true%7D"></div>


### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
