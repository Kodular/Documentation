# State Progress Bar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that indicates the progress of an operation by highlighting the steps involved in that operation._

## Events

### Error Occurred

[[Event('State Progress Bar', 'Error Occurred', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_Event invoked when a error occurred._

### State Item Click

[[Event('State Progress Bar', 'State Item Click', 'stateNumber isCurrentState')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |state Number|`number`|
    |is Current State|`boolean`|


_Event invoked when a state item was clicked._

## Properties

### Animation Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Animation Duration')]]

| Type | Default |
|:----:|:-------:|
|number|250|

_Set the animation duration in milliseconds. Example:  use 1000 for 1 second._

### Animate Between States

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Animate Between States')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true the states will use a animation when they changed._

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Change the background color._

### Current State Description Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Current State Description Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

_Change the current state description color._

### Current State Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Current State Number')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set the current state number._

### Description Lines Spacing

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Description Lines Spacing')]]

| Type | Default |
|:----:|:-------:|
|number|5.0|

_Set the description lines spacing._

### Description Top Space Incrementer

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Description Top Space Incrementer')]]

| Type | Default |
|:----:|:-------:|
|number|10.0|

_Set the description top space incrementer._

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Elements From String')]]

| Type | Default |
|:----:|:-------:|
|text|Item 1, Item 2, Item 3, Item 4, Item 5|

_The State Progress Bar elements specified as a string with the items separated by commas such as: Item 1, Item 2, Item 3, Item 4, Item 5. Each word before the comma will be an element in the list. You can add maximum 5 items._

### Foreground Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Foreground Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

_Change the foreground color._

### Justify Multiline Description

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Justify Multiline Description')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true justify multiline description is enabled._

### Max Description Line

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Max Description Line')]]

| Type | Default |
|:----:|:-------:|
|number|2|

_Set the maximum description line._

### Max State Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Max State Number')]]

| Type | Default |
|:----:|:-------:|
|number|5|

_Set the maximum state number._

### State Description Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Change the state description color._

### State Description Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Size')]]

| Type | Default |
|:----:|:-------:|
|number|18.0|

_Set the state description size._

### State Description Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### State Description Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font for state description typeface._

### State Line Thickness

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Line Thickness')]]

| Type | Default |
|:----:|:-------:|
|number|10.0|

_Set the state line thickness._

### State Number Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Change the state number background color._

### State Number Foreground Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Foreground Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Change the state number foreground color._

### State Number Is Descending

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Is Descending')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set to true the state number is in descending order._

### State Number Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|20.0|

_Set the state number text size._

### State Number Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### State Number Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font for state number typeface._

### State Progress Bar Height

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Progress Bar Height')]]

| Type | Default |
|:----:|:-------:|
|number|40.0|

_Set the state progress bar height._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### All States Completed

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'All States Completed')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_If set to true all states are completed._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._