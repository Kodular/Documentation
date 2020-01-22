# Polygon

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that draws arbitrary shapes on a Map component. Vertices of a Polygon can be moved by clicking and dragging on them._

## Properties

### Description

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Description')]]

| Type |
|:----:|
|text|

The description displayed in the info window that appears when the user clicks on the map feature.

### Draggable

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

### Enable Infobox

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable or disable the infobox window display when the user taps the feature.

### Fill Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

The paint color used to fill in the map feature.

### Fill Opacity

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the interior of the map feature.

### Hole Points From String

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Hole Points From String')]]

| Type |
|:----:|
|text|

Constructs holes in a polygon from a given list of coordinates per hole.

### Points From String

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Points From String')]]

| Type |
|:----:|
|text|

Constructs a polygon from the given list of coordinates.

### Stroke Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The paint color used to outline the map feature.

### Stroke Opacity

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the stroke used to outline the map feature.

### Stroke Width

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

The width of the stroke used to outline the map feature.

### Title

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Title')]]

| Type |
|:----:|
|text|

The title displayed in the info window that appears when the user clicks on the map feature.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Polygon', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

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

Gets or sets the sequence of points used to draw the polygon.

### Type



:eyes: Read-Only property
[[PropertyBlockGetter('Polygon', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The type of the feature. For polygons, this returns the text "Polygon".

## Methods

### Centroid



[[Method('Polygon', 'Centroid', true)]]

{>>Returns `list`<<}


Returns the centroid of the Polygon as a (latitude, longitude) pair.

### DistanceToFeature



[[Method('Polygon', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|map Feature|`component`|
|centroids|`boolean`|


Compute the distance, in meters, between two map features.

### DistanceToPoint



[[Method('Polygon', 'DistanceToPoint', true, 'latitude longitude centroid')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|latitude|`number`|
|longitude|`number`|
|centroid|`boolean`|


Compute the distance, in meters, between a map feature and a latitude, longitude point.

### HideInfobox



[[Method('Polygon', 'HideInfobox', false)]]

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### ShowInfobox



[[Method('Polygon', 'ShowInfobox', false)]]

Show the infobox for the feature. This will show the infobox even if