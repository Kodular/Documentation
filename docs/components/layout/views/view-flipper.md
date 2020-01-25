# View Flipper

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Views**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that can animate between two or more layout components that have been added to it.

## Methods

### Add Component To View

Add a component to the view flipper. The first added component will be the first visible component on the screen.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Add%20Component%20To%20View%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22component%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|

### Add Images To View

Use this function if you try to create a image view flipper. Please use a 'make a list' block.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Add%20Images%20To%20View%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22images%22%5D%7D"></div>

| Params | []() |
|--------|------|
|images|<span class="chip chip-list">List</span>|

### is Flipping

Returns true if the child views are flipping.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22is%20Flipping%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Next

Show the next view.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Show%20Next%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Previous

Show the previous view.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Show%20Previous%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start Flipping

Start a timer to cycle through child views.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Start%20Flipping%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Flipping

No more flips.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Stop%20Flipping%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Add Images From String

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Use this function if you try to create a image view flipper. Use images separated by commas such as: Image1.png,Image2.png,Image3.png.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Add%20Images%20From%20String%22,%20%22getter%22:%20false%7D"></div>

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#00000000</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the view flippers background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Flip Interval

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1000</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

How long to wait before flipping to the next view in milliseconds.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Flip%20Interval%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Flip%20Interval%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Swipeable

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

If set to true you can swipe with your fingers through views.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Swipeable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Swipeable%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Flipper%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
