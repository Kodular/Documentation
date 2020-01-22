# Rectangle

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that draws a rectangle on a Map component bounded by north, south, east, and west edges._

## Properties

### Description

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Description')]]

| Type |
|:----:|
|text|

The description displayed in the info window that appears when the user clicks on the map feature.

### Draggable

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

### East Longitude

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'East Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Enable Infobox

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable or disable the infobox window display when the user taps the feature.

### Fill Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

The paint color used to fill in the map feature.

### Fill Opacity

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the interior of the map feature.

### North Latitude

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'North Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### South Latitude

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'South Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Stroke Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The paint color used to outline the map feature.

### Stroke Opacity

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the stroke used to outline the map feature.

### Stroke Width

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

The width of the stroke used to outline the map feature.

### Title

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Title')]]

| Type |
|:----:|
|text|

The title displayed in the info window that appears when the user clicks on the map feature.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rectangle', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

### West Longitude

<small>Available as Common Property</small>

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

The type of the feature. For rectangles, this returns the text "Rectangle".

## Methods

### Bounds



[[Method('Rectangle', 'Bounds', true)]]

{>>Returns `list`<<}


Returns the bounding box of the Rectangle in the format ((North West) (South East)).

### Center



[[Method('Rectangle', 'Center', true)]]

{>>Returns `list`<<}


Returns the center of the Rectangle as a list of the form (Latitude Longitude).

### DistanceToFeature



[[Method('Rectangle', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|map Feature|`component`|
|centroids|`boolean`|


Compute the distance, in meters, between two map features.

### DistanceToPoint



[[Method('Rectangle', 'DistanceToPoint', true, 'latitude longitude centroid')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|latitude|`number`|
|longitude|`number`|
|centroid|`boolean`|


Compute the distance, in meters, between a map feature and a latitude, longitude point.

### HideInfobox



[[Method('Rectangle', 'HideInfobox', false)]]

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### SetCenter



[[Method('Rectangle', 'SetCenter', false, 'latitude longitude')]]

**Parameters**

| Name | Type |
|------|------|
|latitude|`number`|
|longitude|`number`|


Moves the Rectangle so that it is centered on the given latitude and longitude while attempting to maintain the width and height of the Rectangle as measured from the center to the edges.

### ShowInfobox



[[Method('Rectangle', 'ShowInfobox', false)]]

Show the infobox for the feature. This will show the infobox even if