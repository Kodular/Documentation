# Polygon

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Maps|API 19, Android 4.4 - 4.4.4 KitKat|2|

## Overview

A visible component that draws arbitrary shapes on a Map component. Vertices of a Polygon can be moved by clicking and dragging on them.

## Events

### Click

[[Event('Polygon', 'Click')]]

The user clicked on the feature.

### Drag

[[Event('Polygon', 'Drag')]]

The user dragged the map feature.

### Long Click

[[Event('Polygon', 'Long Click')]]

The user long-pressed on the feature. This event will only trigger if Draggable is false.

### Start Drag

[[Event('Polygon', 'Start Drag')]]

The user started a drag operation.

### Stop Drag

[[Event('Polygon', 'Stop Drag')]]

The user stopped a drag operation.

## Methods

### Centroid

[[Method('Polygon', 'Centroid', True)]]

{>>Returns `list`<<}

Returns the centroid of the Polygon as a (latitude, longitude) pair.

### Distance To Feature

[[Method('Polygon', 'Distance To Feature', True, 'mapFeature', 'centroids')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|map Feature|Component|
|centroids|Boolean|


Compute the distance, in meters, between two map features.

### Distance To Point

[[Method('Polygon', 'Distance To Point', True, 'latitude', 'longitude', 'centroid')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|
|centroid|Boolean|


Compute the distance, in meters, between a map feature and a latitude, longitude point.

### Hide Infobox

[[Method('Polygon', 'Hide Infobox', False)]]

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### Show Infobox

[[Method('Polygon', 'Show Infobox', False)]]

Show the infobox for the feature. This will show the infobox even if

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFF34336</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

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