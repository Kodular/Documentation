# Dynamic Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic buttons in Arrangements

## Events

### Button Click

[[Event('Dynamic Button', 'Button Click', 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Trigger when a Dynamic Button is clicked.

### Button Long Click

[[Event('Dynamic Button', 'Button Long Click', 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Trigger when a Dynamic Button is long clicked.

## Methods

### CreateButton

[[Method('Dynamic Button', 'CreateButton', false, 'id arrangement')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


Create a Dynamic Button.

### DeleteButton

:warning: ==**Deprecated**==

[[Method('Dynamic Button', 'DeleteButton', false, 'id arrangement')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


This block is DEPRECATED! Please use instead the 'Delete Button' block without arrangement parameter.

### DeleteButtonNew

[[Method('Dynamic Button', 'DeleteButtonNew', false, 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Delete a Dynamic Button.

### GetButtonById

[[Method('Dynamic Button', 'GetButtonById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the button referenced by its id.

### GetEnabled

[[Method('Dynamic Button', 'GetEnabled', true, 'id')]]

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Enabled status of a button.

### GetFontSize

[[Method('Dynamic Button', 'GetFontSize', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Font Size of a button.

### GetHeight

[[Method('Dynamic Button', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a button.

### GetText

[[Method('Dynamic Button', 'GetText', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Text of a button.

### GetWidth

[[Method('Dynamic Button', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a button.

### SetBackgroundColor

[[Method('Dynamic Button', 'SetBackgroundColor', false, 'id color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Background Color of a button.

### SetEnabled

[[Method('Dynamic Button', 'SetEnabled', false, 'id enabled')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |enabled|`boolean`|


Update the Enabled status of a button.

### SetFont

[[Method('Dynamic Button', 'SetFont', false, 'id bold italic')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


Update the Font of a button.

### SetFontSize

[[Method('Dynamic Button', 'SetFontSize', false, 'id size')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


Update the Font Size of a button.

### SetHeight

[[Method('Dynamic Button', 'SetHeight', false, 'id height')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a button.

### SetText

[[Method('Dynamic Button', 'SetText', false, 'id text')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


Update the Text of a button.

### SetTextColor

[[Method('Dynamic Button', 'SetTextColor', false, 'id color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Text Color of a button.

### SetWidth

[[Method('Dynamic Button', 'SetWidth', false, 'id width')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a button.