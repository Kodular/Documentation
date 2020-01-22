# ExoPlayer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that plays audio files. <br>The ExoPlayer component, powered by Google, has significantly lower audio playback delay/lag than other players._

## Properties

### Loop

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Loop')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, the player will loop when it plays.

### Source

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('ExoPlayer', 'Source')]]

| Type |
|:----:|
|text|

Set the path to the audio source. Can be a asset file, from external card, or from a online stream.

### Volume

<small>Available as Common Property</small>

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

## Methods

### Pause



[[Method('ExoPlayer', 'Pause', false)]]

Pause the player.

### Resume



[[Method('ExoPlayer', 'Resume', false)]]

Resume the player.

### SeekTo



[[Method('ExoPlayer', 'SeekTo', false, 'position')]]

**Parameters**

| Name | Type |
|------|------|
|position|`number`|


Set a position where the source file should start playing in milliseconds.

### Start



[[Method('ExoPlayer', 'Start', false)]]

Start the player.

### Stop



[[Method('ExoPlayer', 'Stop', false)]]

Stop the player.

### is Loading



[[Method('ExoPlayer', 'is Loading', true)]]

{>>Returns `boolean`<<}


Returns true if the player is current loading.

### is Pause



[[Method('ExoPlayer', 'is Pause', true)]]

{>>Returns `boolean`<<}


Returns true if the player is current in pause mode.

### is Playing



[[Method('ExoPlayer', 'is Playing', true)]]

{>>Returns `boolean`<<}


Returns true if the player is current playing.

### is Stopped



[[Method('ExoPlayer', 'is Stopped', true)]]

{>>Returns `boolean`<<}


Returns true if the player is current stopped.