# Google Maps

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that shows a map on the screen powered by Google''s Maps service._

## Events

### Camera Position Changed

[[Event('Google Maps', 'Camera Position Changed', 'lat lng bearing tilt zoom')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |bearing|`number`|
    |tilt|`number`|
    |zoom|`number`|


_Called after the camera position of a map has changed._

### Finished Dragging Circle

[[Event('Google Maps', 'Finished Dragging Circle', 'id centerLat centerLng radius')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |center Lat|`number`|
    |center Lng|`number`|
    |radius|`number`|


_Event been raised after the action of moving a draggable circle is finished. Possible a user drag the center of the circle or drag the radius marker of the circle_

### Info Window Clicked

[[Event('Google Maps', 'Info Window Clicked', 'markerId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|


_When the marker's infowindow is clicked, returning marker's id_

### Map Is Ready

[[Event('Google Maps', 'Map Is Ready')]]

_Indicates that the map has been rendered and ready for adding markers or changing other settings. Please add or updating markers within this event_

### On Location Changed

[[Event('Google Maps', 'On Location Changed', 'lat lng')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|


_Triggers this event when user location has changed. Only works when EnableMylocation is set to true_

### On Map Click

[[Event('Google Maps', 'On Map Click', 'lat lng')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|


_Called when the user makes a tap gesture on the map_

### On Map Long Click

[[Event('Google Maps', 'On Map Long Click', 'lat lng')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|


_Called when the user makes a long-press gesture on the map_

### On Marker Click

[[Event('Google Maps', 'On Marker Click', 'markerId latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


_When a marker is clicked_

### On Marker Drag

[[Event('Google Maps', 'On Marker Drag', 'markerId latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


_When a marker is been dragged_

### On Marker Drag End

[[Event('Google Maps', 'On Marker Drag End', 'markerId latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


_When the user drags a marker and finish the action, returning marker's id and it's latest position_

### On Marker Drag Start

[[Event('Google Maps', 'On Marker Drag Start', 'markerId latitude longitude')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |latitude|`number`|
    |longitude|`number`|


_When a marker starts been dragged_

### On Point Of Interest Click

[[Event('Google Maps', 'On Point Of Interest Click', 'lat lng placeName placeID')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |place Name|`text`|
    |place ID|`text`|


_This event will be invoked when a user clicks on a point of interest. This can be a shop, coffee-bar or else._

## Methods

### AddCircle

[[Method('Google Maps', 'AddCircle', true, 'lat lng radius alpha hue strokeWidth strokeColor draggable')]]

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


_Create a circle overlay on the map UI with specified latitude and longitude for center. "hue" (min 0, max 360) and "alpha" (min 0, max 255) are used to set color and transparency level of the circle, "strokeWidth" and "strokeColor" are for the perimeter of the circle. Returning a unique id of the circle for future reference to events raised by moving this circle. If the circle isset to be draggable, two default markers will appear on the map: one in the center of the circle, another on the perimeter._

### AddMarkers

[[Method('Google Maps', 'AddMarkers', true, 'markers')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |markers|`list`|


_Adding a list of YailLists for markers. The representation of a maker in the inner YailList is composed of: lat(double) [required], long(double) [required], Color, title(String), snippet(String), draggable(boolean). Return a list of unqiue ids for the added  markers. Note that the markers ids are not meant to persist after  the app is closed, but for temporary references to the markers within the program only. Return an empty list if any error happen in the input_

### AddMarkersFromJson

[[Method('Google Maps', 'AddMarkersFromJson', false, 'jsonString')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |json String|`text`|


_Adding a list of markers that are represented as JsonArray.  The inner JsonObject represents a markerand is composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)_

### AddMarkersHue

[[Method('Google Maps', 'AddMarkersHue', true, 'markers')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |markers|`list`|


_Adding a list of YailList for markers. The inner YailList represents a marker and is composed of lat(Double) [required], long(Double) [required], color(int)[in hue value ranging from 0-360], title(String), snippet(String), draggable(boolean). Return a list of unique ids for the markers that are added_

### AddPolyline

[[Method('Google Maps', 'AddPolyline', true, 'points width color')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |points|`list`|
    |width|`number`|
    |color|`number`|


_This block will return the unique id of the new added polyline. Create a new polyline on the map. Use for 'points' a list of lat, lng pairs. A integer for the 'width' (in pixel) and a valid color for the 'color' parameter._

### BoundCamera

[[Method('Google Maps', 'BoundCamera', false, 'neLat neLng swLat swLng')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |ne Lat|`number`|
    |ne Lng|`number`|
    |sw Lat|`number`|
    |sw Lng|`number`|


_Transforms the camera such that the specified latitude/longitude bounds are centered on screen at the greatest possible zoom level. Need to specify both latitudes and longitudes for both northeast location and southwest location of the bounding box_

### EnableCompass

[[Method('Google Maps', 'EnableCompass', false, 'enable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enable|`boolean`|


_Enables/disables the compass widget on the map's ui. Call this only after event "MapIsReady" is received_

### EnableMapCameraPosChangeListener

[[Method('Google Maps', 'EnableMapCameraPosChangeListener', false, 'enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enabled|`boolean`|


_Enable/Disable to listen to map's camera position changed event_

### EnableMapClickListener

[[Method('Google Maps', 'EnableMapClickListener', false, 'enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enabled|`boolean`|


_Enable/Disable to listen to map's click event_

### EnableMapLongClickListener

[[Method('Google Maps', 'EnableMapLongClickListener', false, 'enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enabled|`boolean`|


_Enable/disable to listen to map's long click event_

### EnableMyLocation

[[Method('Google Maps', 'EnableMyLocation', false, 'enabled')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enabled|`boolean`|


_Enable or disable my location widget control for Google Map. One can call GetMyLocation() to obtain the current location after enable this."_

### EnableRotate

[[Method('Google Maps', 'EnableRotate', false, 'enable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enable|`boolean`|


_Enables/disables the capability to rotate a map on the ui. Call this only after the event "MapIsReady" is received._

### EnableScroll

[[Method('Google Maps', 'EnableScroll', false, 'enable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enable|`boolean`|


_Enables/disables the capability to scroll a map on the ui. Call this only after the event "MapIsReady" is received_

### EnableZoomControl

[[Method('Google Maps', 'EnableZoomControl', false, 'enable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enable|`boolean`|


_Enables/disables the zoom widget on the map's ui. Call this only after the event "MapIsReady" is received_

### EnableZoomGesture

[[Method('Google Maps', 'EnableZoomGesture', false, 'enable')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |enable|`boolean`|


_Enables/disables zoom gesture on the map ui. Call this only after the event  "MapIsReady" is received._

### GetAllCircleIDs

[[Method('Google Maps', 'GetAllCircleIDs', true)]]

{>>Returns `list`<<}

_Get all circles Ids. A short cut to get all the references for the eixisting circles_

### GetAllMarkerID

[[Method('Google Maps', 'GetAllMarkerID', true)]]

{>>Returns `list`<<}

_Get all the existing markers's Ids_

### GetAllPolylineIds

[[Method('Google Maps', 'GetAllPolylineIds', true)]]

{>>Returns `list`<<}

_This will return a list with all available polyline id's._

### GetMarkers

[[Method('Google Maps', 'GetMarkers', true)]]

{>>Returns `list`<<}

_Add a list of markers composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)_

### GetMyLocation

[[Method('Google Maps', 'GetMyLocation', true)]]

{>>Returns `list`<<}

_Get current location using Google Map Service. Return a YailList with first item beingthe latitude, the second item being the longitude, and last time being the accuracy of the reading._

### GetPointsFromJson

[[Method('Google Maps', 'GetPointsFromJson', true, 'jsonString')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |json String|`text`|


_Convert a JsonArray of points (lat, lng pairs) to a list._

### MoveCamera

[[Method('Google Maps', 'MoveCamera', false, 'lat lng zoom')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat|`number`|
    |lng|`number`|
    |zoom|`number`|


_Move the map's camera to the specified position and zoom level_

### RemoveCircle

[[Method('Google Maps', 'RemoveCircle', true, 'circleId')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |circle Id|`number`|


_Remove a circle for the map. Returns true if successfully removed, false if the circle does not exist with the specified id_

### RemoveMarker

[[Method('Google Maps', 'RemoveMarker', false, 'markerId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|


_Remove a marker from the map_

### RemovePolyline

[[Method('Google Maps', 'RemovePolyline', true, 'polylineId')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |polyline Id|`number`|


_Use this block to remove a polyline from the map. It will return true if it was successful._

### SetMapType

[[Method('Google Maps', 'SetMapType', false, 'layerName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |layer Name|`text`|


_Set the layer of Google map. Default layer is "normal", other choices including "hybrid","satellite", and "terrain"_

### UpdateCircle

[[Method('Google Maps', 'UpdateCircle', false, 'circleId propertyName value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |circle Id|`number`|
    |property Name|`text`|
    |value|`any`|


_Set the property of an existing circle. Properties include: "alpha"(number, value ranging from 0~255), "color" (nimber, hue value ranging 0~360), "radius"(number in meters)_

### UpdateMarker

[[Method('Google Maps', 'UpdateMarker', false, 'markerId propertyName value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |marker Id|`number`|
    |property Name|`text`|
    |value|`any`|


_Set the property of a marker, note that the marker has to be added first or else will throw an exception! Properties include: "color"(hue value ranging from 0~360), "title", "snippet", "draggable"(give either true or false as the value)._

### UpdatePolyline

[[Method('Google Maps', 'UpdatePolyline', false, 'polylineId propertyName points')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |polyline Id|`number`|
    |property Name|`text`|
    |points|`any`|


_Update any polyline with the given id. You can change the property values for 'width' (in pixel), 'color' or 'points (a list of lat, lng pairs)._

### Add Overlay

[[Method('Google Maps', 'Add Overlay', false)]]

_Add overlay._

### Add Polygon

[[Method('Google Maps', 'Add Polygon', false, 'latMin latMax lonMin lonMax')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |lat Min|`number`|
    |lat Max|`number`|
    |lon Min|`number`|
    |lon Max|`number`|


_A Polygon is an enclosed shape that can be used to mark areas on the map._

### Add Tile Overlay

[[Method('Google Maps', 'Add Tile Overlay', false)]]

_Add title overlay._

### Clear All Polygons

[[Method('Google Maps', 'Clear All Polygons', false)]]

_Clear all Polygons._

### Draw Central Square

[[Method('Google Maps', 'Draw Central Square', false)]]

_Draw central square._

### Get Bounding Box

[[Method('Google Maps', 'Get Bounding Box', true, 'latitudeInDegrees longitudeInDegrees halfSideInKm')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |latitude In Degrees|`number`|
    |longitude In Degrees|`number`|
    |half Side In Km|`number`|


_Get bounding box._

### Get Map Center

[[Method('Google Maps', 'Get Map Center', true)]]

{>>Returns `text`<<}

_Get map center. If a error occures the output will be '-999'._

### Get Zoom Level Info

:warning: ==**Deprecated**==

[[Method('Google Maps', 'Get Zoom Level Info', true)]]

{>>Returns `number`<<}

_Deprecated block! Don't use this anymore. Use instead 'Camera Zoom Level'._

## Properties

### Camera Angle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Move the map's camera to the specified tilt, the angle (in degrees) from the nadir (directly facing the Earth). Must be a value between 0.0 and 90.0_

### Camera Rotation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Rotation')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Move the map's camera to the specified bearing, the direction that the camera is pointing in (in degrees clockwise from north)._

### Camera Zoom Level

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Zoom Level')]]

| Type | Default |
|:----:|:-------:|
|number|15|

_Move the map's camera to the specified zoom level._

### Theme

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Theme')]]

| Type | Default |
|:----:|:-------:|
|text|standard|

_Sets the theme of the map. The choices are "standard"(default), "silver", "retro", "dark", "night", "aubergine", "vintage", "kodular" and "roads-only"._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Compass Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Compass Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates whether the compass widget is currently enabled in the map ui_

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Map Camera Changed Listener Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Camera Changed Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates if the map camera's position changed listener is currently enabled_

### Map Click Listener Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Click Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates if the mapClick event listener is currently enabled_

### Map Long Click Listener Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Long Click Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates if the map longClick listener is currently enabled_

### Map Type

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Indicates the current map type_

### My Location Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'My Location Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates whether my locaiton UI control is currently enabled for the Google map._

### Rotate Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Rotate Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates whether the capability to rotate a map on the ui is currently enabled_

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Scroll Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Scroll Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates whether the capability to scroll a map on the ui is currently enabled_

### Style

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Style')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Sets the style of the map from json. Just use a text field and paste there the json data. Create a custom map style at https://mapstyle.withgoogle.com/. Set the theme to "standard" to clear the style json._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._

### Zoom Control Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Zoom Control Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates whether the zoom widget on the map ui is currently enabled_

### Zoom Gesture Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Zoom Gesture Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicates whether the zoom gesture is currently enabled_