# State Progress Bar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that indicates the progress of an operation by highlighting the steps involved in that operation.

## Events

### Error Occurred

Event invoked when a error occurred.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### State Item Click

Event invoked when a state item was clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Item%20Click%22,%20%22param%22:%20%5B%22state%20Number%22,%20%22is%20Current%20State%22%5D%7D"></div>

| Params | []() |
|--------|------|
|state Number|<span class="chip chip-number">Number</span>|
|is Current State|<span class="chip chip-boolean">Boolean</span>|

## Properties

### All States Completed

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

If set to true all states are completed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22All%20States%20Completed%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22All%20States%20Completed%22,%20%22getter%22:%20false%7D"></div>

### Animate Between States

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true the states will use a animation when they changed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Animate%20Between%20States%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Animate%20Between%20States%22,%20%22getter%22:%20false%7D"></div>

### Animation Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>250</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the animation duration in milliseconds. Example: use 1000 for 1 second.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Animation%20Duration%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Animation%20Duration%22,%20%22getter%22:%20false%7D"></div>

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #444444;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Current State Description Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#4CAF50FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #4CAF50;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the current state description color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Current%20State%20Description%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Current%20State%20Description%20Color%22,%20%22getter%22:%20false%7D"></div>

### Current State Number

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the current state number.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Current%20State%20Number%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Current%20State%20Number%22,%20%22getter%22:%20false%7D"></div>

### Description Lines Spacing

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the description lines spacing.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Description%20Lines%20Spacing%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Description%20Lines%20Spacing%22,%20%22getter%22:%20false%7D"></div>

### Description Top Space Incrementer

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the description top space incrementer.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Description%20Top%20Space%20Incrementer%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Description%20Top%20Space%20Incrementer%22,%20%22getter%22:%20false%7D"></div>

### Elements From String

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Item 1, Item 2, Item 3, Item 4, Item 5</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The State Progress Bar elements specified as a string with the items separated by commas such as: Item 1, Item 2, Item 3, Item 4, Item 5. Each word before the comma will be an element in the list. You can add maximum 5 items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Elements%20From%20String%22,%20%22getter%22:%20false%7D"></div>

### Foreground Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#4CAF50FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #4CAF50;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the foreground color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Foreground%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Foreground%20Color%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Justify Multiline Description

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true justify multiline description is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Justify%20Multiline%20Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Justify%20Multiline%20Description%22,%20%22getter%22:%20false%7D"></div>

### Max Description Line

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the maximum description line.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Max%20Description%20Line%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Max%20Description%20Line%22,%20%22getter%22:%20false%7D"></div>

### Max State Number

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the maximum state number.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Max%20State%20Number%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Max%20State%20Number%22,%20%22getter%22:%20false%7D"></div>

### State Description Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #444444;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the state description color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Description%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Description%20Color%22,%20%22getter%22:%20false%7D"></div>

### State Description Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>18.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the state description size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Description%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Description%20Size%22,%20%22getter%22:%20false%7D"></div>

### State Description Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### State Description Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font for state description typeface.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Description%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### State Line Thickness

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the state line thickness.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Line%20Thickness%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Line%20Thickness%22,%20%22getter%22:%20false%7D"></div>

### State Number Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the state number background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### State Number Foreground Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the state number foreground color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Foreground%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Foreground%20Color%22,%20%22getter%22:%20false%7D"></div>

### State Number Is Descending

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true the state number is in descending order.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Is%20Descending%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Is%20Descending%22,%20%22getter%22:%20false%7D"></div>

### State Number Text Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>20.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the state number text size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>

### State Number Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### State Number Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font for state number typeface.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Number%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### State Progress Bar Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>40.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the state progress bar height.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Progress%20Bar%20Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22State%20Progress%20Bar%20Height%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22State%20Progress%20Bar%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
