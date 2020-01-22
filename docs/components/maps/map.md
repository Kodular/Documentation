# Map

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|5|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A two-dimensional container that renders map tiles in the background and allows for multiple Marker elements to identify points on the map. Map tiles are supplied by OpenStreetMap contributors and the United States Geological Survey.

The Map component provides three utilities for manipulating its boundaries within App Inventor. First, a locking mechanism is provided to allow the map to be moved relative to other components on the Screen. Second, when unlocked, the user can pan the Map to any location. At this new location, the "Set Initial Boundary" button can be pressed to save the current Map coordinates to its properties. Lastly, if the Map is moved to a different location, for example to add Markers off-screen, then the "Reset Map to Initial Bounds" button can be used to re-center the Map at the starting location.

## Events

### Bounds Change

[[Event('Map', 'Bounds Change')]]

User has changed the map bounds by panning or zooming the map.

### Double Tap At Point

[[Event('Map', 'Double Tap At Point', 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


The user double-tapped at a point on the map. This event will be followed by a ZoomChanged event if zooming gestures are enabled and the map is not at the highest possible zoom level.

### Feature Click

[[Event('Map', 'Feature Click', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


The user clicked on a map feature.

### Feature Drag

[[Event('Map', 'Feature Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


The user dragged a map feature.

### Feature Long Click

[[Event('Map', 'Feature Long Click', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


The user long-pressed on a map feature.

### Feature Start Drag

[[Event('Map', 'Feature Start Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


The user started dragging a map feature.

### Feature Stop Drag

[[Event('Map', 'Feature Stop Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


The user stopped dragging a map feature.

### Got Features

[[Event('Map', 'Got Features', 'url features')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |features|`list`|


A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features.

### Invalid Point

[[Event('Map', 'Invalid Point', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


An invalid coordinate was supplied during a maps operation. The message parameter will have more details about the issue.

### Load Error

[[Event('Map', 'Load Error', 'url responseCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |error Message|`text`|


An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message.

### Long Press At Point

[[Event('Map', 'Long Press At Point', 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


The user long-pressed at a point on the map.

### Map Ready

[[Event('Map', 'Map Ready')]]

Map has been initialized and is ready for user interaction.

### Tap At Point

[[Event('Map', 'Tap At Point', 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


The user tapped at a point on the map.

### Zoom Change

[[Event('Map', 'Zoom Change')]]

User has changed the zoom level of the map.

## Methods

### CreateMarker

[[Method('Map', 'CreateMarker', true, 'latitude longitude')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


Create a new marker with default properties at the specified latitude and longitude.

### FeatureFromDescription

[[Method('Map', 'FeatureFromDescription', true, 'description')]]

{>>Returns `any`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |description|`list`|


Convert a feature description into an App Inventor map feature. Currently the only
 supported conversion is from a GeoJSON point to Marker component. If the feature has
 properties, they will be mapped into App Inventor properties using the following mapping:

 description becomes Description;
 draggable becomes Draggable;
 infobox becomes EnableInfobox;
 fill becomes FillColor;
 fill-opacity becomes FillOpacity;
 image becomes ImageAsset;
 stroke becomes StrokeColor;
 stroke-opacity becomes StrokeOpacity;
 stroke-width becomes StrokeWidth;
 title becomes Title;
 visible becomes Visible

### LoadFromURL

[[Method('Map', 'LoadFromURL', false, 'url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|


Load a feature collection in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.

### PanTo

[[Method('Map', 'PanTo', false, 'latitude longitude zoom')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |zoom|`number`|


Pan the map center to the given latitude and longitude and adjust the zoom level to the specified zoom.

### Save

[[Method('Map', 'Save', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


Save the contents of the Map to the specified path.

## Properties

### Center From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Center From String')]]

| Type | Default |
|:----:|:-------:|
|text|42.359144, -71.093612|

Set the initial center coordinate of the map. The value is specified as a comma-separated pair of decimal latitude and longitude coordinates, for example, `` 42.359144, -71.093612 ``.

In blocks code, it is recommended for performance reasons to use SetCenter with numerical latitude and longitude rather than convert to the string representation for use with this property.

### Enable Pan

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Pan')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Enable two-finger panning of the Map

### Enable Rotation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Rotation')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable rotating the map based on the user's orientation.

### Enable Zoom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Zoom')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set whether the user can zoom the map using touch gestures. This value does not affect whether the user can zoom using the zoom controls from

### Location Sensor

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Location Sensor')]]

| Type |
|:----:|
|component|

Uses the provided LocationSensor for user location data rather than the built-in location provider.

### Map Type

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Map Type')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the type of map tile used for the base tile layer. Valid values are:

1.   Roads
2.   Aerial
3.   Terrain

### Rotation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Rotation')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets or gets the rotation of the map in decimal degrees if any

### Scale Units

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Scale Units')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_No description available_

### Show Compass

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Compass')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Show a compass on the map. If the device provides a digital compass, orientation changes will
 be used to rotate the compass icon.

### Show Scale

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Scale')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Shows a scale reference on the map.

### Show User

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show User')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Show the user's location on the map.

### Show Zoom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Zoom')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Show the zoom controls on the map.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Zoom Level

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Zoom Level')]]

| Type | Default |
|:----:|:-------:|
|number|13|

Set the zoom level of the map.

Valid values of ZoomLevel are dependent on the tile provider and the latitude and longitude of the map. For example, zoom levels are more constrained over oceans than dense city centers to conserve space for storing tiles, so valid values may be 1-7 over ocean and 1-18 over cities. Tile providers may send warning or error tiles if the zoom level is too great for the server to support.

### Bounding Box

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Bounding Box')]]

| Type | Default |
|:----:|:-------:|
|list|None|

Bounding box for the map stored as [[North, West], [South, East]].

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Features

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Features')]]

| Type | Default |
|:----:|:-------:|
|list|None|

The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Latitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The latitude of the center of the map.

### Longitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The longitude of the center of the map.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### User Latitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'User Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the user's latitude if ShowUser is enabled.

### User Longitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'User Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the user's longitude if ShowUser is enabled.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.