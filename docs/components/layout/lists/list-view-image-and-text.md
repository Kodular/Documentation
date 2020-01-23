# List View Image and Text

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Lists|4|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that displays a list of elements consisting of an image and two labels.

## Events

### Click

[[Event('List View Image and Text', 'Click', 'position', 'title', 'subtitle', 'image')]]

| Params | []() |
|--------|------|
|position|Number|
|title|Text|
|subtitle|Text|
|image|Text|


Triggers when the user clicks on a item in the list

### Long Click

[[Event('List View Image and Text', 'Long Click', 'position', 'title', 'subtitle', 'image')]]

| Params | []() |
|--------|------|
|position|Number|
|title|Text|
|subtitle|Text|
|image|Text|


Triggers when the user long clicks on a item in the list

## Methods

### Add Item

[[Method('List View Image and Text', 'Add Item', False, 'image', 'title', 'subtitle')]]

| Params | []() |
|--------|------|
|image|Text|
|title|Text|
|subtitle|Text|


Add a item to the list

### Add Item From List

[[Method('List View Image and Text', 'Add Item From List', False, 'list')]]

| Params | []() |
|--------|------|
|list|List|


Add a item to the list

### Clear List

[[Method('List View Image and Text', 'Clear List', False)]]

Remove all the items from the list

### Remove Item

[[Method('List View Image and Text', 'Remove Item', False, 'position')]]

| Params | []() |
|--------|------|
|position|Number|


Remove a item from the list

### Update Item

[[Method('List View Image and Text', 'Update Item', False, 'position', 'image', 'title', 'subtitle')]]

| Params | []() |
|--------|------|
|position|Number|
|image|Text|
|title|Text|
|subtitle|Text|


Update a item of the list

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&H00FFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the background color of the listview

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Background Color')]]

### Divider Color

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFCCCCCC</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF757575</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Changed the color of the subtitle text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Color')]]

### Subtitle Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the Typeface of the Subtitle

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface')]]

### Subtitle Font Typeface Import

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set a custom title font.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface Import')]]

### Subtitle HTML

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF212121</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Changed the color of the title text

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Color')]]

### Title Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the Typeface of the Title

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface')]]

### Title Font Typeface Import

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set a custom title font.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface Import')]]

### Title HTML

 <small>Available as ^^Advanced^^ Property</small>

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Column')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Determines the height of the list on the view.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Row')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Determines the width of the list on the view.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width Percent')]]