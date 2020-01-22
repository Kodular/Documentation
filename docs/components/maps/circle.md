# Circle

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that draws a circle of a given radius around a point on a Map component._

## Events

### Click

[[Event('Circle', 'Click')]]

_The user clicked on the feature._

### Drag

[[Event('Circle', 'Drag')]]

_The user dragged the map feature._

### Long Click

[[Event('Circle', 'Long Click')]]

_The user long-pressed on the feature. This event will only trigger if Draggable is false._

### Start Drag

[[Event('Circle', 'Start Drag')]]

_The user started a drag operation._

### Stop Drag

[[Event('Circle', 'Stop Drag')]]

_The user stopped a drag operation._

## Methods

### DistanceToFeature

[[Method('Circle', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


_Compute the distance, in meters, between two map features._

### DistanceToPoint

[[Method('Circle', 'DistanceToPoint', true, 'latitude longitude centroid')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |centroid|`boolean`|


_Compute the distance, in meters, between a map feature and a latitude, longitude point._

### HideInfobox

[[Method('Circle', 'HideInfobox', false)]]

_Hide the infobox if it is shown. If the infobox is not visible this function has no effect._

### SetLocation

[[Method('Circle', 'SetLocation', false, 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_Set the center of the Circle._

### ShowInfobox

[[Method('Circle', 'ShowInfobox', false)]]

_Show the infobox for the feature. This will show the infobox even if_

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Description')]]

| Type |
|:----:|
|text|

_The description displayed in the info window that appears when the user clicks on the map feature._

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location._

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable or disable the infobox window display when the user taps the feature._

### Fill Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

_The paint color used to fill in the map feature._

### Fill Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the interior of the map feature._

### Latitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The latitude of the center of the circle._

### Longitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The longitude of the center of the circle._

### Radius

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Radius')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_The radius of the circle in meters._

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The paint color used to outline the map feature._

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the stroke used to outline the map feature._

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_The width of the stroke used to outline the map feature._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Title')]]

| Type |
|:----:|
|text|

_The title displayed in the info window that appears when the user clicks on the map feature._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Circle', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_No description available_