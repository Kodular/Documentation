# Dynamic Label

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|3|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic labels in Arrangements

## Methods

### CreateLabel

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


Create a Dynamic Label

### DeleteLabel

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove a label component with the given id.

### GetFontSize

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Font Size of a Label

### GetHeight

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a Label

### GetLabelById

_Block preview not available_

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the label referenced by its id.

### GetText

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Text of a Label

### GetWidth

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a Label

### SetAlignment

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |alignment|`number`|


Update the Text Alignment of a Label. 0 = left, 1 = center and 2 = right.

### SetBackgroundColor

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Background Color of a Label

### SetFont

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


Update the Font of a Label

### SetFontSize

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


Update the Font Size of a Label

### SetHeight

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a Label

### SetText

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|
    |html|`boolean`|


Update the Text of a Label

### SetTextColor

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Text Color of a Label

### SetWidth

_Block preview not available_

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