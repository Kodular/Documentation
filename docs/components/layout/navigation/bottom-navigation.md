# Bottom Navigation

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|1|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that shows a navigation menu in the bottom of the screen.

## Events

### Item Selected

[[Event('Bottom Navigation', 'Item Selected', 'id', 'title')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|


Event triggers when an item was selected.

## Methods

### Add Item

[[Method('Bottom Navigation', 'Add Item', False, 'id', 'title', 'image')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|image|Text|


Add an item to the bottom menu

### Remove All Items

[[Method('Bottom Navigation', 'Remove All Items', False)]]

Remove all items from the bottom menu

### Remove Item

[[Method('Bottom Navigation', 'Remove Item', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove an item from the bottom menu

### Select Item

[[Method('Bottom Navigation', 'Select Item', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Select an item from the bottom menu

### Update Item

[[Method('Bottom Navigation', 'Update Item', False, 'id', 'title', 'image')]]

| Params | []() |
|--------|------|
|id|Number|
|title|Text|
|image|Text|


Update an item of the bottom menu

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the background color of the Bottom Navigation Menu

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Background Color')]]

### Selected Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF3F51B5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the color of the selected item of the Bottom Navigation Menu

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Selected Color')]]

### Unselected Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF6E6E6E</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the color of the unselected items of the Bottom Navigation Menu

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Unselected Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Column')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Row')]]