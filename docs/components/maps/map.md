# Map

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|5|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A two-dimensional container that renders map tiles in the background and allows for multiple Marker elements to identify points on the map. Map tiles are supplied by OpenStreetMap contributors and the United States Geological Survey.</p><p>The Map component provides three utilities for manipulating its boundaries within App Inventor. First, a locking mechanism is provided to allow the map to be moved relative to other components on the Screen. Second, when unlocked, the user can pan the Map to any location. At this new location, the &quot;Set Initial Boundary&quot; button can be pressed to save the current Map coordinates to its properties. Lastly, if the Map is moved to a different location, for example to add Markers off-screen, then the &quot;Reset Map to Initial Bounds&quot; button can be used to re-center the Map at the starting location.</p>_

## Events

### Bounds Change

[[Event('Map', 'Bounds Change')]]

_User has changed the map bounds by panning or zooming the map._

### Double Tap At Point

[[Event('Map', 'Double Tap At Point', 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_The user double-tapped at a point on the map. This event will be followed by a ZoomChanged event if zooming gestures are enabled and the map is not at the highest possible zoom level._

### Feature Click

[[Event('Map', 'Feature Click', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user clicked on a map feature._

### Feature Drag

[[Event('Map', 'Feature Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user dragged a map feature._

### Feature Long Click

[[Event('Map', 'Feature Long Click', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user long-pressed on a map feature._

### Feature Start Drag

[[Event('Map', 'Feature Start Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user started dragging a map feature._

### Feature Stop Drag

[[Event('Map', 'Feature Stop Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user stopped dragging a map feature._

### Got Features

[[Event('Map', 'Got Features', 'url features')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |features|`list`|


_A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features._

### Invalid Point

[[Event('Map', 'Invalid Point', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_An invalid coordinate was supplied during a maps operation. The message parameter will have more details about the issue._

### Load Error

[[Event('Map', 'Load Error', 'url responseCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |error Message|`text`|


_An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message._

### Long Press At Point

[[Event('Map', 'Long Press At Point', 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_The user long-pressed at a point on the map._

### Map Ready

[[Event('Map', 'Map Ready')]]

_Map has been initialized and is ready for user interaction._

### Tap At Point

[[Event('Map', 'Tap At Point', 'latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_The user tapped at a point on the map._

### Zoom Change

[[Event('Map', 'Zoom Change')]]

_User has changed the zoom level of the map._

## Methods

### CreateMarker

[[Method('Map', 'CreateMarker', true, 'latitude longitude')]]

{>>Returns `component`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|


_Create a new marker with default properties at the specified latitude and longitude._

### FeatureFromDescription

[[Method('Map', 'FeatureFromDescription', true, 'description')]]

{>>Returns `any`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |description|`list`|


_Convert a feature description into an App Inventor map feature. Currently the only
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
 visible becomes Visible_

### LoadFromURL

[[Method('Map', 'LoadFromURL', false, 'url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|


_<p>Load a feature collection in <a href="https://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.</p>_

### PanTo

[[Method('Map', 'PanTo', false, 'latitude longitude zoom')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |zoom|`number`|


_Pan the map center to the given latitude and longitude and adjust the zoom level to the specified zoom._

### Save

[[Method('Map', 'Save', false, 'path')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |path|`text`|


_Save the contents of the Map to the specified path._

## Properties

### Center From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Center From String')]]

| Type | Default |
|:----:|:-------:|
|text|42.359144, -71.093612|

_<p>Set the initial center coordinate of the map. The value is specified as a comma-separated pair of decimal latitude and longitude coordinates, for example, <code>42.359144, -71.093612</code>.</p><p>In blocks code, it is recommended for performance reasons to use SetCenter with numerical latitude and longitude rather than convert to the string representation for use with this property.</p>_

### Enable Pan

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Pan')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Enable two-finger panning of the Map_

### Enable Rotation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Rotation')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable rotating the map based on the user's orientation._

### Enable Zoom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Zoom')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_<p>Set whether the user can zoom the map using touch gestures. This value does not affect
 whether the user can zoom using the zoom controls from_

### Location Sensor

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Location Sensor')]]

| Type |
|:----:|
|component|

_Uses the provided LocationSensor for user location data rather than the built-in location provider._

### Map Type

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Map Type')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_<p>Set the type of map tile used for the base tile layer. Valid values are:</p>
 <ol>
 <li>Roads</li>
 <li>Aerial</li>
 <li>Terrain</li>
 </ol>_

### Rotation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Rotation')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets or gets the rotation of the map in decimal degrees if any_

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

_Show a compass on the map. If the device provides a digital compass, orientation changes will
 be used to rotate the compass icon._

### Show Scale

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Scale')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Shows a scale reference on the map._

### Show User

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show User')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Show the user's location on the map._

### Show Zoom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Zoom')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Show the zoom controls on the map._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Zoom Level

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Zoom Level')]]

| Type | Default |
|:----:|:-------:|
|number|13|

_<p>Set the zoom level of the map.</p>
 <p>Valid values of ZoomLevel are dependent on the tile provider and the latitude and
 longitude of the map. For example, zoom levels are more constrained over oceans than dense
 city centers to conserve space for storing tiles, so valid values may be 1-7 over ocean and
 1-18 over cities. Tile providers may send warning or error tiles if the zoom level is too
 great for the server to support.</p>_

### Bounding Box

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Bounding Box')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_Bounding box for the map stored as [[North, West], [South, East]]._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Features

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Features')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription_

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Latitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The latitude of the center of the map._

### Longitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The longitude of the center of the map._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### User Latitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'User Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the user's latitude if ShowUser is enabled._

### User Longitude

:eyes: Read-Only property
[[PropertyBlockGetter('Map', 'User Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the user's longitude if ShowUser is enabled._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._