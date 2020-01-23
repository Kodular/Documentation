# Dynamic Image

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|2|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic image in Arrangements.

## Methods

### CreateImage

_Block preview not available_

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

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove a image component with the given id.

### GetHeight

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a image component.

### GetImageById

_Block preview not available_

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the image referenced by its id.

### GetWidth

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a image component.

### RotationAngle

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |rotation Angle|`number`|


Specifies the angle of a image component with the given id.

### ScalePictureToFit

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |scale|`boolean`|


Specifies whether a image component with the given id should be resized to match the size of the ImageView.

### SetHeight

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a image component.

### SetWidth

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a image component.

### UpdateImage

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |path|`text`|


Update a image component with the given id.