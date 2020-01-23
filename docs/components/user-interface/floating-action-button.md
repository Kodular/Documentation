# Floating Action Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that is used to create Floating Action Buttons.   
Floating Action Buttons are used to indicate the primary action of the screen.

## Events

### Click

[[Event('Floating Action Button', 'Click')]]

Event to detect that the fab button was clicked.

### Long Click

[[Event('Floating Action Button', 'Long Click')]]

Event to detect that the fab button was long clicked.

## Methods

### Hide

[[Method('Floating Action Button', 'Hide', False)]]

Hides the fab button.

### Hide Label

[[Method('Floating Action Button', 'Hide Label', False)]]

Hides text message.

### Show

[[Method('Floating Action Button', 'Show', False)]]

Shows the fab button.

### Show Label

[[Method('Floating Action Button', 'Show Label', False)]]

Show a new text message near to the fab with the given properties. You can do the changes with the properties in the advanded category.

### Start Rotation Animation

[[Method('Floating Action Button', 'Start Rotation Animation', False)]]

Starts a rotation animation. You can use the 'Rotation Duration','Rotation Start Degrees' and 'Rotation End Degrees' to define the animation. This block will work too if the 'Rotation On Click' property is disabled.

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF2196F2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the fab's background color.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Background Color')]]

### Call Fab Click Event When Label Clicked

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true the FAB click listener will be invoked on a text message click.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Call Fab Click Event When Label Clicked')]]

### Call Fab Long Click Event When Label Long Clicked

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true the FAB long click listener will be invoked on a text message long click.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Call Fab Long Click Event When Label Long Clicked')]]

### Elevation

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Elevation')]]

### Hide Label When Clicked

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Hide the text message when clicking on the message

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Hide Label When Clicked')]]

### Hide Label When Long Clicked

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Hide the text message after a long click on the text message.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Hide Label When Long Clicked')]]

### Icon

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The path for the used image in FAB.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Icon')]]

### Icon Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The color for the material icon.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Icon Color')]]

### Material Icon Name

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>add</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Use a material icon for the fab without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Material Icon Name')]]

### Margin Bottom

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>16</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the fab's bottom margin.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Margin Bottom')]]

### Margin Right

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>16</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns right margin

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Margin Right')]]

### Ripple Color

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the fab's ripple color.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Ripple Color')]]

### Rotation Duration (millisecond)

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>300</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the fab's rotation duration in milliseconds.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation Duration millisecond')]]

### Rotation End Degrees

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>360</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the fab's rotation end degrees.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation End Degrees')]]

### Rotate On Click

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true if the fab will rotate on click.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotate On Click')]]

### Rotation Start Degrees

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the fab's rotation start degrees.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation Start Degrees')]]

### Show Label On Left Side

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text message to the left side of the floating button. If false the text will be on the right side.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Show Label On Left Side')]]

### Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the size of the button. Use '1' for normal, '2' for mini or '3' for auto size based on the screen size.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Size')]]

### Label Background Color

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF444444</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text message background color.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Background Color')]]

### Label Corner Radius

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text message corner radius.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Corner Radius')]]

### Label Text

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text message.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Text')]]

### Label Text Color

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text message color.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Text Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true if the fab button is visible.

[[PropertyBlockGetterAndSetter('Floating Action Button', 'Visible')]]