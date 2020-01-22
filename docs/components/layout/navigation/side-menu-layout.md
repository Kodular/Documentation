# Side Menu Layout

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that creates a side menu. <br>Side menus are navigation menus that slide from the left of the screen via a swipe-right gesture._

## Events

### On Menu Item Click

[[Event('Side Menu Layout', 'On Menu Item Click', 'title')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|


_Triggers when the user clicks on an item of the Navigation Menu_

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


_Add an item to the Navigation Menu_

### RemoveItem

[[Method('Side Menu Layout', 'RemoveItem', false, 'title')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|


_Remove an item from the Navigation Menu_

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


_Update an item of the Navigation Menu_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Set the background color of the Sidemenu Layout_

### Circle Header Picture

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Circle Header Picture')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Sets (or not) the header picture to use a circle shape_

### Disabled Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Disabled Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF9E9E9E|

_Sets the color of the disabled elements of the SideMenu_

### Enabled Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Enabled Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Sets the color of the enabled elements of the SideMenu_

### Header Background Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Background Image')]]

| Type |
|:----:|
|text|

_Sets the Header Background Picture_

### Header Picture

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Picture')]]

| Type |
|:----:|
|text|

_Sets the Header Picture of the Side Menu_

### Header Subtitle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Subtitle')]]

| Type |
|:----:|
|text|

_Sets the Header Subtitle_

### Header Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Header Title')]]

| Type |
|:----:|
|text|

_Sets the Header Title_

### Selected Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Side Menu Layout', 'Selected Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFE81E63|

_Sets the color of the selected element of the SideMenu_