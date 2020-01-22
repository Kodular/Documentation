# Polygon

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that draws arbitrary shapes on a Map component. Vertices of a Polygon can be moved by clicking and dragging on them._

## Events

### Click

[[Event('Polygon', 'Click')]]

_The user clicked on the feature._

### Drag

[[Event('Polygon', 'Drag')]]

_The user dragged the map feature._

### Long Click

[[Event('Polygon', 'Long Click')]]

_The user long-pressed on the feature. This event will only trigger if Draggable is false._

### Start Drag

[[Event('Polygon', 'Start Drag')]]

_The user started a drag operation._

### Stop Drag

[[Event('Polygon', 'Stop Drag')]]

_The user stopped a drag operation._

## Methods

### Centroid

[[Method('Polygon', 'Centroid', true)]]

{>>Returns `list`<<}

_Returns the centroid of the Polygon as a (latitude, longitude) pair._

### DistanceToFeature

[[Method('Polygon', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


_Compute the distance, in meters, between two map features._

### DistanceToPoint

[[Method('Polygon', 'DistanceToPoint', true, 'latitude longitude centroid')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |centroid|`boolean`|


_Compute the distance, in meters, between a map feature and a latitude, longitude point._

### HideInfobox

[[Method('Polygon', 'HideInfobox', false)]]

_Hide the infobox if it is shown. If the infobox is not visible this function has no effect._

### ShowInfobox

[[Method('Polygon', 'ShowInfobox', false)]]

_Show the infobox for the feature. This will show the infobox even if_

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Description')]]

| Type |
|:----:|
|text|

_The description displayed in the info window that appears when the user clicks on the map feature._

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location._

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable or disable the infobox window display when the user taps the feature._

### Fill Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

_The paint color used to fill in the map feature._

### Fill Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the interior of the map feature._

### Hole Points From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Hole Points From String')]]

| Type |
|:----:|
|text|

_Constructs holes in a polygon from a given list of coordinates per hole._

### Points From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Points From String')]]

| Type |
|:----:|
|text|

_Constructs a polygon from the given list of coordinates._

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The paint color used to outline the map feature._

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the stroke used to outline the map feature._

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_The width of the stroke used to outline the map feature._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Title')]]

| Type |
|:----:|
|text|

_The title displayed in the info window that appears when the user clicks on the map feature._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### Hole Points

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Hole Points')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_No description available_

### Points

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Points')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_Gets or sets the sequence of points used to draw the polygon._

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Polygon', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The type of the feature. For polygons, this returns the text "Polygon"._