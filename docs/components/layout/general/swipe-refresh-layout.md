# Swipe Refresh Layout

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that groups other components and lets the user refresh them via a swipe-down gesture._

## Events

### On Refresh

[[Event('Swipe Refresh Layout', 'On Refresh')]]

_Event to detect when a refresh is triggered via the swipe gesture._

## Properties

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_A number that encodes how contents of the arrangement are aligned  horizontally. The choices are: 1 = left aligned, 2 = right aligned,  3 = horizontally centered.  Alignment has no effect if the arrangement's width is automatic._

### Align Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Align Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_A number that encodes how the contents of the arrangement are aligned  vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom.  Alignment has no effect if the arrangement's height is automatic._

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_The background color of the swipe refresh layout._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true the swpipe refresh layout is enabled._

### Large Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Large Size')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If enabled is set to true the pull size will be large, else the size is default._

### Nested Scrolling

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Nested Scrolling')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable or disable nested scrolling for this view._

### Progress Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Progress Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Change the pull to refresh background color._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Is Refreshing

:eyes: Read-Only property
[[PropertyBlockGetter('Swipe Refresh Layout', 'Is Refreshing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns true if is actively showing refresh progress._

### Progress Animation Colors

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Progress Animation Colors')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_Set the colors used in the progress animation. Use a 'make a list' block. The first color on the list is than the first spinner color._

### Refreshing

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Refreshing')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Notify the widget that refresh state has changed. Do not call this when refresh is triggered by a swipe gesture._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Swipe Refresh Layout', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._