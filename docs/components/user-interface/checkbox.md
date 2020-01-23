# Checkbox

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|6|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

Checkbox that raises an event when the user clicks on it. There are many properties affecting its appearance that can be set in the Designer or Blocks Editor.

## Events

### Changed

[[Event('Checkbox', 'Changed')]]

Default Changed event handler.

### Click

[[Event('Checkbox', 'Click')]]

Indicates a user has clicked on the checkbox.

### Got Focus

[[Event('Checkbox', 'Got Focus')]]

Default GotFocus event handler.

### Lost Focus

[[Event('Checkbox', 'Lost Focus')]]

Default LostFocus event handler.

## Methods

### Set Shadow

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

Returns the checkbox's background color as an alpha-red-green-blueinteger.

### Checkbox Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Checkbox Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Change the checkbox component color.

### Checked

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if the checkbox is checked.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the checkbox is active and clickable.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if the checkbox's text should be bold
If bold has been requested, this property will return true, even if thefont does not support bold.

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if the checkbox's text should be italic
If italic has been requested, this property will return true, even if thefont does not support italic.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Returns the checkbox's text's font size, measured in sp(scale-independent pixels).

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Returns the checkbox's text's font face as default, serif, sansserif, or monospace.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Text')]]

| Type |
|:----:|
|text|

Returns the text displayed by the checkbox.

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Returns the checkbox's text color as an alpha-red-green-blueinteger.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Checkbox', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.