# Player

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|8|

:mag: {>>Non-visible component<<}

## Overview

Multimedia component that plays audio and controls phone vibration. The name of a multimedia field is specified in the `` Source `` property, which can be set in the Designer or in the Blocks Editor. The length of time for a vibration is specified in the Blocks Editor in milliseconds (thousandths of a second)

For supported audio formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This component is best for long sound files, such as songs, while the `` Sound `` component is more efficient for short files, such as sound effects.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.VIBRATE)


## Events

### Completed

Indicates that the media has reached the end

[[Event('Player', 'Completed')]]

### Other Player Started

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

[[Event('Player', 'Other Player Started')]]

### PlayerError

The PlayerError event is no longer used. Please use the Screen.ErrorOccurred event instead.

[[Event('Player', 'PlayerError', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


## Methods

### Pause

Suspends playing the media if it is playing.

[[Method('Player', 'Pause', False)]]

### Seek To

Set a position where the source file should start playing.

[[Method('Player', 'Seek To', False, 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


### Set Left Right Volume

Control the left and right volume of the player. Set the volume to a number between 0 and 100.

[[Method('Player', 'Set Left Right Volume', False, 'leftVolume', 'rightVolume')]]

| Params | []() |
|--------|------|
|left Volume|<span class="chip chip-number">Number</span>|
|right Volume|<span class="chip chip-number">Number</span>|


### Start

Plays the media. If it was previously paused, the playing is resumed
If it was previously stopped, it starts from the beginning.

[[Method('Player', 'Start', False)]]

### Stop

Stops playing the media and seeks to the beginning of the song.

[[Method('Player', 'Stop', False)]]

### Vibrate

Vibrates for specified number of milliseconds.

[[Method('Player', 'Vibrate', False, 'milliseconds')]]

| Params | []() |
|--------|------|
|milliseconds|<span class="chip chip-number">Number</span>|


## Properties

### Loop

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, the player will loop when it plays. Setting Loop while the player is playing will affect the current playing.

[[PropertyBlockGetterAndSetter('Player', 'Loop')]]

### Play Only In Foreground

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, the player will pause playing when leaving the current screen; if false (default option), the player continues playing whenever the current screen is displaying or not.

[[PropertyBlockGetterAndSetter('Player', 'Play Only In Foreground')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the path to the audio source

[[PropertyBlockGetterAndSetter('Player', 'Source')]]

### Volume

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>50</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the volume to a number between 0 and 100.

[[PropertyBlockGetterAndSetter('Player', 'Volume')]]

### Current Position

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current position of the source file that is playing.

[[PropertyBlockGetter('Player', 'Current Position')]]

### Duration

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the duration of the source file.

[[PropertyBlockGetter('Player', 'Duration')]]

### Get TrackInfo

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns a array of track information.

[[PropertyBlockGetter('Player', 'Get TrackInfo')]]

### Is Playing

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Reports whether the media is playing

[[PropertyBlockGetter('Player', 'Is Playing')]]

### Left Volume

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current left volume.

[[PropertyBlockGetter('Player', 'Left Volume')]]

### Right Volume

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current right volume.

[[PropertyBlockGetter('Player', 'Right Volume')]]