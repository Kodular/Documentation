# Text Box

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|13|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A box for the user to enter text.  The initial or user-entered text value is in the <code>Text</code> property.  If blank, the <code>Hint</code> property, which appears as faint text in the box, can provide the user with guidance as to what to type.</p><p>The <code>MultiLine</code> property determines if the text can havemore than one line.  For a single line text box, the keyboard will closeautomatically when the user presses the Done key.  To close the keyboard for multiline text boxes, the app should use  the HideKeyboard method or  rely on the user to press the Back key.</p><p>The <code> NumbersOnly</code> property restricts the keyboard to acceptnumeric input only.</p><p>Other properties affect the appearance of the text box (<code>TextAlignment</code>, <code>BackgroundColor</code>, etc.) and whether it can be used (<code>Enabled</code>).</p><p>Text boxes are usually used with the <code>Button</code> component, with the user clicking on the button when text entry is complete.</p><p>If the text entered by the user should not be displayed, use <code>PasswordTextBox</code> instead.</p>_

## Properties

### Background Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

The background color of the input box.  You can choose a color by name in the Designer or in the Blocks Editor.  The default background color is 'default' (shaded 3-D look).

### Cursor Color

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Cursor Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The color of the cursor.

### Cursor Visible

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Cursor Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Makes the cursor visible (the default) or invisible.

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether the user can enter text into this input box.  By default, this is true.

### Error Text

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Error Text')]]

| Type |
|:----:|
|text|

Returns the error text.

### Font Bold

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the font for the text should be bold.  By default, it is not.

### Font Italic

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the text should appear in italics.  By default, it does not.

### Font Size

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

The font size for the text.  By default, it is 14.0 points.

### Font Typeface

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The font for the text.  The value can be changed in the Designer.

### Font Typeface Import

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### Highlight Color

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Highlight Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

Returns the color of the highlighted text.

### Hint

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Hint')]]

| Type |
|:----:|
|text|

Text that should appear faintly in the input box to provide a hint as to what the user should enter.  This can only be seen if the <code>Text</code> property is empty.

### Hint Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Hint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Set a custom hint text color.

### Input Type

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Input Type')]]

| Type | Default |
|:----:|:-------:|
|number|1|

The input type you want for this TextBox.

### Multiline

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Multiline')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this text box accepts multiple lines of input, which are entered using the return key.  For single line text boxes there is a Done key instead of a return key, and pressing Done hides the keyboard.  The app should call the HideKeyboard method to hide the keyboard for a mutiline text box.

### Numbers Only (Not Working, Use Input Type)

:warning: **Deprecated** <small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Numbers Only (Not Working, Use Input Type)')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then this text box accepts only numbers as keyboard input.  Numbers can include a decimal point and an optional leading minus sign.  This applies to keyboard input only.  Even if NumbersOnly is true, you can use [set Text to] to enter any text at all.

### Read Only

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Read Only')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the TextBox is read-only. By default, this is true.

### Rotation Angle

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets the degrees that the textbox is rotated around the pivot point. Increasing values result in clockwise rotation.

### Text

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Text')]]

| Type |
|:----:|
|text|

Returns the textbox contents.

### Text Alignment

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Whether the text should be left justified, centered, or right justified.  By default, text is left justified.

### Text Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The color for the text.  You can choose a color by name in the Designer or in the Blocks Editor.  The default text color is black.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Current Position



:eyes: Read-Only property
[[PropertyBlockGetter('Text Box', 'Current Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Get the current cursor position.

### Enable Copy & Paste

:warning: **Deprecated** 

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Enable Copy & Paste')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

DEPRECATED since this feature is not working. Use 'Enabled' instead.

### Height



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Line Color

:warning: **Deprecated** 

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Line Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Please delete this block from your project.This block is deprecated and not longer supported.

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Text Length



:eyes: Read-Only property
[[PropertyBlockGetter('Text Box', 'Text Length')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the current text length as number.

### Width



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text Box', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.