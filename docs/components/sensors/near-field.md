# Near Field

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

Non-visible component to provide NFC capabilities. For now this component supports the reading and writing of text tags only (if supported by the device)

In order to read and write text tags, the component must have its `` ReadMode `` property set to True or False respectively.

__Note:__ This component will only work on Screen1 of any App Inventor app.

??? example "Permissions"
    * [android.permission.NFC](https://developer.android.com/reference/android/Manifest.permission.html#NFC)

## Events

### Tag Read

Indicates that a new tag has been detected
Currently this is only a plain text tag, as specified in themanifest. See Compiler.java.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Tag%20Read%22,%20%22param%22:%20%5B%22tag%20ID%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag ID|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Tag Written

Event to detect when a tag was written.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Tag%20Written%22,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Read Mode

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true if in read mode, false if in write mode.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Read%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Read%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Last Message

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the content of the most recently received tag.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Last%20Message%22,%20%22getter%22:%20true%7D"></div>

### Text To Write

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the content of the text that's going to be written to the tag.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Text%20To%20Write%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Text%20To%20Write%22,%20%22getter%22:%20false%7D"></div>

### Write Type

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Near%20Field%22,%20%22name%22:%20%22Write%20Type%22,%20%22getter%22:%20true%7D"></div>
