# Spotlight

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that brings emphasis to the specified component by means of darkening the screen around that component.

## Events

### Clicked

Event triggered when the spotlight is clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Show Spotlight

Use this block to show the spotlight.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Show%20Spotlight%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Spotlight On FAB

Use this block to show the spotlight on a floating action button.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Show%20Spotlight%20On%20FAB%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22floating%20Action%20Button%22%5D%7D"></div>

| Params | []() |
|--------|------|
|floating Action Button|<span class="chip chip-component">Component</span>|

## Properties

### Circle Padding

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>20</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The padding for the circle spotlight. Default is '20'.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Circle%20Padding%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Circle%20Padding%22,%20%22getter%22:%20false%7D"></div>

### Component

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The component to show in the spotlight.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Component%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Component%22,%20%22getter%22:%20false%7D"></div>

### Dismiss On Back Press

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Dismiss the spotlight on back pressed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Dismiss%20On%20Back%20Press%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Dismiss%20On%20Back%20Press%22,%20%22getter%22:%20false%7D"></div>

### Dismiss On Touch

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Dismiss the spotlight on touch

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Dismiss%20On%20Touch%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Dismiss%20On%20Touch%22,%20%22getter%22:%20false%7D"></div>

### Enable Dismiss After Shown

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Dismiss spotlight on touch after spotlight is completely visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Enable%20Dismiss%20After%20Shown%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Enable%20Dismiss%20After%20Shown%22,%20%22getter%22:%20false%7D"></div>

### Enable Reveal Animation

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Enable reveal animation (Only for Lollipop and above).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Enable%20Reveal%20Animation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Enable%20Reveal%20Animation%22,%20%22getter%22:%20false%7D"></div>

### Fadein Text Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Fade in animation duration for spotlight text (Heading and Sub-heading).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Fadein%20Text%20Duration%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Fadein%20Text%20Duration%22,%20%22getter%22:%20false%7D"></div>

### Font Heading Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Font Heading Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Font%20Heading%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Font Subheading Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Font Subheading Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Font%20Subheading%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Heading Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight heading text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Heading%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Heading%20Text%22,%20%22getter%22:%20false%7D"></div>

### Heading Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #3F51B5;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight heading text color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Heading%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Heading%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Heading Text Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>32</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight heading size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Heading%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Heading%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>

### Intro Animation Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Intro animation duration (For Reveal and Fadein).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Intro%20Animation%20Duration%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Intro%20Animation%20Duration%22,%20%22getter%22:%20false%7D"></div>

### Line And Arc Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #3F51B5;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight line and arc color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Line%20And%20Arc%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Line%20And%20Arc%20Color%22,%20%22getter%22:%20false%7D"></div>

### Line Animation Duration

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Line animation duration

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Line%20Animation%20Duration%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Line%20Animation%20Duration%22,%20%22getter%22:%20false%7D"></div>

### Mask Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000be</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight mask color

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Mask%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Mask%20Color%22,%20%22getter%22:%20false%7D"></div>

### Show Target Arc

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true you will see a half round circle below the spotlight circle.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Show%20Target%20Arc%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Show%20Target%20Arc%22,%20%22getter%22:%20false%7D"></div>

### Subheading Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight subheading text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Subheading%20Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Subheading%20Text%22,%20%22getter%22:%20false%7D"></div>

### Subheading Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight subheading text color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Subheading%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Subheading%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Subheading Text Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>16</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Spotlight subheading text size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Subheading%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spotlight%22,%20%22name%22:%20%22Subheading%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>
