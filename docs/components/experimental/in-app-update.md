# In-App Update

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 21 - Android 5.0 Lollipop|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that lets the user download app updates from within the app. <br>Note\: For this component to work correctly, set the MIN API to 21 (Android 5)._

## Events

### Initialized

[[Event('In-App Update', 'Initialized')]]

_Use this event to check if updates from Google Play Store are available for your app._

### Update Canceled

[[Event('In-App Update', 'Update Canceled')]]

_Event will be invoked when the update was canceled._

### Update Downloaded

[[Event('In-App Update', 'Update Downloaded')]]

_Event will be invoked when the update is downloaded._

### Update Downloading

[[Event('In-App Update', 'Update Downloading')]]

_Event will be invoked when the update is still in downloading progress._

### Update Failed

[[Event('In-App Update', 'Update Failed')]]

_Event will be invoked when there was a update fail._

### Update Installed

[[Event('In-App Update', 'Update Installed')]]

_Event will be invoked when the update is installed._

### Update Installing

[[Event('In-App Update', 'Update Installing')]]

_Event will be invoked when the update is still in installing progress._

## Methods

### InstallFlexibleUpdateNow

[[Method('In-App Update', 'InstallFlexibleUpdateNow', false)]]

_Use this block to install a flexible update after it was downloaded._

### StartFlexibleUpdate

[[Method('In-App Update', 'StartFlexibleUpdate', false)]]

_Start the process for flexible in-app updates. The update will be done in the background. Your users can still use your app in this time. After the update download is done you must restart your app._

### StartImmediateUpdate

[[Method('In-App Update', 'StartImmediateUpdate', false)]]

_Start the process for immediate in-app updates. In this time your app user can NOT use your app. After the update download is done your app will be restarted automatically._

## Properties

### Is Update Available

:eyes: Read-Only property
[[PropertyBlockGetter('In-App Update', 'Is Update Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns true if a update is available for your app._