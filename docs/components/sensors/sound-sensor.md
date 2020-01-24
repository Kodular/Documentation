# Sound Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

Physical world component that can detect such data as: sound amplitude (measurement of the degree of change [positive or negative] ).

??? example "Permissions"
    * [android.permission.RECORD_AUDIO](https://developer.android.com/reference/android/Manifest.permission.html#RECORD_AUDIO)


## Events

### Sound Changed

Triggered when the sound level has changed

[[Event('Sound Sensor', 'Sound Changed', 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-number">Number</span>|


## Properties

### Listen

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Starts or Stops listening to sound changes

[[PropertyBlockGetterAndSetter('Sound Sensor', 'Listen')]]

### Max Sound Level

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>100</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the max sound level.

[[PropertyBlockGetterAndSetter('Sound Sensor', 'Max Sound Level')]]

### Amplitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the real sound amplitude which can be between 0 to 32768.

[[PropertyBlockGetter('Sound Sensor', 'Amplitude')]]

### Sound Level

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the sound level.

[[PropertyBlockGetter('Sound Sensor', 'Sound Level')]]