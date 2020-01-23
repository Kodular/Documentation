# Linear Progressbar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that indicates the progress of an operation using an animated linear bar.

## Events

### Progress Changed

[[Event('Linear Progressbar', 'Progress Changed', 'progress')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |progress|`number`|


Event that indicates that the progress of the progress bar has been changed. Returns the current progress value. If "Indeterminate" is set to true, then it returns "0".

## Methods

### IncrementProgressBy

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |value|`number`|


Increase the progress bar's progress by the specified amount.

## Properties

### Indeterminate

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Indeterminate')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Change the indeterminate mode for this progress bar. In indeterminate mode, the progress is ignored and the progress bar shows an infinite animation instead.

### Indeterminate Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Indeterminate Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF2196F2|

Change the indeterminate color of the progress bar.

### Maximum

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Maximum')]]

| Type | Default |
|:----:|:-------:|
|number|100|

Set the upper range of the progress bar max.

### Minimum

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Minimum')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Set the lower range of the progress bar to min. This function works only for devices with API &gt;= 26

### Progress Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Progress Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF2196F2|

Change the progress color of the progress bar.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Progress

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Progress')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Sets the current progress to the specified value. Does not do anything if the progress bar is in indeterminate mode.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Linear Progressbar', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.