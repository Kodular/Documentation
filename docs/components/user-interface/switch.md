# Switch

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that lets the user toggle between two states — on and off._

## Events

### Clicked

[[Event('Switch', 'Clicked', 'isChecked')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |is Checked|`boolean`|


_Event invoked when a switch has been clicked. Returns true or false if the switch is checked or not._

## Methods

### ThumbImage

[[Method('Switch', 'ThumbImage', false, 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Set the drawable used for the switch 'thumb' - the piece that the user can physically touch and drag along the track. If 'color Filter Enabled' is set to true, the image will get a light tint filter with the same color that you used as thumb color._

### ThumbImageFromMaterialFont

[[Method('Switch', 'ThumbImageFromMaterialFont', false, 'iconName size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |icon Name|`text`|
    |size|`number`|


_Set the drawable used for the switch 'thumb' - the piece that the user can physically touch and drag along the track. You can find the icon name (or code) here at https://material.io/icons . Use as size as example '300'._

## Properties

### Checked

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Set the toggle to checked or unchecked_

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true, user can touch the switch._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

_Set the text color for the switch._

### Text Off

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Text Off')]]

| Type | Default |
|:----:|:-------:|
|text|Switch Off|

_Set here the switch off text. HTML tags are too possible: <b>, <big>, <blockquote>, <br>, <cite>, <dfn>, <div>, <em>, <small>, <strong>, <sub>, <sup>, <tt>, <u>. Example: <big>Test</big>._

### Text On

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Text On')]]

| Type | Default |
|:----:|:-------:|
|text|Switch On|

_Set here the switch on text. HTML tags are too possible: <b>, <big>, <blockquote>, <br>, <cite>, <dfn>, <div>, <em>, <small>, <strong>, <sub>, <sup>, <tt>, <u>. Example: <big>Test</big>._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_The text size of the switch._

### Thumb Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Thumb Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

_Change the disabled color of the switch._

### Track Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Track Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF009688|

_Change the enabled color of the switch._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._

### is Checked

:eyes: Read-Only property
[[PropertyBlockGetter('Switch', 'is Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Return true if the switch is checked else false._