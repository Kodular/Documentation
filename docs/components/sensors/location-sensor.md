# Location Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component providing location information, including longitude, latitude, altitude (if supported by the device), speed (if supported by the device), and address. This can also perform "geocoding", converting a given address (not necessarily the current one) to a latitude (with the `` LatitudeFromAddress `` method) and a longitude (with the `` LongitudeFromAddress `` method).

In order to function, the component must have its `` Enabled `` property set to True, and the device must have location sensing enabled through wireless networks or GPS satellites (if outdoors).

Location information might not be immediately available when an app starts. You'll have to wait a short time for a location provider to be found and used, or wait for the OnLocationChanged event

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.ACCESS_MOCK_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_MOCK_LOCATION)
    * [android.permission.ACCESS_LOCATION_EXTRA_COMMANDS](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_LOCATION_EXTRA_COMMANDS)


## Events

### Location Changed

Indicates that a new location has been detected.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Location%20Changed%22,%20%22params%22:%20%5B%22latitude%22,%20%22longitude%22,%20%22altitude%22,%20%22speed%22%5D%7D"></div>


| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|altitude|<span class="chip chip-number">Number</span>|
|speed|<span class="chip chip-number">Number</span>|


### Status Changed

Indicates that the status of the location provider service has changed, such as when aprovider is lost or a new provider starts being used.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Status%20Changed%22,%20%22params%22:%20%5B%22provider%22,%20%22status%22%5D%7D"></div>


| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|status|<span class="chip chip-text">Text</span>|


## Methods

### Latitude From Address

<span class="chip chip-number">Returns: <i>Number</i></span> 

Derives latitude of given address

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Latitude%20From%20Address%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22location%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|location Name|<span class="chip chip-text">Text</span>|


### Longitude From Address

<span class="chip chip-number">Returns: <i>Number</i></span> 

Derives longitude of given address

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Longitude%20From%20Address%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22location%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|location Name|<span class="chip chip-text">Text</span>|


## Properties

### Distance Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Determines the minimum distance interval, in meters, that the sensor will try to use for sending out location updates. For example, if this is set to 5, then the sensor will fire a LocationChanged event only after 5 meters have been traversed. However, the sensor does not guarantee that an update will be received at exactly the distance interval. It may take more than 5 meters to fire an event, for instance.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Distance%20Interval%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Distance%20Interval%22,%20%22getter%22:%20false%7D"></div>


### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Indicates whether the user has specified that the sensor shouldlisten for location changes and raise the corresponding events.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>


### Time Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>60000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Determines the minimum time interval, in milliseconds, that the sensor will try to use for sending out location updates. However, location updates will only be received when the location of the phone actually changes, and use of the specified time interval is not guaranteed. For example, if 1000 is used as the time interval, location updates will never be fired sooner than 1000ms, but they may be fired anytime after.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Time%20Interval%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Time%20Interval%22,%20%22getter%22:%20false%7D"></div>


### Accuracy

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recent measure of accuracy, in meters. If no value is available,0 will be returned.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Accuracy%22,%20%22getter%22:%20true%7D"></div>


### Altitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recently available altitude value, in meters. If no value isavailable, 0 will be returned.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Altitude%22,%20%22getter%22:%20true%7D"></div>


### Available Providers

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Available%20Providers%22,%20%22getter%22:%20true%7D"></div>


### Current Address

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Provides a textual representation of the current address or"No address available".

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Current%20Address%22,%20%22getter%22:%20true%7D"></div>


### Has Accuracy

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether information about location accuracy is available.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Has%20Accuracy%22,%20%22getter%22:%20true%7D"></div>


### Has Altitude

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether altitude information is available.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Has%20Altitude%22,%20%22getter%22:%20true%7D"></div>


### Has Longitude Latitude

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether longitude and latitude information is available. (It isalways the case that either both or neither are.)

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Has%20Longitude%20Latitude%22,%20%22getter%22:%20true%7D"></div>


### Latitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recently available latitude value. If no value is available,0 will be returned.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Latitude%22,%20%22getter%22:%20true%7D"></div>


### Longitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recent available longitude value. If no value is available,0 will be returned.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Longitude%22,%20%22getter%22:%20true%7D"></div>


### Provider Locked

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the sensor should allow the developer tomanually change the provider (GPS, GSM, Wifi, etc.)from which location updates are received.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Provider%20Locked%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Provider%20Locked%22,%20%22getter%22:%20false%7D"></div>


### Provider Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Indicates the source of the location information. If there is no provider, thestring "NO PROVIDER" is returned. This is useful primarily for debugging.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Provider%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Location%20Sensor%22,%20%22name%22:%20%22Provider%20Name%22,%20%22getter%22:%20false%7D"></div>
