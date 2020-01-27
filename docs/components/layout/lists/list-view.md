# List View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Lists**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">13</span>|

## Overview

This is a visible component that displays a list of text elements.   
 The list can be set using the ElementsFromString property or using the Elements block in the blocks editor.

## Events

### After Picking

Simple event to be raised after the an element has been chosen in the list. The selected element is available in the Selection property.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22After%20Picking%22,%20%22param%22:%20%5B%5D%7D"></div>

### Long Click

Simple event to be raised after the an element has been chosen in the list via long click. The selected element is available in the Selection property.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Clear List

Remove all the items from the list

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Clear%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#607D8BFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #607D8B;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color of the listview background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Divider Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the divider color

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Divider%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Divider%20Color%22,%20%22getter%22:%20false%7D"></div>

### Divider Height

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the divider height.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Divider%20Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Divider%20Height%22,%20%22getter%22:%20false%7D"></div>

### Elements

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

List of text elements to show in the ListView.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Elements%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Elements%22,%20%22getter%22:%20false%7D"></div>

### Elements From String

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The ListView elements specified as a string with the items separated by commas such as: Cheese,Fruit,Bacon,Radish. Each word before the comma will be an element in the list.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Elements%20From%20String%22,%20%22getter%22:%20false%7D"></div>

### Filter Bar Hint

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Search list...</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The hint that will be displayed in the filter bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Filter%20Bar%20Hint%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Filter%20Bar%20Hint%22,%20%22getter%22:%20false%7D"></div>

### Font Bold

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Font Italic

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Font Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>22</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The text size of the listview items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>

### Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Determines the height of the list on the view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true if html is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22HTML%20Format%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22HTML%20Format%22,%20%22getter%22:%20false%7D"></div>

### Item Height in %

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the listview item height. If you write 10, that means the item height will be 10 percent of the device screen height.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Item%20Height%20in%20%25%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Item%20Height%20in%20%25%22,%20%22getter%22:%20false%7D"></div>

### Long Click Enabled

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true long click on items are enabled, else long click is disabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Long%20Click%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Long%20Click%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Scroll To Position

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Smoothly scroll to the specified position. The listview will scroll such that the indicated position is displayed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Scroll%20To%20Position%22,%20%22getter%22:%20false%7D"></div>

### Scrollbar Fading

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Return the state of ScrollbarFading. If ScrollbarFading is enabled returns true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Scrollbar%20Fading%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Scrollbar%20Fading%22,%20%22getter%22:%20false%7D"></div>

### Scrolling Speed

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The amount of friction applied to flings.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Scrolling%20Speed%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Scrolling%20Speed%22,%20%22getter%22:%20false%7D"></div>

### Search Hint Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#CCCCCCFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #CCCCCC;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color of the search hint text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Search%20Hint%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Search%20Hint%20Color%22,%20%22getter%22:%20false%7D"></div>

### Search Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color of the search text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Search%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Search%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Search Text Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The text size of the search text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Search%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Search%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>

### Selection

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the selection to the ListView.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20false%7D"></div>

### Selection Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#CCCCCCFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #CCCCCC;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color of the item when it is selected.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Selection%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Selection%20Color%22,%20%22getter%22:%20false%7D"></div>

### Selection Index

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0. If an attempt is made to set this to a number less than 1 or greater than the number of items in the ListView, SelectionIndex will be set to 0, and Selection will be set to the empty text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Selection%20Index%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Selection%20Index%22,%20%22getter%22:%20false%7D"></div>

### Show Filter Bar

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets visibility of ShowFilterBar. True will show the bar, False will hide it.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Show%20Filter%20Bar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Show%20Filter%20Bar%22,%20%22getter%22:%20false%7D"></div>

### Show Scrollbar

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Return the state of ShowScrollbar. If ShowScrollbar is enabled returns true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Show%20Scrollbar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Show%20Scrollbar%22,%20%22getter%22:%20false%7D"></div>

### Show Selection Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Sets visibility of ShowSelectionColor. True will show the selection color on a selected item, False will hide it.

### Text Alignment

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The text color of the listview items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Determines the width of the list on the view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20View%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
