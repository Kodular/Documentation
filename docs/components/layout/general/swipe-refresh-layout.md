# Swipe Refresh Layout

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that groups other components and lets the user refresh them via a swipe-down gesture.

## Events

### On Refresh

[[Event('Swipe Refresh Layout', 'On Refresh')]]

Event to detect when a refresh is triggered via the swipe gesture.

## Properties

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

A number that encodes how contents of the arrangement are aligned horizontally. The choices are: 1 = left aligned, 2 = right aligned, 3 = horizontally centered. Alignment has no effect if the arrangement's width is automatic.

### Align Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Align Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|1|

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Alignment has no effect if the arrangement's height is automatic.

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

The background color of the swipe refresh layout.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true the swpipe refresh layout is enabled.

### Large Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Large Size')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If enabled is set to true the pull size will be large, else the size is default.

### Nested Scrolling

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Nested Scrolling')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable or disable nested scrolling for this view.

### Progress Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Progress Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Change the pull to refresh background color.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Is Refreshing

:eyes: Read-Only property
[[PropertyBlockGetter('Swipe Refresh Layout', 'Is Refreshing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if is actively showing refresh progress.

### Progress Animation Colors

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Progress Animation Colors')]]

| Type | Default |
|:----:|:-------:|
|list|None|

Set the colors used in the progress animation. Use a 'make a list' block. The first color on the list is than the first spinner color.

### Refreshing

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Refreshing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Notify the widget that refresh state has changed. Do not call this when refresh is triggered by a swipe gesture.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.