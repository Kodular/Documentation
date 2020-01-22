# Bottom Navigation

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that shows a navigation menu in the bottom of the screen._

## Events

### Item Selected

[[Event('Bottom Navigation', 'Item Selected', 'id title')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|


_Event triggers when an item was selected._

## Methods

### AddItem

[[Method('Bottom Navigation', 'AddItem', false, 'id title image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |image|`text`|


_Add an item to the bottom menu_

### RemoveAllItems

[[Method('Bottom Navigation', 'RemoveAllItems', false)]]

_Remove all items from the bottom menu_

### RemoveItem

[[Method('Bottom Navigation', 'RemoveItem', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Remove an item from the bottom menu_

### SelectItem

[[Method('Bottom Navigation', 'SelectItem', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Select an item from the bottom menu_

### UpdateItem

[[Method('Bottom Navigation', 'UpdateItem', false, 'id title image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |image|`text`|


_Update an item of the bottom menu_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Set the background color of the Bottom Navigation Menu_

### Selected Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Selected Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

_Set the color of the selected item of the Bottom Navigation Menu_

### Unselected Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Unselected Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF6E6E6E|

_Set the color of the unselected items of the Bottom Navigation Menu_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._