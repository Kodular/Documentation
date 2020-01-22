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


Create a Dynamic Label

### DeleteLabel

[[Method('Dynamic Label', 'DeleteLabel', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Remove a label component with the given id.

### GetFontSize

[[Method('Dynamic Label', 'GetFontSize', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Font Size of a Label

### GetHeight

[[Method('Dynamic Label', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a Label

### GetLabelById

[[Method('Dynamic Label', 'GetLabelById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Returns the label referenced by its id.

### GetText

[[Method('Dynamic Label', 'GetText', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Text of a Label

### GetWidth

[[Method('Dynamic Label', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a Label

### SetAlignment

[[Method('Dynamic Label', 'SetAlignment', false, 'id alignment')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |alignment|`number`|


Update the Text Alignment of a Label. 0 = left, 1 = center and 2 = right.

### SetBackgroundColor

[[Method('Dynamic Label', 'SetBackgroundColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Background Color of a Label

### SetFont

[[Method('Dynamic Label', 'SetFont', false, 'id bold italic')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


Update the Font of a Label

### SetFontSize

[[Method('Dynamic Label', 'SetFontSize', false, 'id size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


Update the Font Size of a Label

### SetHeight

[[Method('Dynamic Label', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a Label

### SetText

[[Method('Dynamic Label', 'SetText', false, 'id text html')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|
    |html|`boolean`|


Update the Text of a Label

### SetTextColor

[[Method('Dynamic Label', 'SetTextColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Text Color of a Label

### SetWidth

[[Method('Dynamic Label', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a Label

## Properties

### Alignment Center



:eyes: Read-Only property
[[PropertyBlockGetter('Dynamic Label', 'Alignment Center')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Center alignment (1)

### Alignment Left



:eyes: Read-Only property
[[PropertyBlockGetter('Dynamic Label', 'Alignment Left')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Left alignment (0)

### Alignment Right



:eyes: Read-Only property
[[PropertyBlockGetter('Dynamic Label', 'Alignment Right')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Right alignment (2)