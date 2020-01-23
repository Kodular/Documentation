# Dynamic Text Box

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|3|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic textboxes in Arrangements

## Events

### On Text Changed

[[Event('Dynamic Text Box', 'On Text Changed', 'id', 'text')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


Trigger when the text of a Dynamic TextBox changes

## Methods

### CreateTextBox

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


Create a Dynamic TextBox

### DeleteTextBox

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove a textbox component with the given id.

### GetButtonById

_Block preview not available_

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the button referenced by its id.

### GetEnabled

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Enabled status of a TextBox

### GetFontSize

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Font Size of a TextBox

### GetHeight

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a TextBox

### GetText

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Text of a TextBox

### GetWidth

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a TextBox

### SetAlignment

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |alignment|`number`|


Update the Text Alignment of a TextBox. 0 = left, 1 = center and 2 = right.

### SetBackgroundColor

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Background Color of a TextBox

### SetEnabled

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |enabled|`boolean`|


Update the Enabled status of a TextBox

### SetFont

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


Update the Font of a TextBox

### SetFontSize

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


Update the Font Size of a TextBox

### SetHeight

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a TextBox

### SetText

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


Update the Text of a TextBox

### SetTextColor

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Text Color of a TextBox

### SetWidth

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a TextBox