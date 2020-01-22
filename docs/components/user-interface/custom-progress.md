# Custom Progress

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that indicates the progress of an operation using a range of indeterminate animations._

## Methods

### GetAnimationStyleNames

[[Method('Custom Progress', 'GetAnimationStyleNames', true)]]

{>>Returns `list`<<}

_Gets style names of all possible animations._

## Properties

### Animation Style

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Animation Style')]]

| Type | Default |
|:----:|:-------:|
|text|Wave|

_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, Wave animation will be used._

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

_Sets the background color of this component._

### Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF008b8b|

_Sets the color of the component_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._