# Lottie

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|2|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that displays animations from a json or zip file, or from a URL.

## Events

### Animation End

[[Event('Lottie', 'Animation End')]]

Triggers when the animation ends.

### Animation Repeat

[[Event('Lottie', 'Animation Repeat')]]

Triggers when the animation repeated.

### Animation Start

[[Event('Lottie', 'Animation Start')]]

Triggers when the animation starts.

### Click

[[Event('Lottie', 'Click')]]

Triggers when the components was clicked.

### Long Click

[[Event('Lottie', 'Long Click')]]

Triggers when the components was long clicked.

## Methods

### End Frame

[[Method('Lottie', 'End Frame', False, 'frame')]]

| Params | []() |
|--------|------|
|frame|Number|


Set the frame where you want the animation to end.

### Get Current Frame

[[Method('Lottie', 'Get Current Frame', True)]]

{>>Returns `number`<<}

Get the frame where the animation is now.

### Get Frame Count

[[Method('Lottie', 'Get Frame Count', True)]]

{>>Returns `number`<<}

Get the count of frames in the animation.

### Is Animating

[[Method('Lottie', 'Is Animating', True)]]

{>>Returns `boolean`<<}

Check if the Lottie component is animating.

### Pause Animation

[[Method('Lottie', 'Pause Animation', False)]]

Pause the animation on the Lottie component.

### Resume Animation

[[Method('Lottie', 'Resume Animation', False)]]

Resume the animation on the Lottie component.

### Set Current Frame

[[Method('Lottie', 'Set Current Frame', False, 'frame')]]

| Params | []() |
|--------|------|
|frame|Number|


Set the frame where you want the animation to be now.

### Start Animation

[[Method('Lottie', 'Start Animation', False)]]

Start the animation on the Lottie component.

### Start Frame

[[Method('Lottie', 'Start Frame', False, 'frame')]]

| Params | []() |
|--------|------|
|frame|Number|


Set the frame where you want the animation to start.

## Properties

### Animation Speed

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the speed of the animation.

[[PropertyBlockGetterAndSetter('Lottie', 'Animation Speed')]]

### Clickable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the component clickable or not clickable.

[[PropertyBlockGetterAndSetter('Lottie', 'Clickable')]]

### Loop Animation

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set to true if you want to loop the animation.

[[PropertyBlockGetterAndSetter('Lottie', 'Loop Animation')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the file or url of the file you want to load.

[[PropertyBlockGetterAndSetter('Lottie', 'Source')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Lottie', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Lottie', 'Column')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Lottie', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Lottie', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Lottie', 'Row')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Lottie', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Lottie', 'Width Percent')]]