# Line String

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that draws a sequence of line segments on a Map component._

## Events

### Click

[[Event('Line String', 'Click')]]

_The user clicked on the feature._

### Drag

[[Event('Line String', 'Drag')]]

_The user dragged the map feature._

### Long Click

[[Event('Line String', 'Long Click')]]

_The user long-pressed on the feature. This event will only trigger if Draggable is false._

### Start Drag

[[Event('Line String', 'Start Drag')]]

_The user started a drag operation._

### Stop Drag

[[Event('Line String', 'Stop Drag')]]

_The user stopped a drag operation._

## Methods

### DistanceToFeature

[[Method('Line String', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


_Compute the distance, in meters, between two map features._

### DistanceToPoint

[[Method('Line String', 'DistanceToPoint', true, 'latitude longitude centroid')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |centroid|`boolean`|


_Compute the distance, in meters, between a map feature and a latitude, longitude point._

### HideInfobox

[[Method('Line String', 'HideInfobox', false)]]

_Hide the infobox if it is shown. If the infobox is not visible this function has no effect._

### ShowInfobox

[[Method('Line String', 'ShowInfobox', false)]]

_Show the infobox for the feature. This will show the infobox even if_

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Description')]]

| Type |
|:----:|
|text|

_The description displayed in the info window that appears when the user clicks on the map feature._

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location._

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable or disable the infobox window display when the user taps the feature._

### Points From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Points From String')]]

| Type |
|:----:|
|text|

_Set the points of the LineString from a specially-coded character string of the form:
 [[longitude1, latitude1], [longitude2, latitude2], ...]
 Note the reversal of latitude and longitude versus how they are typically represented._

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The paint color used to outline the map feature._

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the stroke used to outline the map feature._

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|3|

_The width of the stroke used to outline the map feature._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Title')]]

| Type |
|:----:|
|text|

_The title displayed in the info window that appears when the user clicks on the map feature._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### Points

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Points')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_A list of latitude and longitude pairs that represent the line segments of the polyline._

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Line String', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The type of the map feature._