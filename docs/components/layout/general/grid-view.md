# Grid View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that groups other components in a two-dimensional, scrollable grid._

## Events

### After Picking

[[Event('Grid View', 'After Picking', 'item')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |item|`text`|


_Triggers after an item from this component has been selected_

## Methods

### ClearGridView

[[Method('Grid View', 'ClearGridView', false)]]

_Clears the items from the component_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_Specifies the background color._

### Columns

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Columns')]]

| Type | Default |
|:----:|:-------:|
|number|4|

_Returns number of columns for this component_

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Elements From String')]]

| Type |
|:----:|
|text|

_The elements specified as a string with the items separated by commas such as: Cheese,Fruit,Bacon,Radish. Each word before the comma will be an element in the list._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_Sets the font size of the elements_

### Padding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Padding')]]

| Type | Default |
|:----:|:-------:|
|number|2|

_The amount of padding (in DIP) on left, top, right, bottom_

### Stretch Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Stretch Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Control how items are stretched to fill their space_

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Specifies the checkbox's text color as an alpha-red-green-blue
 integer._

### Thumbnail Height in DIP

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Thumbnail Height in DIP')]]

| Type | Default |
|:----:|:-------:|
|number|155|

_Sets the thumbnail height in DIP (Density Independent Pixels)_

### Thumbnail Width in DIP

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Thumbnail Width in DIP')]]

| Type | Default |
|:----:|:-------:|
|number|155|

_Sets the thumbnail width in DIP (Density Independent Pixels)_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Elements

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Elements')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_List of elements to be used for GridView_

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Selection

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Selection')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Set the selection to the GridView_

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._