# Google Maps

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|4|

## Overview

A visible component that shows a map on the screen powered by Google''s Maps service.

## Events

### Camera Position Changed

Called after the camera position of a map has changed.

[[Event('Google Maps', 'Camera Position Changed', 'lat', 'lng', 'bearing', 'tilt', 'zoom')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|
|bearing|<span class="chip chip-number">Number</span>|
|tilt|<span class="chip chip-number">Number</span>|
|zoom|<span class="chip chip-number">Number</span>|


### Finished Dragging Circle

Event been raised after the action of moving a draggable circle is finished. Possible a user drag the center of the circle or drag the radius marker of the circle

[[Event('Google Maps', 'Finished Dragging Circle', 'id', 'centerLat', 'centerLng', 'radius')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|center Lat|<span class="chip chip-number">Number</span>|
|center Lng|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|


### Info Window Clicked

When the marker's infowindow is clicked, returning marker's id

[[Event('Google Maps', 'Info Window Clicked', 'markerId')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|


### Map Is Ready

Indicates that the map has been rendered and ready for adding markers or changing other settings. Please add or updating markers within this event

[[Event('Google Maps', 'Map Is Ready')]]

### On Location Changed

Triggers this event when user location has changed. Only works when EnableMylocation is set to true

[[Event('Google Maps', 'On Location Changed', 'lat', 'lng')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|


### On Map Click

Called when the user makes a tap gesture on the map

[[Event('Google Maps', 'On Map Click', 'lat', 'lng')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|


### On Map Long Click

Called when the user makes a long-press gesture on the map

[[Event('Google Maps', 'On Map Long Click', 'lat', 'lng')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|


### On Marker Click

When a marker is clicked

[[Event('Google Maps', 'On Marker Click', 'markerId', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Marker Drag

When a marker is been dragged

[[Event('Google Maps', 'On Marker Drag', 'markerId', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Marker Drag End

When the user drags a marker and finish the action, returning marker's id and it's latest position

[[Event('Google Maps', 'On Marker Drag End', 'markerId', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Marker Drag Start

When a marker starts been dragged

[[Event('Google Maps', 'On Marker Drag Start', 'markerId', 'latitude', 'longitude')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Point Of Interest Click

This event will be invoked when a user clicks on a point of interest. This can be a shop, coffee-bar or else.

[[Event('Google Maps', 'On Point Of Interest Click', 'lat', 'lng', 'placeName', 'placeID')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|
|place Name|<span class="chip chip-text">Text</span>|
|place ID|<span class="chip chip-text">Text</span>|


## Methods

### Add Circle

<span class="chip chip-number">Returns: <i>Number</i></span> 

Create a circle overlay on the map UI with specified latitude and longitude for center. "hue" (min 0, max 360) and "alpha" (min 0, max 255) are used to set color and transparency level of the circle, "strokeWidth" and "strokeColor" are for the perimeter of the circle. Returning a unique id of the circle for future reference to events raised by moving this circle. If the circle isset to be draggable, two default markers will appear on the map: one in the center of the circle, another on the perimeter.

[[Method('Google Maps', 'Add Circle', True, 'lat', 'lng', 'radius', 'alpha', 'hue', 'strokeWidth', 'strokeColor', 'draggable')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|alpha|<span class="chip chip-number">Number</span>|
|hue|<span class="chip chip-number">Number</span>|
|stroke Width|<span class="chip chip-number">Number</span>|
|stroke Color|<span class="chip chip-number">Number</span>|
|draggable|<span class="chip chip-boolean">Boolean</span>|


### Add Markers

<span class="chip chip-list">Returns: <i>List</i></span> 

Adding a list of YailLists for markers. The representation of a maker in the inner YailList is composed of: lat(double) [required], long(double) [required], Color, title(String), snippet(String), draggable(boolean). Return a list of unqiue ids for the added markers. Note that the markers ids are not meant to persist after the app is closed, but for temporary references to the markers within the program only. Return an empty list if any error happen in the input

[[Method('Google Maps', 'Add Markers', True, 'markers')]]

| Params | []() |
|--------|------|
|markers|<span class="chip chip-list">List</span>|


### Add Markers From Json

Adding a list of markers that are represented as JsonArray. The inner JsonObject represents a markerand is composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)

[[Method('Google Maps', 'Add Markers From Json', False, 'jsonString')]]

| Params | []() |
|--------|------|
|json String|<span class="chip chip-text">Text</span>|


### Add Markers Hue

<span class="chip chip-list">Returns: <i>List</i></span> 

Adding a list of YailList for markers. The inner YailList represents a marker and is composed of lat(Double) [required], long(Double) [required], color(int)[in hue value ranging from 0-360], title(String), snippet(String), draggable(boolean). Return a list of unique ids for the markers that are added

[[Method('Google Maps', 'Add Markers Hue', True, 'markers')]]

| Params | []() |
|--------|------|
|markers|<span class="chip chip-list">List</span>|


### Add Polyline

<span class="chip chip-number">Returns: <i>Number</i></span> 

This block will return the unique id of the new added polyline. Create a new polyline on the map. Use for 'points' a list of lat, lng pairs. A integer for the 'width' (in pixel) and a valid color for the 'color' parameter.

[[Method('Google Maps', 'Add Polyline', True, 'points', 'width', 'color')]]

| Params | []() |
|--------|------|
|points|<span class="chip chip-list">List</span>|
|width|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Bound Camera

Transforms the camera such that the specified latitude/longitude bounds are centered on screen at the greatest possible zoom level. Need to specify both latitudes and longitudes for both northeast location and southwest location of the bounding box

[[Method('Google Maps', 'Bound Camera', False, 'neLat', 'neLng', 'swLat', 'swLng')]]

| Params | []() |
|--------|------|
|ne Lat|<span class="chip chip-number">Number</span>|
|ne Lng|<span class="chip chip-number">Number</span>|
|sw Lat|<span class="chip chip-number">Number</span>|
|sw Lng|<span class="chip chip-number">Number</span>|


### Enable Compass

Enables/disables the compass widget on the map's ui. Call this only after event "MapIsReady" is received

[[Method('Google Maps', 'Enable Compass', False, 'enable')]]

| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Map Camera Pos Change Listener

Enable/Disable to listen to map's camera position changed event

[[Method('Google Maps', 'Enable Map Camera Pos Change Listener', False, 'enabled')]]

| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable Map Click Listener

Enable/Disable to listen to map's click event

[[Method('Google Maps', 'Enable Map Click Listener', False, 'enabled')]]

| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable Map Long Click Listener

Enable/disable to listen to map's long click event

[[Method('Google Maps', 'Enable Map Long Click Listener', False, 'enabled')]]

| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable My Location

Enable or disable my location widget control for Google Map. One can call GetMyLocation() to obtain the current location after enable this."

[[Method('Google Maps', 'Enable My Location', False, 'enabled')]]

| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable Rotate

Enables/disables the capability to rotate a map on the ui. Call this only after the event "MapIsReady" is received.

[[Method('Google Maps', 'Enable Rotate', False, 'enable')]]

| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Scroll

Enables/disables the capability to scroll a map on the ui. Call this only after the event "MapIsReady" is received

[[Method('Google Maps', 'Enable Scroll', False, 'enable')]]

| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Zoom Control

Enables/disables the zoom widget on the map's ui. Call this only after the event "MapIsReady" is received

[[Method('Google Maps', 'Enable Zoom Control', False, 'enable')]]

| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Zoom Gesture

Enables/disables zoom gesture on the map ui. Call this only after the event "MapIsReady" is received.

[[Method('Google Maps', 'Enable Zoom Gesture', False, 'enable')]]

| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Get All Circle IDs

<span class="chip chip-list">Returns: <i>List</i></span> 

Get all circles Ids. A short cut to get all the references for the eixisting circles

[[Method('Google Maps', 'Get All Circle IDs', True)]]

### Get All Marker IDs

<span class="chip chip-list">Returns: <i>List</i></span> 

Get all the existing markers's Ids

[[Method('Google Maps', 'Get All Marker IDs', True)]]

### Get All Polyline Ids

<span class="chip chip-list">Returns: <i>List</i></span> 

This will return a list with all available polyline id's.

[[Method('Google Maps', 'Get All Polyline Ids', True)]]

### Get Markers

<span class="chip chip-list">Returns: <i>List</i></span> 

Add a list of markers composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)

[[Method('Google Maps', 'Get Markers', True)]]

### Get My Location

<span class="chip chip-list">Returns: <i>List</i></span> 

Get current location using Google Map Service. Return a YailList with first item beingthe latitude, the second item being the longitude, and last time being the accuracy of the reading.

[[Method('Google Maps', 'Get My Location', True)]]

### Get Points From Json

<span class="chip chip-list">Returns: <i>List</i></span> 

Convert a JsonArray of points (lat, lng pairs) to a list.

[[Method('Google Maps', 'Get Points From Json', True, 'jsonString')]]

| Params | []() |
|--------|------|
|json String|<span class="chip chip-text">Text</span>|


### Move Camera

Move the map's camera to the specified position and zoom level

[[Method('Google Maps', 'Move Camera', False, 'lat', 'lng', 'zoom')]]

| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|
|zoom|<span class="chip chip-number">Number</span>|


### Remove Circle

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Remove a circle for the map. Returns true if successfully removed, false if the circle does not exist with the specified id

[[Method('Google Maps', 'Remove Circle', True, 'circleId')]]

| Params | []() |
|--------|------|
|circle Id|<span class="chip chip-number">Number</span>|


### Remove Marker

Remove a marker from the map

[[Method('Google Maps', 'Remove Marker', False, 'markerId')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|


### Remove Polyline

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Use this block to remove a polyline from the map. It will return true if it was successful.

[[Method('Google Maps', 'Remove Polyline', True, 'polylineId')]]

| Params | []() |
|--------|------|
|polyline Id|<span class="chip chip-number">Number</span>|


### Set Map Type

Set the layer of Google map. Default layer is "normal", other choices including "hybrid","satellite", and "terrain"

[[Method('Google Maps', 'Set Map Type', False, 'layerName')]]

| Params | []() |
|--------|------|
|layer Name|<span class="chip chip-text">Text</span>|


### Update Circle

Set the property of an existing circle. Properties include: "alpha"(number, value ranging from 0~255), "color" (nimber, hue value ranging 0~360), "radius"(number in meters)

[[Method('Google Maps', 'Update Circle', False, 'circleId', 'propertyName', 'value')]]

| Params | []() |
|--------|------|
|circle Id|<span class="chip chip-number">Number</span>|
|property Name|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Update Marker

Set the property of a marker, note that the marker has to be added first or else will throw an exception! Properties include: "color"(hue value ranging from 0~360), "title", "snippet", "draggable"(give either true or false as the value).

[[Method('Google Maps', 'Update Marker', False, 'markerId', 'propertyName', 'value')]]

| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|property Name|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Update Polyline

Update any polyline with the given id. You can change the property values for 'width' (in pixel), 'color' or 'points (a list of lat, lng pairs).

[[Method('Google Maps', 'Update Polyline', False, 'polylineId', 'propertyName', 'points')]]

| Params | []() |
|--------|------|
|polyline Id|<span class="chip chip-number">Number</span>|
|property Name|<span class="chip chip-text">Text</span>|
|points|<span class="chip chip-any">Any</span>|


### Add Overlay

Add overlay.

[[Method('Google Maps', 'Add Overlay', False)]]

### Add Polygon

A Polygon is an enclosed shape that can be used to mark areas on the map.

[[Method('Google Maps', 'Add Polygon', False, 'latMin', 'latMax', 'lonMin', 'lonMax')]]

| Params | []() |
|--------|------|
|lat Min|<span class="chip chip-number">Number</span>|
|lat Max|<span class="chip chip-number">Number</span>|
|lon Min|<span class="chip chip-number">Number</span>|
|lon Max|<span class="chip chip-number">Number</span>|


### Add Tile Overlay

Add title overlay.

[[Method('Google Maps', 'Add Tile Overlay', False)]]

### Clear All Polygons

Clear all Polygons.

[[Method('Google Maps', 'Clear All Polygons', False)]]

### Draw Central Square

Draw central square.

[[Method('Google Maps', 'Draw Central Square', False)]]

### Get Bounding Box

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get bounding box.

[[Method('Google Maps', 'Get Bounding Box', True, 'latitudeInDegrees', 'longitudeInDegrees', 'halfSideInKm')]]

| Params | []() |
|--------|------|
|latitude In Degrees|<span class="chip chip-number">Number</span>|
|longitude In Degrees|<span class="chip chip-number">Number</span>|
|half Side In Km|<span class="chip chip-number">Number</span>|


### Get Map Center

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get map center. If a error occures the output will be '-999'.

[[Method('Google Maps', 'Get Map Center', True)]]

### Get Zoom Level Info

:warning: ==**Deprecated**==

<span class="chip chip-number">Returns: <i>Number</i></span> 

Deprecated block! Don't use this anymore. Use instead 'Camera Zoom Level'.

[[Method('Google Maps', 'Get Zoom Level Info', True)]]

## Properties

### Camera Angle

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Move the map's camera to the specified tilt, the angle (in degrees) from the nadir (directly facing the Earth). Must be a value between 0.0 and 90.0

[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Angle')]]

### Camera Rotation

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Move the map's camera to the specified bearing, the direction that the camera is pointing in (in degrees clockwise from north).

[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Rotation')]]

### Camera Zoom Level

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>15</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Move the map's camera to the specified zoom level.

[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Zoom Level')]]

### Theme

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>standard</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the theme of the map. The choices are "standard"(default), "silver", "retro", "dark", "night", "aubergine", "vintage", "kodular" and "roads-only".

[[PropertyBlockGetterAndSetter('Google Maps', 'Theme')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Google Maps', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Google Maps', 'Column')]]

### Compass Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the compass widget is currently enabled in the map ui

[[PropertyBlockGetter('Google Maps', 'Compass Enabled')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Google Maps', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Google Maps', 'Height Percent')]]

### Map Camera Changed Listener Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates if the map camera's position changed listener is currently enabled

[[PropertyBlockGetter('Google Maps', 'Map Camera Changed Listener Enabled')]]

### Map Click Listener Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates if the mapClick event listener is currently enabled

[[PropertyBlockGetter('Google Maps', 'Map Click Listener Enabled')]]

### Map Long Click Listener Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates if the map longClick listener is currently enabled

[[PropertyBlockGetter('Google Maps', 'Map Long Click Listener Enabled')]]

### Map Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates the current map type

[[PropertyBlockGetter('Google Maps', 'Map Type')]]

### My Location Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether my locaiton UI control is currently enabled for the Google map.

[[PropertyBlockGetter('Google Maps', 'My Location Enabled')]]

### Rotate Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the capability to rotate a map on the ui is currently enabled

[[PropertyBlockGetter('Google Maps', 'Rotate Enabled')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Google Maps', 'Row')]]

### Scroll Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the capability to scroll a map on the ui is currently enabled

[[PropertyBlockGetter('Google Maps', 'Scroll Enabled')]]

### Style

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Sets the style of the map from json. Just use a text field and paste there the json data. Create a custom map style at https://mapstyle.withgoogle.com/. Set the theme to "standard" to clear the style json.

[[PropertyBlockGetterAndSetter('Google Maps', 'Style')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Google Maps', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Google Maps', 'Width Percent')]]

### Zoom Control Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the zoom widget on the map ui is currently enabled

[[PropertyBlockGetter('Google Maps', 'Zoom Control Enabled')]]

### Zoom Gesture Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the zoom gesture is currently enabled

[[PropertyBlockGetter('Google Maps', 'Zoom Gesture Enabled')]]