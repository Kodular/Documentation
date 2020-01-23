# Circle

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that draws a circle of a given radius around a point on a Map component.

## Events

### Click

[[Event('Circle', 'Click')]]

The user clicked on the feature.

### Drag

[[Event('Circle', 'Drag')]]

The user dragged the map feature.

### Long Click

[[Event('Circle', 'Long Click')]]

The user long-pressed on the feature. This event will only trigger if Draggable is false.

### Start Drag

[[Event('Circle', 'Start Drag')]]

The user started a drag operation.

### Stop Drag

[[Event('Circle', 'Stop Drag')]]

The user stopped a drag operation.

## Methods

### DistanceToFeature

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


Compute the distance, in meters, between two map features.

### DistanceToPoint

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |centroid|`boolean`|


Compute the distance, in meters, between a map feature and a latitude, longitude point.

### HideInfobox

_Block preview not available_

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### SetLocation

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


Set the center of the Circle.

### ShowInfobox

_Block preview not available_

Show the infobox for the feature. This will show the infobox even if

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Description')]]

| Type |
|:----:|
|text|

The description displayed in the info window that appears when the user clicks on the map feature.

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable or disable the infobox window display when the user taps the feature.

### Fill Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

The paint color used to fill in the map feature.

### Fill Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the interior of the map feature.

### Latitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The latitude of the center of the circle.

### Longitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The longitude of the center of the circle.

### Radius

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Radius')]]

| Type | Default |
|:----:|:-------:|
|number|0|

The radius of the circle in meters.

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The paint color used to outline the map feature.

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the stroke used to outline the map feature.

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

The width of the stroke used to outline the map feature.

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Title')]]

| Type |
|:----:|
|text|

The title displayed in the info window that appears when the user clicks on the map feature.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Circle', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Circle', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_No description available_