# Dynamic Card View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Dynamic Components**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic cardviews in Arrangements.

## Events

### Click

Event to detect that a user has done a simple click on a card view component with the specific id.

[[Event('Dynamic Card View', 'Click', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Long Click

Event to detect that a user has done a simple long click on a card view component with the specific id.

[[Event('Dynamic Card View', 'Long Click', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Touch Down

Event to detect that a user has done a simple touch down on a card view component with the specific id.

[[Event('Dynamic Card View', 'Touch Down', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Touch Up

Event to detect that a user has done a simple touch up on a card view component with the specific id.

[[Event('Dynamic Card View', 'Touch Up', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


## Methods

### Add Component To Card View

Add a component into the card view component with the given id.

[[Method('Dynamic Card View', 'Add Component To Card View', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|


### Content Padding

Set the content padding of a card view component.

[[Method('Dynamic Card View', 'Content Padding', False, 'id', 'contentPaddingLeft', 'contentPaddingTop', 'contentPaddingRight', 'contentPaddingBottom')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|content Padding Left|<span class="chip chip-number">Number</span>|
|content Padding Top|<span class="chip chip-number">Number</span>|
|content Padding Right|<span class="chip chip-number">Number</span>|
|content Padding Bottom|<span class="chip chip-number">Number</span>|


### Create Card View

Create a new card view component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

[[Method('Dynamic Card View', 'Create Card View', False, 'id', 'arrangement', 'width', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Delete Card View

Remove a card view component with the given id.

[[Method('Dynamic Card View', 'Delete Card View', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Background Color

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the background color of a card view component.

[[Method('Dynamic Card View', 'Get Background Color', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Card View By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the card view referenced by its id.

[[Method('Dynamic Card View', 'Get Card View By Id', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Corner Radius

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the corner radius of a card view component.

[[Method('Dynamic Card View', 'Get Corner Radius', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Elevation

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the elevation of a card view component.

[[Method('Dynamic Card View', 'Get Elevation', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the height of a card view component.

[[Method('Dynamic Card View', 'Get Height', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the width of a card view component.

[[Method('Dynamic Card View', 'Get Width', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Set Background Color

Set the background color of a card view component.

[[Method('Dynamic Card View', 'Set Background Color', False, 'id', 'argb')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|argb|<span class="chip chip-number">Number</span>|


### Set Corner Radius

Set the corner radius of a card view component.

[[Method('Dynamic Card View', 'Set Corner Radius', False, 'id', 'radius')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|


### Set Elevation

Set the elevation of a card view component.

[[Method('Dynamic Card View', 'Set Elevation', False, 'id', 'value')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|value|<span class="chip chip-number">Number</span>|


### Set Height

Set the height of a card view component.

[[Method('Dynamic Card View', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Width

Set the width of a card view component.

[[Method('Dynamic Card View', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


### Stroke Color

Set the stroke color to a card view component with the specific id.

[[Method('Dynamic Card View', 'Stroke Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Stroke Width

Set the stroke width to a card view component with the specific id.

[[Method('Dynamic Card View', 'Stroke Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the cards's background color.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Background Color')]]

### Content Padding Bottom

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the bottom padding between the card's edges and the children of card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Bottom')]]

### Content Padding Left

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the left padding between the card's edges and the children of card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Left')]]

### Content Padding Right

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the right padding between the card's edges and the children of card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Right')]]

### Content Padding Top

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the top padding between the card's edges and the children of card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Content Padding Top')]]

### Corner Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The corner radius from the card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Corner Radius')]]

### Elevation

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The card view elevation value.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Elevation')]]

### Full Clickable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true, the card will consume all click events. This means if you have added as example buttons into the card, then will the card consume the touch event on the button. And this means that the button would not be clickable, but only the entire card.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Full Clickable')]]

### Stroke Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The stroke width for the card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Stroke Color')]]

### Stroke Width

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The stroke width for the card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Stroke Width')]]

### Touch Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set the touch color also known as ripple color to a card view component.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Touch Color')]]