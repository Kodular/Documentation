# Checkbox

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">6</span>|

## Overview

Checkbox that raises an event when the user clicks on it. There are many properties affecting its appearance that can be set in the Designer or Blocks Editor.

## Events

### Changed

Default Changed event handler.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Changed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Click

Indicates a user has clicked on the checkbox.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Got Focus

Default GotFocus event handler.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Got%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### Lost Focus

Default LostFocus event handler.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Lost%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Set%20Shadow%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22x%22,%20%22y%22,%20%22radius%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span><span class="chip chip-color">Default: <i>#FFFFFF00</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns the checkbox's background color as an alpha-red-green-blueinteger.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Checkbox Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span><span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Change the checkbox component color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Checkbox%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Checkbox%20Color%22,%20%22getter%22:%20false%7D"></div>

### Checked

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns true if the checkbox is checked.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Checked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Checked%22,%20%22getter%22:%20false%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>True</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns true if the checkbox is active and clickable.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Font Bold

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span></span>

Returns true if the checkbox's text should be bold  
If bold has been requested, this property will return true, even if thefont does not support bold.

### Font Italic

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span></span>

Returns true if the checkbox's text should be italic  
If italic has been requested, this property will return true, even if thefont does not support italic.

### Font Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>14.0</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns the checkbox's text's font size, measured in sp(scale-independent pixels).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>

### Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>0</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span></span>

Returns the checkbox's text's font face as default, serif, sansserif, or monospace.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns the text displayed by the checkbox.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>

### Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span><span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns the checkbox's text color as an alpha-red-green-blueinteger.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>True</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Checkbox%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
