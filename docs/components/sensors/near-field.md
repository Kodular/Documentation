# Near Field

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component to provide NFC capabilities. For now this component supports the reading and writing of text tags only (if supported by the device)

In order to read and write text tags, the component must have its `` ReadMode `` property set to True or False respectively.

__Note:__ This component will only work on Screen1 of any App Inventor app.

## Events

### Tag Read

Indicates that a new tag has been detected
Currently this is only a plain text tag, as specified in themanifest. See Compiler.java.

[[Event('Near Field', 'Tag Read', 'tagID', 'message')]]

| Params | []() |
|--------|------|
|tag ID|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Tag Written

Event to detect when a tag was written.

[[Event('Near Field', 'Tag Written')]]

## Properties

### Read Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true if in read mode, false if in write mode.

[[PropertyBlockGetterAndSetter('Near Field', 'Read Mode')]]

### Last Message

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the content of the most recently received tag.

[[PropertyBlockGetter('Near Field', 'Last Message')]]

### Text To Write

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Returns the content of the text that's going to be written to the tag.

[[PropertyBlockGetterAndSetter('Near Field', 'Text To Write')]]

### Write Type

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Near Field', 'Write Type')]]