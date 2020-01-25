# Floating Action Button

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that is used to create Floating Action Buttons.   
Floating Action Buttons are used to indicate the primary action of the screen.

## Events

### Click

Event to detect that the fab button was clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Long Click

Event to detect that the fab button was long clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Hide

Hides the fab button.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Hide Label

Hides text message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show

Shows the fab button.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Label

Show a new text message near to the fab with the given properties. You can do the changes with the properties in the advanded category.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%20Label%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start Rotation Animation

Starts a rotation animation. You can use the 'Rotation Duration','Rotation Start Degrees' and 'Rotation End Degrees' to define the animation. This block will work too if the 'Rotation On Click' property is disabled.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Start%20Rotation%20Animation%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Background Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#2196F2FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #2196F2;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the fab's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Call Fab Click Event When Label Clicked

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

If true the FAB click listener will be invoked on a text message click.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Click%20Event%20When%20Label%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Click%20Event%20When%20Label%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Call Fab Long Click Event When Label Long Clicked

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

If true the FAB long click listener will be invoked on a text message long click.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Long%20Click%20Event%20When%20Label%20Long%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Call%20Fab%20Long%20Click%20Event%20When%20Label%20Long%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Elevation

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>10</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Elevation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Elevation%22,%20%22getter%22:%20false%7D"></div>

### Hide Label When Clicked

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Hide the text message when clicking on the message

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Hide Label When Long Clicked

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Hide the text message after a long click on the text message.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Long%20Clicked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Hide%20Label%20When%20Long%20Clicked%22,%20%22getter%22:%20false%7D"></div>

### Icon

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The path for the used image in FAB.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%22,%20%22getter%22:%20false%7D"></div>

### Icon Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The color for the material icon.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Icon%20Color%22,%20%22getter%22:%20false%7D"></div>

### Label Background Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #444444;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the text message background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Label Corner Radius

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>8</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the text message corner radius.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Corner%20Radius%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Corner%20Radius%22,%20%22getter%22:%20false%7D"></div>

### Label Text

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the text message.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%22,%20%22getter%22:%20false%7D"></div>

### Label Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the text message color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Label%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Margin Bottom

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>16</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the fab's bottom margin.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Bottom%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Bottom%22,%20%22getter%22:%20false%7D"></div>

### Margin Right

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>16</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns right margin

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Right%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Margin%20Right%22,%20%22getter%22:%20false%7D"></div>

### Material Icon Name

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;<span class="chip chip-text">Default: <i>add</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Use a material icon for the fab without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Material%20Icon%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Material%20Icon%20Name%22,%20%22getter%22:%20false%7D"></div>

### Ripple Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns the fab's ripple color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Ripple%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Ripple%20Color%22,%20%22getter%22:%20false%7D"></div>

### Rotate On Click

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns true if the fab will rotate on click.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotate%20On%20Click%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotate%20On%20Click%22,%20%22getter%22:%20false%7D"></div>

### Rotation Duration (millisecond)

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>300</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns the fab's rotation duration in milliseconds.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Duration%20(millisecond)%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Duration%20(millisecond)%22,%20%22getter%22:%20false%7D"></div>

### Rotation End Degrees

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>360</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns the fab's rotation end degrees.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20End%20Degrees%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20End%20Degrees%22,%20%22getter%22:%20false%7D"></div>

### Rotation Start Degrees

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns the fab's rotation start degrees.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Start%20Degrees%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Rotation%20Start%20Degrees%22,%20%22getter%22:%20false%7D"></div>

### Show Label On Left Side

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the text message to the left side of the floating button. If false the text will be on the right side.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%20Label%20On%20Left%20Side%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Show%20Label%20On%20Left%20Side%22,%20%22getter%22:%20false%7D"></div>

### Size

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>1</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the size of the button. Use '1' for normal, '2' for mini or '3' for auto size based on the screen size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true if the fab button is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Floating%20Action%20Button%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
