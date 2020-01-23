# Player

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|8|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Multimedia component that plays audio and controls phone vibration. The name of a multimedia field is specified in the `` Source `` property, which can be set in the Designer or in the Blocks Editor. The length of time for a vibration is specified in the Blocks Editor in milliseconds (thousandths of a second)

For supported audio formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This component is best for long sound files, such as songs, while the `` Sound `` component is more efficient for short files, such as sound effects.

## Events

### Completed

[[Event('Player', 'Completed')]]

Indicates that the media has reached the end

### Other Player Started

[[Event('Player', 'Other Player Started')]]

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

### PlayerError

[[Event('Player', 'PlayerError', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


The PlayerError event is no longer used. Please use the Screen.ErrorOccurred event instead.

## Methods

### Pause

_Block preview not available_

Suspends playing the media if it is playing.

### SeekTo

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|


Set a position where the source file should start playing.

### SetLeftRightVolume

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |left Volume|`number`|
    |right Volume|`number`|


Control the left and right volume of the player. Set the volume to a number between 0 and 100.

### Start

_Block preview not available_

Plays the media. If it was previously paused, the playing is resumed
If it was previously stopped, it starts from the beginning.

### Stop

_Block preview not available_

Stops playing the media and seeks to the beginning of the song.

### Vibrate

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |milliseconds|`number`|


Vibrates for specified number of milliseconds.

## Properties

### Loop

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Loop')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, the player will loop when it plays. Setting Loop while the player is playing will affect the current playing.

### Play Only In Foreground

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Play Only In Foreground')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, the player will pause playing when leaving the current screen; if false (default option), the player continues playing whenever the current screen is displaying or not.

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Player', 'Source')]]

| Type |
|:----:|
|text|

Returns the path to the audio source

### Volume

<small>Available as ^^Common^^ Property</small>

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