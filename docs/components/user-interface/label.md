# Label

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|9|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A Label displays a piece of text, which is specified through the <code>Text</code> property.  Other properties, all of which can be set in the Designer or Blocks Editor, control the appearance and placement of the text._

## Events

### Click

[[Event('Label', 'Click')]]

_Event to detect that a user has done a simple "Click"._

### Long Click

[[Event('Label', 'Long Click')]]

_Event to detect that a user has done a simple "Long Click"._

## Methods

### AnimationStyle

[[Method('Label', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### SetShadow

[[Method('Label', 'SetShadow', false, 'x y radius color')]]

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
[[PropertyBlockGetterAndSetter('Label', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

_No description available_

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Set the component clickable or not clickable._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_No description available_

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this label will show html text else it will show plain text. Note: Not all HTML is supported._

### Has Margins

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Has Margins')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Reports whether or not the label appears with margins.  All four margins (left, right, top, bottom) are the same.  This property has no effect in the designer, where labels are always shown with margins._

### Marquee

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Marquee')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

_No description available_

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the label is rotated around the pivot point. Increasing values result in clockwise rotation._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Text')]]

| Type |
|:----:|
|text|

_No description available_

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_No description available_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Label', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._