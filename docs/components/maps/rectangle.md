# Rectangle

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A visible component that draws a rectangle on a Map component bounded by north, south, east, and west edges.

## Events

### Click

The user clicked on the feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Click%22,%20%22params%22:%20%5B%5D%7D"></div>


### Drag

The user dragged the map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Drag%22,%20%22params%22:%20%5B%5D%7D"></div>


### Long Click

The user long-pressed on the feature. This event will only trigger if Draggable is false.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Long%20Click%22,%20%22params%22:%20%5B%5D%7D"></div>


### Start Drag

The user started a drag operation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Start%20Drag%22,%20%22params%22:%20%5B%5D%7D"></div>


### Stop Drag

The user stopped a drag operation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stop%20Drag%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Bounds

<span class="chip chip-list">Returns: <i>List</i></span> 

Returns the bounding box of the Rectangle in the format ((North West) (South East)).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Bounds%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Center

<span class="chip chip-list">Returns: <i>List</i></span> 

Returns the center of the Rectangle as a list of the form (Latitude Longitude).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Center%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Distance To Feature

<span class="chip chip-number">Returns: <i>Number</i></span> 

Compute the distance, in meters, between two map features.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Distance%20To%20Feature%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22map%20Feature%22,%20%22centroids%22%5D%7D"></div>


| Params | []() |
|--------|------|
|map Feature|<span class="chip chip-component">Component</span>|
|centroids|<span class="chip chip-boolean">Boolean</span>|


### Distance To Point

<span class="chip chip-number">Returns: <i>Number</i></span> 

Compute the distance, in meters, between a map feature and a latitude, longitude point.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Distance%20To%20Point%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22,%20%22centroid%22%5D%7D"></div>


| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|centroid|<span class="chip chip-boolean">Boolean</span>|


### Hide Infobox

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Hide%20Infobox%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Set Center

Moves the Rectangle so that it is centered on the given latitude and longitude while attempting to maintain the width and height of the Rectangle as measured from the center to the edges.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Set%20Center%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>


| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### Show Infobox

Show the infobox for the feature. This will show the infobox even if

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Show%20Infobox%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Description

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The description displayed in the info window that appears when the user clicks on the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20false%7D"></div>


### Draggable

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Draggable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Draggable%22,%20%22getter%22:%20false%7D"></div>


### East Longitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22East%20Longitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22East%20Longitude%22,%20%22getter%22:%20false%7D"></div>


### Enable Infobox

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Enable or disable the infobox window display when the user taps the feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Enable%20Infobox%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Enable%20Infobox%22,%20%22getter%22:%20false%7D"></div>


### Fill Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #F34336;">Default: <i>#F34336FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The paint color used to fill in the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Fill%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Fill%20Color%22,%20%22getter%22:%20false%7D"></div>


### Fill Opacity

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The opacity of the interior of the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Fill%20Opacity%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Fill%20Opacity%22,%20%22getter%22:%20false%7D"></div>


### North Latitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22North%20Latitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22North%20Latitude%22,%20%22getter%22:%20false%7D"></div>


### South Latitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22South%20Latitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22South%20Latitude%22,%20%22getter%22:%20false%7D"></div>


### Stroke Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The paint color used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20false%7D"></div>


### Stroke Opacity

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The opacity of the stroke used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stroke%20Opacity%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stroke%20Opacity%22,%20%22getter%22:%20false%7D"></div>


### Stroke Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The width of the stroke used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20false%7D"></div>


### Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The title displayed in the info window that appears when the user clicks on the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### West Longitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22West%20Longitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22West%20Longitude%22,%20%22getter%22:%20false%7D"></div>


### Type

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The type of the feature. For rectangles, this returns the text "Rectangle".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rectangle%22,%20%22name%22:%20%22Type%22,%20%22getter%22:%20true%7D"></div>
