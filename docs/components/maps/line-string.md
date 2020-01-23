# Line String

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that draws a sequence of line segments on a Map component.

## Events

### Click

[[Event('Line String', 'Click')]]

The user clicked on the feature.

### Drag

[[Event('Line String', 'Drag')]]

The user dragged the map feature.

### Long Click

[[Event('Line String', 'Long Click')]]

The user long-pressed on the feature. This event will only trigger if Draggable is false.

### Start Drag

[[Event('Line String', 'Start Drag')]]

The user started a drag operation.

### Stop Drag

[[Event('Line String', 'Stop Drag')]]

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

### ShowInfobox

_Block preview not available_

Show the infobox for the feature. This will show the infobox even if

## Properties

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Description')]]

| Type |
|:----:|
|text|

The description displayed in the info window that appears when the user clicks on the map feature.

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable or disable the infobox window display when the user taps the feature.

### Points From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Points From String')]]

| Type |
|:----:|
|text|

Set the points of the LineString from a specially-coded character string of the form:   [[longitude1, latitude1], [longitude2, latitude2], ...]   Note the reversal of latitude and longitude versus how they are typically represented.

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The paint color used to outline the map feature.

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the stroke used to outline the map feature.

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|3|

The width of the stroke used to outline the map feature.

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Title')]]

| Type |
|:----:|
|text|

The title displayed in the info window that appears when the user clicks on the map feature.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

### Points

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Line String', 'Points')]]

| Type | Default |
|:----:|:-------:|
|list|None|

A list of latitude and longitude pairs that represent the line segments of the polyline.

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Line String', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The type of the map feature.