# State Progress Bar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|1|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that indicates the progress of an operation by highlighting the steps involved in that operation.

## Events

### Error Occurred

[[Event('State Progress Bar', 'Error Occurred', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Message|`text`|


Event invoked when a error occurred.

### State Item Click

[[Event('State Progress Bar', 'State Item Click', 'stateNumber', 'isCurrentState')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |state Number|`number`|
    |is Current State|`boolean`|


Event invoked when a state item was clicked.

## Properties

### Animation Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Animation Duration')]]

| Type | Default |
|:----:|:-------:|
|number|250|

Set the animation duration in milliseconds. Example: use 1000 for 1 second.

### Animate Between States

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Animate Between States')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true the states will use a animation when they changed.

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Change the background color.

### Current State Description Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Current State Description Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

Change the current state description color.

### Current State Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Current State Number')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the current state number.

### Description Lines Spacing

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Description Lines Spacing')]]

| Type | Default |
|:----:|:-------:|
|number|5.0|

Set the description lines spacing.

### Description Top Space Incrementer

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Description Top Space Incrementer')]]

| Type | Default |
|:----:|:-------:|
|number|10.0|

Set the description top space incrementer.

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Elements From String')]]

| Type | Default |
|:----:|:-------:|
|text|Item 1, Item 2, Item 3, Item 4, Item 5|

The State Progress Bar elements specified as a string with the items separated by commas such as: Item 1, Item 2, Item 3, Item 4, Item 5. Each word before the comma will be an element in the list. You can add maximum 5 items.

### Foreground Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Foreground Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

Change the foreground color.

### Justify Multiline Description

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Justify Multiline Description')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true justify multiline description is enabled.

### Max Description Line

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Max Description Line')]]

| Type | Default |
|:----:|:-------:|
|number|2|

Set the maximum description line.

### Max State Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Max State Number')]]

| Type | Default |
|:----:|:-------:|
|number|5|

Set the maximum state number.

### State Description Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Change the state description color.

### State Description Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Size')]]

| Type | Default |
|:----:|:-------:|
|number|18.0|

Set the state description size.

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

Set a custom font for state description typeface.

### State Line Thickness

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Line Thickness')]]

| Type | Default |
|:----:|:-------:|
|number|10.0|

Set the state line thickness.

### State Number Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Change the state number background color.

### State Number Foreground Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Foreground Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Change the state number foreground color.

### State Number Is Descending

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Is Descending')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true the state number is in descending order.

### State Number Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|20.0|

Set the state number text size.

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

Set a custom font for state number typeface.

### State Progress Bar Height

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Progress Bar Height')]]

| Type | Default |
|:----:|:-------:|
|number|40.0|

Set the state progress bar height.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### All States Completed

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'All States Completed')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

If set to true all states are completed.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('State Progress Bar', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.