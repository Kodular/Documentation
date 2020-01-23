# Phone Status

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Component that returns information about the phone.

## Events

### On Settings

[[Event('Phone Status', 'On Settings')]]

This event is fired when the "settings" menu item is selected (only available in the   Companion App, defined in ReplForm.java).

## Methods

### GetInstaller

_Block preview not available_

{>>Returns `text`<<}

Return the app that installed us

### get Version Name

_Block preview not available_

{>>Returns `text`<<}

Return the our VersionName property

### GetWifiIpAddress

_Block preview not available_

{>>Returns `text`<<}

Returns the IP address of the phone in the form of a String

### SdkLevel

_Block preview not available_

{>>Returns `number`<<}

Get the current Android SDK Level

### do Fault

_Block preview not available_

Causes an Exception, used to debug exception processing.

### install URL

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|


Downloads the URL and installs it as an Android Package

### is Connected

_Block preview not available_

{>>Returns `boolean`<<}

Returns TRUE if the phone is on Wifi, FALSE otherwise

### is Direct

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if we are running in the emulator or USB Connection

### set Assets Loaded

_Block preview not available_

Declare that we have loaded our initial assets and other assets should come from the sdcard

### set Hmac Seed Return Code

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |seed|`text`|
    |rendezvousServer|`text`|


Establish the secret seed for HOTP generation. Return the SHA1 of the provided seed, this will be used to contact the rendezvous server. Note: This code also starts the connection negotiation process if we are using WebRTC. This is a bit of a kludge...

### shutdown

_Block preview not available_

Really Exit the Application

### start HTTPD

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |secure|`boolean`|


Start the internal AppInvHTTPD to listen for incoming forms. FOR REPL USE ONLY!

## Properties

### WebRTC

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Status', 'WebRTC')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set whether or not we will use WebRTC to communicate with the server