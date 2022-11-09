# Linear Progressbar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that indicates the progress of an operation using an animated linear bar.

## Events

### Progress Changed

Event that indicates that the progress of the progress bar has been changed. Returns the current progress value. If "Indeterminate" is set to true, then it returns "0".

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Progress%20Changed%22,%20%22param%22:%20%5B%22progress%22%5D%7D"></div>

| Params | []() |
|--------|------|
|progress|<span class="chip chip-number">Number</span>|

## Methods

### Increment Progress By

Increase the progress bar's progress by the specified amount.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Increment%20Progress%20By%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-number">Number</span>|

## Properties

### Indeterminate

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the indeterminate mode for this progress bar. In indeterminate mode, the progress is ignored and the progress bar shows an infinite animation instead.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Indeterminate%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Indeterminate%22,%20%22getter%22:%20false%7D"></div>

### Indeterminate Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#2196F2FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #2196F2;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the indeterminate color of the progress bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Indeterminate%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Indeterminate%20Color%22,%20%22getter%22:%20false%7D"></div>

### Maximum

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>100</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the upper range of the progress bar max.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Maximum%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Maximum%22,%20%22getter%22:%20false%7D"></div>

### Minimum

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the lower range of the progress bar to min. This function works only for devices with API &gt;= 26

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Minimum%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Minimum%22,%20%22getter%22:%20false%7D"></div>

### Progress

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Sets the current progress to the specified value. Does not do anything if the progress bar is in indeterminate mode.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Progress%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Progress%22,%20%22getter%22:%20false%7D"></div>

### Progress Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#2196F2FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #2196F2;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Change the progress color of the progress bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Progress%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Progress%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Linear%20Progressbar%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
