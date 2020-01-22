# In-App Update

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 21 - Android 5.0 Lollipop|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets the user download app updates from within the app. <br>Note\: For this component to work correctly, set the MIN API to 21 (Android 5).

## Events

### Initialized

[[Event('In-App Update', 'Initialized')]]

Use this event to check if updates from Google Play Store are available for your app.

### Update Canceled

[[Event('In-App Update', 'Update Canceled')]]

Event will be invoked when the update was canceled.

### Update Downloaded

[[Event('In-App Update', 'Update Downloaded')]]

Event will be invoked when the update is downloaded.

### Update Downloading

[[Event('In-App Update', 'Update Downloading')]]

Event will be invoked when the update is still in downloading progress.

### Update Failed

[[Event('In-App Update', 'Update Failed')]]

Event will be invoked when there was a update fail.

### Update Installed

[[Event('In-App Update', 'Update Installed')]]

Event will be invoked when the update is installed.

### Update Installing

[[Event('In-App Update', 'Update Installing')]]

Event will be invoked when the update is still in installing progress.

## Methods

### InstallFlexibleUpdateNow

[[Method('In-App Update', 'InstallFlexibleUpdateNow', false)]]

Use this block to install a flexible update after it was downloaded.

### StartFlexibleUpdate

[[Method('In-App Update', 'StartFlexibleUpdate', false)]]

Start the process for flexible in-app updates. The update will be done in the background. Your users can still use your app in this time. After the update download is done you must restart your app.

### StartImmediateUpdate

[[Method('In-App Update', 'StartImmediateUpdate', false)]]

Start the process for immediate in-app updates. In this time your app user can NOT use your app. After the update download is done your app will be restarted automatically.

## Properties

### Is Update Available

:eyes: Read-Only property
[[PropertyBlockGetter('In-App Update', 'Is Update Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if a update is available for your app.