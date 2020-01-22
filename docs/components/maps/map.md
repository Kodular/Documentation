# Map

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|5|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A two-dimensional container that renders map tiles in the background and allows for multiple Marker elements to identify points on the map. Map tiles are supplied by OpenStreetMap contributors and the United States Geological Survey.</p><p>The Map component provides three utilities for manipulating its boundaries within App Inventor. First, a locking mechanism is provided to allow the map to be moved relative to other components on the Screen. Second, when unlocked, the user can pan the Map to any location. At this new location, the &quot;Set Initial Boundary&quot; button can be pressed to save the current Map coordinates to its properties. Lastly, if the Map is moved to a different location, for example to add Markers off-screen, then the &quot;Reset Map to Initial Bounds&quot; button can be used to re-center the Map at the starting location.</p>_

## Properties

### Center From String

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Center From String')]]

| Type | Default |
|:----:|:-------:|
|text|42.359144, -71.093612|

<p>Set the initial center coordinate of the map. The value is specified as a comma-separated pair of decimal latitude and longitude coordinates, for example, <code>42.359144, -71.093612</code>.</p><p>In blocks code, it is recommended for performance reasons to use SetCenter with numerical latitude and longitude rather than convert to the string representation for use with this property.</p>

### Enable Pan

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Pan')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Enable two-finger panning of the Map

### Enable Rotation

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Rotation')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Enable rotating the map based on the user's orientation.

### Enable Zoom

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Enable Zoom')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

<p>Set whether the user can zoom the map using touch gestures. This value does not affect
 whether the user can zoom using the zoom controls from

### Location Sensor

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Location Sensor')]]

| Type |
|:----:|
|component|

Uses the provided LocationSensor for user location data rather than the built-in location provider.

### Map Type

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Map Type')]]

| Type | Default |
|:----:|:-------:|
|number|1|

<p>Set the type of map tile used for the base tile layer. Valid values are:</p>
 <ol>
 <li>Roads</li>
 <li>Aerial</li>
 <li>Terrain</li>
 </ol>

### Rotation

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Rotation')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

Sets or gets the rotation of the map in decimal degrees if any

### Scale Units

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Scale Units')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_No description available_

### Show Compass

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Compass')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Show a compass on the map. If the device provides a digital compass, orientation changes will
 be used to rotate the compass icon.

### Show Scale

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Scale')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Shows a scale reference on the map.

### Show User

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show User')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Show the user's location on the map.

### Show Zoom

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Show Zoom')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Show the zoom controls on the map.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Zoom Level

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Map', 'Zoom Level')]]

| Type | Default |
|:----:|:-------:|
|number|13|

<p>Set the zoom level of the map.</p>
 <p>Valid values of ZoomLevel are dependent on the tile provider and the latitude and
 longitude of the map. For example, zoom levels are more constrained over oceans than dense
 city centers to conserve space for storing tiles, so valid values may be 1-7 over ocean and
 1-18 over cities. Tile providers may send warning or error tiles if the zoom level is too
 great for the server to support.</p>

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