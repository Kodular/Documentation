# Horizontal Scroll Arrangement

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|7|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A formatting element in which to place components that should be displayed from left to right.  If you wish to have components displayed one over another, use <code>VerticalArrangement</code> instead.</p><p>This version is scrollable._

## Events

### Click

[[Event('Horizontal Scroll Arrangement', 'Click')]]

_Click listener event._

### Long Click

[[Event('Horizontal Scroll Arrangement', 'Long Click')]]

_Long click listener event._

## Properties

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_A number that encodes how contents of the arrangement are aligned  horizontally. The choices are: 1 = left aligned, 2 = right aligned,  3 = horizontally centered.  Alignment has no effect if the arrangement's width is automatic._

### Align Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Align Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_A number that encodes how the contents of the arrangement are aligned  vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom.  Alignment has no effect if the arrangement's height is automatic._

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_Returns the component's background color_

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Set the component clickable or not clickable._

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Image')]]

| Type |
|:----:|
|text|

_Returns the path of the button's image._

### Scrollbar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Scrollbar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to display a scrollbar_

### Use Round Card

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Use Round Card')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If enabled the card layout will have then round corners._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Is Card

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Is Card')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If enabled the arrangement will be convert to a card view. You can detect clicks on it with the "Click" event._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Full Clickable

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Full Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_No description available_

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Horizontal Scroll Arrangement', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._