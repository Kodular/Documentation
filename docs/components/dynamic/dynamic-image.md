# Dynamic Image

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic image in Arrangements.

## Methods

### Create Image

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

### Delete Image

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove a image component with the given id.

### Get Height

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a image component.

### Get Image By Id

_Block preview not available_

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the image referenced by its id.

### Get Width

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a image component.

### Rotation Angle

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |rotation Angle|`number`|


Specifies the angle of a image component with the given id.

### Scale Picture To Fit

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |scale|`boolean`|


Specifies whether a image component with the given id should be resized to match the size of the ImageView.

### Set Height

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a image component.

### Set Width

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a image component.

### Update Image

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |path|`text`|


Update a image component with the given id.