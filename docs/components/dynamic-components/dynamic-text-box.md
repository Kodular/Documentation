# Dynamic Text Box

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to create dynamic textboxes in Arrangements_

## Events

### On Text Changed

[[Event('Dynamic Text Box', 'On Text Changed', 'id text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


Trigger when the text of a Dynamic TextBox changes

## Methods

### CreateTextBox

[[Method('Dynamic Text Box', 'CreateTextBox', false, 'id arrangement')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


Create a Dynamic TextBox

### DeleteTextBox

[[Method('Dynamic Text Box', 'DeleteTextBox', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Remove a textbox component with the given id.

### GetButtonById

[[Method('Dynamic Text Box', 'GetButtonById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Returns the button referenced by its id.

### GetEnabled

[[Method('Dynamic Text Box', 'GetEnabled', true, 'id')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Enabled status of a TextBox

### GetFontSize

[[Method('Dynamic Text Box', 'GetFontSize', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Font Size of a TextBox

### GetHeight

[[Method('Dynamic Text Box', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a TextBox

### GetText

[[Method('Dynamic Text Box', 'GetText', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Text of a TextBox

### GetWidth

[[Method('Dynamic Text Box', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a TextBox

### SetAlignment

[[Method('Dynamic Text Box', 'SetAlignment', false, 'id alignment')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |alignment|`number`|


Update the Text Alignment of a TextBox. 0 = left, 1 = center and 2 = right.

### SetBackgroundColor

[[Method('Dynamic Text Box', 'SetBackgroundColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Background Color of a TextBox

### SetEnabled

[[Method('Dynamic Text Box', 'SetEnabled', false, 'id enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |enabled|`boolean`|


Update the Enabled status of a TextBox

### SetFont

[[Method('Dynamic Text Box', 'SetFont', false, 'id bold italic')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


Update the Font of a TextBox

### SetFontSize

[[Method('Dynamic Text Box', 'SetFontSize', false, 'id size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


Update the Font Size of a TextBox

### SetHeight

[[Method('Dynamic Text Box', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a TextBox

### SetText

[[Method('Dynamic Text Box', 'SetText', false, 'id text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


Update the Text of a TextBox

### SetTextColor

[[Method('Dynamic Text Box', 'SetTextColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Text Color of a TextBox

### SetWidth

[[Method('Dynamic Text Box', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a TextBox