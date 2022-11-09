# View Pager

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Navigation**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">3</span>|

## Overview

A visible component that groups other layout components each of which can be accessed by swiping left or right.

## Events

### Page Selected

Event to detect that a page was selected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Page%20Selected%22,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

## Methods

### Add Component To View

Add a component to the view pager. The first added component will be the first visible component on the screen.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Add%20Component%20To%20View%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22component%22,%20%22tab%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|tab Name|<span class="chip chip-text">Text</span>|

### Remove All Tabs

Remove all tab's from view pager.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Remove%20All%20Tabs%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove View At

Removes a before added view from the view pager. If you want to delete the first page then use as position '1'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Remove%20View%20At%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

## Properties

### Get Current Page

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the current selected visible page.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Get%20Current%20Page%22,%20%22getter%22:%20true%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Select Page

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Select a page which is then the active page. Use '1' to select the first page.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Select%20Page%22,%20%22getter%22:%20false%7D"></div>

### Show Tabs

<small>Available as ^^Experimental^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true, you will see tabs above the view pager.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Show%20Tabs%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Show%20Tabs%22,%20%22getter%22:%20false%7D"></div>

### Tabs Active Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FF4081FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FF4081;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the tab's text color for active tab's.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Active%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Active%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #3F51B5;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the tab's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Indicator Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the tab's indicator color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Indicator%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Indicator%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Tabs Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the tab's text color for not selected tab's.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
