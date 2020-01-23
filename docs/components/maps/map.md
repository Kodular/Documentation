# Map

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Maps|API 19, Android 4.4 - 4.4.4 KitKat|5|

## Overview

A two-dimensional container that renders map tiles in the background and allows for multiple Marker elements to identify points on the map. Map tiles are supplied by OpenStreetMap contributors and the United States Geological Survey.

The Map component provides three utilities for manipulating its boundaries within App Inventor. First, a locking mechanism is provided to allow the map to be moved relative to other components on the Screen. Second, when unlocked, the user can pan the Map to any location. At this new location, the "Set Initial Boundary" button can be pressed to save the current Map coordinates to its properties. Lastly, if the Map is moved to a different location, for example to add Markers off-screen, then the "Reset Map to Initial Bounds" button can be used to re-center the Map at the starting location.

## Events

### Bounds Change

[[Event('Map', 'Bounds Change')]]

User has changed the map bounds by panning or zooming the map.

### Double Tap At Point

[[Event('Map', 'Double Tap At Point', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


The user double-tapped at a point on the map. This event will be followed by a ZoomChanged event if zooming gestures are enabled and the map is not at the highest possible zoom level.

### Feature Click

[[Event('Map', 'Feature Click', 'feature')]]

| Params | []() |
|--------|------|
|feature|Component|


The user clicked on a map feature.

### Feature Drag

[[Event('Map', 'Feature Drag', 'feature')]]

| Params | []() |
|--------|------|
|feature|Component|


The user dragged a map feature.

### Feature Long Click

[[Event('Map', 'Feature Long Click', 'feature')]]

| Params | []() |
|--------|------|
|feature|Component|


The user long-pressed on a map feature.

### Feature Start Drag

[[Event('Map', 'Feature Start Drag', 'feature')]]

| Params | []() |
|--------|------|
|feature|Component|


The user started dragging a map feature.

### Feature Stop Drag

[[Event('Map', 'Feature Stop Drag', 'feature')]]

| Params | []() |
|--------|------|
|feature|Component|


The user stopped dragging a map feature.

### Got Features

[[Event('Map', 'Got Features', 'url', 'features')]]

| Params | []() |
|--------|------|
|url|Text|
|features|List|


A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features.

### Invalid Point

[[Event('Map', 'Invalid Point', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


An invalid coordinate was supplied during a maps operation. The message parameter will have more details about the issue.

### Load Error

[[Event('Map', 'Load Error', 'url', 'responseCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|url|Text|
|response Code|Number|
|error Message|Text|


An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message.

### Long Press At Point

[[Event('Map', 'Long Press At Point', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


The user long-pressed at a point on the map.

### Map Ready

[[Event('Map', 'Map Ready')]]

Map has been initialized and is ready for user interaction.

### Tap At Point

[[Event('Map', 'Tap At Point', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


The user tapped at a point on the map.

### Zoom Change

[[Event('Map', 'Zoom Change')]]

User has changed the zoom level of the map.

## Methods

### Create Marker

[[Method('Map', 'Create Marker', True, 'latitude', 'longitude')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|


Create a new marker with default properties at the specified latitude and longitude.

### Feature From Description

[[Method('Map', 'Feature From Description', True, 'description')]]

{>>Returns `any`<<}

| Params | []() |
|--------|------|
|description|List|


Convert a feature description into an App Inventor map feature. Currently the onlysupported conversion is from a GeoJSON point to Marker component. If the feature hasproperties, they will be mapped into App Inventor properties using the following mapping:description becomes Description;draggable becomes Draggable;infobox becomes EnableInfobox;fill becomes FillColor;fill-opacity becomes FillOpacity;image becomes ImageAsset;stroke becomes StrokeColor;stroke-opacity becomes StrokeOpacity;stroke-width becomes StrokeWidth;title becomes Title;visible becomes Visible

### Load From URL

[[Method('Map', 'Load From URL', False, 'url')]]

| Params | []() |
|--------|------|
|url|Text|


Load a feature collection in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.

### Pan To

[[Method('Map', 'Pan To', False, 'latitude', 'longitude', 'zoom')]]

| Params | []() |
|--------|------|
|latitude|Number|
|longitude|Number|
|zoom|Number|


Pan the map center to the given latitude and longitude and adjust the zoom level to the specified zoom.

### Save

[[Method('Map', 'Save', False, 'path')]]

| Params | []() |
|--------|------|
|path|Text|


Save the contents of the Map to the specified path.

## Properties

### Center From String

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>42.359144, -71.093612</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the initial center coordinate of the map. The value is specified as a comma-separated pair of decimal latitude and longitude coordinates, for example, `` 42.359144, -71.093612 ``.

In blocks code, it is recommended for performance reasons to use SetCenter with numerical latitude and longitude rather than convert to the string representation for use with this property.

[[PropertyBlockGetterAndSetter('Map', 'Center From String')]]

### Enable Pan

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable two-finger panning of the Map

[[PropertyBlockGetterAndSetter('Map', 'Enable Pan')]]

### Enable Rotation

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable rotating the map based on the user's orientation.

[[PropertyBlockGetterAndSetter('Map', 'Enable Rotation')]]

### Enable Zoom

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set whether the user can zoom the map using touch gestures. This value does not affectwhether the user can zoom using the zoom controls from

[[PropertyBlockGetterAndSetter('Map', 'Enable Zoom')]]

### Location Sensor

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Uses the provided LocationSensor for user location data rather than the built-in location provider.

[[PropertyBlockGetterAndSetter('Map', 'Location Sensor')]]

### Map Type

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the type of map tile used for the base tile layer. Valid values are:

1.   Roads
2.   Aerial
3.   Terrain

[[PropertyBlockGetterAndSetter('Map', 'Map Type')]]

### Rotation

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets or gets the rotation of the map in decimal degrees if any

[[PropertyBlockGetterAndSetter('Map', 'Rotation')]]

### Scale Units

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Map', 'Scale Units')]]

### Show Compass

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Show a compass on the map. If the device provides a digital compass, orientation changes willbe used to rotate the compass icon.

[[PropertyBlockGetterAndSetter('Map', 'Show Compass')]]

### Show Scale

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Shows a scale reference on the map.

[[PropertyBlockGetterAndSetter('Map', 'Show Scale')]]

### Show User

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Show the user's location on the map.

[[PropertyBlockGetterAndSetter('Map', 'Show User')]]

### Show Zoom

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Show the zoom controls on the map.

[[PropertyBlockGetterAndSetter('Map', 'Show Zoom')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Map', 'Visible')]]

### Zoom Level

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>13</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the zoom level of the map.

Valid values of ZoomLevel are dependent on the tile provider and the latitude andlongitude of the map. For example, zoom levels are more constrained over oceans than densecity centers to conserve space for storing tiles, so valid values may be 1-7 over ocean and1-18 over cities. Tile providers may send warning or error tiles if the zoom level is toogreat for the server to support.

[[PropertyBlockGetterAndSetter('Map', 'Zoom Level')]]

### Bounding Box

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Bounding box for the map stored as [[North, West], [South, East]].

[[PropertyBlockGetterAndSetter('Map', 'Bounding Box')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Map', 'Column')]]

### Features

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription

[[PropertyBlockGetterAndSetter('Map', 'Features')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Map', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Map', 'Height Percent')]]

### Latitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The latitude of the center of the map.

[[PropertyBlockGetter('Map', 'Latitude')]]

### Longitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The longitude of the center of the map.

[[PropertyBlockGetter('Map', 'Longitude')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Map', 'Row')]]

### User Latitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the user's latitude if ShowUser is enabled.

[[PropertyBlockGetter('Map', 'User Latitude')]]

### User Longitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the user's longitude if ShowUser is enabled.

[[PropertyBlockGetter('Map', 'User Longitude')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Map', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Map', 'Width Percent')]]