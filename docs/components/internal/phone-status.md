# Phone Status

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Component that returns information about the phone._

## Events

### On Settings

[[Event('Phone Status', 'On Settings')]]

_This event is fired when the "settings" menu item is selected (only available in the
 Companion App, defined in ReplForm.java)._

## Methods

### GetInstaller

[[Method('Phone Status', 'GetInstaller', true)]]

{>>Returns `text`<<}

_Return the app that installed us_

### get Version Name

[[Method('Phone Status', 'get Version Name', true)]]

{>>Returns `text`<<}

_Return the our VersionName property_

### GetWifiIpAddress

[[Method('Phone Status', 'GetWifiIpAddress', true)]]

{>>Returns `text`<<}

_Returns the IP address of the phone in the form of a String_

### SdkLevel

[[Method('Phone Status', 'SdkLevel', true)]]

{>>Returns `number`<<}

_Get the current Android SDK Level_

### do Fault

[[Method('Phone Status', 'do Fault', false)]]

_Causes an Exception, used to debug exception processing._

### install URL

[[Method('Phone Status', 'install URL', false, 'url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|


_Downloads the URL and installs it as an Android Package_

### is Connected

[[Method('Phone Status', 'is Connected', true)]]

{>>Returns `boolean`<<}

_Returns TRUE if the phone is on Wifi, FALSE otherwise_

### is Direct

[[Method('Phone Status', 'is Direct', true)]]

{>>Returns `boolean`<<}

_Returns true if we are running in the emulator or USB Connection_

### set Assets Loaded

[[Method('Phone Status', 'set Assets Loaded', false)]]

_Declare that we have loaded our initial assets and other assets should come from the sdcard_

### set Hmac Seed Return Code

[[Method('Phone Status', 'set Hmac Seed Return Code', true, 'seed rendezvousServer')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |seed|`text`|
    |rendezvousServer|`text`|


_Establish the secret seed for HOTP generation. Return the SHA1 of the provided seed, this will be used to contact the rendezvous server. Note: This code also starts the connection negotiation process if we are using WebRTC. This is a bit of a kludge..._

### shutdown

[[Method('Phone Status', 'shutdown', false)]]

_Really Exit the Application_

### start HTTPD

[[Method('Phone Status', 'start HTTPD', false, 'secure')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |secure|`boolean`|


_Start the internal AppInvHTTPD to listen for incoming forms. FOR REPL USE ONLY!_

## Properties

### WebRTC

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Status', 'WebRTC')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Set whether or not we will use WebRTC to communicate with the server_