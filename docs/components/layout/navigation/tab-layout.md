# Tab Layout

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Navigation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that groups other layout components such that only one of its children is shown at a time. Each of the child layouts can be accessed either by swiping left and right, or using the tabs at the top.

## Events

### Tab Item Selected

The event returns the name or the position of the selected tab.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tab%20Item%20Selected%22,%20%22param%22:%20%5B%22tab%22,%20%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tab|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-number">Number</span>|

## Methods

### Add New Tab

Add a new tab to the tab layout. If you don't want a icon then let it empty.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Add%20New%20Tab%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22name%22,%20%22icon%22%5D%7D"></div>

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|

### Add New Tab At

Add a new tab to the tab layout at the given position. If you don't want a icon then let it empty.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Add%20New%20Tab%20At%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22name%22,%20%22icon%22,%20%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-number">Number</span>|

### Count Tabs

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns the number of current added tab's.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Count%20Tabs%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Remove All Tabs

Remove all tab's from tab layout.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Remove%20All%20Tabs%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Tab At

Removes a before added tab. If you want to delete the first tab then use as position '1'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Remove%20Tab%20At%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

## Properties

### Get Current Tab

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Get the current selected tab.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Get%20Current%20Tab%22,%20%22getter%22:%20true%7D"></div>

### Select Tab

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Select a tab which is then the active tab.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Select%20Tab%22,%20%22getter%22:%20false%7D"></div>

### Tabs Active Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #FF4081;">Default: <i>#FF4081FF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's text color for active tab's.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Active%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Active%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Background Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Indicator Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's indicator color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Indicator%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Indicator%20Color%22,%20%22getter%22:%20false%7D"></div>

### Tabs Mode

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>1</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Tabs Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the tab's text color for not selected tab's.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Tabs%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tab%20Layout%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
