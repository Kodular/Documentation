# Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|8|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Multimedia component that plays audio and controls phone vibration.  The name of a multimedia field is specified in the <code>Source</code> property, which can be set in the Designer or in the Blocks Editor.  The length of time for a vibration is specified in the Blocks Editor in milliseconds (thousandths of a second).
<p>For supported audio formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.</p>
<p>This component is best for long sound files, such as songs, while the <code>Sound</code> component is more efficient for short files, such as sound effects.</p>_

## Properties

### Loop

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Loop')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, the player will loop when it plays. Setting Loop while the player is playing will affect the current playing.

### Play Only In Foreground

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Play Only In Foreground')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, the player will pause playing when leaving the current screen; if false (default option), the player continues playing whenever the current screen is displaying or not.

### Source

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Source')]]

| Type |
|:----:|
|text|

Returns the path to the audio source

### Volume

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

Sets the volume to a number between 0 and 100.

### Current Position



:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current position of the source file that is playing.

### Duration



:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the duration of the source file.

### Get TrackInfo



:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Get TrackInfo')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns a array of track information.

### Is Playing



:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Is Playing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Reports whether the media is playing

### Left Volume



:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Left Volume')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current left volume.

### Right Volume



:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Right Volume')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current right volume.