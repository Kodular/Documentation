# Google Maps

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

## Overview

A visible component that shows a map on the screen powered by Google''s Maps service.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)
    * [com.google.android.providers.gsf.permission.READ_GSERVICES](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.providers.gsf.permission.READ_GSERVICES)


## Events

### Camera Position Changed

Called after the camera position of a map has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Position%20Changed%22,%20%22params%22:%20%5B%22lat%22,%20%22lng%22,%20%22bearing%22,%20%22tilt%22,%20%22zoom%22%5D%7D"></div>


| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|
|bearing|<span class="chip chip-number">Number</span>|
|tilt|<span class="chip chip-number">Number</span>|
|zoom|<span class="chip chip-number">Number</span>|


### Finished Dragging Circle

Event been raised after the action of moving a draggable circle is finished. Possible a user drag the center of the circle or drag the radius marker of the circle

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Finished%20Dragging%20Circle%22,%20%22params%22:%20%5B%22id%22,%20%22center%20Lat%22,%20%22center%20Lng%22,%20%22radius%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|center Lat|<span class="chip chip-number">Number</span>|
|center Lng|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|


### Info Window Clicked

When the marker's infowindow is clicked, returning marker's id

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Info%20Window%20Clicked%22,%20%22params%22:%20%5B%22marker%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|


### Map Is Ready

Indicates that the map has been rendered and ready for adding markers or changing other settings. Please add or updating markers within this event

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Map%20Is%20Ready%22,%20%22params%22:%20%5B%5D%7D"></div>


### On Location Changed

Triggers this event when user location has changed. Only works when EnableMylocation is set to true

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Location%20Changed%22,%20%22params%22:%20%5B%22lat%22,%20%22lng%22%5D%7D"></div>


| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|


### On Map Click

Called when the user makes a tap gesture on the map

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Map%20Click%22,%20%22params%22:%20%5B%22lat%22,%20%22lng%22%5D%7D"></div>


| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|


### On Map Long Click

Called when the user makes a long-press gesture on the map

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Map%20Long%20Click%22,%20%22params%22:%20%5B%22lat%22,%20%22lng%22%5D%7D"></div>


| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|


### On Marker Click

When a marker is clicked

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Marker%20Click%22,%20%22params%22:%20%5B%22marker%20Id%22,%20%22latitude%22,%20%22longitude%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Marker Drag

When a marker is been dragged

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Marker%20Drag%22,%20%22params%22:%20%5B%22marker%20Id%22,%20%22latitude%22,%20%22longitude%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Marker Drag End

When the user drags a marker and finish the action, returning marker's id and it's latest position

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Marker%20Drag%20End%22,%20%22params%22:%20%5B%22marker%20Id%22,%20%22latitude%22,%20%22longitude%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Marker Drag Start

When a marker starts been dragged

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Marker%20Drag%20Start%22,%20%22params%22:%20%5B%22marker%20Id%22,%20%22latitude%22,%20%22longitude%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|


### On Point Of Interest Click

This event will be invoked when a user clicks on a point of interest. This can be a shop, coffee-bar or else.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22On%20Point%20Of%20Interest%20Click%22,%20%22params%22:%20%5B%22lat%22,%20%22lng%22,%20%22place%20Name%22,%20%22place%20ID%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Circle%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22lat%22,%20%22lng%22,%20%22radius%22,%20%22alpha%22,%20%22hue%22,%20%22stroke%20Width%22,%20%22stroke%20Color%22,%20%22draggable%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Markers%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22markers%22%5D%7D"></div>


| Params | []() |
|--------|------|
|markers|<span class="chip chip-list">List</span>|


### Add Markers From Json

Adding a list of markers that are represented as JsonArray. The inner JsonObject represents a markerand is composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Markers%20From%20Json%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22json%20String%22%5D%7D"></div>


| Params | []() |
|--------|------|
|json String|<span class="chip chip-text">Text</span>|


### Add Markers Hue

<span class="chip chip-list">Returns: <i>List</i></span> 

Adding a list of YailList for markers. The inner YailList represents a marker and is composed of lat(Double) [required], long(Double) [required], color(int)[in hue value ranging from 0-360], title(String), snippet(String), draggable(boolean). Return a list of unique ids for the markers that are added

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Markers%20Hue%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22markers%22%5D%7D"></div>


| Params | []() |
|--------|------|
|markers|<span class="chip chip-list">List</span>|


### Add Polyline

<span class="chip chip-number">Returns: <i>Number</i></span> 

This block will return the unique id of the new added polyline. Create a new polyline on the map. Use for 'points' a list of lat, lng pairs. A integer for the 'width' (in pixel) and a valid color for the 'color' parameter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Polyline%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22points%22,%20%22width%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|points|<span class="chip chip-list">List</span>|
|width|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Bound Camera

Transforms the camera such that the specified latitude/longitude bounds are centered on screen at the greatest possible zoom level. Need to specify both latitudes and longitudes for both northeast location and southwest location of the bounding box

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Bound%20Camera%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22ne%20Lat%22,%20%22ne%20Lng%22,%20%22sw%20Lat%22,%20%22sw%20Lng%22%5D%7D"></div>


| Params | []() |
|--------|------|
|ne Lat|<span class="chip chip-number">Number</span>|
|ne Lng|<span class="chip chip-number">Number</span>|
|sw Lat|<span class="chip chip-number">Number</span>|
|sw Lng|<span class="chip chip-number">Number</span>|


### Enable Compass

Enables/disables the compass widget on the map's ui. Call this only after event "MapIsReady" is received

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Compass%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enable%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Map Camera Pos Change Listener

Enable/Disable to listen to map's camera position changed event

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Map%20Camera%20Pos%20Change%20Listener%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enabled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable Map Click Listener

Enable/Disable to listen to map's click event

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Map%20Click%20Listener%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enabled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable Map Long Click Listener

Enable/disable to listen to map's long click event

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Map%20Long%20Click%20Listener%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enabled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable My Location

Enable or disable my location widget control for Google Map. One can call GetMyLocation() to obtain the current location after enable this."

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20My%20Location%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enabled%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Enable Rotate

Enables/disables the capability to rotate a map on the ui. Call this only after the event "MapIsReady" is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Rotate%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enable%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Scroll

Enables/disables the capability to scroll a map on the ui. Call this only after the event "MapIsReady" is received

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Scroll%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enable%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Zoom Control

Enables/disables the zoom widget on the map's ui. Call this only after the event "MapIsReady" is received

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Zoom%20Control%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enable%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Enable Zoom Gesture

Enables/disables zoom gesture on the map ui. Call this only after the event "MapIsReady" is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Enable%20Zoom%20Gesture%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22enable%22%5D%7D"></div>


| Params | []() |
|--------|------|
|enable|<span class="chip chip-boolean">Boolean</span>|


### Get All Circle IDs

<span class="chip chip-list">Returns: <i>List</i></span> 

Get all circles Ids. A short cut to get all the references for the eixisting circles

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20All%20Circle%20IDs%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get All Marker IDs

<span class="chip chip-list">Returns: <i>List</i></span> 

Get all the existing markers's Ids

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20All%20Marker%20IDs%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get All Polyline Ids

<span class="chip chip-list">Returns: <i>List</i></span> 

This will return a list with all available polyline id's.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20All%20Polyline%20Ids%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Markers

<span class="chip chip-list">Returns: <i>List</i></span> 

Add a list of markers composed of name-value pairs. Name fields for a marker are: "lat" (type double) [required], "lng"(type double) [required], "color"(type int)[in hue value ranging from 0~360], "title"(type String), "snippet"(type String), "draggable"(type boolean)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20Markers%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get My Location

<span class="chip chip-list">Returns: <i>List</i></span> 

Get current location using Google Map Service. Return a YailList with first item beingthe latitude, the second item being the longitude, and last time being the accuracy of the reading.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20My%20Location%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Points From Json

<span class="chip chip-list">Returns: <i>List</i></span> 

Convert a JsonArray of points (lat, lng pairs) to a list.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20Points%20From%20Json%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22json%20String%22%5D%7D"></div>


| Params | []() |
|--------|------|
|json String|<span class="chip chip-text">Text</span>|


### Move Camera

Move the map's camera to the specified position and zoom level

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Move%20Camera%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22lat%22,%20%22lng%22,%20%22zoom%22%5D%7D"></div>


| Params | []() |
|--------|------|
|lat|<span class="chip chip-number">Number</span>|
|lng|<span class="chip chip-number">Number</span>|
|zoom|<span class="chip chip-number">Number</span>|


### Remove Circle

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Remove a circle for the map. Returns true if successfully removed, false if the circle does not exist with the specified id

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Remove%20Circle%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22circle%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|circle Id|<span class="chip chip-number">Number</span>|


### Remove Marker

Remove a marker from the map

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Remove%20Marker%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22marker%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|


### Remove Polyline

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Use this block to remove a polyline from the map. It will return true if it was successful.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Remove%20Polyline%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22polyline%20Id%22%5D%7D"></div>


| Params | []() |
|--------|------|
|polyline Id|<span class="chip chip-number">Number</span>|


### Set Map Type

Set the layer of Google map. Default layer is "normal", other choices including "hybrid","satellite", and "terrain"

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Set%20Map%20Type%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22layer%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|layer Name|<span class="chip chip-text">Text</span>|


### Update Circle

Set the property of an existing circle. Properties include: "alpha"(number, value ranging from 0~255), "color" (nimber, hue value ranging 0~360), "radius"(number in meters)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Update%20Circle%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22circle%20Id%22,%20%22property%20Name%22,%20%22value%22%5D%7D"></div>


| Params | []() |
|--------|------|
|circle Id|<span class="chip chip-number">Number</span>|
|property Name|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Update Marker

Set the property of a marker, note that the marker has to be added first or else will throw an exception! Properties include: "color"(hue value ranging from 0~360), "title", "snippet", "draggable"(give either true or false as the value).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Update%20Marker%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22marker%20Id%22,%20%22property%20Name%22,%20%22value%22%5D%7D"></div>


| Params | []() |
|--------|------|
|marker Id|<span class="chip chip-number">Number</span>|
|property Name|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Update Polyline

Update any polyline with the given id. You can change the property values for 'width' (in pixel), 'color' or 'points (a list of lat, lng pairs).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Update%20Polyline%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22polyline%20Id%22,%20%22property%20Name%22,%20%22points%22%5D%7D"></div>


| Params | []() |
|--------|------|
|polyline Id|<span class="chip chip-number">Number</span>|
|property Name|<span class="chip chip-text">Text</span>|
|points|<span class="chip chip-any">Any</span>|


### Add Overlay

Add overlay.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Overlay%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Add Polygon

A Polygon is an enclosed shape that can be used to mark areas on the map.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Polygon%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22lat%20Min%22,%20%22lat%20Max%22,%20%22lon%20Min%22,%20%22lon%20Max%22%5D%7D"></div>


| Params | []() |
|--------|------|
|lat Min|<span class="chip chip-number">Number</span>|
|lat Max|<span class="chip chip-number">Number</span>|
|lon Min|<span class="chip chip-number">Number</span>|
|lon Max|<span class="chip chip-number">Number</span>|


### Add Tile Overlay

Add title overlay.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Add%20Tile%20Overlay%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Clear All Polygons

Clear all Polygons.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Clear%20All%20Polygons%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Draw Central Square

Draw central square.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Draw%20Central%20Square%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get Bounding Box

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get bounding box.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20Bounding%20Box%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22latitude%20In%20Degrees%22,%20%22longitude%20In%20Degrees%22,%20%22half%20Side%20In%20Km%22%5D%7D"></div>


| Params | []() |
|--------|------|
|latitude In Degrees|<span class="chip chip-number">Number</span>|
|longitude In Degrees|<span class="chip chip-number">Number</span>|
|half Side In Km|<span class="chip chip-number">Number</span>|


### Get Map Center

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get map center. If a error occures the output will be '-999'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20Map%20Center%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Zoom Level Info

:warning: ==**Deprecated**==

<span class="chip chip-number">Returns: <i>Number</i></span> 

Deprecated block! Don't use this anymore. Use instead 'Camera Zoom Level'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Get%20Zoom%20Level%20Info%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Camera Angle

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Move the map's camera to the specified tilt, the angle (in degrees) from the nadir (directly facing the Earth). Must be a value between 0.0 and 90.0

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Angle%22,%20%22getter%22:%20false%7D"></div>


### Camera Rotation

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Move the map's camera to the specified bearing, the direction that the camera is pointing in (in degrees clockwise from north).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Rotation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Rotation%22,%20%22getter%22:%20false%7D"></div>


### Camera Zoom Level

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>15</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Move the map's camera to the specified zoom level.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Zoom%20Level%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Camera%20Zoom%20Level%22,%20%22getter%22:%20false%7D"></div>


### Theme

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>standard</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the theme of the map. The choices are "standard"(default), "silver", "retro", "dark", "night", "aubergine", "vintage", "kodular" and "roads-only".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Theme%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Theme%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Compass Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the compass widget is currently enabled in the map ui

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Compass%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Map Camera Changed Listener Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates if the map camera's position changed listener is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Map%20Camera%20Changed%20Listener%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Map Click Listener Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates if the mapClick event listener is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Map%20Click%20Listener%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Map Long Click Listener Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates if the map longClick listener is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Map%20Long%20Click%20Listener%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Map Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates the current map type

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Map%20Type%22,%20%22getter%22:%20true%7D"></div>


### My Location Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether my locaiton UI control is currently enabled for the Google map.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22My%20Location%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Rotate Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the capability to rotate a map on the ui is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Rotate%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Scroll Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the capability to scroll a map on the ui is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Scroll%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Style

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Sets the style of the map from json. Just use a text field and paste there the json data. Create a custom map style at https://mapstyle.withgoogle.com/. Set the theme to "standard" to clear the style json.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Style%22,%20%22getter%22:%20false%7D"></div>


### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Zoom Control Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the zoom widget on the map ui is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Zoom%20Control%20Enabled%22,%20%22getter%22:%20true%7D"></div>


### Zoom Gesture Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the zoom gesture is currently enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Maps%22,%20%22name%22:%20%22Zoom%20Gesture%20Enabled%22,%20%22getter%22:%20true%7D"></div>
