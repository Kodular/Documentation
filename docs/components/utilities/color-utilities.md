# Color Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that performs operations like conversion between formats, lightening, and darkening on color data._

## Methods

### ConvertHexToInt

[[Method('Color Utilities', 'ConvertHexToInt', true, 'hexColor')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |hex Color|`text`|


_Convert a hex color to a integer color. The result is returned as integer._

### ConvertIntToHex

[[Method('Color Utilities', 'ConvertIntToHex', true, 'color')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |color|`number`|


_Convert a integer color to a hex color. The result is returned as string._

### GetLuminance

[[Method('Color Utilities', 'GetLuminance', true, 'color')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |color|`number`|


_Returns the luminance of a color as a float between 0.0 and 1.0. The result is returned as double._

### IsDarkColor

[[Method('Color Utilities', 'IsDarkColor', true, 'color')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |color|`number`|


_Returns true if the color is dark, else it returns false, means the color is light. The result is returned as boolean._

### SetAlphaValue

[[Method('Color Utilities', 'SetAlphaValue', true, 'color alpha')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |color|`number`|
    |alpha|`number`|


_Set a alpha value to a color. The result is returned as integer._