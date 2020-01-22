# Marker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>An icon positioned at a point to indicate information on a map. Markers can be used to provide an info window, custom fill and stroke colors, and custom images to convey information to the user.</p>_

## Events

### Click

[[Event('Marker', 'Click')]]

_The user clicked on the feature._

### Drag

[[Event('Marker', 'Drag')]]

_The user dragged the map feature._

### Long Click

[[Event('Marker', 'Long Click')]]

_The user long-pressed on the feature. This event will only trigger if Draggable is false._

### Start Drag

[[Event('Marker', 'Start Drag')]]

_The user started a drag operation._

### Stop Drag

[[Event('Marker', 'Stop Drag')]]

_The user stopped a drag operation._

## Methods

### BearingToFeature

[[Method('Marker', 'BearingToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


_Returns the bearing from the Marker to the given map feature, in degrees from due north. If the centroids parameter is true, the bearing will be to the center of the map feature. Otherwise, the bearing will be computed to the point in the feature nearest the Marker._

### BearingToPoint

[[Method('Marker', 'BearingToPoint', true, 'latitude longitude')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_Returns the bearing from the Marker to the given latitude and longitude, in degrees from due north._

### DistanceToFeature

[[Method('Marker', 'DistanceToFeature', true, 'mapFeature centroids')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |map Feature|`component`|
    |centroids|`boolean`|


_Compute the distance, in meters, between two map features._

### DistanceToPoint

[[Method('Marker', 'DistanceToPoint', true, 'latitude longitude')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_Compute the distance, in meters, between a map feature and a latitude, longitude point._

### HideInfobox

[[Method('Marker', 'HideInfobox', false)]]

_Hide the infobox if it is shown. If the infobox is not visible this function has no effect._

### SetLocation

[[Method('Marker', 'SetLocation', false, 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_Set the location of the marker._

### ShowInfobox

[[Method('Marker', 'ShowInfobox', false)]]

_Show the infobox for the feature. This will show the infobox even if_

## Properties

### Anchor Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Anchor Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|3|

_The horizontal alignment property controls where the Marker's anchor is located relative to its width._

### Anchor Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Anchor Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|3|

_The vertical alignment property controls where the Marker's anchor is located relative to its height._

### Description

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Description')]]

| Type |
|:----:|
|text|

_The description displayed in the info window that appears when the user clicks on the map feature._

### Draggable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Draggable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location._

### Enable Infobox

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Enable Infobox')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable or disable the infobox window display when the user taps the feature._

### Fill Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Fill Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

_The paint color used to fill in the map feature._

### Fill Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Fill Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the interior of the map feature._

### Image Asset

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Image Asset')]]

| Type |
|:----:|
|text|

_The ImageAsset property is used to provide an alternative image for the Marker._

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

_The paint color used to outline the map feature._

### Stroke Opacity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Stroke Opacity')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

_The opacity of the stroke used to outline the map feature._

### Stroke Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Stroke Width')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_The width of the stroke used to outline the map feature._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Title')]]

| Type |
|:----:|
|text|

_The title displayed in the info window that appears when the user clicks on the map feature._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Marker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

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

_Gets whether or not the shadow of the Marker is shown._

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