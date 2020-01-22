# Near Field

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component to provide NFC capabilities.  For now this component supports the reading and writing of text tags only (if supported by the device)</p><p>In order to read and write text tags, the component must have its <code>ReadMode</code> property set to True or False respectively.</p><p><strong>Note:</strong> This component will only work on Screen1 of any App Inventor app.</p>_

## Properties

### Read Mode

<small>Available as Common Property</small>

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