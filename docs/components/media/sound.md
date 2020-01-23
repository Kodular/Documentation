# Sound

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

A multimedia component that plays sound files and optionally vibrates for the number of milliseconds (thousandths of a second) specified in the Blocks Editor. The name of the sound file to play can be specified either in the Designer or in the Blocks Editor.

 

For supported sound file formats, see <a href="http://developer.android.com/guide/appendix/media-formats.html" target="_blank">Android Supported Media Formats</a>.

This `` Sound `` component is best for short sound files, such as sound effects, while the `` Player `` component is more efficient for longer sounds, such as songs.

You might get an error if you attempt to play a sound immediately after setting the source.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.VIBRATE)


## Methods

### Pause

Pauses playing the sound if it is being played.

[[Method('Sound', 'Pause', False)]]

### Play

Plays the sound specified by the Source property.

[[Method('Sound', 'Play', False)]]

### Resume

Resumes playing the sound after a pause.

[[Method('Sound', 'Resume', False)]]

### Sound Normal

Ringer mode that may be audible and may vibrate.

[[Method('Sound', 'Sound Normal', False)]]

### Sound Silent

Ringer mode that will be silent and will not vibrate.

[[Method('Sound', 'Sound Silent', False)]]

### Sound Vibrate

Ringer mode that will be silent and will vibrate.

[[Method('Sound', 'Sound Vibrate', False)]]

### Stop

Stops playing the sound if it is being played.

[[Method('Sound', 'Stop', False)]]

### Vibrate

Vibrates for the specified number of milliseconds.

[[Method('Sound', 'Vibrate', False, 'millisecs')]]

| Params | []() |
|--------|------|
|millisecs|<span class="chip chip-number">Number</span>|


### Vibrate Pattern

Vibrate with a given pattern

[[Method('Sound', 'Vibrate Pattern', False, 'vibrate', 'delay', 'repeat')]]

| Params | []() |
|--------|------|
|vibrate|<span class="chip chip-number">Number</span>|
|delay|<span class="chip chip-number">Number</span>|
|repeat|<span class="chip chip-boolean">Boolean</span>|


## Properties

### Minimum Interval (ms)

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>500</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The minimum interval, in milliseconds, between sounds. If you play a sound, all further Play() calls will be ignored until the interval has elapsed.

[[PropertyBlockGetterAndSetter('Sound', 'Minimum Interval ms')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The name of the sound file. Only certain formats are supported. See http://developer.android.com/guide/appendix/media-formats.html.

[[PropertyBlockGetterAndSetter('Sound', 'Source')]]