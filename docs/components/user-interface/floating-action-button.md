# Floating Action Button

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that is used to create Floating Action Buttons (FAB).   
Floating Action Buttons are used to indicate the primary action of the screen.

## Events

### Click

Event to detect that the FAB was clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Long Click

Event to detect that the FAB was long clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Hide

Hides the FAB.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Hide Label

Hides text message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show

Shows the FAB.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Label

Show a new text message near to the FAB with the given properties. You can do the changes with the properties in the advanced category.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%20Label%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start Rotation Animation

Starts a rotation animation. You can use the 'Rotation Duration','Rotation Start Degrees' and 'Rotation End Degrees' to define the animation. This block will work too if the 'Rotation On Click' property is disabled.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Start%20Rotation%20Animation%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#2196F2FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #2196F2;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Call FAB Click Event When Label Clicked

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true the FAB click listener will be invoked on a text message click.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Click%20Event%20When%20Label%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Click%20Event%20When%20Label%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Call FAB Long Click Event When Label Long Clicked

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true the FAB long click listener will be invoked on a text message long click.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Long%20Click%20Event%20When%20Label%20Long%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Long%20Click%20Event%20When%20Label%20Long%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Elevation

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Elevation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Elevation%22,%20%22getter%22:%20false%7D"></div>

### Hide Label When Clicked

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Hide the text message when clicking on the message

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Hide Label When Long Clicked

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Hide the text message after a long click on the text message.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Long%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Long%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Icon

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The path for the used image in FAB.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%22,%20%22getter%22:%20false%7D"></div>

### Icon Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color for the material icon.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%20Color%22,%20%22getter%22:%20false%7D"></div>

### Label Background Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #444444;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the text message background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Label Corner Radius

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>8</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the text message corner radius.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Corner%20Radius%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Corner%20Radius%22,%20%22getter%22:%20false%7D"></div>

### Label Text

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the text message.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%22,%20%22getter%22:%20false%7D"></div>

### Label Text Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the text message color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Margin Bottom

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>16</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's bottom margin.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Bottom%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Bottom%22,%20%22getter%22:%20false%7D"></div>

### Margin Right

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>16</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's right margin.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Right%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Right%22,%20%22getter%22:%20false%7D"></div>

### Material Icon Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>add</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Use a material icon for the FAB without uploading an image resource into your project. You can find the icon name (or code) here at https://fonts.google.com/icons?selected=Material+Icons

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Material%20Icon%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Material%20Icon%20Name%22,%20%22getter%22:%20false%7D"></div>

### Ripple Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's ripple color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Ripple%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Ripple%20Color%22,%20%22getter%22:%20false%7D"></div>

### Rotate On Click

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true if the FAB will rotate on click.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotate%20On%20Click%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotate%20On%20Click%22,%20%22getter%22:%20false%7D"></div>

### Rotation Duration (millisecond)

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>300</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's rotation duration in milliseconds.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Duration%20(millisecond)%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Duration%20(millisecond)%22,%20%22getter%22:%20false%7D"></div>

### Rotation End Degrees

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>360</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's rotation end degrees.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20End%20Degrees%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20End%20Degrees%22,%20%22getter%22:%20false%7D"></div>

### Rotation Start Degrees

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the FAB's rotation start degrees.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Start%20Degrees%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Start%20Degrees%22,%20%22getter%22:%20false%7D"></div>

### Show Label On Left Side

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the text message to the left side of the FAB. If false then the text message will be on right side.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%20Label%20On%20Left%20Side%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%20Label%20On%20Left%20Side%22,%20%22getter%22:%20false%7D"></div>

### Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the size of the FAB. Use '1' for normal, '2' for mini or '3' for auto size based on the screen size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true if the FAB is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
