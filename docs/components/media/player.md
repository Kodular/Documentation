# Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|8|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Multimedia component that plays audio and controls phone vibration.  The name of a multimedia field is specified in the <code>Source</code> property, which can be set in the Designer or in the Blocks Editor.  The length of time for a vibration is specified in the Blocks Editor in milliseconds (thousandths of a second).
<p>For supported audio formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.</p>
<p>This component is best for long sound files, such as songs, while the <code>Sound</code> component is more efficient for short files, such as sound effects.</p>_

## Events

### Completed

[[Event('Player', 'Completed')]]

_Indicates that the media has reached the end_

### Other Player Started

[[Event('Player', 'Other Player Started')]]

_This event is signaled when another player has started (and the current player is playing or paused, but not stopped)._

### PlayerError

[[Event('Player', 'PlayerError', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_The PlayerError event is no longer used. Please use the Screen.ErrorOccurred event instead._

## Methods

### Pause

[[Method('Player', 'Pause', false)]]

_Suspends playing the media if it is playing._

### SeekTo

[[Method('Player', 'SeekTo', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Set a position where the source file should start playing._

### SetLeftRightVolume

[[Method('Player', 'SetLeftRightVolume', false, 'leftVolume rightVolume')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |left Volume|`number`|
    |right Volume|`number`|


_Control the left and right volume of the player. Set the volume to a number between 0 and 100._

### Start

[[Method('Player', 'Start', false)]]

_Plays the media.  If it was previously paused, the playing is resumed.
 If it was previously stopped, it starts from the beginning._

### Stop

[[Method('Player', 'Stop', false)]]

_Stops playing the media and seeks to the beginning of the song._

### Vibrate

[[Method('Player', 'Vibrate', false, 'milliseconds')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |milliseconds|`number`|


_Vibrates for specified number of milliseconds._

## Properties

### Loop

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Loop')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, the player will loop when it plays. Setting Loop while the player is playing will affect the current playing._

### Play Only In Foreground

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Play Only In Foreground')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, the player will pause playing when leaving the current screen; if false (default option), the player continues playing whenever the current screen is displaying or not._

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Source')]]

| Type |
|:----:|
|text|

_Returns the path to the audio source_

### Volume

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

_Sets the volume to a number between 0 and 100._

### Current Position

:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current position of the source file that is playing._

### Duration

:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the duration of the source file._

### Get TrackInfo

:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Get TrackInfo')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns a array of track information._

### Is Playing

:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Is Playing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Reports whether the media is playing_

### Left Volume

:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Left Volume')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current left volume._

### Right Volume

:eyes: Read-Only property
[[PropertyBlockGetter('Player', 'Right Volume')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current right volume._