# Location Sensor

Non-visible component providing location information, including longitude, latitude, altitude (if supported by the device), speed (if supported by the device), and address. This can also perform "geocoding", converting a given address (not necessarily the current one) to a latitude (with the  `LatitudeFromAddress`  method) and a longitude (with the  `LongitudeFromAddress`  method).

In order to function, the component must have its  `Enabled`  property set to True, and the device must have location sensing enabled through wireless networks or GPS satellites (if outdoors).

Location information might not be immediately available when an app starts. You'll have to wait a short time for a location provider to be found and used, or wait for the OnLocationChanged event

The emulator does not emulate sensors on all devices. Code should be tested on a physical device.

### Properties

_`Accuracy`_

The LocationSensor will be able to locate the device with a varying degree of confidence, based on the quality of satellite, cell towers, and other data used to estimate location. The Accuracy value is the radius in meters around the sensor's detected location. The device has a 68% chance to be located within this radius. More precise location detection will result in a smaller accuracy number, which allows the app to have more confidence where the device is actually located.

If the accuracy is not known, the return value is 0.0

_`Altitude`_

Altitude of the Android device in meters, if available.

Altitude is measured from the  [World Geodetic System 84 reference ellipsoid](https://gisgeography.com/wgs84-world-geodetic-system/), not sea level.

Note that it is difficult for devices to accurately sense altitude. Altitude reported on a phone/tablet can easily be off by 30 meters or more.

_`AvailableProviders`_

List of available service providers, such as gps or network. This information is provided as a list and in text form.

_`CurrentAddress`_

Physical street address of the Android device from Google's map database.

The address might not always be available from the provider, and the address reported may not always be of the building where the device is located.

If Google has no address information available for a particular location, this will return No address available.

_`DistanceInterval`_

Determines the minimum distance interval, in meters, that the sensor will try to use for sending out location updates. For example, if this is set to 50, then the sensor will fire a LocationChanged event only after 50 meters have been traversed. However, the sensor does not guarantee that an update will be received at exactly the distance interval. It may take more than 5 meters to fire an event, for instance.

It is also useful to check against Accuracy when using this property. When your device is moving, the accuracy of the detected location is constantly changing.

_`Enabled`_

If true, the LocationSensor will attempt to read location information from GPS, WiFi location, or other means available on the device. This setting does not control whether location information is actually available. Device location must be enabled or disabled in the device settings.

_`HasAccuracy`_

If true, Android device can report its accuracy level.

_`HasAltitude`_

If true, Android device can report its altitude.

_`HasLongitudeLatitude`_   

If true, Android device can report longitude and latitude.

_`Latitude`_

Android device latitude. This is reported in decimal degrees to five decimal places. Latitude is a value between 90 (north) and -90 (south), where 0 marks the Equator.

_`Longitude`_

Android device longitude. This is reported in decimal degrees to five decimal places. Longitude is a value between 180 (east) and -180 (west), where 0 marks the Prime Meridian.

_`ProviderLocked`_

The device will not change the service provider.

It is possible for a device to switch service providers when the current provider is unable to provide adequate location information. ProviderLocked is a Boolean value: true/false. Set to true to prevent providers from changing. Set to false to allow for automatic switching when necessary.

_`ProviderName`_

The current service provider. The provider will most likely be either GPS or network.

_`TimeInterval`_

Determines the minimum time interval, in milliseconds, that the sensor will try to use for sending out location updates. However, location updates will only be received when the location of the phone actually changes, and use of the specified time interval is not guaranteed. For example, if 30000 is used as the time interval, location updates will never be fired sooner than 30000ms, but they may be fired anytime after.

Values smaller than 30000ms (30 seconds) are not practical for most devices. Small values may drain battery and overwork the GPS.

### Events

_`LocationChanged(number latitude, number longitude, number altitude, number speed)`_

Indicates that a new location has been detected. Speed is reported in meters/second. Other values match their properties.

_`StatusChanged(text provider, text status)`_

Indicates that the status of the location provider service has changed, such as when a provider is lost or a new provider starts being used.

### Methods

_`number LatitudeFromAddress(text locationName)`_

Derives latitude of given address

_`number LongitudeFromAddress(text locationName)`_

Derives longitude of given address}
