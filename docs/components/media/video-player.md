# Video Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|8|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A multimedia component capable of playing videos. When the application is run, the VideoPlayer will be displayed as a rectangle on-screen.  If the user touches the rectangle, controls will appear to play/pause, skip ahead, and skip backward within the video.  The application can also control behavior by calling the <code>Start</code>, <code>Pause</code>, and <code>SeekTo</code> methods.  <p>Video files should be in 3GPP (.3gp) or MPEG-4 (.mp4) formats.  For more details about legal formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.</p><p>App Inventor for Android only permits video files under 1 MB and limits the total size of an application to 5 MB, not all of which is available for media (video, audio, and sound) files.  If your media files are too large, you may get errors when packaging or installing your application, in which case you should reduce the number of media files or their sizes.  Most video editing software, such as Windows Movie Maker and Apple iMovie, can help you decrease the size of videos by shortening them or re-encoding the video into a more compact format.</p><p>You can also set the media source to a URL that points to a streaming video, but the URL must point to the video file itself, not to a program that plays the video._

## Properties

### Show Controls

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Show Controls')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If enabled the user will see the control buttons.

### Source

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Source')]]

| Type |
|:----:|
|text|

The "path" to the video.  Usually, this will be the name of the video file, which should be added in the Designer.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Volume

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

Sets the volume to a number between 0 and 100. Values less than 0 will be treated as 0, and values greater than 100 will be treated as 100.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Current Position



:eyes: Read-Only property
[[PropertyBlockGetter('Video Player', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current position of the source file that is playing.

### Full Screen



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Full Screen')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether the VideoPlayer's video is currently being
 shown in fullscreen mode or not.

### Height



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Is Playing



:eyes: Read-Only property
[[PropertyBlockGetter('Video Player', 'Is Playing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Reports whether the media is playing.

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Video Player', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.