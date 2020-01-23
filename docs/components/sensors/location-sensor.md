# Location Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|3|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component providing location information, including longitude, latitude, altitude (if supported by the device), speed (if supported by the device), and address. This can also perform "geocoding", converting a given address (not necessarily the current one) to a latitude (with the `` LatitudeFromAddress `` method) and a longitude (with the `` LongitudeFromAddress `` method).

In order to function, the component must have its `` Enabled `` property set to True, and the device must have location sensing enabled through wireless networks or GPS satellites (if outdoors).

Location information might not be immediately available when an app starts. You'll have to wait a short time for a location provider to be found and used, or wait for the OnLocationChanged event

## Events

### Location Changed

[[Event('Location Sensor', 'Location Changed', 'latitude', 'longitude', 'altitude', 'speed')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |latitude|`number`|
    |longitude|`number`|
    |altitude|`number`|
    |speed|`number`|


Indicates that a new location has been detected.

### Status Changed

[[Event('Location Sensor', 'Status Changed', 'provider', 'status')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |provider|`text`|
    |status|`text`|


Indicates that the status of the location provider service has changed, such as when aprovider is lost or a new provider starts being used.

## Methods

### LatitudeFromAddress

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location Name|`text`|


Derives latitude of given address

### LongitudeFromAddress

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location Name|`text`|


Derives longitude of given address

## Properties

### Distance Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Location Sensor', 'Distance Interval')]]

| Type | Default |
|:----:|:-------:|
|number|5|

Determines the minimum distance interval, in meters, that the sensor will try to use for sending out location updates. For example, if this is set to 5, then the sensor will fire a LocationChanged event only after 5 meters have been traversed. However, the sensor does not guarantee that an update will be received at exactly the distance interval. It may take more than 5 meters to fire an event, for instance.

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Location Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Indicates whether the user has specified that the sensor shouldlisten for location changes and raise the corresponding events.

### Time Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Location Sensor', 'Time Interval')]]

| Type | Default |
|:----:|:-------:|
|number|60000|

Determines the minimum time interval, in milliseconds, that the sensor will try to use for sending out location updates. However, location updates will only be received when the location of the phone actually changes, and use of the specified time interval is not guaranteed. For example, if 1000 is used as the time interval, location updates will never be fired sooner than 1000ms, but they may be fired anytime after.

### Accuracy

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Accuracy')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The most recent measure of accuracy, in meters. If no value is available,0 will be returned.

### Altitude

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Altitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The most recently available altitude value, in meters. If no value isavailable, 0 will be returned.

### Available Providers

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Available Providers')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_No description available_

### Current Address

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Current Address')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Provides a textual representation of the current address or"No address available".

### Has Accuracy

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Has Accuracy')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether information about location accuracy is available.

### Has Altitude

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Has Altitude')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether altitude information is available.

### Has Longitude Latitude

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Has Longitude Latitude')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether longitude and latitude information is available. (It isalways the case that either both or neither are.)

### Latitude

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Latitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The most recently available latitude value. If no value is available,0 will be returned.

### Longitude

:eyes: Read-Only property
[[PropertyBlockGetter('Location Sensor', 'Longitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The most recent available longitude value. If no value is available,0 will be returned.

### Provider Locked

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Location Sensor', 'Provider Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the sensor should allow the developer tomanually change the provider (GPS, GSM, Wifi, etc.)from which location updates are received.

### Provider Name

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Location Sensor', 'Provider Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Indicates the source of the location information. If there is no provider, thestring "NO PROVIDER" is returned. This is useful primarily for debugging.