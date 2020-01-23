# Bottom Navigation

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Navigation|API 19, Android 4.4 - 4.4.4 KitKat|1|

## Overview

A visible component that shows a navigation menu in the bottom of the screen.

## Events

### Item Selected

Event triggers when an item was selected.

[[Event('Bottom Navigation', 'Item Selected', 'id', 'title')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|


## Methods

### Add Item

Add an item to the bottom menu

[[Method('Bottom Navigation', 'Add Item', False, 'id', 'title', 'image')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|


### Remove All Items

Remove all items from the bottom menu

[[Method('Bottom Navigation', 'Remove All Items', False)]]

### Remove Item

Remove an item from the bottom menu

[[Method('Bottom Navigation', 'Remove Item', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Select Item

Select an item from the bottom menu

[[Method('Bottom Navigation', 'Select Item', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Update Item

Update an item of the bottom menu

[[Method('Bottom Navigation', 'Update Item', False, 'id', 'title', 'image')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|title|<span class="chip chip-text">Text</span>|
|image|<span class="chip chip-text">Text</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the background color of the Bottom Navigation Menu

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Background Color')]]

### Selected Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the color of the selected item of the Bottom Navigation Menu

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Selected Color')]]

### Unselected Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #6E6E6E;">Default: <i>#6E6E6EFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the color of the unselected items of the Bottom Navigation Menu

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Unselected Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.