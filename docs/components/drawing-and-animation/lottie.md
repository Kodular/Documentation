# Lottie

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Drawing and Animation|API 19, Android 4.4 - 4.4.4 KitKat|2|

## Overview

A visible component that displays animations from a json or zip file, or from a URL.

## Events

### Animation End

Triggers when the animation ends.

[[Event('Lottie', 'Animation End')]]

### Animation Repeat

Triggers when the animation repeated.

[[Event('Lottie', 'Animation Repeat')]]

### Animation Start

Triggers when the animation starts.

[[Event('Lottie', 'Animation Start')]]

### Click

Triggers when the components was clicked.

[[Event('Lottie', 'Click')]]

### Long Click

Triggers when the components was long clicked.

[[Event('Lottie', 'Long Click')]]

## Methods

### End Frame

Set the frame where you want the animation to end.

[[Method('Lottie', 'End Frame', False, 'frame')]]

| Params | []() |
|--------|------|
|frame|<span class="chip chip-number">Number</span>|


### Get Current Frame

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the frame where the animation is now.

[[Method('Lottie', 'Get Current Frame', True)]]

### Get Frame Count

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the count of frames in the animation.

[[Method('Lottie', 'Get Frame Count', True)]]

### Is Animating

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check if the Lottie component is animating.

[[Method('Lottie', 'Is Animating', True)]]

### Pause Animation

Pause the animation on the Lottie component.

[[Method('Lottie', 'Pause Animation', False)]]

### Resume Animation

Resume the animation on the Lottie component.

[[Method('Lottie', 'Resume Animation', False)]]

### Set Current Frame

Set the frame where you want the animation to be now.

[[Method('Lottie', 'Set Current Frame', False, 'frame')]]

| Params | []() |
|--------|------|
|frame|<span class="chip chip-number">Number</span>|


### Start Animation

Start the animation on the Lottie component.

[[Method('Lottie', 'Start Animation', False)]]

### Start Frame

Set the frame where you want the animation to start.

[[Method('Lottie', 'Start Frame', False, 'frame')]]

| Params | []() |
|--------|------|
|frame|<span class="chip chip-number">Number</span>|


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

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Lottie', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Lottie', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Lottie', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Lottie', 'Width Percent')]]