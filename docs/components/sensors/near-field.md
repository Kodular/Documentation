# Near Field

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component to provide NFC capabilities.  For now this component supports the reading and writing of text tags only (if supported by the device)</p><p>In order to read and write text tags, the component must have its <code>ReadMode</code> property set to True or False respectively.</p><p><strong>Note:</strong> This component will only work on Screen1 of any App Inventor app.</p>_

## Events

### Tag Read

[[Event('Near Field', 'Tag Read', 'tagID message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag ID|`text`|
    |message|`text`|


_Indicates that a new tag has been detected.
 Currently this is only a plain text tag, as specified in the
 manifest.  See Compiler.java._

### Tag Written

[[Event('Near Field', 'Tag Written')]]

_Event to detect when a tag was written._

## Properties

### Read Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Near Field', 'Read Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if in read mode, false if in write mode._

### Last Message

:eyes: Read-Only property
[[PropertyBlockGetter('Near Field', 'Last Message')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the content of the most recently received tag._

### Text To Write

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Near Field', 'Text To Write')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the content of the text that's going to be written to the tag._

### Write Type

:eyes: Read-Only property
[[PropertyBlockGetter('Near Field', 'Write Type')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_