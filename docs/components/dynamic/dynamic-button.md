# Dynamic Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|4|API 19 | Android 4.4 - 4.4.4 KitKat|

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

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


Create a Dynamic Button.

### DeleteButton

:warning: ==**Deprecated**==

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


This block is DEPRECATED! Please use instead the 'Delete Button' block without arrangement parameter.

### DeleteButtonNew

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Delete a Dynamic Button.

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


Get the Enabled status of a button.

### GetFontSize

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Font Size of a button.

### GetHeight

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Height of a button.

### GetText

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Text of a button.

### GetWidth

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the Width of a button.

### SetBackgroundColor

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Background Color of a button.

### SetEnabled

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |enabled|`boolean`|


Update the Enabled status of a button.

### SetFont

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


Update the Font of a button.

### SetFontSize

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


Update the Font Size of a button.

### SetHeight

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Update the Height of a button.

### SetText

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


Update the Text of a button.

### SetTextColor

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Update the Text Color of a button.

### SetWidth

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Update the Width of a button.