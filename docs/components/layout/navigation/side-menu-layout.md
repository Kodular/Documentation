# Side Menu Layout

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Navigation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that creates a side menu.   
Side menus are navigation menus that slide from the left of the screen via a swipe-right gesture.

## Events

### On Menu Item Click

Triggers when the user clicks on an item of the Navigation Menu

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22On%20Menu%20Item%20Click%22,%20%22param%22:%20%5B%22title%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|

## Methods

### Add Item

Add an item to the Navigation Menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Add%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22image%22,%20%22enabled%22,%20%22checked%22,%20%22group%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|
|checked|<span class="chip chip-boolean">Boolean</span>|
|group|<span class="chip chip-number">Number</span>|

### Remove Item

Remove an item from the Navigation Menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Remove%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|

### Update Item

Update an item of the Navigation Menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Update%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22new%20Title%22,%20%22image%22,%20%22enabled%22,%20%22checked%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|new Title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|
|checked|<span class="chip chip-boolean">Boolean</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the background color of the Sidemenu Layout

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Circle Header Picture

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets (or not) the header picture to use a circle shape

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Circle%20Header%20Picture%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Circle%20Header%20Picture%22,%20%22getter%22:%20false%7D"></div>

### Disabled Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#9E9E9EFF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #9E9E9E;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the color of the disabled elements of the SideMenu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Disabled%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Disabled%20Color%22,%20%22getter%22:%20false%7D"></div>

### Enabled Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #000000;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the color of the enabled elements of the SideMenu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Enabled%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Enabled%20Color%22,%20%22getter%22:%20false%7D"></div>

### Header Background Image

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the Header Background Picture

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Background%20Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Background%20Image%22,%20%22getter%22:%20false%7D"></div>

### Header Picture

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the Header Picture of the Side Menu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Picture%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Picture%22,%20%22getter%22:%20false%7D"></div>

### Header Subtitle

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the Header Subtitle

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Subtitle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Subtitle%22,%20%22getter%22:%20false%7D"></div>

### Header Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the Header Title

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Header%20Title%22,%20%22getter%22:%20false%7D"></div>

### Selected Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#E81E63FF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #E81E63;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the color of the selected element of the SideMenu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Selected%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Side%20Menu%20Layout%22,%20%22name%22:%20%22Selected%20Color%22,%20%22getter%22:%20false%7D"></div>
