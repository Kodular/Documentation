# Floating Action Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that is used to create Floating Action Buttons. <br>Floating Action Buttons are used to indicate the primary action of the screen.

## Events

### Click

[[Event('Floating Action Button', 'Click')]]

Event to detect that the fab button was clicked.

### Long Click

[[Event('Floating Action Button', 'Long Click')]]

Event to detect that the fab button was long clicked.

## Methods

### Hide

[[Method('Floating Action Button', 'Hide', false)]]

Hides the fab button.

### HideTextMessage

[[Method('Floating Action Button', 'HideTextMessage', false)]]

Hides text message.

### Show

[[Method('Floating Action Button', 'Show', false)]]

Shows the fab button.

### ShowTextMessage

[[Method('Floating Action Button', 'ShowTextMessage', false)]]

Show a new text message near to the fab with the given properties. You can do the changes with the properties in the advanded category.

### StartRotationAnimation

[[Method('Floating Action Button', 'StartRotationAnimation', false)]]

Starts a rotation animation. You can use the 'Rotation Duration','Rotation Start Degrees' and 'Rotation End Degrees' to define the animation. This block will work too if the 'Rotation On Click' property is disabled.

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF2196F2|

Returns the fab's background color.

### Call Fab Click Event When Label Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Call Fab Click Event When Label Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true the FAB click listener will be invoked on a text message click.

### Call Fab Long Click Event When Label Long Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Call Fab Long Click Event When Label Long Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true the FAB long click listener will be invoked on a text message long click.

### Elevation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Elevation')]]

| Type | Default |
|:----:|:-------:|
|number|10|

_No description available_

### Hide Label When Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Hide Label When Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Hide the text message when clicking on the message

### Hide Label When Long Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Hide Label When Long Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Hide the text message after a long click on the text message.

### Icon

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Icon')]]

| Type |
|:----:|
|text|

The path for the used image in FAB.

### Icon Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Icon Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

The color for the material icon.

### Material Icon Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Material Icon Name')]]

| Type | Default |
|:----:|:-------:|
|text|add|

Use a material icon for the fab without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

### Margin Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Margin Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|16|

Returns the fab's bottom margin.

### Margin Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Margin Right')]]

| Type | Default |
|:----:|:-------:|
|number|16|

Returns right margin

### Ripple Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Ripple Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Returns the fab's ripple color.

### Rotation Duration (millisecond)

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation Duration (millisecond)')]]

| Type | Default |
|:----:|:-------:|
|number|300|

Returns the fab's rotation duration in milliseconds.

### Rotation End Degrees

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation End Degrees')]]

| Type | Default |
|:----:|:-------:|
|number|360|

Returns the fab's rotation end degrees.

### Rotate On Click

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotate On Click')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the fab will rotate on click.

### Rotation Start Degrees

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation Start Degrees')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Returns the fab's rotation start degrees.

### Show Label On Left Side

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Show Label On Left Side')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set the text message to the left side of the floating button. If false the text will be on the right side.

### Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Size')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Sets the size of the button. Use '1' for normal, '2' for mini or '3' for auto size based on the screen size.

### Label Background Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Set the text message background color.

### Label Corner Radius

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Set the text message corner radius.

### Label Text

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Text')]]

| Type |
|:----:|
|text|

Set the text message.

### Label Text Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Set the text message color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if the fab button is visible.