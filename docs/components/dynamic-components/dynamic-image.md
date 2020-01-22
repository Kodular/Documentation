# Dynamic Image

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to create dynamic image in Arrangements._

## Methods

### CreateImage

[[Method('Dynamic Image', 'CreateImage', false, 'id arrangement path width height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|
    |path|`text`|
    |width|`number`|
    |height|`number`|


Create a new image component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### DeleteImage

[[Method('Dynamic Image', 'DeleteImage', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Remove a image component with the given id.

### GetHeight

[[Method('Dynamic Image', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a image component.

### GetImageById

[[Method('Dynamic Image', 'GetImageById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Returns the image referenced by its id.

### GetWidth

[[Method('Dynamic Image', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a image component.

### RotationAngle

[[Method('Dynamic Image', 'RotationAngle', false, 'id rotationAngle')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |rotation Angle|`number`|


Specifies the angle of a image component with the given id.

### ScalePictureToFit

[[Method('Dynamic Image', 'ScalePictureToFit', false, 'id scale')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |scale|`boolean`|


Specifies whether a image component with the given id should be resized to match the size of the ImageView.

### SetHeight

[[Method('Dynamic Image', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a image component.

### SetWidth

[[Method('Dynamic Image', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a image component.

### UpdateImage

[[Method('Dynamic Image', 'UpdateImage', false, 'id path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |path|`text`|


Update a image component with the given id.