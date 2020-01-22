# Radio Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that lets the user toggle between two states — checked and unchecked. Only one Radio Button in a group of Radio Buttons can be checked at any given time._

## Events

### Changed

[[Event('Radio Button', 'Changed', 'checked')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |checked|`boolean`|


Event invoked when the radio button state has been changed.

## Methods

### Toggle

[[Method('Radio Button', 'Toggle', false)]]

Change the checked state of the view to the inverse of its current state

## Properties

### Checked

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set the radio button to checked or unchecked

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set, user can touch the radio button.

### Font Bold

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Typeface

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### Radio Button Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Radio Button Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Change the radio button component color.

### Text

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Text')]]

| Type | Default |
|:----:|:-------:|
|text|Radio Button Text|

Set here the radio button text.

### Text Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Set the text color for the radio button.

### Font Size

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

The text size of the radio button.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Radio Button', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.

### is Checked



:eyes: Read-Only property
[[PropertyBlockGetter('Radio Button', 'is Checked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if the radio button is checked, else false.