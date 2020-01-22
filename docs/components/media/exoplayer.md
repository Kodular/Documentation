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