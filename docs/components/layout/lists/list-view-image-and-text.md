# List View Image and Text

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Lists|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that displays a list of elements consisting of an image and two labels.

## Events

### Click

[[Event('List View Image and Text', 'Click', 'position', 'title', 'subtitle', 'image')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|
    |title|`text`|
    |subtitle|`text`|
    |image|`text`|


Triggers when the user clicks on a item in the list

### Long Click

[[Event('List View Image and Text', 'Long Click', 'position', 'title', 'subtitle', 'image')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|
    |title|`text`|
    |subtitle|`text`|
    |image|`text`|


Triggers when the user long clicks on a item in the list

## Methods

### AddItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |image|`text`|
    |title|`text`|
    |subtitle|`text`|


Add a item to the list

### AddItemFromList

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |list|`list`|


Add a item to the list

### ClearList

_Block preview not available_

Remove all the items from the list

### RemoveItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|


Remove a item from the list

### UpdateItem

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|
    |image|`text`|
    |title|`text`|
    |subtitle|`text`|


Update a item of the list

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

Set the background color of the listview

### Divider Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Divider Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the divider color of the listview

### Image Side

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Image Side')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the side of the image
Set it to 1 for Left side and 2 for Right side

### Item Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Item Size')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set ListItem Size
Set it to 1 for Normal size, 2 for Small size and 3 for Big size.

### Subtitle Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the subtitle should be in bold text

### Subtitle Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF757575|

Changed the color of the subtitle text

### Subtitle Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Change the Typeface of the Subtitle

### Subtitle Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom title font.

### Subtitle HTML

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle HTML')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then the subtitle will show html text else it will show plain text. Note: Not all HTML is supported.

### Subtitle Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the subtitle should be in italic text

### Subtitle Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Subtitle Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14|

The text size of the subtitle.

### Title Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the title should be in bold text

### Title Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF212121|

Changed the color of the title text

### Title Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Change the Typeface of the Title

### Title Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Font Typeface Import')]]

| Type |
|:----:|
|text|

Set a custom title font.

### Title HTML

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title HTML')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, then the title will show html text else it will show plain text. Note: Not all HTML is supported.

### Title Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the title should be in italic text

### Title Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Title Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14|

The text size of the title.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Determines the height of the list on the view.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Determines the width of the list on the view.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List View Image and Text', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.