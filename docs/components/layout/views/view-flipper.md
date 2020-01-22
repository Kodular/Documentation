# View Flipper

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that can animate between two or more layout components that have been added to it._

## Methods

### AddComponentToView

[[Method('View Flipper', 'AddComponentToView', false, 'component')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |component|`component`|


_Add a component to the view flipper. The first added component will be the first visible component on the screen._

### AddImagesToView

[[Method('View Flipper', 'AddImagesToView', false, 'images')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |images|`list`|


_Use this function if you try to create a image view flipper. Please use a 'make a list' block._

### ShowNext

[[Method('View Flipper', 'ShowNext', false)]]

_Show the next view._

### ShowPrevious

[[Method('View Flipper', 'ShowPrevious', false)]]

_Show the previous view._

### StartFlipping

[[Method('View Flipper', 'StartFlipping', false)]]

_Start a timer to cycle through child views._

### StopFlipping

[[Method('View Flipper', 'StopFlipping', false)]]

_No more flips._

### is Flipping

[[Method('View Flipper', 'is Flipping', false)]]

_Returns true if the child views are flipping._

## Properties

### Add Images From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Add Images From String')]]

| Type |
|:----:|
|text|

_Use this function if you try to create a image view flipper. Use images separated by commas such as: Image1.png,Image2.png,Image3.png._

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_Specifies the view flippers background color._

### Flip Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Flip Interval')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

_How long to wait before flipping to the next view in milliseconds._

### Swipeable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Swipeable')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true you can swipe with your fingers through views._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Flipper', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._