# Swipe Refresh Layout

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > General**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that groups other components and lets the user refresh them via a swipe-down gesture.

## Events

### On Refresh

Event to detect when a refresh is triggered via the swipe gesture.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22On%20Refresh%22,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Align Horizontal

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

A number that encodes how contents of the arrangement are aligned horizontally. The choices are: 1 = left aligned, 2 = right aligned, 3 = horizontally centered. Alignment has no effect if the arrangement's width is automatic.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Align%20Horizontal%22,%20%22getter%22:%20false%7D"></div>

### Align Vertical

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Alignment has no effect if the arrangement's height is automatic.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Align%20Vertical%22,%20%22getter%22:%20false%7D"></div>

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#00000000</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The background color of the swipe refresh layout.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true the swpipe refresh layout is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Is Refreshing

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if is actively showing refresh progress.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Is%20Refreshing%22,%20%22getter%22:%20true%7D"></div>

### Large Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled is set to true the pull size will be large, else the size is default.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Large%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Large%20Size%22,%20%22getter%22:%20false%7D"></div>

### Nested Scrolling

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Enable or disable nested scrolling for this view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Nested%20Scrolling%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Nested%20Scrolling%22,%20%22getter%22:%20false%7D"></div>

### Progress Animation Colors

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Set the colors used in the progress animation. Use a 'make a list' block. The first color on the list is than the first spinner color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Progress%20Animation%20Colors%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Progress%20Animation%20Colors%22,%20%22getter%22:%20false%7D"></div>

### Progress Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the pull to refresh background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Progress%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Progress%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Refreshing

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Notify the widget that refresh state has changed. Do not call this when refresh is triggered by a swipe gesture.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Refreshing%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Swipe%20Refresh%20Layout%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
