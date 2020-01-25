# Marker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

## Overview

An icon positioned at a point to indicate information on a map. Markers can be used to provide an info window, custom fill and stroke colors, and custom images to convey information to the user.

## Events

### Click

The user clicked on the feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Drag

The user dragged the map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Drag%22,%20%22param%22:%20%5B%5D%7D"></div>

### Long Click

The user long-pressed on the feature. This event will only trigger if Draggable is false.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Start Drag

The user started a drag operation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Start%20Drag%22,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Drag

The user stopped a drag operation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stop%20Drag%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Bearing To Feature

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns the bearing from the Marker to the given map feature, in degrees from due north. If the centroids parameter is true, the bearing will be to the center of the map feature. Otherwise, the bearing will be computed to the point in the feature nearest the Marker.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Bearing%20To%20Feature%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22map%20Feature%22,%20%22centroids%22%5D%7D"></div>

| Params | []() |
|--------|------|
|map Feature|<span class="chip chip-component">Component</span>|
|centroids|<span class="chip chip-boolean">Boolean</span>|

### Bearing To Point

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns the bearing from the Marker to the given latitude and longitude, in degrees from due north.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Bearing%20To%20Point%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|

### Distance To Feature

<span class="chip chip-number">Returns: <i>Number</i></span>

Compute the distance, in meters, between two map features.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Distance%20To%20Feature%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22map%20Feature%22,%20%22centroids%22%5D%7D"></div>

| Params | []() |
|--------|------|
|map Feature|<span class="chip chip-component">Component</span>|
|centroids|<span class="chip chip-boolean">Boolean</span>|

### Distance To Point

<span class="chip chip-number">Returns: <i>Number</i></span>

Compute the distance, in meters, between a map feature and a latitude, longitude point.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Distance%20To%20Point%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|

### Hide Infobox

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Hide%20Infobox%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Location

Set the location of the marker.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Set%20Location%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|

### Show Infobox

Show the infobox for the feature. This will show the infobox even if

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Show%20Infobox%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Anchor Horizontal

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>3</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The horizontal alignment property controls where the Marker's anchor is located relative to its width.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Anchor%20Horizontal%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Anchor%20Horizontal%22,%20%22getter%22:%20false%7D"></div>

### Anchor Vertical

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>3</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The vertical alignment property controls where the Marker's anchor is located relative to its height.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Anchor%20Vertical%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Anchor%20Vertical%22,%20%22getter%22:%20false%7D"></div>

### Description

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The description displayed in the info window that appears when the user clicks on the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Description%22,%20%22getter%22:%20false%7D"></div>

### Draggable

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The Draggable property is used to set whether or not the user can drag the Marker by long-pressing and then dragging the marker to a new location.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Draggable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Draggable%22,%20%22getter%22:%20false%7D"></div>

### Enable Infobox

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Enable or disable the infobox window display when the user taps the feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Enable%20Infobox%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Enable%20Infobox%22,%20%22getter%22:%20false%7D"></div>

### Fill Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#F34336FF</i>&nbsp;<span style="width: 16px; height: 16px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #F34336;"></span></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The paint color used to fill in the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Fill%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Fill%20Color%22,%20%22getter%22:%20false%7D"></div>

### Fill Opacity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The opacity of the interior of the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Fill%20Opacity%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Fill%20Opacity%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Image Asset

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The ImageAsset property is used to provide an alternative image for the Marker.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Image%20Asset%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Image%20Asset%22,%20%22getter%22:%20false%7D"></div>

### Latitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Latitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Latitude%22,%20%22getter%22:%20false%7D"></div>

### Longitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Longitude%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Longitude%22,%20%22getter%22:%20false%7D"></div>

### Stroke Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 16px; height: 16px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The paint color used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stroke%20Color%22,%20%22getter%22:%20false%7D"></div>

### Stroke Opacity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The opacity of the stroke used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stroke%20Opacity%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stroke%20Opacity%22,%20%22getter%22:%20false%7D"></div>

### Stroke Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The width of the stroke used to outline the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Stroke%20Width%22,%20%22getter%22:%20false%7D"></div>

### Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The title displayed in the info window that appears when the user clicks on the map feature.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>

### Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Type%22,%20%22getter%22:%20true%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Marker%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
