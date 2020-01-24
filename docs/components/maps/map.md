# Map

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

## Overview

A two-dimensional container that renders map tiles in the background and allows for multiple Marker elements to identify points on the map. Map tiles are supplied by OpenStreetMap contributors and the United States Geological Survey.

The Map component provides three utilities for manipulating its boundaries within App Inventor. First, a locking mechanism is provided to allow the map to be moved relative to other components on the Screen. Second, when unlocked, the user can pan the Map to any location. At this new location, the "Set Initial Boundary" button can be pressed to save the current Map coordinates to its properties. Lastly, if the Map is moved to a different location, for example to add Markers off-screen, then the "Reset Map to Initial Bounds" button can be used to re-center the Map at the starting location.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### Bounds Change

User has changed the map bounds by panning or zooming the map.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Bounds%20Change%22,%20%22params%22:%20%5B%5D%7D"></div>


### Double Tap At Point

The user double-tapped at a point on the map. This event will be followed by a ZoomChanged event if zooming gestures are enabled and the map is not at the highest possible zoom level.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Double%20Tap%20At%20Point%22,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### Feature Click

The user clicked on a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Feature%20Click%22,%20%22params%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Drag

The user dragged a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Feature%20Drag%22,%20%22params%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Long Click

The user long-pressed on a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Feature%20Long%20Click%22,%20%22params%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Start Drag

The user started dragging a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Feature%20Start%20Drag%22,%20%22params%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Stop Drag

The user stopped dragging a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Feature%20Stop%20Drag%22,%20%22params%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Got Features

A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Got%20Features%22,%20%22params%22:%20%5B%22url%22,%20%22features%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|features|<span class="chip chip-list">List</span>|


### Invalid Point

An invalid coordinate was supplied during a maps operation. The message parameter will have more details about the issue.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Invalid%20Point%22,%20%22params%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Load Error

An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Load%20Error%22,%20%22params%22:%20%5B%22url%22,%20%22response%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Long Press At Point

The user long-pressed at a point on the map.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Long%20Press%20At%20Point%22,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### Map Ready

Map has been initialized and is ready for user interaction.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Map%20Ready%22,%20%22params%22:%20%5B%5D%7D"></div>


### Tap At Point

The user tapped at a point on the map.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Tap%20At%20Point%22,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### Zoom Change

User has changed the zoom level of the map.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Zoom%20Change%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Create Marker

<span class="chip chip-component">Returns: <i>Component</i></span> 

Create a new marker with default properties at the specified latitude and longitude.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Create%20Marker%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22%5D%7D"></div>


| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### Feature From Description

<span class="chip chip-any">Returns: <i>Any</i></span> 

Convert a feature description into an App Inventor map feature. Currently the onlysupported conversion is from a GeoJSON point to Marker component. If the feature hasproperties, they will be mapped into App Inventor properties using the following mapping:description becomes Description;draggable becomes Draggable;infobox becomes EnableInfobox;fill becomes FillColor;fill-opacity becomes FillOpacity;image becomes ImageAsset;stroke becomes StrokeColor;stroke-opacity becomes StrokeOpacity;stroke-width becomes StrokeWidth;title becomes Title;visible becomes Visible

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Feature%20From%20Description%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22description%22%5D%7D"></div>


| Params | []() |
|--------|------|
|description|<span class="chip chip-list">List</span>|


### Load From URL

Load a feature collection in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Load%20From%20URL%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22url%22%5D%7D"></div>


| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|


### Pan To

Pan the map center to the given latitude and longitude and adjust the zoom level to the specified zoom.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Pan%20To%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22,%20%22zoom%22%5D%7D"></div>


| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|zoom|<span class="chip chip-number">Number</span>|


### Save

Save the contents of the Map to the specified path.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Save%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22path%22%5D%7D"></div>


| Params | []() |
|--------|------|
|path|<span class="chip chip-text">Text</span>|


## Properties

### Center From String

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>42.359144, -71.093612</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the initial center coordinate of the map. The value is specified as a comma-separated pair of decimal latitude and longitude coordinates, for example, `` 42.359144, -71.093612 ``.

In blocks code, it is recommended for performance reasons to use SetCenter with numerical latitude and longitude rather than convert to the string representation for use with this property.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Center%20From%20String%22,%20%22getter%22:%20false%7D"></div>


### Enable Pan

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Enable two-finger panning of the Map

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Enable%20Pan%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Enable%20Pan%22,%20%22getter%22:%20false%7D"></div>


### Enable Rotation

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Enable rotating the map based on the user's orientation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Enable%20Rotation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Enable%20Rotation%22,%20%22getter%22:%20false%7D"></div>


### Enable Zoom

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set whether the user can zoom the map using touch gestures. This value does not affectwhether the user can zoom using the zoom controls from

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Enable%20Zoom%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Enable%20Zoom%22,%20%22getter%22:%20false%7D"></div>


### Location Sensor

<span class="chip chip-component">Component</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Uses the provided LocationSensor for user location data rather than the built-in location provider.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Location%20Sensor%22,%20%22getter%22:%20false%7D"></div>


### Map Type

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the type of map tile used for the base tile layer. Valid values are:

1.   Roads
2.   Aerial
3.   Terrain

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Map%20Type%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Map%20Type%22,%20%22getter%22:%20false%7D"></div>


### Rotation

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets or gets the rotation of the map in decimal degrees if any

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Rotation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Rotation%22,%20%22getter%22:%20false%7D"></div>


### Scale Units

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Scale%20Units%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Scale%20Units%22,%20%22getter%22:%20false%7D"></div>


### Show Compass

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Show a compass on the map. If the device provides a digital compass, orientation changes willbe used to rotate the compass icon.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20Compass%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20Compass%22,%20%22getter%22:%20false%7D"></div>


### Show Scale

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Shows a scale reference on the map.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20Scale%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20Scale%22,%20%22getter%22:%20false%7D"></div>


### Show User

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Show the user's location on the map.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20User%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20User%22,%20%22getter%22:%20false%7D"></div>


### Show Zoom

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Show the zoom controls on the map.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20Zoom%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Show%20Zoom%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Zoom Level

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>13</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the zoom level of the map.

Valid values of ZoomLevel are dependent on the tile provider and the latitude andlongitude of the map. For example, zoom levels are more constrained over oceans than densecity centers to conserve space for storing tiles, so valid values may be 1-7 over ocean and1-18 over cities. Tile providers may send warning or error tiles if the zoom level is toogreat for the server to support.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Zoom%20Level%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Zoom%20Level%22,%20%22getter%22:%20false%7D"></div>


### Bounding Box

<span class="chip chip-list">List</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Bounding box for the map stored as [[North, West], [South, East]].

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Bounding%20Box%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Bounding%20Box%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Column property getter method.


### Features

<span class="chip chip-list">List</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Features%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Features%22,%20%22getter%22:%20false%7D"></div>


### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Latitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The latitude of the center of the map.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Latitude%22,%20%22getter%22:%20true%7D"></div>


### Longitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The longitude of the center of the map.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Longitude%22,%20%22getter%22:%20true%7D"></div>


### Row

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Row property getter method.


### User Latitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the user's latitude if ShowUser is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22User%20Latitude%22,%20%22getter%22:%20true%7D"></div>


### User Longitude

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the user's longitude if ShowUser is enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22User%20Longitude%22,%20%22getter%22:%20true%7D"></div>


### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Map%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
