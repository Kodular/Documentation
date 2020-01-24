# Text Box

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">13</span>|

## Overview

A box for the user to enter text. The initial or user-entered text value is in the `` Text `` property. If blank, the `` Hint `` property, which appears as faint text in the box, can provide the user with guidance as to what to type.

The `` MultiLine `` property determines if the text can havemore than one line. For a single line text box, the keyboard will closeautomatically when the user presses the Done key. To close the keyboard for multiline text boxes, the app should use the HideKeyboard method or rely on the user to press the Back key.

The ``  NumbersOnly `` property restricts the keyboard to acceptnumeric input only.

Other properties affect the appearance of the text box (`` TextAlignment ``, `` BackgroundColor ``, etc.) and whether it can be used (`` Enabled ``).

Text boxes are usually used with the `` Button `` component, with the user clicking on the button when text entry is complete.

If the text entered by the user should not be displayed, use `` PasswordTextBox `` instead.

## Events

### Got Focus

Event raised when this component is selected for input, such as bythe user touching it.

[[Event('Text Box', 'Got Focus')]]

### Lost Focus

Event raised when this component is no longer selected for input, suchas if the user touches a different text box.

[[Event('Text Box', 'Lost Focus')]]

### On Text Changed

Event to detect text changes.

[[Event('Text Box', 'On Text Changed')]]

## Methods

### Set Animation Style

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

[[Method('Text Box', 'Set Animation Style', False, 'style', 'position', 'size', 'color')]]

| Params | []() |
|--------|------|
|style|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-text">Text</span>|
|size|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Hide Keyboard

Hide the keyboard. Only multiline text boxes need this. Single line text boxes close the keyboard when the users presses the Done key.

[[Method('Text Box', 'Hide Keyboard', False)]]

### Request Focus

Sets the textbox active.

[[Method('Text Box', 'Request Focus', False)]]

### Set Cursor At

Set the cursor to the given position.

[[Method('Text Box', 'Set Cursor At', False, 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


### Set Cursor At End

Set the cursor to the end of the text.

[[Method('Text Box', 'Set Cursor At End', False)]]

### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black

[[Method('Text Box', 'Set Shadow', False, 'x', 'y', 'radius', 'color')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Show Error Message

Shows an error message next to the textbox.

[[Method('Text Box', 'Show Error Message', False)]]

## Properties

### Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The background color of the input box. You can choose a color by name in the Designer or in the Blocks Editor. The default background color is 'default' (shaded 3-D look).

[[PropertyBlockGetterAndSetter('Text Box', 'Background Color')]]

### Cursor Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

The color of the cursor.

[[PropertyBlockGetterAndSetter('Text Box', 'Cursor Color')]]

### Cursor Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Makes the cursor visible (the default) or invisible.

[[PropertyBlockGetterAndSetter('Text Box', 'Cursor Visible')]]

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the user can enter text into this input box. By default, this is true.

[[PropertyBlockGetterAndSetter('Text Box', 'Enabled')]]

### Error Text

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the error text.

[[PropertyBlockGetterAndSetter('Text Box', 'Error Text')]]

### Font Bold

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Whether the font for the text should be bold. By default, it is not.

### Font Italic

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Whether the text should appear in italics. By default, it does not.

### Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The font size for the text. By default, it is 14.0 points.

[[PropertyBlockGetterAndSetter('Text Box', 'Font Size')]]

### Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The font for the text. The value can be changed in the Designer.

### Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Text Box', 'Font Typeface Import')]]

### Highlight Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Returns the color of the highlighted text.

[[PropertyBlockGetterAndSetter('Text Box', 'Highlight Color')]]

### Hint

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Text that should appear faintly in the input box to provide a hint as to what the user should enter. This can only be seen if the `` Text `` property is empty.

[[PropertyBlockGetterAndSetter('Text Box', 'Hint')]]

### Hint Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set a custom hint text color.

[[PropertyBlockGetterAndSetter('Text Box', 'Hint Color')]]

### Input Type

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The input type you want for this TextBox.

[[PropertyBlockGetterAndSetter('Text Box', 'Input Type')]]

### Multiline

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, then this text box accepts multiple lines of input, which are entered using the return key. For single line text boxes there is a Done key instead of a return key, and pressing Done hides the keyboard. The app should call the HideKeyboard method to hide the keyboard for a mutiline text box.

[[PropertyBlockGetterAndSetter('Text Box', 'Multiline')]]

### Numbers Only (Not Working, Use Input Type)

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, then this text box accepts only numbers as keyboard input. Numbers can include a decimal point and an optional leading minus sign. This applies to keyboard input only. Even if NumbersOnly is true, you can use [set Text to] to enter any text at all.

[[PropertyBlockGetterAndSetter('Text Box', 'Numbers Only Not Working. Use Input Type')]]

### Read Only

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the TextBox is read-only. By default, this is true.

[[PropertyBlockGetterAndSetter('Text Box', 'Read Only')]]

### Rotation Angle

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Sets the degrees that the textbox is rotated around the pivot point. Increasing values result in clockwise rotation.

[[PropertyBlockGetterAndSetter('Text Box', 'Rotation Angle')]]

### Text

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the textbox contents.

[[PropertyBlockGetterAndSetter('Text Box', 'Text')]]

### Text Alignment

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Whether the text should be left justified, centered, or right justified. By default, text is left justified.

### Text Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The color for the text. You can choose a color by name in the Designer or in the Blocks Editor. The default text color is black.

[[PropertyBlockGetterAndSetter('Text Box', 'Text Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Text Box', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Current Position

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the current cursor position.

[[PropertyBlockGetter('Text Box', 'Current Position')]]

### Enable Copy & Paste

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

DEPRECATED since this feature is not working. Use 'Enabled' instead.

[[PropertyBlockGetterAndSetter('Text Box', 'Enable Copy and Paste')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Text Box', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Text Box', 'Height Percent')]]

### Line Color

:warning: ==**Deprecated**==

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Please delete this block from your project.This block is deprecated and not longer supported.

[[PropertyBlockGetterAndSetter('Text Box', 'Line Color')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Text Length

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current text length as number.

[[PropertyBlockGetter('Text Box', 'Text Length')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Text Box', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Text Box', 'Width Percent')]]