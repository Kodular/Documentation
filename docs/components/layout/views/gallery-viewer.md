# Gallery Viewer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|1|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that groups other components in a center-locked, horizontally scrolling list.

## Events

### After Picking

[[Event('Gallery Viewer', 'After Picking', 'imageName')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |image Name|`text`|


Triggered after an image is selected. It will also report selected image name

## Properties

### Padding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Padding')]]

| Type | Default |
|:----:|:-------:|
|number|5|

Sets the spacing (in DIP) between images

### Thumbnail Height in DIP

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Thumbnail Height in DIP')]]

| Type | Default |
|:----:|:-------:|
|number|100|

Sets the height of thumbnail in DIP (Density Independent Pixel)

### Thumbnail Width in DIP

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Thumbnail Width in DIP')]]

| Type | Default |
|:----:|:-------:|
|number|100|

Sets the width of thumbnail in DIP (Density Independent Pixel)

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Images

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Images')]]

| Type | Default |
|:----:|:-------:|
|list|None|

Adds a series of images to the gallery

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Selection

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Selection')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_No description available_

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gallery Viewer', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.