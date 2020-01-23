# Grid View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|1|API 19 | Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that groups other components in a two-dimensional, scrollable grid.

## Events

### After Picking

[[Event('Grid View', 'After Picking', 'item')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |item|`text`|


Triggers after an item from this component has been selected

## Methods

### ClearGridView

_Block preview not available_

Clears the items from the component

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

Specifies the background color.

### Columns

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Columns')]]

| Type | Default |
|:----:|:-------:|
|number|4|

Returns number of columns for this component

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Elements From String')]]

| Type |
|:----:|
|text|

The elements specified as a string with the items separated by commas such as: Cheese,Fruit,Bacon,Radish. Each word before the comma will be an element in the list.

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

Sets the font size of the elements

### Padding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Padding')]]

| Type | Default |
|:----:|:-------:|
|number|2|

The amount of padding (in DIP) on left, top, right, bottom

### Stretch Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Stretch Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Control how items are stretched to fill their space

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Specifies the checkbox's text color as an alpha-red-green-blueinteger.

### Thumbnail Height in DIP

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Thumbnail Height in DIP')]]

| Type | Default |
|:----:|:-------:|
|number|155|

Sets the thumbnail height in DIP (Density Independent Pixels)

### Thumbnail Width in DIP

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Thumbnail Width in DIP')]]

| Type | Default |
|:----:|:-------:|
|number|155|

Sets the thumbnail width in DIP (Density Independent Pixels)

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Elements

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Elements')]]

| Type | Default |
|:----:|:-------:|
|list|None|

List of elements to be used for GridView

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Selection

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Selection')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Set the selection to the GridView

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Grid View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.