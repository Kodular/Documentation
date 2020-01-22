# Dynamic Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to create dynamic buttons in Arrangements_

## Events

### Button Click

[[Event('Dynamic Button', 'Button Click', 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Trigger when a Dynamic Button is clicked._

### Button Long Click

[[Event('Dynamic Button', 'Button Long Click', 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Trigger when a Dynamic Button is long clicked._

## Methods

### CreateButton

[[Method('Dynamic Button', 'CreateButton', false, 'id arrangement')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


_Create a Dynamic Button._

### DeleteButton

:warning: ==**Deprecated**==

[[Method('Dynamic Button', 'DeleteButton', false, 'id arrangement')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


_This block is DEPRECATED! Please use instead the 'Delete Button' block without arrangement parameter._

### DeleteButtonNew

[[Method('Dynamic Button', 'DeleteButtonNew', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Delete a Dynamic Button._

### GetButtonById

[[Method('Dynamic Button', 'GetButtonById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Returns the button referenced by its id._

### GetEnabled

[[Method('Dynamic Button', 'GetEnabled', true, 'id')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Enabled status of a button._

### GetFontSize

[[Method('Dynamic Button', 'GetFontSize', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Font Size of a button._

### GetHeight

[[Method('Dynamic Button', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Height of a button._

### GetText

[[Method('Dynamic Button', 'GetText', true, 'id')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Text of a button._

### GetWidth

[[Method('Dynamic Button', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Get the Width of a button._

### SetBackgroundColor

[[Method('Dynamic Button', 'SetBackgroundColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


_Update the Background Color of a button._

### SetEnabled

[[Method('Dynamic Button', 'SetEnabled', false, 'id enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |enabled|`boolean`|


_Update the Enabled status of a button._

### SetFont

[[Method('Dynamic Button', 'SetFont', false, 'id bold italic')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |bold|`boolean`|
    |italic|`boolean`|


_Update the Font of a button._

### SetFontSize

[[Method('Dynamic Button', 'SetFontSize', false, 'id size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |size|`number`|


_Update the Font Size of a button._

### SetHeight

[[Method('Dynamic Button', 'SetHeight', false, 'id height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


_Update the Height of a button._

### SetText

[[Method('Dynamic Button', 'SetText', false, 'id text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |text|`text`|


_Update the Text of a button._

### SetTextColor

[[Method('Dynamic Button', 'SetTextColor', false, 'id color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


_Update the Text Color of a button._

### SetWidth

[[Method('Dynamic Button', 'SetWidth', false, 'id width')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


_Update the Width of a button._