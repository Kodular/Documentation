# Sound Recorder

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that records audio from the device''s microphone.

??? example "Permissions"
    * [android.permission.RECORD_AUDIO](https://developer.android.com/reference/android/Manifest.permission.html#RECORD_AUDIO)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### After Sound Recorded

Provides the location of the newly created sound.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22After%20Sound%20Recorded%22,%20%22param%22:%20%5B%22sound%22%5D%7D"></div>

| Params | []() |
|--------|------|
|sound|<span class="chip chip-text">Text</span>|

### Started Recording

Indicates that the recorder has started, and can be stopped.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Started%20Recording%22,%20%22param%22:%20%5B%5D%7D"></div>

### Stopped Recording

Indicates that the recorder has stopped, and can be started again.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Stopped%20Recording%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Pause

Pause recording.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start

Starts recording.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Start%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop

Stops recording.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Saved Recording

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>/mnt/sdcard/Makeroid/mySound.3gp</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the path to the file where the recording should be stored. If this property is the empty string, then starting a recording will create a file in an appropriate location. If the property is not the empty string, it should specify a complete path to a file in an existing directory, including a file name with the extension .3gp.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Saved%20Recording%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sound%20Recorder%22,%20%22name%22:%20%22Saved%20Recording%22,%20%22getter%22:%20false%7D"></div>
