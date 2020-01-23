# Bottom Navigation

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|1|API 19 | Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that shows a navigation menu in the bottom of the screen.

## Events

### Item Selected

[[Event('Bottom Navigation', 'Item Selected', 'id', 'title')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|


Event triggers when an item was selected.

## Methods

### AddItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |image|`text`|


Add an item to the bottom menu

### RemoveAllItems

_Block preview not available_

Remove all items from the bottom menu

### RemoveItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove an item from the bottom menu

### SelectItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Select an item from the bottom menu

### UpdateItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |image|`text`|


Update an item of the bottom menu

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Set the background color of the Bottom Navigation Menu

### Selected Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Selected Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

Set the color of the selected item of the Bottom Navigation Menu

### Unselected Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Unselected Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF6E6E6E|

Set the color of the unselected items of the Bottom Navigation Menu

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Navigation', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.