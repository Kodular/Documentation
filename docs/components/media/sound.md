# Sound

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A multimedia component that plays sound files and optionally vibrates for the number of milliseconds (thousandths of a second) specified in the Blocks Editor. The name of the sound file to play can be specified either in the Designer or in the Blocks Editor.

 

For supported sound file formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This `` Sound `` component is best for short sound files, such as sound effects, while the `` Player `` component is more efficient for longer sounds, such as songs.

You might get an error if you attempt to play a sound immediately after setting the source.

## Methods

### Pause

[[Method('Sound', 'Pause', False)]]

Pauses playing the sound if it is being played.

### Play

[[Method('Sound', 'Play', False)]]

Plays the sound specified by the Source property.

### Resume

[[Method('Sound', 'Resume', False)]]

Resumes playing the sound after a pause.

### Sound Normal

[[Method('Sound', 'Sound Normal', False)]]

Ringer mode that may be audible and may vibrate.

### Sound Silent

[[Method('Sound', 'Sound Silent', False)]]

Ringer mode that will be silent and will not vibrate.

### Sound Vibrate

[[Method('Sound', 'Sound Vibrate', False)]]

Ringer mode that will be silent and will vibrate.

### Stop

[[Method('Sound', 'Stop', False)]]

Stops playing the sound if it is being played.

### Vibrate

[[Method('Sound', 'Vibrate', False, 'millisecs')]]

| Params | []() |
|--------|------|
|millisecs|Number|


Vibrates for the specified number of milliseconds.

### Vibrate Pattern

[[Method('Sound', 'Vibrate Pattern', False, 'vibrate', 'delay', 'repeat')]]

| Params | []() |
|--------|------|
|vibrate|Number|
|delay|Number|
|repeat|Boolean|


Vibrate with a given pattern

## Properties

### Minimum Interval (ms)

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>500</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The minimum interval, in milliseconds, between sounds. If you play a sound, all further Play() calls will be ignored until the interval has elapsed.

[[PropertyBlockGetterAndSetter('Sound', 'Minimum Interval ms')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The name of the sound file. Only certain formats are supported. See http://developer.android.com/guide/appendix/media-formats.html.

[[PropertyBlockGetterAndSetter('Sound', 'Source')]]