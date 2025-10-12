# Youtube Player

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">3</span>|

## Overview

A visible component that plays YouTube videos.  
Note\: For this component to work correctly, set the MIN API to 17 (Android 4.2).

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Current Second Changed

Called periodically by the player, the argument is the number of seconds that have been played.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Current%20Second%20Changed%22,%20%22param%22:%20%5B%22second%22%5D%7D"></div>

| Params | []() |
|--------|------|
|second|<span class="chip chip-number">Number</span>|

### Error

Use this event to detect that there was any error with the player. Return values: 'UNKNOWN', 'INVALID_PARAMETER_IN_REQUEST', 'HTML_5_PLAYER', 'VIDEO_NOT_FOUND', 'VIDEO_NOT_PLAYABLE_IN_EMBEDDED_PLAYER', 'REQUEST_MISSING_HTTP_REFERER'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Error%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

### Fullscreen

Event to get notified when the player enters or exits fullscreen. The variable 'fullscreen' returns true or false.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Fullscreen%22,%20%22param%22:%20%5B%22fullscreen%22%5D%7D"></div>

| Params | []() |
|--------|------|
|fullscreen|<span class="chip chip-boolean">Boolean</span>|

### Initialized

Use this event to start the playing of a normal or instant youtube video.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Initialized%22,%20%22param%22:%20%5B%5D%7D"></div>

### Loaded Fraction Changed

Called periodically by the player, the argument is the percentage of the video that has been buffered.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Loaded%20Fraction%20Changed%22,%20%22param%22:%20%5B%22loaded%20Fraction%22%5D%7D"></div>

| Params | []() |
|--------|------|
|loaded Fraction|<span class="chip chip-number">Number</span>|

### Playback Quality Changed

Use this event to detect that the playback quality was changed. Return values: 'UNKNOWN', 'SMALL', 'MEDIUM', 'LARGE', 'HD720', 'HD1080', 'HIGH_RES' or 'DEFAULT'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Playback%20Quality%20Changed%22,%20%22param%22:%20%5B%22quality%22%5D%7D"></div>

| Params | []() |
|--------|------|
|quality|<span class="chip chip-text">Text</span>|

### Playback Rate Changed

Use this event to detect that the playback rate was changed. Return values: 'UNKNOWN', 'RATE_0_25', 'RATE_0_5', 'RATE_0_75', 'RATE_1', 'RATE_1_25', 'RATE_1_5', 'RATE_1_75 or 'RATE_2'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Playback%20Rate%20Changed%22,%20%22param%22:%20%5B%22rate%22%5D%7D"></div>

| Params | []() |
|--------|------|
|rate|<span class="chip chip-text">Text</span>|

### State Changed

Use this event to detect that the state changes. Return values: 'UNKNOWN', 'UNSTARTED', 'ENDED', 'PLAYING', 'PAUSED', 'BUFFERING' or 'VIDEO_CUED'.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22State%20Changed%22,%20%22param%22:%20%5B%22state%22%5D%7D"></div>

| Params | []() |
|--------|------|
|state|<span class="chip chip-text">Text</span>|

## Methods

### Enter Fullscreen

:warning: ==**Deprecated**==

DEPRECATED. Does nothing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Enter%20Fullscreen%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Exit Fullscreen

:warning: ==**Deprecated**==

DEPRECATED. Does nothing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Exit%20Fullscreen%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Thumbnail From Video Id

<span class="chip chip-text">Returns: <i>Text</i></span>

This block will return the thumbnail image path from a video id. Use only as example '_bZj-LOXdH8' from a youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Get%20Thumbnail%20From%20Video%20Id%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22video%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|video Id|<span class="chip chip-text">Text</span>|

### Instant Load

Use this block together with the 'Youtube Player' Initialized event. Loads and automatically plays the specified youtube video. Use only as example '_bZj-LOXdH8' from a youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Instant%20Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22video%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|video Id|<span class="chip chip-text">Text</span>|

### Load

Loads the specified video's thumbnail and prepares the player to play the video. Does not automatically play the video. Use only as example '_bZj-LOXdH8' from a youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22video%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|video Id|<span class="chip chip-text">Text</span>|

### Pause

Pause the youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Play

Plays the youtube video.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Play%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Seek To

Set a position where the youtube video should start playing in seconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Seek%20To%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

### Toggle Fullscreen

:warning: ==**Deprecated**==

DEPRECATED. Does nothing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Toggle%20Fullscreen%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Custom Video Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to change the video title.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Custom%20Video%20Title%22,%20%22getter%22:%20false%7D"></div>

### Enable Live Video UI

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If you want to play live videos you must setup the UI accordingly by calling this method. If enabled, the user cannot select a second on the video progress bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Enable%20Live%20Video%20UI%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Enable%20Live%20Video%20UI%22,%20%22getter%22:%20false%7D"></div>

### Get Current Second

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the current second.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Get%20Current%20Second%22,%20%22getter%22:%20true%7D"></div>

### Get Video Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the video duration in seconds.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Get%20Video%20Duration%22,%20%22getter%22:%20true%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Is Fullscreen

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

DEPRECATED. Does nothing.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Is%20Fullscreen%22,%20%22getter%22:%20true%7D"></div>

### Show Buffering Progress

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the buffering progress.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Buffering%20Progress%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Buffering%20Progress%22,%20%22getter%22:%20false%7D"></div>

### Show Current Time

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the current time.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Current%20Time%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Current%20Time%22,%20%22getter%22:%20false%7D"></div>

### Show Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the duration.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Duration%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Duration%22,%20%22getter%22:%20false%7D"></div>

### Show Fullscreen Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the fullscreen button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Fullscreen%20Button%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Fullscreen%20Button%22,%20%22getter%22:%20false%7D"></div>

### Show Play Pause Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the play/pause button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Play%20Pause%20Button%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Play%20Pause%20Button%22,%20%22getter%22:%20false%7D"></div>

### Show SeekBar

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the seekbar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20SeekBar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20SeekBar%22,%20%22getter%22:%20false%7D"></div>

### Show UI

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the player's UI.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20UI%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20UI%22,%20%22getter%22:%20false%7D"></div>

### Show Video Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the video title.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Video%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20Video%20Title%22,%20%22getter%22:%20false%7D"></div>

### Show YouTube Button

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this to show or hide the YouTube button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20YouTube%20Button%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Show%20YouTube%20Button%22,%20%22getter%22:%20false%7D"></div>

### Start Second

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The time from which the video should start playing.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Start%20Second%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Start%20Second%22,%20%22getter%22:%20false%7D"></div>

### Test Video Id

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Use this block to test the youtube player.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Test%20Video%20Id%22,%20%22getter%22:%20true%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Volume

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>50</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the volume to a number between 0 and 100. Use only integer numbers.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Youtube%20Player%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
