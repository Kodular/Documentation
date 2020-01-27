# Email Picker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">6</span>|

## Overview

An EmailPicker is a kind of text box. If the user begins entering the name or email address of a contact, the phone will show a dropdown menu of choices that complete the entry. If there are many contacts, the dropdown can take several seconds to appear, and can show intermediate results while the matches are being computed. 

The initial contents of the text box and the contents&lt; after user entry is in the `` Text `` property. If the `` Text `` property is initially empty, the contents of the `` Hint `` property will be faintly shown in the text box as a hint to the user.

Other properties affect the appearance of the text box (`` TextAlignment ``, `` BackgroundColor ``, etc.) and whether it can be used (`` Enabled ``).

Text boxes like this are usually used with `` Button `` components, with the user clicking on the button when text entry is complete.

??? example "Permissions"
    * [android.permission.READ_CONTACTS](https://developer.android.com/reference/android/Manifest.permission.html#READ_CONTACTS)

## Events

### Got Focus

Event raised when this component is selected for input, such as bythe user touching it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Got%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### Lost Focus

Event raised when this component is no longer selected for input, suchas if the user touches a different text box.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Lost%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Text Changed

Event to detect text changes.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22On%20Text%20Changed%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Request Focus

Sets the textbox active.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Request%20Focus%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Animation Style

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Set%20Animation%20Style%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22style%22,%20%22position%22,%20%22size%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|style|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-text">Text</span>|
|size|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### Set Cursor At

Set the cursor to the given position.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Set%20Cursor%20At%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

### Set Cursor At End

Set the cursor to the end of the text.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Set%20Cursor%20At%20End%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Set%20Shadow%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22x%22,%20%22y%22,%20%22radius%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#00000000</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The background color of the input box. You can choose a color by name in the Designer or in the Blocks Editor. The default background color is 'default' (shaded 3-D look).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Current Position

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the current cursor position.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Current%20Position%22,%20%22getter%22:%20true%7D"></div>

### Cursor Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color of the cursor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Cursor%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Cursor%20Color%22,%20%22getter%22:%20false%7D"></div>

### Cursor Visible

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Makes the cursor visible (the default) or invisible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Cursor%20Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Cursor%20Visible%22,%20%22getter%22:%20false%7D"></div>

### Enable Copy & Paste

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

DEPRECATED since this feature is not working. Use 'Enabled' instead.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Enable%20Copy%20&%20Paste%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Enable%20Copy%20&%20Paste%22,%20%22getter%22:%20false%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the user can enter text into this input box. By default, this is true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Font Bold

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Whether the font for the text should be bold. By default, it is not.

### Font Italic

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Whether the text should appear in italics. By default, it does not.

### Font Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The font size for the text. By default, it is 14.0 points.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>

### Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The font for the text. The value can be changed in the Designer.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Hint

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Text that should appear faintly in the input box to provide a hint as to what the user should enter. This can only be seen if the `` Text `` property is empty.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Hint%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Hint%22,%20%22getter%22:%20false%7D"></div>

### Hint Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom hint text color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Hint%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Hint%20Color%22,%20%22getter%22:%20false%7D"></div>

### Line Color

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Please delete this block from your project.This block is deprecated and not longer supported.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Line%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Line%20Color%22,%20%22getter%22:%20false%7D"></div>

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the degrees that the textbox is rotated around the pivot point. Increasing values result in clockwise rotation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>

### Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the textbox contents.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>

### Text Alignment

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Whether the text should be left justified, centered, or right justified. By default, text is left justified.

### Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color for the text. You can choose a color by name in the Designer or in the Blocks Editor. The default text color is black.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Text Length

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the current text length as number.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Text%20Length%22,%20%22getter%22:%20true%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Email%20Picker%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
