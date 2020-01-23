# Dynamic Space

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|2|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic space in Arrangements.

## Methods

### CreateSpace

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|
    |width|`number`|
    |height|`number`|


Create a new space component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### DeleteSpace

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove a space component with the given id.

### GetHeight

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a space component.

### GetSpaceById

_Block preview not available_

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the space referenced by its id.

### GetWidth

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a space component.

### SetHeight

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a space component.

### SetWidth

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a space component.