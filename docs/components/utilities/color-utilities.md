# Color Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that performs operations like conversion between formats, lightening, and darkening on color data.

## Methods

### Convert Hex To Int

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |hex Color|`text`|


Convert a hex color to a integer color. The result is returned as integer.

### Convert Int To Hex

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|


Convert a integer color to a hex color. The result is returned as string.

### Get Luminance

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|


Returns the luminance of a color as a float between 0.0 and 1.0. The result is returned as double.

### Is Dark Color

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|


Returns true if the color is dark, else it returns false, means the color is light. The result is returned as boolean.

### Set Alpha Value

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |color|`number`|
    |alpha|`number`|


Set a alpha value to a color. The result is returned as integer.