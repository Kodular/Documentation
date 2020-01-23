# Youtube Player

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 17, Android 4.2.X Jelly Bean|2|

## Overview

A visible component that plays YouTube videos.  
Note\: For this component to work correctly, set the MIN API to 17 (Android 4.2).

## Events

### Error

[[Event('Youtube Player', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


Use this event to detect that there was any error with the player. Return values: 'UNKNOWN', 'INVALID_PARAMETER_IN_REQUEST', 'HTML_5_PLAYER', 'VIDEO_NOT_FOUND', 'VIDEO_NOT_PLAYABLE_IN_EMBEDDED_PLAYER', 'INVALID_VOLUME' or 'INVALID_SEEK_TO'.

### Fullscreen

[[Event('Youtube Player', 'Fullscreen', 'fullscreen')]]

| Params | []() |
|--------|------|
|fullscreen|Boolean|


Event to get notified when the player enters or exits fullscreen. The variable 'fullscreen' returns true or false.

### Initialized

[[Event('Youtube Player', 'Initialized')]]

Use this event to start the playing of a normal or instant youtube video.

### Playback Quality Changed

[[Event('Youtube Player', 'Playback Quality Changed', 'quality')]]

| Params | []() |
|--------|------|
|quality|Text|


Use this event to detect that the playback quality was changed. Return values: 'UNKNOWN', 'SMALL', 'MEDIUM', 'LARGE', 'HD720', 'HD1080', 'HIGH_RES' or 'DEFAULT'.

### Playback Rate Changed

[[Event('Youtube Player', 'Playback Rate Changed', 'rate')]]

| Params | []() |
|--------|------|
|rate|Text|


Use this event to detect that the playback rate was changed. Return values: 'UNKNOWN', 'RATE_0_25', 'RATE_0_5', 'RATE_1', 'RATE_1_5' or 'RATE_2'.

### State Changed

[[Event('Youtube Player', 'State Changed', 'state')]]

| Params | []() |
|--------|------|
|state|Text|


Use this event to detect that the state changes. Return values: 'UNKNOWN', 'UNSTARTED', 'ENDED', 'PLAYING', 'PAUSED', 'BUFFERING' or 'VIDEO_CUED'.

## Methods

### Enter Fullscreen

[[Method('Youtube Player', 'Enter Fullscreen', False)]]

Enter the video in fullscreen mode.

### Exit Fullscreen

[[Method('Youtube Player', 'Exit Fullscreen', False)]]

Exit the video from fullscreen mode.

### Get Thumbnail From Video Id

[[Method('Youtube Player', 'Get Thumbnail From Video Id', True, 'videoId')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|video Id|Text|


This block will return the thumbnail image path from a video id. Use only as example '_bZj-LOXdH8' from a youtube video.

### Instant Load

[[Method('Youtube Player', 'Instant Load', False, 'videoId')]]

| Params | []() |
|--------|------|
|video Id|Text|


Use this block together with the 'Youtube Player' Initialized event. Loads and automatically plays the specified youtube video. Use only as example '_bZj-LOXdH8' from a youtube video.

### Load

[[Method('Youtube Player', 'Load', False, 'videoId')]]

| Params | []() |
|--------|------|
|video Id|Text|


Loads the specified video's thumbnail and prepares the player to play the video. Does not automatically play the video. Use only as example '_bZj-LOXdH8' from a youtube video.

### Pause

[[Method('Youtube Player', 'Pause', False)]]

Pause the youtube video.

### Play

[[Method('Youtube Player', 'Play', False)]]

Plays the youtube video.

### Seek To

[[Method('Youtube Player', 'Seek To', False, 'position')]]

| Params | []() |
|--------|------|
|position|Number|


Set a position where the youtube video should start playing in seconds.

### Toggle Fullscreen

[[Method('Youtube Player', 'Toggle Fullscreen', False)]]

Toggle the state of the video player.

## Properties

### Enable Live Video UI

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to play live videos you must setup the UI accordingly, by calling this method. If enabled, the user can not select a second on the video progress bar.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Enable Live Video UI')]]

### Start Second

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The time from which the video should start playing.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Start Second')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Visible')]]

### Volume

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>50</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the volume to a number between 0 and 100.Use only integer numbers.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Volume')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Column')]]

### Get Current Second

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current second.

[[PropertyBlockGetter('Youtube Player', 'Get Current Second')]]

### Get Video Duration

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the video duration in seconds.

[[PropertyBlockGetter('Youtube Player', 'Get Video Duration')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Height Percent')]]

### Is Fullscreen

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if the player is in fullscreen mode.

[[PropertyBlockGetter('Youtube Player', 'Is Fullscreen')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Row')]]

### Test Video Id

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Use this block to test the youtube player. Powered by Kodular.io

[[PropertyBlockGetter('Youtube Player', 'Test Video Id')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Youtube Player', 'Width Percent')]]