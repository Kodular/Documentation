# View Pager

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Navigation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

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

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Get the current selected visible page.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Get%20Current%20Page%22,%20%22getter%22:%20true%7D"></div>

### Height

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Select Page

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Select a page which is then the active page.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Select%20Page%22,%20%22getter%22:%20false%7D"></div>

### Show Tabs

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Experimental^^ Property</small>

If set to true, you will see tabs above the view pager.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Show%20Tabs%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Show%20Tabs%22,%20%22getter%22:%20false%7D"></div>

### Tabs Active Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FF4081FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FF4081;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's text color for active tab's.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Active%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Active%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Background Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #3F51B5;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Indicator Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's indicator color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Indicator%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Indicator%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Mode

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>1</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Tabs Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's text color for not selected tab's.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Tabs%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22View%20Pager%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
