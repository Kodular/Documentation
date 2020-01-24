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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Click%22,%20%22params%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Long Click

Event to detect that a user has done a simple long click on a card view component with the specific id.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Long%20Click%22,%20%22params%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Touch Down

Event to detect that a user has done a simple touch down on a card view component with the specific id.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Touch%20Down%22,%20%22params%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Touch Up

Event to detect that a user has done a simple touch up on a card view component with the specific id.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Touch%20Up%22,%20%22params%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


## Methods

### Add Component To Card View

Add a component into the card view component with the given id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Add%20Component%20To%20Card%20View%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22arrangement%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|


### Content Padding

Set the content padding of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Content%20Padding%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22content%20Padding%20Left%22,%20%22content%20Padding%20Top%22,%20%22content%20Padding%20Right%22,%20%22content%20Padding%20Bottom%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|content Padding Left|<span class="chip chip-number">Number</span>|
|content Padding Top|<span class="chip chip-number">Number</span>|
|content Padding Right|<span class="chip chip-number">Number</span>|
|content Padding Bottom|<span class="chip chip-number">Number</span>|


### Create Card View

Create a new card view component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Create%20Card%20View%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22arrangement%22,%20%22width%22,%20%22height%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Delete Card View

Remove a card view component with the given id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Delete%20Card%20View%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Background Color

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the background color of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Get%20Background%20Color%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Card View By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the card view referenced by its id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Get%20Card%20View%20By%20Id%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Corner Radius

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the corner radius of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Get%20Corner%20Radius%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Elevation

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the elevation of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Get%20Elevation%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the height of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Get%20Height%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the width of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Get%20Width%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Set Background Color

Set the background color of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Set%20Background%20Color%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22argb%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|argb|<span class="chip chip-number">Number</span>|


### Set Corner Radius

Set the corner radius of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Set%20Corner%20Radius%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22radius%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|


### Set Elevation

Set the elevation of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Set%20Elevation%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22value%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|value|<span class="chip chip-number">Number</span>|


### Set Height

Set the height of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Set%20Height%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22height%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Width

Set the width of a card view component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Set%20Width%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22width%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


### Stroke Color

Set the stroke color to a card view component with the specific id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Stroke Width

Set the stroke width to a card view component with the specific id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22id%22,%20%22width%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the cards's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Content Padding Bottom

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>8</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the bottom padding between the card's edges and the children of card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Content%20Padding%20Bottom%22,%20%22getter%22:%20false%7D"></div>


### Content Padding Left

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>8</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the left padding between the card's edges and the children of card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Content%20Padding%20Left%22,%20%22getter%22:%20false%7D"></div>


### Content Padding Right

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>8</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the right padding between the card's edges and the children of card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Content%20Padding%20Right%22,%20%22getter%22:%20false%7D"></div>


### Content Padding Top

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>8</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the top padding between the card's edges and the children of card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Content%20Padding%20Top%22,%20%22getter%22:%20false%7D"></div>


### Corner Radius

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>2</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The corner radius from the card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Corner%20Radius%22,%20%22getter%22:%20false%7D"></div>


### Elevation

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>2</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The card view elevation value.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Elevation%22,%20%22getter%22:%20false%7D"></div>


### Full Clickable

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set to true, the card will consume all click events. This means if you have added as example buttons into the card, then will the card consume the touch event on the button. And this means that the button would not be clickable, but only the entire card.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Full%20Clickable%22,%20%22getter%22:%20false%7D"></div>


### Stroke Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The stroke width for the card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20false%7D"></div>


### Stroke Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The stroke width for the card view.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20false%7D"></div>


### Touch Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the touch color also known as ripple color to a card view component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Card%20View%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20false%7D"></div>
