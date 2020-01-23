# Sound Recorder

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that records audio from the device''s microphone.

## Events

### After Sound Recorded

[[Event('Sound Recorder', 'After Sound Recorded', 'sound')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sound|`text`|


Provides the location of the newly created sound.

### Started Recording

[[Event('Sound Recorder', 'Started Recording')]]

Indicates that the recorder has started, and can be stopped.

### Stopped Recording

[[Event('Sound Recorder', 'Stopped Recording')]]

Indicates that the recorder has stopped, and can be started again.

## Methods

### Pause

_Block preview not available_

Pause recording.

### Start

_Block preview not available_

Starts recording.

### Stop

_Block preview not available_

Stops recording.

## Properties

### Saved Recording

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound Recorder', 'Saved Recording')]]

| Type | Default |
|:----:|:-------:|
|text|/mnt/sdcard/Makeroid/mySound.3gp|

Specifies the path to the file where the recording should be stored. If this property is the empty string, then starting a recording will create a file in an appropriate location. If the property is not the empty string, it should specify a complete path to a file in an existing directory, including a file name with the extension .3gp.