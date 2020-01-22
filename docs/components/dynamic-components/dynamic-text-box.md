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


_Trigger when the text of a Dynamic TextBox changes_

## Methods

### CreateTextBox

[[Method('Dynamic Text Box', 'CreateTextBox', false, 'id arrangement')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


_Create a Dynamic TextBox_

### DeleteTextBox

[[Method('Dynamic Text Box', 'DeleteTextBox', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Remove a textbox component with the given id._

### GetButtonById

[[Method('Dynamic Text Box', 'GetButtonById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Returns the button referenced by its id._

### GetEnabled

[[Method('Dynamic Text Box', 'GetEnabled', true, 'id')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Enabled status of a TextBox_

### GetFontSize

[[Method('Dynamic Text Box', 'GetFontSize', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Font Size of a TextBox_

### GetHeight

[[Method('Dynamic Text Box', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Height of a TextBox_

### GetText

[[Method('Dynamic Text Box', 'GetText', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Text of a TextBox_

### GetWidth

[[Method('Dynamic Text Box', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Width of a TextBox_

### SetAlignment

[[Method('Dynamic Text Box', 'SetAlignment', false, 'id alignment')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |alignment|`number`|


_Update the Text Alignment of a TextBox. 0 = left, 1 = center and 2 = right._

### SetBackgroundColor

[[Method('Dynamic Text Box', 'SetBackgroundColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


_Update the Background Color of a TextBox_

### SetEnabled

[[Method('Dynamic Text Box', 'SetEnabled', false, 'id enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |enabled|`boolean`|


_Update the Enabled status of a TextBox_

### SetFont

[[Method('Dynamic Text Box', 'SetFont', false, 'id bold italic')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


_Update the Font of a TextBox_

### SetFontSize

[[Method('Dynamic Text Box', 'SetFontSize', false, 'id size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


_Update the Font Size of a TextBox_

### SetHeight

[[Method('Dynamic Text Box', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


_Update the Height of a TextBox_

### SetText

[[Method('Dynamic Text Box', 'SetText', false, 'id text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


_Update the Text of a TextBox_

### SetTextColor

[[Method('Dynamic Text Box', 'SetTextColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


_Update the Text Color of a TextBox_

### SetWidth

[[Method('Dynamic Text Box', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


_Update the Width of a TextBox_