# Password Text Box

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|6|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A box for entering passwords.  This is the same as the ordinary <code>TextBox</code> component except this does not display the characters typed by the user.</p><p>The value of the text in the box can be found or set through the <code>Text</code> property. If blank, the <code>Hint</code> property, which appears as faint text in the box, can provide the user with guidance as to what to type.</p> <p>Text boxes are usually used with the <code>Button</code> component, with the user clicking on the button when text entry is complete.</p>_

## Events

### Got Focus

[[Event('Password Text Box', 'Got Focus')]]

_Event raised when this component is selected for input, such as by
 the user touching it._

### Lost Focus

[[Event('Password Text Box', 'Lost Focus')]]

_Event raised when this component is no longer selected for input, such
 as if the user touches a different text box._

### On Text Changed

[[Event('Password Text Box', 'On Text Changed')]]

_Event to detect text changes._

## Methods

### AnimationStyle

[[Method('Password Text Box', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### RequestFocus

[[Method('Password Text Box', 'RequestFocus', false)]]

_Sets the textbox active._

### SetCursorAt

[[Method('Password Text Box', 'SetCursorAt', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Set the cursor to the given position._

### SetCursorAtEnd

[[Method('Password Text Box', 'SetCursorAtEnd', false)]]

_Set the cursor to the end of the text._

### SetShadow

[[Method('Password Text Box', 'SetShadow', false, 'x y radius color')]]

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
[[PropertyBlockGetterAndSetter('Password Text Box', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_The background color of the input box.  You can choose a color by name in the Designer or in the Blocks Editor.  The default background color is 'default' (shaded 3-D look)._

### Cursor Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Cursor Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The color of the cursor._

### Cursor Visible

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Cursor Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Makes the cursor visible (the default) or invisible._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether the user can enter text into this input box.  By default, this is true._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the font for the text should be bold.  By default, it is not._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the text should appear in italics.  By default, it does not._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_The font size for the text.  By default, it is 14.0 points._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The font for the text.  The value can be changed in the Designer._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Hint

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Hint')]]

| Type |
|:----:|
|text|

_Text that should appear faintly in the input box to provide a hint as to what the user should enter.  This can only be seen if the <code>Text</code> property is empty._

### Hint Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Hint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Set a custom hint text color._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the textbox is rotated around the pivot point. Increasing values result in clockwise rotation._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Text')]]

| Type |
|:----:|
|text|

_Returns the textbox contents._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Whether the text should be left justified, centered, or right justified.  By default, text is left justified._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The color for the text.  You can choose a color by name in the Designer or in the Blocks Editor.  The default text color is black._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Current Position

:eyes: Read-Only property
[[PropertyBlockGetter('Password Text Box', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Get the current cursor position._

### Enable Copy & Paste

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Enable Copy & Paste')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_DEPRECATED since this feature is not working. Use 'Enabled' instead._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Line Color

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Line Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Please delete this block from your project.This block is deprecated and not longer supported._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Text Length

:eyes: Read-Only property
[[PropertyBlockGetter('Password Text Box', 'Text Length')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current text length as number._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Password Text Box', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._