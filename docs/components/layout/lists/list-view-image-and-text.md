# List View Image and Text

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Lists|API 19, Android 4.4 - 4.4.4 KitKat|4|

## Overview

A visible component that displays a list of elements consisting of an image and two labels.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Click

Triggers when the user clicks on a item in the list

[[Event('List View Image and Text', 'Click', 'position', 'title', 'subtitle', 'image')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|


### Long Click

Triggers when the user long clicks on a item in the list

[[Event('List View Image and Text', 'Long Click', 'position', 'title', 'subtitle', 'image')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|


## Methods

### Add Item

Add a item to the list

[[Method('List View Image and Text', 'Add Item', False, 'image', 'title', 'subtitle')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|


### Add Item From List

Add a item to the list

[[Method('List View Image and Text', 'Add Item From List', False, 'list')]]

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|


### Clear List

Remove all the items from the list

[[Method('List View Image and Text', 'Clear List', False)]]

### Remove Item

Remove a item from the list

[[Method('List View Image and Text', 'Remove Item', False, 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


### Update Item

Update a item of the list

[[Method('List View Image and Text', 'Update Item', False, 'position', 'image', 'title', 'subtitle')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|
|image|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|subtitle|<span class="chip chip-text">Text</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFF00</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the background color of the listview

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Background Color')]]

### Divider Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set the divider color of the listview

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Divider Color')]]

### Image Side

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the side of the image  
Set it to 1 for Left side and 2 for Right side

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Image Side')]]

### Item Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set ListItem Size  
Set it to 1 for Normal size, 2 for Small size and 3 for Big size.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Item Size')]]

### Subtitle Bold

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the subtitle should be in bold text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Bold')]]

### Subtitle Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #757575;">Default: <i>#757575FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Changed the color of the subtitle text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Color')]]

### Subtitle Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Change the Typeface of the Subtitle

### Subtitle Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom title font.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface Import')]]

### Subtitle HTML

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

If true, then the subtitle will show html text else it will show plain text. Note: Not all HTML is supported.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle HTML')]]

### Subtitle Italic

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the subtitle should be in italic text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Italic')]]

### Subtitle Text Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The text size of the subtitle.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Text Size')]]

### Title Bold

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the title should be in bold text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Bold')]]

### Title Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #212121;">Default: <i>#212121FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Changed the color of the title text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Color')]]

### Title Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Change the Typeface of the Title

### Title Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom title font.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface Import')]]

### Title HTML

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

If true, then the title will show html text else it will show plain text. Note: Not all HTML is supported.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title HTML')]]

### Title Italic

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the title should be in italic text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Italic')]]

### Title Text Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The text size of the title.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Text Size')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Determines the height of the list on the view.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Determines the width of the list on the view.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width Percent')]]