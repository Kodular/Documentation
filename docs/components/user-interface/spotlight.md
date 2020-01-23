# Spotlight

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|User Interface|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that brings emphasis to the specified component by means of darkening the screen around that component.

## Events

### Clicked

Event triggered when the spotlight is clicked.

[[Event('Spotlight', 'Clicked')]]

## Methods

### Show Spotlight

Use this block to show the spotlight.

[[Method('Spotlight', 'Show Spotlight', False)]]

### Show Spotlight On FAB

Use this block to show the spotlight on a floating action button.

[[Method('Spotlight', 'Show Spotlight On FAB', False, 'floatingActionButton')]]

| Params | []() |
|--------|------|
|floating Action Button|<span class="chip chip-component">Component</span>|


## Properties

### Circle Padding

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>20</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The padding for the circle spotlight. Default is '20'.

[[PropertyBlockGetterAndSetter('Spotlight', 'Circle Padding')]]

### Component

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The component to show in the spotlight.

[[PropertyBlockGetterAndSetter('Spotlight', 'Component')]]

### Dismiss On Back Press

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Dismiss the spotlight on back pressed.

[[PropertyBlockGetterAndSetter('Spotlight', 'Dismiss On Back Press')]]

### Dismiss On Touch

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Dismiss the spotlight on touch

[[PropertyBlockGetterAndSetter('Spotlight', 'Dismiss On Touch')]]

### Enable Dismiss After Shown

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Dismiss spotlight on touch after spotlight is completely visible.

[[PropertyBlockGetterAndSetter('Spotlight', 'Enable Dismiss After Shown')]]

### Enable Reveal Animation

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable reveal animation (Only for Lollipop and above).

[[PropertyBlockGetterAndSetter('Spotlight', 'Enable Reveal Animation')]]

### Fadein Text Duration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Fade in animation duration for spotlight text (Heading and Sub-heading).

[[PropertyBlockGetterAndSetter('Spotlight', 'Fadein Text Duration')]]

### Font Heading Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Font Heading Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Spotlight', 'Font Heading Typeface Import')]]

### Font Subheading Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Font Subheading Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Spotlight', 'Font Subheading Typeface Import')]]

### Heading Text

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight heading text.

[[PropertyBlockGetterAndSetter('Spotlight', 'Heading Text')]]

### Heading Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight heading text color.

[[PropertyBlockGetterAndSetter('Spotlight', 'Heading Text Color')]]

### Heading Text Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>32</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight heading size.

[[PropertyBlockGetterAndSetter('Spotlight', 'Heading Text Size')]]

### Intro Animation Duration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Intro animation duration (For Reveal and Fadein).

[[PropertyBlockGetterAndSetter('Spotlight', 'Intro Animation Duration')]]

### Line And Arc Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight line and arc color.

[[PropertyBlockGetterAndSetter('Spotlight', 'Line And Arc Color')]]

### Line Animation Duration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Line animation duration

[[PropertyBlockGetterAndSetter('Spotlight', 'Line Animation Duration')]]

### Mask Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000be</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight mask color

[[PropertyBlockGetterAndSetter('Spotlight', 'Mask Color')]]

### Show Target Arc

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true you will see a half round circle below the spotlight circle.

[[PropertyBlockGetterAndSetter('Spotlight', 'Show Target Arc')]]

### Subheading Text

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight subheading text.

[[PropertyBlockGetterAndSetter('Spotlight', 'Subheading Text')]]

### Subheading Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight subheading text color.

[[PropertyBlockGetterAndSetter('Spotlight', 'Subheading Text Color')]]

### Subheading Text Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>16</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Spotlight subheading text size.

[[PropertyBlockGetterAndSetter('Spotlight', 'Subheading Text Size')]]