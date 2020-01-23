# Sound

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A multimedia component that plays sound files and optionally vibrates for the number of milliseconds (thousandths of a second) specified in the Blocks Editor. The name of the sound file to play can be specified either in the Designer or in the Blocks Editor.

 

For supported sound file formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This `` Sound `` component is best for short sound files, such as sound effects, while the `` Player `` component is more efficient for longer sounds, such as songs.

You might get an error if you attempt to play a sound immediately after setting the source.

## Methods

### Pause

_Block preview not available_

Pauses playing the sound if it is being played.

### Play

_Block preview not available_

Plays the sound specified by the Source property.

### Resume

_Block preview not available_

Resumes playing the sound after a pause.

### SoundNormal

_Block preview not available_

Ringer mode that may be audible and may vibrate.

### SoundSilent

_Block preview not available_

Ringer mode that will be silent and will not vibrate.

### SoundVibrate

_Block preview not available_

Ringer mode that will be silent and will vibrate.

### Stop

_Block preview not available_

Stops playing the sound if it is being played.

### Vibrate

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |millisecs|`number`|


Vibrates for the specified number of milliseconds.

### VibratePattern

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |vibrate|`number`|
    |delay|`number`|
    |repeat|`boolean`|


Vibrate with a given pattern

## Properties

### Minimum Interval (ms)

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound', 'Minimum Interval ms')]]

| Type | Default |
|:----:|:-------:|
|number|500|

The minimum interval, in milliseconds, between sounds. If you play a sound, all further Play() calls will be ignored until the interval has elapsed.

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound', 'Source')]]

| Type |
|:----:|
|text|

The name of the sound file. Only certain formats are supported. See http://developer.android.com/guide/appendix/media-formats.html.