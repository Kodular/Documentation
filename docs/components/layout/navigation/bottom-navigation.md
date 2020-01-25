# Bottom Navigation

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Navigation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that shows a navigation menu in the bottom of the screen.

## Events

### Item Selected

Event triggers when an item was selected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Item%20Selected%22,%20%22param%22:%20%5B%22id%22,%20%22title%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|

## Methods

### Add Item

Add an item to the bottom menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Add%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|

### Remove All Items

Remove all items from the bottom menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Remove%20All%20Items%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Item

Remove an item from the bottom menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Remove%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Select Item

Select an item from the bottom menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Select%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Update Item

Update an item of the bottom menu

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Update%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the background color of the Bottom Navigation Menu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Selected Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #3F51B5;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the color of the selected item of the Bottom Navigation Menu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Selected%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Selected%20Color%22,%20%22getter%22:%20false%7D"></div>

### Unselected Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#6E6E6EFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #6E6E6E;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the color of the unselected items of the Bottom Navigation Menu

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Unselected%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Unselected%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bottom%20Navigation%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
