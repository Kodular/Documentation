# Line String

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that draws a sequence of line segments on a Map component.

## Events

### Click

The user clicked on the feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Drag

The user dragged the map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Drag%22,%20%22param%22:%20%5B%5D%7D"></div>

### Long Click

The user long-pressed on the feature. This event will only trigger if Draggable is false.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Start Drag

The user started a drag operation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Start%20Drag%22,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Drag

The user stopped a drag operation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stop%20Drag%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Distance To Feature

<span class="chip chip-number">Returns: <i>Number</i></span>

Compute the distance, in meters, between two map features.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Distance%20To%20Feature%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22map%20Feature%22,%20%22centroids%22%5D%7D"></div>

| Params | []() |
|--------|------|
|map Feature|<span class="chip chip-component">Component</span>|
|centroids|<span class="chip chip-boolean">Boolean</span>|

### Distance To Point

<span class="chip chip-number">Returns: <i>Number</i></span>

Compute the distance, in meters, between a map feature and a latitude, longitude point.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Distance%20To%20Point%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22latitude%22,%20%22longitude%22,%20%22centroid%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|centroid|<span class="chip chip-boolean">Boolean</span>|

### Hide Infobox

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Hide%20Infobox%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Infobox

Show the infobox for the feature. This will show the infobox even if

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Show%20Infobox%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Description

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The description displayed in the info window that appears when the user clicks on the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20false%7D"></div>

### Draggable

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Draggable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Draggable%22,%20%22getter%22:%20false%7D"></div>

### Enable Infobox

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Enable or disable the infobox window display when the user taps the feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Enable%20Infobox%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Enable%20Infobox%22,%20%22getter%22:%20false%7D"></div>

### Points

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

A list of latitude and longitude pairs that represent the line segments of the polyline.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Points%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Points%22,%20%22getter%22:%20false%7D"></div>

### Points From String

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the points of the LineString from a specially-coded character string of the form:[[longitude1, latitude1], [longitude2, latitude2], ...]Note the reversal of latitude and longitude versus how they are typically represented.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Points%20From%20String%22,%20%22getter%22:%20false%7D"></div>

### Stroke Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The paint color used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20false%7D"></div>

### Stroke Opacity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The opacity of the stroke used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stroke%20Opacity%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stroke%20Opacity%22,%20%22getter%22:%20false%7D"></div>

### Stroke Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>3</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The width of the stroke used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20false%7D"></div>

### Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The title displayed in the info window that appears when the user clicks on the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>

### Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The type of the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Type%22,%20%22getter%22:%20true%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Line%20String%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
