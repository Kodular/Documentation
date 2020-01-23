# Dynamic Card View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic cardviews in Arrangements.

## Events

### Click

[[Event('Dynamic Card View', 'Click', 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Event to detect that a user has done a simple click on a card view component with the specific id.

### Long Click

[[Event('Dynamic Card View', 'Long Click', 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Event to detect that a user has done a simple long click on a card view component with the specific id.

### Touch Down

[[Event('Dynamic Card View', 'Touch Down', 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Event to detect that a user has done a simple touch down on a card view component with the specific id.

### Touch Up

[[Event('Dynamic Card View', 'Touch Up', 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Event to detect that a user has done a simple touch up on a card view component with the specific id.

## Methods

### AddComponentToCardView

[[Method('Dynamic Card View', 'AddComponentToCardView', false, 'id arrangement')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|


Add a component into the card view component with the given id.

### ContentPadding

[[Method('Dynamic Card View', 'ContentPadding', false, 'id contentPaddingLeft contentPaddingTop contentPaddingRight contentPaddingBottom')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |content Padding Left|`number`|
    |content Padding Top|`number`|
    |content Padding Right|`number`|
    |content Padding Bottom|`number`|


Set the content padding of a card view component.

### CreateCardView

[[Method('Dynamic Card View', 'CreateCardView', false, 'id arrangement width height')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |arrangement|`component`|
    |width|`number`|
    |height|`number`|


Create a new card view component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### DeleteCardView

[[Method('Dynamic Card View', 'DeleteCardView', false, 'id')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Remove a card view component with the given id.

### GetBackgroundColor

[[Method('Dynamic Card View', 'GetBackgroundColor', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the background color of a card view component.

### GetCardViewById

[[Method('Dynamic Card View', 'GetCardViewById', true, 'id')]]

{>>Returns `component`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Returns the card view referenced by its id.

### GetCornerRadius

[[Method('Dynamic Card View', 'GetCornerRadius', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the corner radius of a card view component.

### GetElevation

[[Method('Dynamic Card View', 'GetElevation', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the elevation of a card view component.

### GetHeight

[[Method('Dynamic Card View', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the height of a card view component.

### GetWidth

[[Method('Dynamic Card View', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Get the width of a card view component.

### SetBackgroundColor

[[Method('Dynamic Card View', 'SetBackgroundColor', false, 'id argb')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |argb|`number`|


Set the background color of a card view component.

### SetCornerRadius

[[Method('Dynamic Card View', 'SetCornerRadius', false, 'id radius')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |radius|`number`|


Set the corner radius of a card view component.

### SetElevation

[[Method('Dynamic Card View', 'SetElevation', false, 'id value')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |value|`number`|


Set the elevation of a card view component.

### SetHeight

[[Method('Dynamic Card View', 'SetHeight', false, 'id height')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |height|`number`|


Set the height of a card view component.

### SetWidth

[[Method('Dynamic Card View', 'SetWidth', false, 'id width')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Set the width of a card view component.

### StrokeColor

[[Method('Dynamic Card View', 'StrokeColor', false, 'id color')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |color|`number`|


Set the stroke color to a card view component with the specific id.

### StrokeWidth

[[Method('Dynamic Card View', 'StrokeWidth', false, 'id width')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |width|`number`|


Set the stroke width to a card view component with the specific id.

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Specifies the cards's background color.

### Content Padding Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the bottom padding between the card's edges and the children of card view.

### Content Padding Left

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Left')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the left padding between the card's edges and the children of card view.

### Content Padding Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Right')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the right padding between the card's edges and the children of card view.

### Content Padding Top

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Top')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Sets the top padding between the card's edges and the children of card view.

### Corner Radius

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Corner Radius')]]

| Type | Default |
|:----:|:-------:|
|number|2|

The corner radius from the card view.

### Elevation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Elevation')]]

| Type | Default |
|:----:|:-------:|
|number|2|

The card view elevation value.

### Full Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Full Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If set to true, the card will consume all click events. This means if you have added as example buttons into the card, then will the card consume the touch event on the button. And this means that the button would not be clickable, but only the entire card.

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

The stroke width for the card view.

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

The stroke width for the card view.

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

Set the touch color also known as ripple color to a card view component.