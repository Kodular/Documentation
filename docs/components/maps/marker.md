# Marker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Maps|API 19, Android 4.4 - 4.4.4 KitKat|3|

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

### Bearing To Feature

[[Method('Marker', 'Bearing To Feature', True, 'mapFeature', 'centroids')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|map Feature|Component|
|centroids|Boolean|


Returns the bearing from the Marker to the given map feature, in degrees from due north. If the centroids parameter is true, the bearing will be to the center of the map feature. Otherwise, the bearing will be computed to the point in the feature nearest the Marker.

### Bearing To Point

[[Method('Marker', 'Bearing To Point', True, 'latitude', 'longitude')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


Returns the bearing from the Marker to the given latitude and longitude, in degrees from due north.

### Distance To Feature

[[Method('Marker', 'Distance To Feature', True, 'mapFeature', 'centroids')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|map Feature|Component|
|centroids|Boolean|


Compute the distance, in meters, between two map features.

### Distance To Point

[[Method('Marker', 'Distance To Point', True, 'latitude', 'longitude')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


Compute the distance, in meters, between a map feature and a latitude, longitude point.

### Hide Infobox

[[Method('Marker', 'Hide Infobox', False)]]

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### Set Location

[[Method('Marker', 'Set Location', False, 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


Set the location of the marker.

### Show Infobox

[[Method('Marker', 'Show Infobox', False)]]

Show the infobox for the feature. This will show the infobox even if

## Properties

### Anchor Horizontal

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>3</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The horizontal alignment property controls where the Marker's anchor is located relative to its width.

[[PropertyBlockGetterAndSetter('Marker', 'Anchor Horizontal')]]

### Anchor Vertical

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>3</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The vertical alignment property controls where the Marker's anchor is located relative to its height.

[[PropertyBlockGetterAndSetter('Marker', 'Anchor Vertical')]]

### Description

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The description displayed in the info window that appears when the user clicks on the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Description')]]

### Draggable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

[[PropertyBlockGetterAndSetter('Marker', 'Draggable')]]

### Enable Infobox

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable or disable the infobox window display when the user taps the feature.

[[PropertyBlockGetterAndSetter('Marker', 'Enable Infobox')]]

### Fill Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #F34336;">Default: <i>#F34336FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The paint color used to fill in the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Fill Color')]]

### Fill Opacity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The opacity of the interior of the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Fill Opacity')]]

### Image Asset

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The ImageAsset property is used to provide an alternative image for the Marker.

[[PropertyBlockGetterAndSetter('Marker', 'Image Asset')]]

### Latitude

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Marker', 'Latitude')]]

### Longitude

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Marker', 'Longitude')]]

### Stroke Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The paint color used to outline the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Stroke Color')]]

### Stroke Opacity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The opacity of the stroke used to outline the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Stroke Opacity')]]

### Stroke Width

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The width of the stroke used to outline the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Stroke Width')]]

### Title

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title displayed in the info window that appears when the user clicks on the map feature.

[[PropertyBlockGetterAndSetter('Marker', 'Title')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

[[PropertyBlockGetterAndSetter('Marker', 'Visible')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Marker', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Marker', 'Height Percent')]]

### ShowShadow

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Gets whether or not the shadow of the Marker is shown.

[[PropertyBlockGetterAndSetter('Marker', 'ShowShadow')]]

### Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Marker', 'Type')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Marker', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Marker', 'Width Percent')]]