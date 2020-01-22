# Youtube Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|2|API 17 - Android 4.2.X Jelly Bean|

## Overview

_A visible component that plays YouTube videos.<br>Note\: For this component to work correctly, set the MIN API to 17 (Android 4.2)._

## Properties

### Enable Live Video UI

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Enable Live Video UI')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If you want to play live videos you must setup the UI accordingly, by calling this method. If enabled, the user can not select a second on the video progress bar.

### Start Second

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Start Second')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The time from which the video should start playing.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Youtube Player', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Volume

<small>Available as Common Property</small>

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

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

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

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.

## Methods

### EnterFullscreen



[[Method('Youtube Player', 'EnterFullscreen', false)]]

Enter the video in fullscreen mode.

### ExitFullscreen



[[Method('Youtube Player', 'ExitFullscreen', false)]]

Exit the video from fullscreen mode.

### GetThumbnailFromVideoId



[[Method('Youtube Player', 'GetThumbnailFromVideoId', true, 'videoId')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|video Id|`text`|


This block will return the thumbnail image path from a video id. Use only as example '_bZj-LOXdH8' from a youtube video.

### InstantLoad



[[Method('Youtube Player', 'InstantLoad', false, 'videoId')]]

**Parameters**

| Name | Type |
|------|------|
|video Id|`text`|


Use this block together with the 'Youtube Player' Initialized event. Loads and automatically plays the specified youtube video. Use only as example '_bZj-LOXdH8' from a youtube video.

### Load



[[Method('Youtube Player', 'Load', false, 'videoId')]]

**Parameters**

| Name | Type |
|------|------|
|video Id|`text`|


Loads the specified video's thumbnail and prepares the player to play the video. Does not automatically play the video. Use only as example '_bZj-LOXdH8' from a youtube video.

### Pause



[[Method('Youtube Player', 'Pause', false)]]

Pause the youtube video.

### Play



[[Method('Youtube Player', 'Play', false)]]

Plays the youtube video.

### SeekTo



[[Method('Youtube Player', 'SeekTo', false, 'position')]]

**Parameters**

| Name | Type |
|------|------|
|position|`number`|


Set a position where the youtube video should start playing in seconds.

### ToggleFullscreen



[[Method('Youtube Player', 'ToggleFullscreen', false)]]

Toggle the state of the video player.