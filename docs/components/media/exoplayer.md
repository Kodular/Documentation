# ExoPlayer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|4|

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

| Params | []() |
|--------|------|
|artist|Text|
|title|Text|
|album|Text|
|albumArtist|Text|
|track|Text|


This event returns meta data from the audio stream. Works for files but not for streams as example radio streams.

### On Player Error

[[Event('ExoPlayer', 'On Player Error', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|Text|


This event returns the error reason for any problems.

### Other Player Started

[[Event('ExoPlayer', 'Other Player Started')]]

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

### Other Player Stopped

[[Event('ExoPlayer', 'Other Player Stopped')]]

This event is signaled when another player has stopped (and the current player is playing or paused, but not stopped).

### Status Changed

[[Event('ExoPlayer', 'Status Changed', 'isPlaying', 'isPause', 'isStopped', 'isLoading')]]

| Params | []() |
|--------|------|
|is Playing|Boolean|
|is Pause|Boolean|
|is Stopped|Boolean|
|is Loading|Boolean|


This event returns true or false for the respective simpleExoPlayer statuses.

## Methods

### Pause

[[Method('ExoPlayer', 'Pause', False)]]

Pause the player.

### Resume

[[Method('ExoPlayer', 'Resume', False)]]

Resume the player.

### Seek To

[[Method('ExoPlayer', 'Seek To', False, 'position')]]

| Params | []() |
|--------|------|
|position|Number|


Set a position where the source file should start playing in milliseconds.

### Start

[[Method('ExoPlayer', 'Start', False)]]

Start the player.

### Stop

[[Method('ExoPlayer', 'Stop', False)]]

Stop the player.

### is Loading

[[Method('ExoPlayer', 'is Loading', True)]]

{>>Returns `boolean`<<}

Returns true if the player is current loading.

### is Pause

[[Method('ExoPlayer', 'is Pause', True)]]

{>>Returns `boolean`<<}

Returns true if the player is current in pause mode.

### is Playing

[[Method('ExoPlayer', 'is Playing', True)]]

{>>Returns `boolean`<<}

Returns true if the player is current playing.

### is Stopped

[[Method('ExoPlayer', 'is Stopped', True)]]

{>>Returns `boolean`<<}

Returns true if the player is current stopped.

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