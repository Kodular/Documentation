# View Flipper

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|1|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that can animate between two or more layout components that have been added to it.

## Methods

### Add Component To View

[[Method('View Flipper', 'Add Component To View', False, 'component')]]

| Params | []() |
|--------|------|
|component|Component|


Add a component to the view flipper. The first added component will be the first visible component on the screen.

### Add Images To View

[[Method('View Flipper', 'Add Images To View', False, 'images')]]

| Params | []() |
|--------|------|
|images|List|


Use this function if you try to create a image view flipper. Please use a 'make a list' block.

### Show Next

[[Method('View Flipper', 'Show Next', False)]]

Show the next view.

### Show Previous

[[Method('View Flipper', 'Show Previous', False)]]

Show the previous view.

### Start Flipping

[[Method('View Flipper', 'Start Flipping', False)]]

Start a timer to cycle through child views.

### Stop Flipping

[[Method('View Flipper', 'Stop Flipping', False)]]

No more flips.

### is Flipping

[[Method('View Flipper', 'is Flipping', False)]]

Returns true if the child views are flipping.

## Properties

### Add Images From String

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Use this function if you try to create a image view flipper. Use images separated by commas such as: Image1.png,Image2.png,Image3.png.

[[PropertyBlockGetterAndSetter('View Flipper', 'Add Images From String')]]

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&H00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the view flippers background color.

[[PropertyBlockGetterAndSetter('View Flipper', 'Background Color')]]

### Flip Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

How long to wait before flipping to the next view in milliseconds.

[[PropertyBlockGetterAndSetter('View Flipper', 'Flip Interval')]]

### Swipeable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true you can swipe with your fingers through views.

[[PropertyBlockGetterAndSetter('View Flipper', 'Swipeable')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('View Flipper', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('View Flipper', 'Column')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('View Flipper', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('View Flipper', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('View Flipper', 'Row')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('View Flipper', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('View Flipper', 'Width Percent')]]