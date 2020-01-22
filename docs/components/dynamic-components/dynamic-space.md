# Dynamic Space

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to create dynamic space in Arrangements._

## Methods

### CreateSpace

[[Method('Dynamic Space', 'CreateSpace', false, 'id arrangement width height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|
    |width|`number`|
    |height|`number`|


_Create a new space component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent._

### DeleteSpace

[[Method('Dynamic Space', 'DeleteSpace', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Remove a space component with the given id._

### GetHeight

[[Method('Dynamic Space', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Height of a space component._

### GetSpaceById

[[Method('Dynamic Space', 'GetSpaceById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Returns the space referenced by its id._

### GetWidth

[[Method('Dynamic Space', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Width of a space component._

### SetHeight

[[Method('Dynamic Space', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


_Update the Height of a space component._

### SetWidth

[[Method('Dynamic Space', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


_Update the Width of a space component._