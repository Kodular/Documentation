# Switch

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that lets the user toggle between two states — on and off._

## Properties

### Checked

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set the toggle to checked or unchecked

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true, user can touch the switch.

### Font Bold

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Typeface

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### Text Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

Set the text color for the switch.

### Text Off

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Text Off')]]

| Type | Default |
|:----:|:-------:|
|text|Switch Off|

Set here the switch off text. HTML tags are too possible: <b>, <big>, <blockquote>, <br>, <cite>, <dfn>, <div>, <em>, <small>, <strong>, <sub>, <sup>, <tt>, <u>. Example: <big>Test</big>.

### Text On

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Text On')]]

| Type | Default |
|:----:|:-------:|
|text|Switch On|

Set here the switch on text. HTML tags are too possible: <b>, <big>, <blockquote>, <br>, <cite>, <dfn>, <div>, <em>, <small>, <strong>, <sub>, <sup>, <tt>, <u>. Example: <big>Test</big>.

### Font Size

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

The text size of the switch.

### Thumb Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Thumb Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF4CAF50|

Change the disabled color of the switch.

### Track Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Track Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF009688|

Change the enabled color of the switch.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Switch', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.

### is Checked



:eyes: Read-Only property
[[PropertyBlockGetter('Switch', 'is Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Return true if the switch is checked else false.

## Methods

### ThumbImage



[[Method('Switch', 'ThumbImage', false, 'image')]]

**Parameters**

| Name | Type |
|------|------|
|image|`text`|


Set the drawable used for the switch 'thumb' - the piece that the user can physically touch and drag along the track. If 'color Filter Enabled' is set to true, the image will get a light tint filter with the same color that you used as thumb color.

### ThumbImageFromMaterialFont



[[Method('Switch', 'ThumbImageFromMaterialFont', false, 'iconName size')]]

**Parameters**

| Name | Type |
|------|------|
|icon Name|`text`|
|size|`number`|


Set the drawable used for the switch 'thumb' - the piece that the user can physically touch and drag along the track. You can find the icon name (or code) here at https://material.io/icons . Use as size as example '300'.