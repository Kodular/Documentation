# Sound Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

Physical world component that can detect such data as: sound amplitude (measurement of the degree of change [positive or negative] ).

??? example "Permissions"
    * [android.permission.RECORD_AUDIO](https://developer.android.com/reference/android/Manifest.permission.html#RECORD_AUDIO)

## Events

### Sound Changed

Triggered when the sound level has changed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Sound%20Changed%22,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-number">Number</span>|

## Properties

### Listen

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Starts or Stops listening to sound changes

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Listen%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Listen%22,%20%22getter%22:%20false%7D"></div>

### Max Sound Level

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>100</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the max sound level.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Max%20Sound%20Level%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Max%20Sound%20Level%22,%20%22getter%22:%20false%7D"></div>

### Amplitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the real sound amplitude which can be between 0 to 32768.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Amplitude%22,%20%22getter%22:%20true%7D"></div>

### Sound Level

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the sound level.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Sensor%22,%20%22name%22:%20%22Sound%20Level%22,%20%22getter%22:%20true%7D"></div>
