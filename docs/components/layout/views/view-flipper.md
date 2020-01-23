# View Flipper

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that can animate between two or more layout components that have been added to it.

## Methods

### AddComponentToView

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Add a component to the view flipper. The first added component will be the first visible component on the screen.

### AddImagesToView

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |images|`list`|


Use this function if you try to create a image view flipper. Please use a 'make a list' block.

### ShowNext

_Block preview not available_

Show the next view.

### ShowPrevious

_Block preview not available_

Show the previous view.

### StartFlipping

_Block preview not available_

Start a timer to cycle through child views.

### StopFlipping

_Block preview not available_

No more flips.

### is Flipping

_Block preview not available_

Returns true if the child views are flipping.

## Properties

### Add Images From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Add Images From String')]]

| Type |
|:----:|
|text|

Use this function if you try to create a image view flipper. Use images separated by commas such as: Image1.png,Image2.png,Image3.png.

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

Specifies the view flippers background color.

### Flip Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Flip Interval')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

How long to wait before flipping to the next view in milliseconds.

### Swipeable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Swipeable')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true you can swipe with your fingers through views.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.