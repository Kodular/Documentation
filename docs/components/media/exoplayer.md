# ExoPlayer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that plays audio files.   
The ExoPlayer component, powered by Google, has significantly lower audio playback delay/lag than other players.

## Events

### Completed

[[Event('ExoPlayer', 'Completed')]]

This event is invoked if the player state is completed.

### Got Meta Data

[[Event('ExoPlayer', 'Got Meta Data', 'artist', 'title', 'album', 'albumArtist', 'track')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |artist|`text`|
    |title|`text`|
    |album|`text`|
    |albumArtist|`text`|
    |track|`text`|


This event returns meta data from the audio stream. Works for files but not for streams as example radio streams.

### On Player Error

[[Event('ExoPlayer', 'On Player Error', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Message|`text`|


This event returns the error reason for any problems.

### Other Player Started

[[Event('ExoPlayer', 'Other Player Started')]]

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

### Other Player Stopped

[[Event('ExoPlayer', 'Other Player Stopped')]]

This event is signaled when another player has stopped (and the current player is playing or paused, but not stopped).

### Status Changed

[[Event('ExoPlayer', 'Status Changed', 'isPlaying', 'isPause', 'isStopped', 'isLoading')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |is Playing|`boolean`|
    |is Pause|`boolean`|
    |is Stopped|`boolean`|
    |is Loading|`boolean`|


This event returns true or false for the respective simpleExoPlayer statuses.

## Methods

### Pause

_Block preview not available_

Pause the player.

### Resume

_Block preview not available_

Resume the player.

### SeekTo

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|


Set a position where the source file should start playing in milliseconds.

### Start

_Block preview not available_

Start the player.

### Stop

_Block preview not available_

Stop the player.

### is Loading

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the player is current loading.

### is Pause

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the player is current in pause mode.

### is Playing

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the player is current playing.

### is Stopped

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the player is current stopped.

## Properties

### Loop

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Loop')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, the player will loop when it plays.

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Source')]]

| Type |
|:----:|
|text|

Set the path to the audio source. Can be a asset file, from external card, or from a online stream.

### Volume

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Volume')]]

| Type | Default |
|:----:|:-------:|
|number|50|

Sets the volume to a number between 0 and 100

### Current Position

:eyes: Read-Only property
[[PropertyBlockGetter('ExoPlayer', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current position of the source file that is playing in milliseconds.

### Duration

:eyes: Read-Only property
[[PropertyBlockGetter('ExoPlayer', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the duration of the source file.