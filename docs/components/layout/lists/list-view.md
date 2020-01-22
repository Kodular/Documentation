# List View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Lists|13|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>This is a visible component that displays a list of text elements. <br> The list can be set using the ElementsFromString property or using the Elements block in the blocks editor. </p>_

## Events

### After Picking

[[Event('List View', 'After Picking')]]

_Simple event to be raised after the an element has been chosen in the list. The selected element is available in the Selection property._

### Long Click

[[Event('List View', 'Long Click')]]

_Simple event to be raised after the an element has been chosen in the list via long click. The selected element is available in the Selection property._

## Methods

### ClearList

[[Method('List View', 'ClearList', false)]]

_Remove all the items from the list_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF607D8B|

_The color of the listview background._

### Divider Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Divider Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Set the divider color_

### Divider Height

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Divider Height')]]

| Type | Default |
|:----:|:-------:|
|number|2|

_Set the divider height._

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Elements From String')]]

| Type |
|:----:|
|text|

_The ListView elements specified as a string with the items separated by commas such as: Cheese,Fruit,Bacon,Radish. Each word before the comma will be an element in the list._

### Filter Bar Hint

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Filter Bar Hint')]]

| Type | Default |
|:----:|:-------:|
|text|Search list...|

_The hint that will be displayed in the filter bar._

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

_Set a custom font._

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if html is enabled._

### Item Height in %

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Item Height in %')]]

| Type | Default |
|:----:|:-------:|
|number|10|

_Set the listview item height. If you write 10, that means the item height will be 10 percent of the device screen height._

### Long Click Enabled

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Long Click Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true long click on items are enabled, else long click is disabled._

### Scrollbar Fading

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Scrollbar Fading')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Return the state of ScrollbarFading. If ScrollbarFading is enabled returns true._

### Scrolling Speed

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Scrolling Speed')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The amount of friction applied to flings._

### Search Hint Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Search Hint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_The color of the search hint text._

### Search Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Search Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_The color of the search text._

### Search Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Search Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_The text size of the search text._

### Selection

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Selection')]]

| Type |
|:----:|
|text|

_Set the selection to the ListView._

### Selection Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Selection Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_The color of the item when it is selected._

### Show Filter Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Show Filter Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Sets visibility of ShowFilterBar. True will show the bar, False will hide it._

### Show Scrollbar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Show Scrollbar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Return the state of ShowScrollbar. If ShowScrollbar is enabled returns true._

### Show Selection Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Show Selection Color')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Sets visibility of ShowSelectionColor. True will show the selection color on a selected item, False will hide it._

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

_The text color of the listview items._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|22|

_The text size of the listview items._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Elements

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Elements')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_List of text elements to show in the ListView._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Determines the height of the list on the view._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Scroll To Position

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Scroll To Position')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Smoothly scroll to the specified position. The listview will scroll such that the indicated position is displayed._

### Selection Index

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Selection Index')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The index of the currently selected item, starting at 1.  If no item is selected, the value will be 0.  If an attempt is made to set this to a number less than 1 or greater than the number of items in the ListView, SelectionIndex will be set to 0, and Selection will be set to the empty text._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Determines the width of the list on the view._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._