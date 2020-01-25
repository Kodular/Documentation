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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Got%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### Lost Focus

Event raised when this component is no longer selected for input, suchas if the user touches a different text box.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Lost%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Text Changed

Event to detect text changes.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22On%20Text%20Changed%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Hide Keyboard

Hide the keyboard. Only multiline text boxes need this. Single line text boxes close the keyboard when the users presses the Done key.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Hide%20Keyboard%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Request Focus

Sets the textbox active.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Request%20Focus%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Animation Style

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Set%20Animation%20Style%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22style%22,%20%22position%22,%20%22size%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|style|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-text">Text</span>|
|size|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### Set Cursor At

Set the cursor to the given position.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Set%20Cursor%20At%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

### Set Cursor At End

Set the cursor to the end of the text.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Set%20Cursor%20At%20End%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Set%20Shadow%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22x%22,%20%22y%22,%20%22radius%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### Show Error Message

Shows an error message next to the textbox.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Show%20Error%20Message%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#00000000</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The background color of the input box. You can choose a color by name in the Designer or in the Blocks Editor. The default background color is 'default' (shaded 3-D look).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Current Position

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Get the current cursor position.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Current%20Position%22,%20%22getter%22:%20true%7D"></div>

### Cursor Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

The color of the cursor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Cursor%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Cursor%20Color%22,%20%22getter%22:%20false%7D"></div>

### Cursor Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Makes the cursor visible (the default) or invisible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Cursor%20Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Cursor%20Visible%22,%20%22getter%22:%20false%7D"></div>

### Enable Copy & Paste

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

DEPRECATED since this feature is not working. Use 'Enabled' instead.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Enable%20Copy%20&%20Paste%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Enable%20Copy%20&%20Paste%22,%20%22getter%22:%20false%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Whether the user can enter text into this input box. By default, this is true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Error Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the error text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Error%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Error%20Text%22,%20%22getter%22:%20false%7D"></div>

### Font Bold

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Whether the font for the text should be bold. By default, it is not.

### Font Italic

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Whether the text should appear in italics. By default, it does not.

### Font Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The font size for the text. By default, it is 14.0 points.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>

### Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

The font for the text. The value can be changed in the Designer.

### Font Typeface Import

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Highlight Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#00000000</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns the color of the highlighted text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Highlight%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Highlight%20Color%22,%20%22getter%22:%20false%7D"></div>

### Hint

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Text that should appear faintly in the input box to provide a hint as to what the user should enter. This can only be seen if the `` Text `` property is empty.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Hint%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Hint%22,%20%22getter%22:%20false%7D"></div>

### Hint Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set a custom hint text color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Hint%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Hint%20Color%22,%20%22getter%22:%20false%7D"></div>

### Input Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The input type you want for this TextBox.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Input%20Type%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Input%20Type%22,%20%22getter%22:%20false%7D"></div>

### Line Color

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Please delete this block from your project.This block is deprecated and not longer supported.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Line%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Line%20Color%22,%20%22getter%22:%20false%7D"></div>

### Multiline

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If true, then this text box accepts multiple lines of input, which are entered using the return key. For single line text boxes there is a Done key instead of a return key, and pressing Done hides the keyboard. The app should call the HideKeyboard method to hide the keyboard for a mutiline text box.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Multiline%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Multiline%22,%20%22getter%22:%20false%7D"></div>

### Numbers Only (Not Working, Use Input Type)

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If true, then this text box accepts only numbers as keyboard input. Numbers can include a decimal point and an optional leading minus sign. This applies to keyboard input only. Even if NumbersOnly is true, you can use [set Text to] to enter any text at all.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Numbers%20Only%20(Not%20Working,%20Use%20Input%20Type)%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Numbers%20Only%20(Not%20Working,%20Use%20Input%20Type)%22,%20%22getter%22:%20false%7D"></div>

### Read Only

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Whether the TextBox is read-only. By default, this is true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Read%20Only%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Read%20Only%22,%20%22getter%22:%20false%7D"></div>

### Rotation Angle

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Sets the degrees that the textbox is rotated around the pivot point. Increasing values result in clockwise rotation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>

### Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the textbox contents.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>

### Text Alignment

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Whether the text should be left justified, centered, or right justified. By default, text is left justified.

### Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The color for the text. You can choose a color by name in the Designer or in the Blocks Editor. The default text color is black.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Text Length

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the current text length as number.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Text%20Length%22,%20%22getter%22:%20true%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20Box%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
