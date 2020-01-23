# Sound Recorder

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that records audio from the device''s microphone.

## Events

### After Sound Recorded

[[Event('Sound Recorder', 'After Sound Recorded', 'sound')]]

| Params | []() |
|--------|------|
|sound|Text|


Provides the location of the newly created sound.

### Started Recording

[[Event('Sound Recorder', 'Started Recording')]]

Indicates that the recorder has started, and can be stopped.

### Stopped Recording

[[Event('Sound Recorder', 'Stopped Recording')]]

Indicates that the recorder has stopped, and can be started again.

## Methods

### Pause

[[Method('Sound Recorder', 'Pause', False)]]

Pause recording.

### Start

[[Method('Sound Recorder', 'Start', False)]]

Starts recording.

### Stop

[[Method('Sound Recorder', 'Stop', False)]]

Stops recording.

## Properties

### Saved Recording

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>/mnt/sdcard/Makeroid/mySound.3gp</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the path to the file where the recording should be stored. If this property is the empty string, then starting a recording will create a file in an appropriate location. If the property is not the empty string, it should specify a complete path to a file in an existing directory, including a file name with the extension .3gp.

[[PropertyBlockGetterAndSetter('Sound Recorder', 'Saved Recording')]]