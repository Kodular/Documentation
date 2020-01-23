# ExoPlayer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that plays audio files.   
The ExoPlayer component, powered by Google, has significantly lower audio playback delay/lag than other players.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.READ_EXTERNAL_STORAGE)


## Events

### Completed

This event is invoked if the player state is completed.

[[Event('ExoPlayer', 'Completed')]]

### Got Meta Data

This event returns meta data from the audio stream. Works for files but not for streams as example radio streams.

[[Event('ExoPlayer', 'Got Meta Data', 'artist', 'title', 'album', 'albumArtist', 'track')]]

| Params | []() |
|--------|------|
|artist|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|album|<span class="chip chip-text">Text</span>|
|albumArtist|<span class="chip chip-text">Text</span>|
|track|<span class="chip chip-text">Text</span>|


### On Player Error

This event returns the error reason for any problems.

[[Event('ExoPlayer', 'On Player Error', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


### Other Player Started

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

[[Event('ExoPlayer', 'Other Player Started')]]

### Other Player Stopped

This event is signaled when another player has stopped (and the current player is playing or paused, but not stopped).

[[Event('ExoPlayer', 'Other Player Stopped')]]

### Status Changed

This event returns true or false for the respective simpleExoPlayer statuses.

[[Event('ExoPlayer', 'Status Changed', 'isPlaying', 'isPause', 'isStopped', 'isLoading')]]

| Params | []() |
|--------|------|
|is Playing|<span class="chip chip-boolean">Boolean</span>|
|is Pause|<span class="chip chip-boolean">Boolean</span>|
|is Stopped|<span class="chip chip-boolean">Boolean</span>|
|is Loading|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Pause

Pause the player.

[[Method('ExoPlayer', 'Pause', False)]]

### Resume

Resume the player.

[[Method('ExoPlayer', 'Resume', False)]]

### Seek To

Set a position where the source file should start playing in milliseconds.

[[Method('ExoPlayer', 'Seek To', False, 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


### Start

Start the player.

[[Method('ExoPlayer', 'Start', False)]]

### Stop

Stop the player.

[[Method('ExoPlayer', 'Stop', False)]]

### is Loading

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the player is current loading.

[[Method('ExoPlayer', 'is Loading', True)]]

### is Pause

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the player is current in pause mode.

[[Method('ExoPlayer', 'is Pause', True)]]

### is Playing

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the player is current playing.

[[Method('ExoPlayer', 'is Playing', True)]]

### is Stopped

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the player is current stopped.

[[Method('ExoPlayer', 'is Stopped', True)]]

## Properties

### Loop

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, the player will loop when it plays.

[[PropertyBlockGetterAndSetter('ExoPlayer', 'Loop')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the path to the audio source. Can be a asset file, from external card, or from a online stream.

[[PropertyBlockGetterAndSetter('ExoPlayer', 'Source')]]

### Volume

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>50</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the volume to a number between 0 and 100

[[PropertyBlockGetterAndSetter('ExoPlayer', 'Volume')]]

### Current Position

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current position of the source file that is playing in milliseconds.

[[PropertyBlockGetter('ExoPlayer', 'Current Position')]]

### Duration

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the duration of the source file.

[[PropertyBlockGetter('ExoPlayer', 'Duration')]]