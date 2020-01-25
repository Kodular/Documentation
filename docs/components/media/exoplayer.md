# ExoPlayer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that plays audio files.   
The ExoPlayer component, powered by Google, has significantly lower audio playback delay/lag than other players.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)

## Events

### Completed

This event is invoked if the player state is completed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Completed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Got Meta Data

This event returns meta data from the audio stream. Works for files but not for streams as example radio streams.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Got%20Meta%20Data%22,%20%22param%22:%20%5B%22artist%22,%20%22title%22,%20%22album%22,%20%22albumArtist%22,%20%22track%22%5D%7D"></div>

| Params | []() |
|--------|------|
|artist|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|album|<span class="chip chip-text">Text</span>|
|albumArtist|<span class="chip chip-text">Text</span>|
|track|<span class="chip chip-text">Text</span>|

### On Player Error

This event returns the error reason for any problems.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22On%20Player%20Error%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Other Player Started

This event is signaled when another player has started (and the current player is playing or paused, but not stopped).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Other%20Player%20Started%22,%20%22param%22:%20%5B%5D%7D"></div>

### Other Player Stopped

This event is signaled when another player has stopped (and the current player is playing or paused, but not stopped).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Other%20Player%20Stopped%22,%20%22param%22:%20%5B%5D%7D"></div>

### Status Changed

This event returns true or false for the respective simpleExoPlayer statuses.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Status%20Changed%22,%20%22param%22:%20%5B%22is%20Playing%22,%20%22is%20Pause%22,%20%22is%20Stopped%22,%20%22is%20Loading%22%5D%7D"></div>

| Params | []() |
|--------|------|
|is Playing|<span class="chip chip-boolean">Boolean</span>|
|is Pause|<span class="chip chip-boolean">Boolean</span>|
|is Stopped|<span class="chip chip-boolean">Boolean</span>|
|is Loading|<span class="chip chip-boolean">Boolean</span>|

## Methods

### is Loading

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the player is current loading.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22is%20Loading%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### is Pause

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the player is current in pause mode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22is%20Pause%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### is Playing

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the player is current playing.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22is%20Playing%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### is Stopped

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the player is current stopped.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22is%20Stopped%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Pause

Pause the player.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Resume

Resume the player.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Resume%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Seek To

Set a position where the source file should start playing in milliseconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Seek%20To%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

### Start

Start the player.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Start%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop

Stop the player.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Current Position

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the current position of the source file that is playing in milliseconds.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Current%20Position%22,%20%22getter%22:%20true%7D"></div>

### Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the duration of the source file.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Duration%22,%20%22getter%22:%20true%7D"></div>

### Loop

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

If true, the player will loop when it plays.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Loop%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Loop%22,%20%22getter%22:%20false%7D"></div>

### Source

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Set the path to the audio source. Can be a asset file, from external card, or from a online stream.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20false%7D"></div>

### Volume

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>50</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the volume to a number between 0 and 100

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22ExoPlayer%22,%20%22name%22:%20%22Volume%22,%20%22getter%22:%20false%7D"></div>
