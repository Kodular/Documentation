# List View Image and Text

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Lists**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

## Overview

A visible component that displays a list of elements consisting of an image and two labels.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Click

Triggers when the user clicks on a item in the list

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%22position%22,%20%22title%22,%20%22subtitle%22,%20%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|

### Long Click

Triggers when the user long clicks on a item in the list

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%22position%22,%20%22title%22,%20%22subtitle%22,%20%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|

## Methods

### Add Item

Add a item to the list

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Add%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22image%22,%20%22title%22,%20%22subtitle%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|

### Add Item From List

Add a item to the list

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Add%20Item%20From%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22list%22%5D%7D"></div>

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|

### Clear List

Remove all the items from the list

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Clear%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Item

Remove a item from the list

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Remove%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|

### Update Item

Update a item of the list

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Update%20Item%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22,%20%22image%22,%20%22title%22,%20%22subtitle%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|
|image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|

## Properties

### Background Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFF00</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Set the background color of the listview

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Divider Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#CCCCCCFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #CCCCCC;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the divider color of the listview

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Divider%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Divider%20Color%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Determines the height of the list on the view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Image Side

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>1</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Set the side of the image  
Set it to 1 for Left side and 2 for Right side

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Image%20Side%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Image%20Side%22,%20%22getter%22:%20false%7D"></div>

### Item Size

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>1</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Set ListItem Size  
Set it to 1 for Normal size, 2 for Small size and 3 for Big size.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Item%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Item%20Size%22,%20%22getter%22:%20false%7D"></div>

### Subtitle Bold

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Whether the subtitle should be in bold text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Bold%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Bold%22,%20%22getter%22:%20false%7D"></div>

### Subtitle Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#757575FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #757575;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Changed the color of the subtitle text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Color%22,%20%22getter%22:%20false%7D"></div>

### Subtitle Font Typeface

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

Change the Typeface of the Subtitle

### Subtitle Font Typeface Import

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom title font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Subtitle HTML

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

If true, then the subtitle will show html text else it will show plain text. Note: Not all HTML is supported.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20HTML%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20HTML%22,%20%22getter%22:%20false%7D"></div>

### Subtitle Italic

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Whether the subtitle should be in italic text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Italic%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Italic%22,%20%22getter%22:%20false%7D"></div>

### Subtitle Text Size

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>14</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The text size of the subtitle.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Subtitle%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>

### Title Bold

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Whether the title should be in bold text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Bold%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Bold%22,%20%22getter%22:%20false%7D"></div>

### Title Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#212121FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #212121;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Changed the color of the title text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Color%22,%20%22getter%22:%20false%7D"></div>

### Title Font Typeface

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

Change the Typeface of the Title

### Title Font Typeface Import

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom title font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Title HTML

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

If true, then the title will show html text else it will show plain text. Note: Not all HTML is supported.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20HTML%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20HTML%22,%20%22getter%22:%20false%7D"></div>

### Title Italic

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Whether the title should be in italic text

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Italic%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Italic%22,%20%22getter%22:%20false%7D"></div>

### Title Text Size

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>14</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The text size of the title.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Title%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Determines the width of the list on the view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%20Image%20and%20Text%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
