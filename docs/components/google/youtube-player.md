# Youtube Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 17 | Android 4.2.X Jelly Bean|

## Overview

A visible component that plays YouTube videos.  
Note\: For this component to work correctly, set the MIN API to 17 (Android 4.2).

## Events

### Error

[[Event('Youtube Player', 'Error', 'error')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error|`text`|


Use this event to detect that there was any error with the player. Return values: 'UNKNOWN', 'INVALID_PARAMETER_IN_REQUEST', 'HTML_5_PLAYER', 'VIDEO_NOT_FOUND', 'VIDEO_NOT_PLAYABLE_IN_EMBEDDED_PLAYER', 'INVALID_VOLUME' or 'INVALID_SEEK_TO'.

### Fullscreen

[[Event('Youtube Player', 'Fullscreen', 'fullscreen')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |fullscreen|`boolean`|


Event to get notified when the player enters or exits fullscreen. The variable 'fullscreen' returns true or false.

### Initialized

[[Event('Youtube Player', 'Initialized')]]

Use this event to start the playing of a normal or instant youtube video.

### Playback Quality Changed

[[Event('Youtube Player', 'Playback Quality Changed', 'quality')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |quality|`text`|


Use this event to detect that the playback quality was changed. Return values: 'UNKNOWN', 'SMALL', 'MEDIUM', 'LARGE', 'HD720', 'HD1080', 'HIGH_RES' or 'DEFAULT'.

### Playback Rate Changed

[[Event('Youtube Player', 'Playback Rate Changed', 'rate')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |rate|`text`|


Use this event to detect that the playback rate was changed. Return values: 'UNKNOWN', 'RATE_0_25', 'RATE_0_5', 'RATE_1', 'RATE_1_5' or 'RATE_2'.

### State Changed

[[Event('Youtube Player', 'State Changed', 'state')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |state|`text`|


Use this event to detect that the state changes. Return values: 'UNKNOWN', 'UNSTARTED', 'ENDED', 'PLAYING', 'PAUSED', 'BUFFERING' or 'VIDEO_CUED'.

## Methods

### EnterFullscreen

_Block preview not available_

Enter the video in fullscreen mode.

### ExitFullscreen

_Block preview not available_

Exit the video from fullscreen mode.

### GetThumbnailFromVideoId

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |video Id|`text`|


This block will return the thumbnail image path from a video id. Use only as example '_bZj-LOXdH8' from a youtube video.

### InstantLoad

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |video Id|`text`|


Use this block together with the 'Youtube Player' Initialized event. Loads and automatically plays the specified youtube video. Use only as example '_bZj-LOXdH8' from a youtube video.

### Load

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |video Id|`text`|


Loads the specified video's thumbnail and prepares the player to play the video. Does not automatically play the video. Use only as example '_bZj-LOXdH8' from a youtube video.

### Pause

_Block preview not available_

Pause the youtube video.

### Play

_Block preview not available_

Plays the youtube video.

### SeekTo

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|


Set a position where the youtube video should start playing in seconds.

### ToggleFullscreen

_Block preview not available_

Toggle the state of the video player.

## Properties

### Enable Live Video UI

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Enable Live Video UI')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If you want to play live videos you must setup the UI accordingly, by calling this method. If enabled, the user can not select a second on the video progress bar.

### Start Second

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Start Second')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The time from which the video should start playing.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Volume

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

Set the volume to a number between 0 and 100.Use only integer numbers.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Get Current Second

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Get Current Second')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current second.

### Get Video Duration

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Get Video Duration')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the video duration in seconds.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Is Fullscreen

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Is Fullscreen')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if the player is in fullscreen mode.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Test Video Id

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Test Video Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Use this block to test the youtube player. Powered by Kodular.io

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.