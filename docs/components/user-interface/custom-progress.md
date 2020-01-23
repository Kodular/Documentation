# Custom Progress

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that indicates the progress of an operation using a range of indeterminate animations.

## Methods

### Get Styles Names

_Block preview not available_

{>>Returns `list`<<}

Gets style names of all possible animations.

## Properties

### Animation Style

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Animation Style')]]

| Type | Default |
|:----:|:-------:|
|text|Wave|

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, Wave animation will be used.

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00FFFFFF|

Sets the background color of this component.

### Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF008b8b|

Sets the color of the component

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Progress', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.