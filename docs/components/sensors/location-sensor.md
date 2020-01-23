# Location Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component providing location information, including longitude, latitude, altitude (if supported by the device), speed (if supported by the device), and address. This can also perform "geocoding", converting a given address (not necessarily the current one) to a latitude (with the `` LatitudeFromAddress `` method) and a longitude (with the `` LongitudeFromAddress `` method).

In order to function, the component must have its `` Enabled `` property set to True, and the device must have location sensing enabled through wireless networks or GPS satellites (if outdoors).

Location information might not be immediately available when an app starts. You'll have to wait a short time for a location provider to be found and used, or wait for the OnLocationChanged event

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_COARSE_LOCATION)
    * [android.permission.ACCESS_MOCK_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_MOCK_LOCATION)
    * [android.permission.ACCESS_LOCATION_EXTRA_COMMANDS](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_LOCATION_EXTRA_COMMANDS)


## Events

### Location Changed

Indicates that a new location has been detected.

[[Event('Location Sensor', 'Location Changed', 'latitude', 'longitude', 'altitude', 'speed')]]

| Params | []() |
|--------|------|
|latitude|<span class="chip chip-number">Number</span>|
|longitude|<span class="chip chip-number">Number</span>|
|altitude|<span class="chip chip-number">Number</span>|
|speed|<span class="chip chip-number">Number</span>|


### Status Changed

Indicates that the status of the location provider service has changed, such as when aprovider is lost or a new provider starts being used.

[[Event('Location Sensor', 'Status Changed', 'provider', 'status')]]

| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|status|<span class="chip chip-text">Text</span>|


## Methods

### Latitude From Address

<span class="chip chip-number">Returns: <i>Number</i></span> 

Derives latitude of given address

[[Method('Location Sensor', 'Latitude From Address', True, 'locationName')]]

| Params | []() |
|--------|------|
|location Name|<span class="chip chip-text">Text</span>|


### Longitude From Address

<span class="chip chip-number">Returns: <i>Number</i></span> 

Derives longitude of given address

[[Method('Location Sensor', 'Longitude From Address', True, 'locationName')]]

| Params | []() |
|--------|------|
|location Name|<span class="chip chip-text">Text</span>|


## Properties

### Distance Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Determines the minimum distance interval, in meters, that the sensor will try to use for sending out location updates. For example, if this is set to 5, then the sensor will fire a LocationChanged event only after 5 meters have been traversed. However, the sensor does not guarantee that an update will be received at exactly the distance interval. It may take more than 5 meters to fire an event, for instance.

[[PropertyBlockGetterAndSetter('Location Sensor', 'Distance Interval')]]

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Indicates whether the user has specified that the sensor shouldlisten for location changes and raise the corresponding events.

[[PropertyBlockGetterAndSetter('Location Sensor', 'Enabled')]]

### Time Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>60000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Determines the minimum time interval, in milliseconds, that the sensor will try to use for sending out location updates. However, location updates will only be received when the location of the phone actually changes, and use of the specified time interval is not guaranteed. For example, if 1000 is used as the time interval, location updates will never be fired sooner than 1000ms, but they may be fired anytime after.

[[PropertyBlockGetterAndSetter('Location Sensor', 'Time Interval')]]

### Accuracy

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recent measure of accuracy, in meters. If no value is available,0 will be returned.

[[PropertyBlockGetter('Location Sensor', 'Accuracy')]]

### Altitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recently available altitude value, in meters. If no value isavailable, 0 will be returned.

[[PropertyBlockGetter('Location Sensor', 'Altitude')]]

### Available Providers

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Location Sensor', 'Available Providers')]]

### Current Address

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Provides a textual representation of the current address or"No address available".

[[PropertyBlockGetter('Location Sensor', 'Current Address')]]

### Has Accuracy

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether information about location accuracy is available.

[[PropertyBlockGetter('Location Sensor', 'Has Accuracy')]]

### Has Altitude

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether altitude information is available.

[[PropertyBlockGetter('Location Sensor', 'Has Altitude')]]

### Has Longitude Latitude

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether longitude and latitude information is available. (It isalways the case that either both or neither are.)

[[PropertyBlockGetter('Location Sensor', 'Has Longitude Latitude')]]

### Latitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recently available latitude value. If no value is available,0 will be returned.

[[PropertyBlockGetter('Location Sensor', 'Latitude')]]

### Longitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The most recent available longitude value. If no value is available,0 will be returned.

[[PropertyBlockGetter('Location Sensor', 'Longitude')]]

### Provider Locked

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether the sensor should allow the developer tomanually change the provider (GPS, GSM, Wifi, etc.)from which location updates are received.

[[PropertyBlockGetterAndSetter('Location Sensor', 'Provider Locked')]]

### Provider Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Indicates the source of the location information. If there is no provider, thestring "NO PROVIDER" is returned. This is useful primarily for debugging.

[[PropertyBlockGetterAndSetter('Location Sensor', 'Provider Name')]]