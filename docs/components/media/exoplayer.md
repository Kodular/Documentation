# ExoPlayer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that plays audio files. <br>The ExoPlayer component, powered by Google, has significantly lower audio playback delay/lag than other players._

## Events

### Completed

[[Event('ExoPlayer', 'Completed')]]

_This event is invoked if the player state is completed._

### Got Meta Data

[[Event('ExoPlayer', 'Got Meta Data', 'artist title album albumArtist track')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |artist|`text`|
    |title|`text`|
    |album|`text`|
    |albumArtist|`text`|
    |track|`text`|


_This event returns meta data from the audio stream. Works for files but not for streams as example radio streams._

### On Player Error

[[Event('ExoPlayer', 'On Player Error', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_This event returns the error reason for any problems._

### Other Player Started

[[Event('ExoPlayer', 'Other Player Started')]]

_This event is signaled when another player has started (and the current player is playing or paused, but not stopped)._

### Other Player Stopped

[[Event('ExoPlayer', 'Other Player Stopped')]]

_This event is signaled when another player has stopped (and the current player is playing or paused, but not stopped)._

### Status Changed

[[Event('ExoPlayer', 'Status Changed', 'isPlaying isPause isStopped isLoading')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |is Playing|`boolean`|
    |is Pause|`boolean`|
    |is Stopped|`boolean`|
    |is Loading|`boolean`|


_This event returns true or false for the respective simpleExoPlayer statuses._

## Methods

### Pause

[[Method('ExoPlayer', 'Pause', false)]]

_Pause the player._

### Resume

[[Method('ExoPlayer', 'Resume', false)]]

_Resume the player._

### SeekTo

[[Method('ExoPlayer', 'SeekTo', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Set a position where the source file should start playing in milliseconds._

### Start

[[Method('ExoPlayer', 'Start', false)]]

_Start the player._

### Stop

[[Method('ExoPlayer', 'Stop', false)]]

_Stop the player._

### is Loading

[[Method('ExoPlayer', 'is Loading', true)]]

{>>Returns `boolean`<<}

_Returns true if the player is current loading._

### is Pause

[[Method('ExoPlayer', 'is Pause', true)]]

{>>Returns `boolean`<<}

_Returns true if the player is current in pause mode._

### is Playing

[[Method('ExoPlayer', 'is Playing', true)]]

{>>Returns `boolean`<<}

_Returns true if the player is current playing._

### is Stopped

[[Method('ExoPlayer', 'is Stopped', true)]]

{>>Returns `boolean`<<}

_Returns true if the player is current stopped._

## Properties

### Loop

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Loop')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, the player will loop when it plays._

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Source')]]

| Type |
|:----:|
|text|

_Set the path to the audio source. Can be a asset file, from external card, or from a online stream._

### Volume

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

_Sets the volume to a number between 0 and 100_

### Current Position

:eyes: Read-Only property
[[PropertyBlockGetter('ExoPlayer', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current position of the source file that is playing in milliseconds._

### Duration

:eyes: Read-Only property
[[PropertyBlockGetter('ExoPlayer', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the duration of the source file._