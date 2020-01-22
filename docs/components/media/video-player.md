# Video Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|8|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A multimedia component capable of playing videos. When the application is run, the VideoPlayer will be displayed as a rectangle on-screen.  If the user touches the rectangle, controls will appear to play/pause, skip ahead, and skip backward within the video.  The application can also control behavior by calling the <code>Start</code>, <code>Pause</code>, and <code>SeekTo</code> methods.  <p>Video files should be in 3GPP (.3gp) or MPEG-4 (.mp4) formats.  For more details about legal formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.</p><p>App Inventor for Android only permits video files under 1 MB and limits the total size of an application to 5 MB, not all of which is available for media (video, audio, and sound) files.  If your media files are too large, you may get errors when packaging or installing your application, in which case you should reduce the number of media files or their sizes.  Most video editing software, such as Windows Movie Maker and Apple iMovie, can help you decrease the size of videos by shortening them or re-encoding the video into a more compact format.</p><p>You can also set the media source to a URL that points to a streaming video, but the URL must point to the video file itself, not to a program that plays the video._

## Events

### Completed

[[Event('Video Player', 'Completed')]]

_Indicates that the video has reached the end_

### VideoPlayerError

[[Event('Video Player', 'VideoPlayerError', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_The VideoPlayerError event is no longer used. Please use the Screen.ErrorOccurred event instead._

## Methods

### GetDuration

[[Method('Video Player', 'GetDuration', true)]]

{>>Returns `number`<<}

_Returns duration of the video in milliseconds._

### Pause

[[Method('Video Player', 'Pause', false)]]

_Pauses playback of the video.  Playback can be resumed at the same location by calling the <code>Start</code> method._

### SeekTo

[[Method('Video Player', 'SeekTo', false, 'ms')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |ms|`number`|


_Seeks to the requested time (specified in milliseconds) in the video. If the video is paused, the frame shown will not be updated by the seek. The player can jump only to key frames in the video, so seeking to times that differ by short intervals may not actually move to different frames._

### Start

[[Method('Video Player', 'Start', false)]]

_Starts playback of the video._

### Stop

[[Method('Video Player', 'Stop', false)]]

_Resets to start of video and pauses it if video was playing._

## Properties

### Show Controls

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Show Controls')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If enabled the user will see the control buttons._

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Source')]]

| Type |
|:----:|
|text|

_The "path" to the video.  Usually, this will be the name of the video file, which should be added in the Designer._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Volume

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

_Sets the volume to a number between 0 and 100. Values less than 0 will be treated as 0, and values greater than 100 will be treated as 100._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Current Position

:eyes: Read-Only property
[[PropertyBlockGetter('Video Player', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current position of the source file that is playing._

### Full Screen

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Full Screen')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns whether the VideoPlayer's video is currently being
 shown in fullscreen mode or not._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Is Playing

:eyes: Read-Only property
[[PropertyBlockGetter('Video Player', 'Is Playing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Reports whether the media is playing._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._