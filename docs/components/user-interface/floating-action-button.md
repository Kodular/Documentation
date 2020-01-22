# Floating Action Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that is used to create Floating Action Buttons. <br>Floating Action Buttons are used to indicate the primary action of the screen._

## Events

### Click

[[Event('Floating Action Button', 'Click')]]

_Event to detect that the fab button was clicked._

### Long Click

[[Event('Floating Action Button', 'Long Click')]]

_Event to detect that the fab button was long clicked._

## Methods

### Hide

[[Method('Floating Action Button', 'Hide', false)]]

_Hides the fab button._

### HideTextMessage

[[Method('Floating Action Button', 'HideTextMessage', false)]]

_Hides text message._

### Show

[[Method('Floating Action Button', 'Show', false)]]

_Shows the fab button._

### ShowTextMessage

[[Method('Floating Action Button', 'ShowTextMessage', false)]]

_Show a new text message near to the fab with the given properties. You can do the changes with the properties in the advanded category._

### StartRotationAnimation

[[Method('Floating Action Button', 'StartRotationAnimation', false)]]

_Starts a rotation animation. You can use the 'Rotation Duration','Rotation Start Degrees' and 'Rotation End Degrees' to define the animation. This block will work too if the 'Rotation On Click' property is disabled._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF2196F2|

_Returns the fab's background color._

### Call Fab Click Event When Label Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Call Fab Click Event When Label Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true the FAB click listener will be invoked on a text message click._

### Call Fab Long Click Event When Label Long Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Call Fab Long Click Event When Label Long Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true the FAB long click listener will be invoked on a text message long click._

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

_Hide the text message when clicking on the message_

### Hide Label When Long Clicked

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Hide Label When Long Clicked')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Hide the text message after a long click on the text message._

### Icon

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Icon')]]

| Type |
|:----:|
|text|

_The path for the used image in FAB._

### Icon Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Icon Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_The color for the material icon._

### Material Icon Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Material Icon Name')]]

| Type | Default |
|:----:|:-------:|
|text|add|

_Use a material icon for the fab without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons_

### Margin Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Margin Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|16|

_Returns the fab's bottom margin._

### Margin Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Margin Right')]]

| Type | Default |
|:----:|:-------:|
|number|16|

_Returns right margin_

### Ripple Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Ripple Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Returns the fab's ripple color._

### Rotation Duration (millisecond)

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation Duration (millisecond)')]]

| Type | Default |
|:----:|:-------:|
|number|300|

_Returns the fab's rotation duration in milliseconds._

### Rotation End Degrees

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation End Degrees')]]

| Type | Default |
|:----:|:-------:|
|number|360|

_Returns the fab's rotation end degrees._

### Rotate On Click

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotate On Click')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the fab will rotate on click._

### Rotation Start Degrees

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Rotation Start Degrees')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Returns the fab's rotation start degrees._

### Show Label On Left Side

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Show Label On Left Side')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Set the text message to the left side of the floating button. If false the text will be on the right side._

### Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Size')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Sets the size of the button. Use '1' for normal, '2' for mini or '3' for auto size based on the screen size._

### Label Background Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Set the text message background color._

### Label Corner Radius

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Set the text message corner radius._

### Label Text

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Text')]]

| Type |
|:----:|
|text|

_Set the text message._

### Label Text Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Label Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Set the text message color._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Action Button', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the fab button is visible._