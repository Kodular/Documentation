# List View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Lists|13|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

This is a visible component that displays a list of text elements.   
 The list can be set using the ElementsFromString property or using the Elements block in the blocks editor. 

## Events

### After Picking

[[Event('List View', 'After Picking')]]

Simple event to be raised after the an element has been chosen in the list. The selected element is available in the Selection property.

### Long Click

[[Event('List View', 'Long Click')]]

Simple event to be raised after the an element has been chosen in the list via long click. The selected element is available in the Selection property.

## Methods

### Clear List

_Block preview not available_

Remove all the items from the list

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF607D8B|

The color of the listview background.

### Divider Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Divider Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Set the divider color

### Divider Height

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Divider Height')]]

| Type | Default |
|:----:|:-------:|
|number|2|

Set the divider height.

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Elements From String')]]

| Type |
|:----:|
|text|

The ListView elements specified as a string with the items separated by commas such as: Cheese,Fruit,Bacon,Radish. Each word before the comma will be an element in the list.

### Filter Bar Hint

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Filter Bar Hint')]]

| Type | Default |
|:----:|:-------:|
|text|Search list...|

The hint that will be displayed in the filter bar.

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom font.

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true if html is enabled.

### Item Height in %

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Item Height in %')]]

| Type | Default |
|:----:|:-------:|
|number|10|

Set the listview item height. If you write 10, that means the item height will be 10 percent of the device screen height.

### Long Click Enabled

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Long Click Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true long click on items are enabled, else long click is disabled.

### Scrollbar Fading

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Scrollbar Fading')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Return the state of ScrollbarFading. If ScrollbarFading is enabled returns true.

### Scrolling Speed

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Scrolling Speed')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The amount of friction applied to flings.

### Search Hint Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Search Hint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

The color of the search hint text.

### Search Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Search Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

The color of the search text.

### Search Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Search Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

The text size of the search text.

### Selection

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Selection')]]

| Type |
|:----:|
|text|

Set the selection to the ListView.

### Selection Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Selection Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

The color of the item when it is selected.

### Show Filter Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Show Filter Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Sets visibility of ShowFilterBar. True will show the bar, False will hide it.

### Show Scrollbar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Show Scrollbar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Return the state of ShowScrollbar. If ShowScrollbar is enabled returns true.

### Show Selection Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Show Selection Color')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Sets visibility of ShowSelectionColor. True will show the selection color on a selected item, False will hide it.

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The text color of the listview items.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|22|

The text size of the listview items.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Elements

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Elements')]]

| Type | Default |
|:----:|:-------:|
|list|None|

List of text elements to show in the ListView.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Determines the height of the list on the view.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Scroll To Position

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Scroll To Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Smoothly scroll to the specified position. The listview will scroll such that the indicated position is displayed.

### Selection Index

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Selection Index')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0. If an attempt is made to set this to a number less than 1 or greater than the number of items in the ListView, SelectionIndex will be set to 0, and Selection will be set to the empty text.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Determines the width of the list on the view.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.