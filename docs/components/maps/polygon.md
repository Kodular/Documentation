# Polygon

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that draws arbitrary shapes on a Map component. Vertices of a Polygon can be moved by clicking and dragging on them.

## Events

### Click

The user clicked on the feature.

[[Event('Polygon', 'Click')]]

### Drag

The user dragged the map feature.

[[Event('Polygon', 'Drag')]]

### Long Click

The user long-pressed on the feature. This event will only trigger if Draggable is false.

[[Event('Polygon', 'Long Click')]]

### Start Drag

The user started a drag operation.

[[Event('Polygon', 'Start Drag')]]

### Stop Drag

The user stopped a drag operation.

[[Event('Polygon', 'Stop Drag')]]

## Methods

### Centroid

<span class="chip chip-list">Returns: <i>List</i></span> 

Returns the centroid of the Polygon as a (latitude, longitude) pair.

[[Method('Polygon', 'Centroid', True)]]

### Distance To Feature

<span class="chip chip-number">Returns: <i>Number</i></span> 

Compute the distance, in meters, between two map features.

[[Method('Polygon', 'Distance To Feature', True, 'mapFeature', 'centroids')]]

| Params | []() |
|--------|------|
|map Feature|<span class="chip chip-component">Component</span>|
|centroids|<span class="chip chip-boolean">Boolean</span>|


### Distance To Point

<span class="chip chip-number">Returns: <i>Number</i></span> 

Compute the distance, in meters, between a map feature and a latitude, longitude point.

[[Method('Polygon', 'Distance To Point', True, 'latitude', 'longitude', 'centroid')]]

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|centroid|<span class="chip chip-boolean">Boolean</span>|


### Hide Infobox

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

[[Method('Polygon', 'Hide Infobox', False)]]

### Show Infobox

Show the infobox for the feature. This will show the infobox even if

[[Method('Polygon', 'Show Infobox', False)]]

## Properties

### Description

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The description displayed in the info window that appears when the user clicks on the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Description')]]

### Draggable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

[[PropertyBlockGetterAndSetter('Polygon', 'Draggable')]]

### Enable Infobox

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable or disable the infobox window display when the user taps the feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Enable Infobox')]]

### Fill Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #F34336;">Default: <i>#F34336FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The paint color used to fill in the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Fill Color')]]

### Fill Opacity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The opacity of the interior of the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Fill Opacity')]]

### Hole Points From String

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Constructs holes in a polygon from a given list of coordinates per hole.

[[PropertyBlockGetterAndSetter('Polygon', 'Hole Points From String')]]

### Points From String

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Constructs a polygon from the given list of coordinates.

[[PropertyBlockGetterAndSetter('Polygon', 'Points From String')]]

### Stroke Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The paint color used to outline the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Color')]]

### Stroke Opacity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The opacity of the stroke used to outline the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Opacity')]]

### Stroke Width

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The width of the stroke used to outline the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Stroke Width')]]

### Title

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title displayed in the info window that appears when the user clicks on the map feature.

[[PropertyBlockGetterAndSetter('Polygon', 'Title')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

[[PropertyBlockGetterAndSetter('Polygon', 'Visible')]]

### Hole Points

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Polygon', 'Hole Points')]]

### Points

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Gets or sets the sequence of points used to draw the polygon.

[[PropertyBlockGetterAndSetter('Polygon', 'Points')]]

### Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The type of the feature. For polygons, this returns the text "Polygon".

[[PropertyBlockGetter('Polygon', 'Type')]]