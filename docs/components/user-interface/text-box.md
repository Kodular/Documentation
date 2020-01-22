# Text Box

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|13|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A box for the user to enter text.  The initial or user-entered text value is in the <code>Text</code> property.  If blank, the <code>Hint</code> property, which appears as faint text in the box, can provide the user with guidance as to what to type.</p><p>The <code>MultiLine</code> property determines if the text can havemore than one line.  For a single line text box, the keyboard will closeautomatically when the user presses the Done key.  To close the keyboard for multiline text boxes, the app should use  the HideKeyboard method or  rely on the user to press the Back key.</p><p>The <code> NumbersOnly</code> property restricts the keyboard to acceptnumeric input only.</p><p>Other properties affect the appearance of the text box (<code>TextAlignment</code>, <code>BackgroundColor</code>, etc.) and whether it can be used (<code>Enabled</code>).</p><p>Text boxes are usually used with the <code>Button</code> component, with the user clicking on the button when text entry is complete.</p><p>If the text entered by the user should not be displayed, use <code>PasswordTextBox</code> instead.</p>_

## Events

### Got Focus

[[Event('Text Box', 'Got Focus')]]

_Event raised when this component is selected for input, such as by
 the user touching it._

### Lost Focus

[[Event('Text Box', 'Lost Focus')]]

_Event raised when this component is no longer selected for input, such
 as if the user touches a different text box._

### On Text Changed

[[Event('Text Box', 'On Text Changed')]]

_Event to detect text changes._

## Methods

### AnimationStyle

[[Method('Text Box', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### HideKeyboard

[[Method('Text Box', 'HideKeyboard', false)]]

_Hide the keyboard.  Only multiline text boxes need this. Single line text boxes close the keyboard when the users presses the Done key._

### RequestFocus

[[Method('Text Box', 'RequestFocus', false)]]

_Sets the textbox active._

### SetCursorAt

[[Method('Text Box', 'SetCursorAt', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Set the cursor to the given position._

### SetCursorAtEnd

[[Method('Text Box', 'SetCursorAtEnd', false)]]

_Set the cursor to the end of the text._

### SetShadow

[[Method('Text Box', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


_Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black_

### ShowError

[[Method('Text Box', 'ShowError', false)]]

_Shows an error message next to the textbox._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_The background color of the input box.  You can choose a color by name in the Designer or in the Blocks Editor.  The default background color is 'default' (shaded 3-D look)._

### Cursor Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Cursor Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The color of the cursor._

### Cursor Visible

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Cursor Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Makes the cursor visible (the default) or invisible._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether the user can enter text into this input box.  By default, this is true._

### Error Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Error Text')]]

| Type |
|:----:|
|text|

_Returns the error text._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the font for the text should be bold.  By default, it is not._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the text should appear in italics.  By default, it does not._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_The font size for the text.  By default, it is 14.0 points._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The font for the text.  The value can be changed in the Designer._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Highlight Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Highlight Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_Returns the color of the highlighted text._

### Hint

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Hint')]]

| Type |
|:----:|
|text|

_Text that should appear faintly in the input box to provide a hint as to what the user should enter.  This can only be seen if the <code>Text</code> property is empty._

### Hint Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Hint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Set a custom hint text color._

### Input Type

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Input Type')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_The input type you want for this TextBox._

### Multiline

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Multiline')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this text box accepts multiple lines of input, which are entered using the return key.  For single line text boxes there is a Done key instead of a return key, and pressing Done hides the keyboard.  The app should call the HideKeyboard method to hide the keyboard for a mutiline text box._

### Numbers Only (Not Working, Use Input Type)

:warning: ==**Deprecated**== <small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Numbers Only (Not Working, Use Input Type)')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this text box accepts only numbers as keyboard input.  Numbers can include a decimal point and an optional leading minus sign.  This applies to keyboard input only.  Even if NumbersOnly is true, you can use [set Text to] to enter any text at all._

### Read Only

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Read Only')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the TextBox is read-only. By default, this is true._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the textbox is rotated around the pivot point. Increasing values result in clockwise rotation._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Text')]]

| Type |
|:----:|
|text|

_Returns the textbox contents._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Whether the text should be left justified, centered, or right justified.  By default, text is left justified._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The color for the text.  You can choose a color by name in the Designer or in the Blocks Editor.  The default text color is black._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Current Position

:eyes: Read-Only property
[[PropertyBlockGetter('Text Box', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Get the current cursor position._

### Enable Copy & Paste

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Enable Copy & Paste')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_DEPRECATED since this feature is not working. Use 'Enabled' instead._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Line Color

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Line Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Please delete this block from your project.This block is deprecated and not longer supported._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Text Length

:eyes: Read-Only property
[[PropertyBlockGetter('Text Box', 'Text Length')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the current text length as number._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._