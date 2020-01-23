# Side Menu Layout

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that creates a side menu.   
Side menus are navigation menus that slide from the left of the screen via a swipe-right gesture.

## Events

### On Menu Item Click

[[Event('Side Menu Layout', 'On Menu Item Click', 'title')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|


Triggers when the user clicks on an item of the Navigation Menu

## Methods

### AddItem

[[Method('Side Menu Layout', 'AddItem', false, 'title image enabled checked group')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |image|`text`|
    |enabled|`boolean`|
    |checked|`boolean`|
    |group|`number`|


Add an item to the Navigation Menu

### RemoveItem

[[Method('Side Menu Layout', 'RemoveItem', false, 'title')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|


Remove an item from the Navigation Menu

### UpdateItem

[[Method('Side Menu Layout', 'UpdateItem', false, 'title newTitle image enabled checked')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |new Title|`text`|
    |image|`text`|
    |enabled|`boolean`|
    |checked|`boolean`|


Update an item of the Navigation Menu

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Set the background color of the Sidemenu Layout

### Circle Header Picture

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Circle Header Picture')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Sets (or not) the header picture to use a circle shape

### Disabled Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Disabled Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF9E9E9E|

Sets the color of the disabled elements of the SideMenu

### Enabled Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Enabled Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Sets the color of the enabled elements of the SideMenu

### Header Background Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Background Image')]]

| Type |
|:----:|
|text|

Sets the Header Background Picture

### Header Picture

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Picture')]]

| Type |
|:----:|
|text|

Sets the Header Picture of the Side Menu

### Header Subtitle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Subtitle')]]

| Type |
|:----:|
|text|

Sets the Header Subtitle

### Header Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Title')]]

| Type |
|:----:|
|text|

Sets the Header Title

### Selected Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Selected Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFE81E63|

Sets the color of the selected element of the SideMenu