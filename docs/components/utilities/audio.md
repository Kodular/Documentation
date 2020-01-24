# Audio

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that manages the device''s audio settings.

??? example "Permissions"
    * [android.permission.MODIFY_AUDIO_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#MODIFY_AUDIO_SETTINGS)

## Events

### Error Occurred

Event triggered when a error occurred.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22params%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


## Methods

### Is Sound Effects Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true whether a component should have sound effects enabled for events such as clicking and touching.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Is%20Sound%20Effects%20Enabled%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Ringer Mode Normal

Sets the ringer mode to "normal".

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Ringer%20Mode%20Normal%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Ringer Mode Silent

Sets the ringer mode to "silent".

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Ringer%20Mode%20Silent%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Ringer Mode Vibrate

Sets the ringer mode to "vibrate".

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Ringer%20Mode%20Vibrate%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Sound Effects Enabled

Set whether a component should have sound effects enabled for events such as clicking and touching.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Sound%20Effects%20Enabled%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22enabled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|


## Properties

### Show UI

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set to true you will see system ui.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Show%20UI%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Show%20UI%22,%20%22getter%22:%20false%7D"></div>


### Get Audio Mode

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the current audio mode as string. Possible returns are "NORMAL", "RINGTONE", "CALL" or "COMMUNICATION".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Get%20Audio%20Mode%22,%20%22getter%22:%20true%7D"></div>


### Volume Alarm

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the current volume index in percent.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Volume%20Alarm%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Volume%20Alarm%22,%20%22getter%22:%20false%7D"></div>


### Volume Music

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the current volume index in percent.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Volume%20Music%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Volume%20Music%22,%20%22getter%22:%20false%7D"></div>


### Volume Ring

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the current volume index in percent.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Volume%20Ring%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Audio%22,%20%22name%22:%20%22Volume%20Ring%22,%20%22getter%22:%20false%7D"></div>
