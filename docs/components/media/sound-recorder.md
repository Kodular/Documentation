# Sound Recorder

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that records audio from the device''s microphone._

## Events

### After Sound Recorded

[[Event('Sound Recorder', 'After Sound Recorded', 'sound')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sound|`text`|


_Provides the location of the newly created sound._

### Started Recording

[[Event('Sound Recorder', 'Started Recording')]]

_Indicates that the recorder has started, and can be stopped._

### Stopped Recording

[[Event('Sound Recorder', 'Stopped Recording')]]

_Indicates that the recorder has stopped, and can be started again._

## Methods

### Pause

[[Method('Sound Recorder', 'Pause', false)]]

_Pause recording._

### Start

[[Method('Sound Recorder', 'Start', false)]]

_Starts recording._

### Stop

[[Method('Sound Recorder', 'Stop', false)]]

_Stops recording._

## Properties

### Saved Recording

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound Recorder', 'Saved Recording')]]

| Type | Default |
|:----:|:-------:|
|text|/mnt/sdcard/Makeroid/mySound.3gp|

_Specifies the path to the file where the recording should be stored. If this property is the empty string, then starting a recording will create a file in an appropriate location.  If the property is not the empty string, it should specify a complete path to a file in an existing directory, including a file name with the extension .3gp._