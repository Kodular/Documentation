# Dynamic Label

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to create dynamic labels in Arrangements_

## Methods

### CreateLabel

[[Method('Dynamic Label', 'CreateLabel', false, 'id arrangement')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


_Create a Dynamic Label_

### DeleteLabel

[[Method('Dynamic Label', 'DeleteLabel', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Remove a label component with the given id._

### GetFontSize

[[Method('Dynamic Label', 'GetFontSize', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Font Size of a Label_

### GetHeight

[[Method('Dynamic Label', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Height of a Label_

### GetLabelById

[[Method('Dynamic Label', 'GetLabelById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Returns the label referenced by its id._

### GetText

[[Method('Dynamic Label', 'GetText', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Text of a Label_

### GetWidth

[[Method('Dynamic Label', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Width of a Label_

### SetAlignment

[[Method('Dynamic Label', 'SetAlignment', false, 'id alignment')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |alignment|`number`|


_Update the Text Alignment of a Label. 0 = left, 1 = center and 2 = right._

### SetBackgroundColor

[[Method('Dynamic Label', 'SetBackgroundColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


_Update the Background Color of a Label_

### SetFont

[[Method('Dynamic Label', 'SetFont', false, 'id bold italic')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


_Update the Font of a Label_

### SetFontSize

[[Method('Dynamic Label', 'SetFontSize', false, 'id size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


_Update the Font Size of a Label_

### SetHeight

[[Method('Dynamic Label', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


_Update the Height of a Label_

### SetText

[[Method('Dynamic Label', 'SetText', false, 'id text html')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|
    |html|`boolean`|


_Update the Text of a Label_

### SetTextColor

[[Method('Dynamic Label', 'SetTextColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


_Update the Text Color of a Label_

### SetWidth

[[Method('Dynamic Label', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


_Update the Width of a Label_

## Properties

### Alignment Center

:eyes: Read-Only property
[[PropertyBlockGetter('Dynamic Label', 'Alignment Center')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Center alignment (1)_

### Alignment Left

:eyes: Read-Only property
[[PropertyBlockGetter('Dynamic Label', 'Alignment Left')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Left alignment (0)_

### Alignment Right

:eyes: Read-Only property
[[PropertyBlockGetter('Dynamic Label', 'Alignment Right')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Right alignment (2)_