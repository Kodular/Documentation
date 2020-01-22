# List View Image and Text

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Lists|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that displays a list of elements consisting of an image and two labels._

## Events

### Click

[[Event('List View Image and Text', 'Click', 'position title subtitle image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|
    |title|`text`|
    |subtitle|`text`|
    |image|`text`|


_Triggers when the user clicks on a item in the list_

### Long Click

[[Event('List View Image and Text', 'Long Click', 'position title subtitle image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|
    |title|`text`|
    |subtitle|`text`|
    |image|`text`|


_Triggers when the user long clicks on a item in the list_

## Methods

### AddItem

[[Method('List View Image and Text', 'AddItem', false, 'image title subtitle')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|
    |title|`text`|
    |subtitle|`text`|


_Add a item to the list_

### AddItemFromList

[[Method('List View Image and Text', 'AddItemFromList', false, 'list')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |list|`list`|


_Add a item to the list_

### ClearList

[[Method('List View Image and Text', 'ClearList', false)]]

_Remove all the items from the list_

### RemoveItem

[[Method('List View Image and Text', 'RemoveItem', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Remove a item from the list_

### UpdateItem

[[Method('List View Image and Text', 'UpdateItem', false, 'position image title subtitle')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|
    |image|`text`|
    |title|`text`|
    |subtitle|`text`|


_Update a item of the list_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

_Set the background color of the listview_

### Divider Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Divider Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the divider color of the listview_

### Image Side

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Image Side')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set the side of the image.
Set it to 1 for Left side and 2 for Right side_

### Item Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Item Size')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set ListItem Size.
Set it to 1 for Normal size, 2 for Small size and 3 for Big size._

### Subtitle Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the subtitle should be in bold text_

### Subtitle Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF757575|

_Changed the color of the subtitle text_

### Subtitle Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Change the Typeface of the Subtitle_

### Subtitle Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom title font._

### Subtitle HTML

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle HTML')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then the subtitle will show html text else it will show plain text. Note: Not all HTML is supported._

### Subtitle Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the subtitle should be in italic text_

### Subtitle Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14|

_The text size of the subtitle._

### Title Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the title should be in bold text_

### Title Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF212121|

_Changed the color of the title text_

### Title Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Change the Typeface of the Title_

### Title Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom title font._

### Title HTML

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title HTML')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then the title will show html text else it will show plain text. Note: Not all HTML is supported._

### Title Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the title should be in italic text_

### Title Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14|

_The text size of the title._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Determines the height of the list on the view._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Determines the width of the list on the view._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._