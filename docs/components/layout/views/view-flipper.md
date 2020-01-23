# View Flipper

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Views|API 19, Android 4.4 - 4.4.4 KitKat|1|

## Overview

A visible component that can animate between two or more layout components that have been added to it.

## Methods

### Add Component To View

Add a component to the view flipper. The first added component will be the first visible component on the screen.

[[Method('View Flipper', 'Add Component To View', False, 'component')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Add Images To View

Use this function if you try to create a image view flipper. Please use a 'make a list' block.

[[Method('View Flipper', 'Add Images To View', False, 'images')]]

| Params | []() |
|--------|------|
|images|<span class="chip chip-list">List</span>|


### Show Next

Show the next view.

[[Method('View Flipper', 'Show Next', False)]]

### Show Previous

Show the previous view.

[[Method('View Flipper', 'Show Previous', False)]]

### Start Flipping

Start a timer to cycle through child views.

[[Method('View Flipper', 'Start Flipping', False)]]

### Stop Flipping

No more flips.

[[Method('View Flipper', 'Stop Flipping', False)]]

### is Flipping

Returns true if the child views are flipping.

[[Method('View Flipper', 'is Flipping', False)]]

## Properties

### Add Images From String

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Use this function if you try to create a image view flipper. Use images separated by commas such as: Image1.png,Image2.png,Image3.png.

[[PropertyBlockGetterAndSetter('View Flipper', 'Add Images From String')]]

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#00000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('View Flipper', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('View Flipper', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('View Flipper', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('View Flipper', 'Width Percent')]]