# State Progress Bar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that indicates the progress of an operation by highlighting the steps involved in that operation.

## Events

### Error Occurred

Event invoked when a error occurred.

[[Event('State Progress Bar', 'Error Occurred', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|


### State Item Click

Event invoked when a state item was clicked.

[[Event('State Progress Bar', 'State Item Click', 'stateNumber', 'isCurrentState')]]

| Params | []() |
|--------|------|
|state Number|<span class="chip chip-number">Number</span>|
|is Current State|<span class="chip chip-boolean">Boolean</span>|


## Properties

### Animation Duration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>250</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the animation duration in milliseconds. Example: use 1000 for 1 second.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Animation Duration')]]

### Animate Between States

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

If set to true the states will use a animation when they changed.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Animate Between States')]]

### Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #444444;">Default: <i>#444444FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the background color.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Background Color')]]

### Current State Description Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #4CAF50;">Default: <i>#4CAF50FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the current state description color.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Current State Description Color')]]

### Current State Number

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the current state number.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Current State Number')]]

### Description Lines Spacing

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the description lines spacing.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Description Lines Spacing')]]

### Description Top Space Incrementer

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the description top space incrementer.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Description Top Space Incrementer')]]

### Elements From String

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Item 1, Item 2, Item 3, Item 4, Item 5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The State Progress Bar elements specified as a string with the items separated by commas such as: Item 1, Item 2, Item 3, Item 4, Item 5. Each word before the comma will be an element in the list. You can add maximum 5 items.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Elements From String')]]

### Foreground Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #4CAF50;">Default: <i>#4CAF50FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the foreground color.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Foreground Color')]]

### Justify Multiline Description

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

If set to true justify multiline description is enabled.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Justify Multiline Description')]]

### Max Description Line

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the maximum description line.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Max Description Line')]]

### Max State Number

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the maximum state number.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Max State Number')]]

### State Description Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #444444;">Default: <i>#444444FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the state description color.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Color')]]

### State Description Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>18.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the state description size.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Size')]]

### State Description Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### State Description Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom font for state description typeface.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Description Typeface Import')]]

### State Line Thickness

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the state line thickness.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Line Thickness')]]

### State Number Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the state number background color.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Background Color')]]

### State Number Foreground Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the state number foreground color.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Foreground Color')]]

### State Number Is Descending

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true the state number is in descending order.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Is Descending')]]

### State Number Text Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>20.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the state number text size.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Text Size')]]

### State Number Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### State Number Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom font for state number typeface.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Number Typeface Import')]]

### State Progress Bar Height

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>40.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the state progress bar height.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'State Progress Bar Height')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Visible')]]

### All States Completed

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If set to true all states are completed.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'All States Completed')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('State Progress Bar', 'Width Percent')]]