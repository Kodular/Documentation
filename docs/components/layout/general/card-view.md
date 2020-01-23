# Card View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that lets the user group other components as a Card.   
Cards are panels with a set elevation and border radius, meant to draw the user''s attention to their content.

## Events

### Click

[[Event('Card View', 'Click')]]

Event to detect that a user has done a simple "Click".

### Long Click

[[Event('Card View', 'Long Click')]]

Event to detect that a user has done a simple "Long click".

### Touch Down

[[Event('Card View', 'Touch Down')]]

Event to detect that a user has done a simple touch down on the card.

### Touch Up

[[Event('Card View', 'Touch Up')]]

Event to detect that a user has done a simple touch up on the card.

## Properties

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

A number that encodes how contents of the arrangement are aligned  horizontally. The choices are: 1 = left aligned, 2 = right aligned,  3 = horizontally centered.  Alignment has no effect if the arrangement's width is automatic.

### Align Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Align Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_No description available_

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Specifies the card view background color.

### Content Padding Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the bottom padding between the card view edges and the children of CardView.

### Content Padding Left

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Left')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the left padding between the card view edges and the children of card view.

### Content Padding Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Right')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the right padding between the card view edges and the children of card view.

### Content Padding Top

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Top')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the top padding between the card view edges and the children of card view.

### Corner Radius

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|2|

The corner radius from the card view.

### Elevation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Elevation')]]

| Type | Default |
|:----:|:-------:|
|number|2|

The card view elevation value.

### Full Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Full Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true, the card will consume all click events. This means if you have added as example buttons into the card, then will the card consume the touch event on the button. And this means that the button would not be clickable, but only the entire card.

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

The stroke color for the card view.

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The stroke width for the card view.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the touch color also known as ripple color to the card view component.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.