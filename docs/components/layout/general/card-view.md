# Card View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > General|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that lets the user group other components as a Card. <br>Cards are panels with a set elevation and border radius, meant to draw the user''s attention to their content._

## Events

### Click

[[Event('Card View', 'Click')]]

_Event to detect that a user has done a simple "Click"._

### Long Click

[[Event('Card View', 'Long Click')]]

_Event to detect that a user has done a simple "Long click"._

### Touch Down

[[Event('Card View', 'Touch Down')]]

_Event to detect that a user has done a simple touch down on the card._

### Touch Up

[[Event('Card View', 'Touch Up')]]

_Event to detect that a user has done a simple touch up on the card._

## Properties

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_A number that encodes how contents of the arrangement are aligned  horizontally. The choices are: 1 = left aligned, 2 = right aligned,  3 = horizontally centered.  Alignment has no effect if the arrangement's width is automatic._

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

_Specifies the card view background color._

### Content Padding Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Sets the bottom padding between the card view edges and the children of CardView._

### Content Padding Left

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Left')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Sets the left padding between the card view edges and the children of card view._

### Content Padding Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Right')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Sets the right padding between the card view edges and the children of card view._

### Content Padding Top

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Content Padding Top')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Sets the top padding between the card view edges and the children of card view._

### Corner Radius

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|2|

_The corner radius from the card view._

### Elevation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Elevation')]]

| Type | Default |
|:----:|:-------:|
|number|2|

_The card view elevation value._

### Full Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Full Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set to true, the card will consume all click events. This means if you have added as example buttons into the card, then will the card consume the touch event on the button. And this means that the button would not be clickable, but only the entire card._

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_The stroke color for the card view._

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The stroke width for the card view._

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the touch color also known as ripple color to the card view component._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Card View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._