# Sound

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>A multimedia component that plays sound files and optionally vibrates for the number of milliseconds (thousandths of a second) specified in the Blocks Editor.  The name of the sound file to play can be specified either in the Designer or in the Blocks Editor.</p> <p>For supported sound file formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.</p><p>This <code>Sound</code> component is best for short sound files, such as sound effects, while the <code>Player</code> component is more efficient for longer sounds, such as songs.</p><p>You might get an error if you attempt to play a sound immediately after setting the source.</p>_

## Methods

### Pause

[[Method('Sound', 'Pause', false)]]

_Pauses playing the sound if it is being played._

### Play

[[Method('Sound', 'Play', false)]]

_Plays the sound specified by the Source property._

### Resume

[[Method('Sound', 'Resume', false)]]

_Resumes playing the sound after a pause._

### SoundNormal

[[Method('Sound', 'SoundNormal', false)]]

_Ringer mode that may be audible and may vibrate._

### SoundSilent

[[Method('Sound', 'SoundSilent', false)]]

_Ringer mode that will be silent and will not vibrate._

### SoundVibrate

[[Method('Sound', 'SoundVibrate', false)]]

_Ringer mode that will be silent and will vibrate._

### Stop

[[Method('Sound', 'Stop', false)]]

_Stops playing the sound if it is being played._

### Vibrate

[[Method('Sound', 'Vibrate', false, 'millisecs')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |millisecs|`number`|


_Vibrates for the specified number of milliseconds._

### VibratePattern

[[Method('Sound', 'VibratePattern', false, 'vibrate delay repeat')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |vibrate|`number`|
    |delay|`number`|
    |repeat|`boolean`|


_Vibrate with a given pattern_

## Properties

### Minimum Interval (ms)

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound', 'Minimum Interval (ms)')]]

| Type | Default |
|:----:|:-------:|
|number|500|

_The minimum interval, in milliseconds, between sounds.  If you play a sound, all further Play() calls will be ignored until the interval has elapsed._

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound', 'Source')]]

| Type |
|:----:|
|text|

_The name of the sound file.  Only certain formats are supported.  See http://developer.android.com/guide/appendix/media-formats.html._