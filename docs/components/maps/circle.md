# Circle

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that draws a circle of a given radius around a point on a Map component.

## Events

### Click

The user clicked on the feature.

[[Event('Circle', 'Click')]]

### Drag

The user dragged the map feature.

[[Event('Circle', 'Drag')]]

### Long Click

The user long-pressed on the feature. This event will only trigger if Draggable is false.

[[Event('Circle', 'Long Click')]]

### Start Drag

The user started a drag operation.

[[Event('Circle', 'Start Drag')]]

### Stop Drag

The user stopped a drag operation.

[[Event('Circle', 'Stop Drag')]]

## Methods

### Distance To Feature

<span class="chip chip-number">Returns: <i>Number</i></span> 

Compute the distance, in meters, between two map features.

[[Method('Circle', 'Distance To Feature', True, 'mapFeature', 'centroids')]]

| Params | []() |
|--------|------|
|map Feature|<span class="chip chip-component">Component</span>|
|centroids|<span class="chip chip-boolean">Boolean</span>|


### Distance To Point

<span class="chip chip-number">Returns: <i>Number</i></span> 

Compute the distance, in meters, between a map feature and a latitude, longitude point.

[[Method('Circle', 'Distance To Point', True, 'latitude', 'longitude', 'centroid')]]

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|centroid|<span class="chip chip-boolean">Boolean</span>|


### Hide Infobox

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

[[Method('Circle', 'Hide Infobox', False)]]

### Set Location

Set the center of the Circle.

[[Method('Circle', 'Set Location', False, 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### Show Infobox

Show the infobox for the feature. This will show the infobox even if

[[Method('Circle', 'Show Infobox', False)]]

## Properties

### Description

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The description displayed in the info window that appears when the user clicks on the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Description')]]

### Draggable

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

[[PropertyBlockGetterAndSetter('Circle', 'Draggable')]]

### Enable Infobox

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable or disable the infobox window display when the user taps the feature.

[[PropertyBlockGetterAndSetter('Circle', 'Enable Infobox')]]

### Fill Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #F34336;">Default: <i>#F34336FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The paint color used to fill in the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Fill Color')]]

### Fill Opacity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The opacity of the interior of the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Fill Opacity')]]

### Latitude

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The latitude of the center of the circle.

[[PropertyBlockGetterAndSetter('Circle', 'Latitude')]]

### Longitude

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The longitude of the center of the circle.

[[PropertyBlockGetterAndSetter('Circle', 'Longitude')]]

### Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The radius of the circle in meters.

[[PropertyBlockGetterAndSetter('Circle', 'Radius')]]

### Stroke Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The paint color used to outline the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Stroke Color')]]

### Stroke Opacity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The opacity of the stroke used to outline the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Stroke Opacity')]]

### Stroke Width

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The width of the stroke used to outline the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Stroke Width')]]

### Title

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title displayed in the info window that appears when the user clicks on the map feature.

[[PropertyBlockGetterAndSetter('Circle', 'Title')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

[[PropertyBlockGetterAndSetter('Circle', 'Visible')]]

### Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Circle', 'Type')]]