# Youtube Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 17 - Android 4.2.X Jelly Bean|

## Overview

_A visible component that plays YouTube videos.<br>Note\: For this component to work correctly, set the MIN API to 17 (Android 4.2)._

## Events

### Error

[[Event('Youtube Player', 'Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_Use this event to detect that there was any error with the player. Return values: 'UNKNOWN', 'INVALID_PARAMETER_IN_REQUEST', 'HTML_5_PLAYER', 'VIDEO_NOT_FOUND', 'VIDEO_NOT_PLAYABLE_IN_EMBEDDED_PLAYER', 'INVALID_VOLUME' or 'INVALID_SEEK_TO'._

### Fullscreen

[[Event('Youtube Player', 'Fullscreen', 'fullscreen')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |fullscreen|`boolean`|


_Event to get notified when the player enters or exits fullscreen. The variable 'fullscreen' returns true or false._

### Initialized

[[Event('Youtube Player', 'Initialized')]]

_Use this event to start the playing of a normal or instant youtube video._

### Playback Quality Changed

[[Event('Youtube Player', 'Playback Quality Changed', 'quality')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |quality|`text`|


_Use this event to detect that the playback quality was changed. Return values: 'UNKNOWN', 'SMALL', 'MEDIUM', 'LARGE', 'HD720', 'HD1080', 'HIGH_RES' or 'DEFAULT'._

### Playback Rate Changed

[[Event('Youtube Player', 'Playback Rate Changed', 'rate')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |rate|`text`|


_Use this event to detect that the playback rate was changed. Return values: 'UNKNOWN', 'RATE_0_25', 'RATE_0_5', 'RATE_1', 'RATE_1_5' or 'RATE_2'._

### State Changed

[[Event('Youtube Player', 'State Changed', 'state')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |state|`text`|


_Use this event to detect that the state changes. Return values: 'UNKNOWN', 'UNSTARTED', 'ENDED', 'PLAYING', 'PAUSED', 'BUFFERING' or 'VIDEO_CUED'._

## Methods

### EnterFullscreen

[[Method('Youtube Player', 'EnterFullscreen', false)]]

_Enter the video in fullscreen mode._

### ExitFullscreen

[[Method('Youtube Player', 'ExitFullscreen', false)]]

_Exit the video from fullscreen mode._

### GetThumbnailFromVideoId

[[Method('Youtube Player', 'GetThumbnailFromVideoId', true, 'videoId')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |video Id|`text`|


_This block will return the thumbnail image path from a video id. Use only as example '_bZj-LOXdH8' from a youtube video._

### InstantLoad

[[Method('Youtube Player', 'InstantLoad', false, 'videoId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |video Id|`text`|


_Use this block together with the 'Youtube Player' Initialized event. Loads and automatically plays the specified youtube video. Use only as example '_bZj-LOXdH8' from a youtube video._

### Load

[[Method('Youtube Player', 'Load', false, 'videoId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |video Id|`text`|


_Loads the specified video's thumbnail and prepares the player to play the video. Does not automatically play the video. Use only as example '_bZj-LOXdH8' from a youtube video._

### Pause

[[Method('Youtube Player', 'Pause', false)]]

_Pause the youtube video._

### Play

[[Method('Youtube Player', 'Play', false)]]

_Plays the youtube video._

### SeekTo

[[Method('Youtube Player', 'SeekTo', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Set a position where the youtube video should start playing in seconds._

### ToggleFullscreen

[[Method('Youtube Player', 'ToggleFullscreen', false)]]

_Toggle the state of the video player._

## Properties

### Enable Live Video UI

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Enable Live Video UI')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If you want to play live videos you must setup the UI accordingly, by calling this method. If enabled, the user can not select a second on the video progress bar._

### Start Second

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Start Second')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The time from which the video should start playing._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Volume

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

_Set the volume to a number between 0 and 100.Use only integer numbers._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Get Current Second

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Get Current Second')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current second._

### Get Video Duration

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Get Video Duration')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the video duration in seconds._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Is Fullscreen

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Is Fullscreen')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns true if the player is in fullscreen mode._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Test Video Id

:eyes: Read-Only property
[[PropertyBlockGetter('Youtube Player', 'Test Video Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Use this block to test the youtube player. Powered by Kodular.io_

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._