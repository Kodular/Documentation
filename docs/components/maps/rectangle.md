# Rectangle

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that draws a rectangle on a Map component bounded by north, south, east, and west edges._

## Events

### Click

[[Event('Rectangle', 'Click')]]

_The user clicked on the feature._

### Drag

[[Event('Rectangle', 'Drag')]]

_The user dragged the map feature._

### Long Click

[[Event('Rectangle', 'Long Click')]]

_The user long-pressed on the feature. This event will only trigger if Draggable is false._

### Start Drag

[[Event('Rectangle', 'Start Drag')]]

_The user started a drag operation._

### Stop Drag

[[Event('Rectangle', 'Stop Drag')]]

_The user stopped a drag operation._

## Methods

### Bounds

[[Method('Rectangle', 'Bounds', true)]]

{>>Returns `list`<<}

_Returns the bounding box of the Rectangle in the format ((North West) (South East))._

### Center

[[Method('Rectangle', 'Center', true)]]

{>>Returns `list`<<}

_Returns the center of the Rectangle as a list of the form (Latitude Longitude)._

### DistanceToFeature

[[Method('Rectangle', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


_Compute the distance, in meters, between two map features._

### DistanceToPoint

[[Method('Rectangle', 'DistanceToPoint', true, 'latitude longitude centroid')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |centroid|`boolean`|


_Compute the distance, in meters, between a map feature and a latitude, longitude point._

### HideInfobox

[[Method('Rectangle', 'HideInfobox', false)]]

_Hide the infobox if it is shown. If the infobox is not visible this function has no effect._

### SetCenter

[[Method('Rectangle', 'SetCenter', false, 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_Moves the Rectangle so that it is centered on the given latitude and longitude while attempting to maintain the width and height of the Rectangle as measured from the center to the edges._

### ShowInfobox

[[Method('Rectangle', 'ShowInfobox', false)]]

_Show the infobox for the feature. This will show the infobox even if_

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Description')]]

| Type |
|:----:|
|text|

_The description displayed in the info window that appears when the user clicks on the map feature._

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location._

### East Longitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'East Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable or disable the infobox window display when the user taps the feature._

### Fill Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

_The paint color used to fill in the map feature._

### Fill Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the interior of the map feature._

### North Latitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'North Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### South Latitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'South Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The paint color used to outline the map feature._

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the stroke used to outline the map feature._

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_The width of the stroke used to outline the map feature._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Title')]]

| Type |
|:----:|
|text|

_The title displayed in the info window that appears when the user clicks on the map feature._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### West Longitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'West Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Rectangle', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The type of the feature. For rectangles, this returns the text "Rectangle"._