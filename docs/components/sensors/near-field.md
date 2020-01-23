# Near Field

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component to provide NFC capabilities. For now this component supports the reading and writing of text tags only (if supported by the device)

In order to read and write text tags, the component must have its `` ReadMode `` property set to True or False respectively.

__Note:__ This component will only work on Screen1 of any App Inventor app.

## Events

### Tag Read

[[Event('Near Field', 'Tag Read', 'tagID', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tag ID|`text`|
    |message|`text`|


Indicates that a new tag has been detected
Currently this is only a plain text tag, as specified in themanifest. See Compiler.java.

### Tag Written

[[Event('Near Field', 'Tag Written')]]

Event to detect when a tag was written.

## Properties

### Read Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Near Field', 'Read Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if in read mode, false if in write mode.

### Last Message

:eyes: Read-Only property
[[PropertyBlockGetter('Near Field', 'Last Message')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the content of the most recently received tag.

### Text To Write

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Near Field', 'Text To Write')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the content of the text that's going to be written to the tag.

### Write Type

:eyes: Read-Only property
[[PropertyBlockGetter('Near Field', 'Write Type')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_