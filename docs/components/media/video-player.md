# Video Player

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|8|

## Overview

A multimedia component capable of playing videos. When the application is run, the VideoPlayer will be displayed as a rectangle on-screen. If the user touches the rectangle, controls will appear to play/pause, skip ahead, and skip backward within the video. The application can also control behavior by calling the `` Start ``, `` Pause ``, and `` SeekTo `` methods. 

Video files should be in 3GPP (.3gp) or MPEG-4 (.mp4) formats. For more details about legal formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

App Inventor for Android only permits video files under 1 MB and limits the total size of an application to 5 MB, not all of which is available for media (video, audio, and sound) files. If your media files are too large, you may get errors when packaging or installing your application, in which case you should reduce the number of media files or their sizes. Most video editing software, such as Windows Movie Maker and Apple iMovie, can help you decrease the size of videos by shortening them or re-encoding the video into a more compact format.

You can also set the media source to a URL that points to a streaming video, but the URL must point to the video file itself, not to a program that plays the video.

## Events

### Completed

Indicates that the video has reached the end

[[Event('Video Player', 'Completed')]]

### VideoPlayerError

The VideoPlayerError event is no longer used. Please use the Screen.ErrorOccurred event instead.

[[Event('Video Player', 'VideoPlayerError', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


## Methods

### Get Duration

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns duration of the video in milliseconds.

[[Method('Video Player', 'Get Duration', True)]]

### Pause

Pauses playback of the video. Playback can be resumed at the same location by calling the `` Start `` method.

[[Method('Video Player', 'Pause', False)]]

### Seek To

Seeks to the requested time (specified in milliseconds) in the video. If the video is paused, the frame shown will not be updated by the seek. The player can jump only to key frames in the video, so seeking to times that differ by short intervals may not actually move to different frames.

[[Method('Video Player', 'Seek To', False, 'ms')]]

| Params | []() |
|--------|------|
|ms|<span class="chip chip-number">Number</span>|


### Start

Starts playback of the video.

[[Method('Video Player', 'Start', False)]]

### Stop

Resets to start of video and pauses it if video was playing.

[[Method('Video Player', 'Stop', False)]]

## Properties

### Show Controls

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled the user will see the control buttons.

[[PropertyBlockGetterAndSetter('Video Player', 'Show Controls')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The "path" to the video. Usually, this will be the name of the video file, which should be added in the Designer.

[[PropertyBlockGetterAndSetter('Video Player', 'Source')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Video Player', 'Visible')]]

### Volume

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>50</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the volume to a number between 0 and 100. Values less than 0 will be treated as 0, and values greater than 100 will be treated as 100.

[[PropertyBlockGetterAndSetter('Video Player', 'Volume')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Video Player', 'Column')]]

### Current Position

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current position of the source file that is playing.

[[PropertyBlockGetter('Video Player', 'Current Position')]]

### Full Screen

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Returns whether the VideoPlayer's video is currently beingshown in fullscreen mode or not.

[[PropertyBlockGetterAndSetter('Video Player', 'Full Screen')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Video Player', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Video Player', 'Height Percent')]]

### Is Playing

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Reports whether the media is playing.

[[PropertyBlockGetter('Video Player', 'Is Playing')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Video Player', 'Row')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Video Player', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Video Player', 'Width Percent')]]