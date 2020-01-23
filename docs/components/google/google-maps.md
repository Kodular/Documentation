# Google Maps

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|4|API 19 | Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that shows a map on the screen powered by Google''s Maps service.

## Events

### Camera Position Changed

[[Event('Google Maps', 'Camera Position Changed', 'lat', 'lng', 'bearing', 'tilt', 'zoom')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |bearing|`number`|
    |tilt|`number`|
    |zoom|`number`|


Called after the camera position of a map has changed.

### Finished Dragging Circle

[[Event('Google Maps', 'Finished Dragging Circle', 'id', 'centerLat', 'centerLng', 'radius')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |center Lat|`number`|
    |center Lng|`number`|
    |radius|`number`|


Event been raised after the action of moving a draggable circle is finished. Possible a user drag the center of the circle or drag the radius marker of the circle

### Info Window Clicked

[[Event('Google Maps', 'Info Window Clicked', 'markerId')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|


When the marker's infowindow is clicked, returning marker's id

### Map Is Ready

[[Event('Google Maps', 'Map Is Ready')]]

Indicates that the map has been rendered and ready for adding markers or changing other settings. Please add or updating markers within this event

### On Location Changed

[[Event('Google Maps', 'On Location Changed', 'lat', 'lng')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|


Triggers this event when user location has changed. Only works when EnableMylocation is set to true

### On Map Click

[[Event('Google Maps', 'On Map Click', 'lat', 'lng')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|


Called when the user makes a tap gesture on the map

### On Map Long Click

[[Event('Google Maps', 'On Map Long Click', 'lat', 'lng')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|


Called when the user makes a long-press gesture on the map

### On Marker Click

[[Event('Google Maps', 'On Marker Click', 'markerId', 'latitude', 'longitude')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


When a marker is clicked

### On Marker Drag

[[Event('Google Maps', 'On Marker Drag', 'markerId', 'latitude', 'longitude')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


When a marker is been dragged

### On Marker Drag End

[[Event('Google Maps', 'On Marker Drag End', 'markerId', 'latitude', 'longitude')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


When the user drags a marker and finish the action, returning marker's id and it's latest position

### On Marker Drag Start

[[Event('Google Maps', 'On Marker Drag Start', 'markerId', 'latitude', 'longitude')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


When a marker starts been dragged

### On Point Of Interest Click

[[Event('Google Maps', 'On Point Of Interest Click', 'lat', 'lng', 'placeName', 'placeID')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |place Name|`text`|
    |place ID|`text`|


This event will be invoked when a user clicks on a point of interest. This can be a shop, coffee-bar or else.

## Methods

### AddCircle

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |radius|`number`|
    |alpha|`number`|
    |hue|`number`|
    |stroke Width|`number`|
    |stroke Color|`number`|
    |draggable|`boolean`|


Create a circle overlay on the map UI with specified latitude and longitude for center. "hue" (min 0, max 360) and "alpha" (min 0, max 255) are used to set color and transparency level of the circle, "strokeWidth" and "strokeColor" are for the perimeter of the circle. Returning a unique id of the circle for future reference to events raised by moving this circle. If the circle isset to be draggable, two default markers will appear on the map: one in the center of the circle, another on the perimeter.

### AddMarkers

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |markers|`list`|


Adding a list of YailLists for markers. The representation of a maker in the inner YailList is composed of: lat(double) [required], long(double) [required], Color, title(String), snippet(String), draggable(boolean). Return a list of unqiue ids for the added markers. Note that the markers ids are not meant to persist after the app is closed, but for temporary references to the markers within the program only. Return an empty list if any error happen in the input

### AddMarkersFromJson

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |json String|`text`|


Adding a list of markers that are represented as JsonArray. The inner JsonObject represents a markerand is composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)

### AddMarkersHue

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |markers|`list`|


Adding a list of YailList for markers. The inner YailList represents a marker and is composed of lat(Double) [required], long(Double) [required], color(int)[in hue value ranging from 0-360], title(String), snippet(String), draggable(boolean). Return a list of unique ids for the markers that are added

### AddPolyline

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |points|`list`|
    |width|`number`|
    |color|`number`|


This block will return the unique id of the new added polyline. Create a new polyline on the map. Use for 'points' a list of lat, lng pairs. A integer for the 'width' (in pixel) and a valid color for the 'color' parameter.

### BoundCamera

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |ne Lat|`number`|
    |ne Lng|`number`|
    |sw Lat|`number`|
    |sw Lng|`number`|


Transforms the camera such that the specified latitude/longitude bounds are centered on screen at the greatest possible zoom level. Need to specify both latitudes and longitudes for both northeast location and southwest location of the bounding box

### EnableCompass

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enable|`boolean`|


Enables/disables the compass widget on the map's ui. Call this only after event "MapIsReady" is received

### EnableMapCameraPosChangeListener

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enabled|`boolean`|


Enable/Disable to listen to map's camera position changed event

### EnableMapClickListener

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enabled|`boolean`|


Enable/Disable to listen to map's click event

### EnableMapLongClickListener

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enabled|`boolean`|


Enable/disable to listen to map's long click event

### EnableMyLocation

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enabled|`boolean`|


Enable or disable my location widget control for Google Map. One can call GetMyLocation() to obtain the current location after enable this."

### EnableRotate

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enable|`boolean`|


Enables/disables the capability to rotate a map on the ui. Call this only after the event "MapIsReady" is received.

### EnableScroll

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enable|`boolean`|


Enables/disables the capability to scroll a map on the ui. Call this only after the event "MapIsReady" is received

### EnableZoomControl

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enable|`boolean`|


Enables/disables the zoom widget on the map's ui. Call this only after the event "MapIsReady" is received

### EnableZoomGesture

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |enable|`boolean`|


Enables/disables zoom gesture on the map ui. Call this only after the event "MapIsReady" is received.

### GetAllCircleIDs

_Block preview not available_

{>>Returns `list`<<}

Get all circles Ids. A short cut to get all the references for the eixisting circles

### GetAllMarkerID

_Block preview not available_

{>>Returns `list`<<}

Get all the existing markers's Ids

### GetAllPolylineIds

_Block preview not available_

{>>Returns `list`<<}

This will return a list with all available polyline id's.

### GetMarkers

_Block preview not available_

{>>Returns `list`<<}

Add a list of markers composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)

### GetMyLocation

_Block preview not available_

{>>Returns `list`<<}

Get current location using Google Map Service. Return a YailList with first item beingthe latitude, the second item being the longitude, and last time being the accuracy of the reading.

### GetPointsFromJson

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |json String|`text`|


Convert a JsonArray of points (lat, lng pairs) to a list.

### MoveCamera

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |zoom|`number`|


Move the map's camera to the specified position and zoom level

### RemoveCircle

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |circle Id|`number`|


Remove a circle for the map. Returns true if successfully removed, false if the circle does not exist with the specified id

### RemoveMarker

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|


Remove a marker from the map

### RemovePolyline

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |polyline Id|`number`|


Use this block to remove a polyline from the map. It will return true if it was successful.

### SetMapType

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |layer Name|`text`|


Set the layer of Google map. Default layer is "normal", other choices including "hybrid","satellite", and "terrain"

### UpdateCircle

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |circle Id|`number`|
    |property Name|`text`|
    |value|`any`|


Set the property of an existing circle. Properties include: "alpha"(number, value ranging from 0~255), "color" (nimber, hue value ranging 0~360), "radius"(number in meters)

### UpdateMarker

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |property Name|`text`|
    |value|`any`|


Set the property of a marker, note that the marker has to be added first or else will throw an exception! Properties include: "color"(hue value ranging from 0~360), "title", "snippet", "draggable"(give either true or false as the value).

### UpdatePolyline

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |polyline Id|`number`|
    |property Name|`text`|
    |points|`any`|


Update any polyline with the given id. You can change the property values for 'width' (in pixel), 'color' or 'points (a list of lat, lng pairs).

### Add Overlay

_Block preview not available_

Add overlay.

### Add Polygon

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |lat Min|`number`|
    |lat Max|`number`|
    |lon Min|`number`|
    |lon Max|`number`|


A Polygon is an enclosed shape that can be used to mark areas on the map.

### Add Tile Overlay

_Block preview not available_

Add title overlay.

### Clear All Polygons

_Block preview not available_

Clear all Polygons.

### Draw Central Square

_Block preview not available_

Draw central square.

### Get Bounding Box

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |latitude In Degrees|`number`|
    |longitude In Degrees|`number`|
    |half Side In Km|`number`|


Get bounding box.

### Get Map Center

_Block preview not available_

{>>Returns `text`<<}

Get map center. If a error occures the output will be '-999'.

### Get Zoom Level Info

:warning: ==**Deprecated**==

_Block preview not available_

{>>Returns `number`<<}

Deprecated block! Don't use this anymore. Use instead 'Camera Zoom Level'.

## Properties

### Camera Angle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Move the map's camera to the specified tilt, the angle (in degrees) from the nadir (directly facing the Earth). Must be a value between 0.0 and 90.0

### Camera Rotation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Rotation')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Move the map's camera to the specified bearing, the direction that the camera is pointing in (in degrees clockwise from north).

### Camera Zoom Level

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Zoom Level')]]

| Type | Default |
|:----:|:-------:|
|number|15|

Move the map's camera to the specified zoom level.

### Theme

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Theme')]]

| Type | Default |
|:----:|:-------:|
|text|standard|

Sets the theme of the map. The choices are "standard"(default), "silver", "retro", "dark", "night", "aubergine", "vintage", "kodular" and "roads-only".

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Compass Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Compass Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the compass widget is currently enabled in the map ui

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Map Camera Changed Listener Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Camera Changed Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates if the map camera's position changed listener is currently enabled

### Map Click Listener Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Click Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates if the mapClick event listener is currently enabled

### Map Long Click Listener Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Long Click Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates if the map longClick listener is currently enabled

### Map Type

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Indicates the current map type

### My Location Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'My Location Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether my locaiton UI control is currently enabled for the Google map.

### Rotate Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Rotate Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the capability to rotate a map on the ui is currently enabled

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Scroll Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Scroll Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the capability to scroll a map on the ui is currently enabled

### Style

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Style')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Sets the style of the map from json. Just use a text field and paste there the json data. Create a custom map style at https://mapstyle.withgoogle.com/. Set the theme to "standard" to clear the style json.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

### Zoom Control Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Zoom Control Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the zoom widget on the map ui is currently enabled

### Zoom Gesture Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Zoom Gesture Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the zoom gesture is currently enabled