# Dynamic Card View

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Dynamic Components|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic cardviews in Arrangements.

## Events

### Click

[[Event('Dynamic Card View', 'Click', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Event to detect that a user has done a simple click on a card view component with the specific id.

### Long Click

[[Event('Dynamic Card View', 'Long Click', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Event to detect that a user has done a simple long click on a card view component with the specific id.

### Touch Down

[[Event('Dynamic Card View', 'Touch Down', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Event to detect that a user has done a simple touch down on a card view component with the specific id.

### Touch Up

[[Event('Dynamic Card View', 'Touch Up', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Event to detect that a user has done a simple touch up on a card view component with the specific id.

## Methods

### Add Component To Card View

[[Method('Dynamic Card View', 'Add Component To Card View', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|


Add a component into the card view component with the given id.

### Content Padding

[[Method('Dynamic Card View', 'Content Padding', False, 'id', 'contentPaddingLeft', 'contentPaddingTop', 'contentPaddingRight', 'contentPaddingBottom')]]

| Params | []() |
|--------|------|
|id|Number|
|content Padding Left|Number|
|content Padding Top|Number|
|content Padding Right|Number|
|content Padding Bottom|Number|


Set the content padding of a card view component.

### Create Card View

[[Method('Dynamic Card View', 'Create Card View', False, 'id', 'arrangement', 'width', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|
|width|Number|
|height|Number|


Create a new card view component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### Delete Card View

[[Method('Dynamic Card View', 'Delete Card View', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove a card view component with the given id.

### Get Background Color

[[Method('Dynamic Card View', 'Get Background Color', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the background color of a card view component.

### Get Card View By Id

[[Method('Dynamic Card View', 'Get Card View By Id', True, 'id')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|id|Number|


Returns the card view referenced by its id.

### Get Corner Radius

[[Method('Dynamic Card View', 'Get Corner Radius', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the corner radius of a card view component.

### Get Elevation

[[Method('Dynamic Card View', 'Get Elevation', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the elevation of a card view component.

### Get Height

[[Method('Dynamic Card View', 'Get Height', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the height of a card view component.

### Get Width

[[Method('Dynamic Card View', 'Get Width', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the width of a card view component.

### Set Background Color

[[Method('Dynamic Card View', 'Set Background Color', False, 'id', 'argb')]]

| Params | []() |
|--------|------|
|id|Number|
|argb|Number|


Set the background color of a card view component.

### Set Corner Radius

[[Method('Dynamic Card View', 'Set Corner Radius', False, 'id', 'radius')]]

| Params | []() |
|--------|------|
|id|Number|
|radius|Number|


Set the corner radius of a card view component.

### Set Elevation

[[Method('Dynamic Card View', 'Set Elevation', False, 'id', 'value')]]

| Params | []() |
|--------|------|
|id|Number|
|value|Number|


Set the elevation of a card view component.

### Set Height

[[Method('Dynamic Card View', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|height|Number|


Set the height of a card view component.

### Set Width

[[Method('Dynamic Card View', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Set the width of a card view component.

### Stroke Color

[[Method('Dynamic Card View', 'Stroke Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Set the stroke color to a card view component with the specific id.

### Stroke Width

[[Method('Dynamic Card View', 'Stroke Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Set the stroke width to a card view component with the specific id.

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFCCCCCC</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The stroke width for the card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Stroke Color')]]

### Stroke Width

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The stroke width for the card view.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Stroke Width')]]

### Touch Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFCCCCCC</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set the touch color also known as ripple color to a card view component.

[[PropertyBlockGetterAndSetter('Dynamic Card View', 'Touch Color')]]