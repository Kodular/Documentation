# Marker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|3|API 19 | Android 4.4 - 4.4.4 KitKat|

## Overview

An icon positioned at a point to indicate information on a map. Markers can be used to provide an info window, custom fill and stroke colors, and custom images to convey information to the user.

## Events

### Click

[[Event('Marker', 'Click')]]

The user clicked on the feature.

### Drag

[[Event('Marker', 'Drag')]]

The user dragged the map feature.

### Long Click

[[Event('Marker', 'Long Click')]]

The user long-pressed on the feature. This event will only trigger if Draggable is false.

### Start Drag

[[Event('Marker', 'Start Drag')]]

The user started a drag operation.

### Stop Drag

[[Event('Marker', 'Stop Drag')]]

The user stopped a drag operation.

## Methods

### BearingToFeature

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


Returns the bearing from the Marker to the given map feature, in degrees from due north. If the centroids parameter is true, the bearing will be to the center of the map feature. Otherwise, the bearing will be computed to the point in the feature nearest the Marker.

### BearingToPoint

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


Returns the bearing from the Marker to the given latitude and longitude, in degrees from due north.

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


Set the location of the marker.

### ShowInfobox

_Block preview not available_

Show the infobox for the feature. This will show the infobox even if

## Properties

### Anchor Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Anchor Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|3|

The horizontal alignment property controls where the Marker's anchor is located relative to its width.

### Anchor Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Anchor Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|3|

The vertical alignment property controls where the Marker's anchor is located relative to its height.

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Description')]]

| Type |
|:----:|
|text|

The description displayed in the info window that appears when the user clicks on the map feature.

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable or disable the infobox window display when the user taps the feature.

### Fill Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

The paint color used to fill in the map feature.

### Fill Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the interior of the map feature.

### Image Asset

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Image Asset')]]

| Type |
|:----:|
|text|

The ImageAsset property is used to provide an alternative image for the Marker.

### Latitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Longitude

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Stroke Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Stroke Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The paint color used to outline the map feature.

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

The opacity of the stroke used to outline the map feature.

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

The width of the stroke used to outline the map feature.

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Title')]]

| Type |
|:----:|
|text|

The title displayed in the info window that appears when the user clicks on the map feature.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### ShowShadow

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'ShowShadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Gets whether or not the shadow of the Marker is shown.

### Type

:eyes: Read-Only property
[[PropertyBlockGetter('Marker', 'Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_No description available_

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_