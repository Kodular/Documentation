# Checkbox

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|6|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_Checkbox that raises an event when the user clicks on it. There are many properties affecting its appearance that can be set in the Designer or Blocks Editor._

## Events

### Changed

[[Event('Checkbox', 'Changed')]]

_Default Changed event handler._

### Click

[[Event('Checkbox', 'Click')]]

_Indicates a user has clicked on the checkbox._

### Got Focus

[[Event('Checkbox', 'Got Focus')]]

_Default GotFocus event handler._

### Lost Focus

[[Event('Checkbox', 'Lost Focus')]]

_Default LostFocus event handler._

## Methods

### SetShadow

[[Method('Checkbox', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


_Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

_Returns the checkbox's background color as an alpha-red-green-blue
 integer._

### Checkbox Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Checkbox Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Change the checkbox component color._

### Checked

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns true if the checkbox is checked._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the checkbox is active and clickable._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns true if the checkbox's text should be bold.
 If bold has been requested, this property will return true, even if the
 font does not support bold._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns true if the checkbox's text should be italic.
 If italic has been requested, this property will return true, even if the
 font does not support italic._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_Returns the checkbox's text's font size, measured in sp(scale-independent pixels)._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Returns the checkbox's text's font face as default, serif, sans
 serif, or monospace._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Text')]]

| Type |
|:----:|
|text|

_Returns the text displayed by the checkbox._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Returns the checkbox's text color as an alpha-red-green-blue
 integer._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._