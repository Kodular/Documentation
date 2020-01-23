# In-App Update

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Experimental|API 21, Android 5.0 Lollipop|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets the user download app updates from within the app.   
Note\: For this component to work correctly, set the MIN API to 21 (Android 5).

## Events

### Initialized

Use this event to check if updates from Google Play Store are available for your app.

[[Event('In-App Update', 'Initialized')]]

### Update Canceled

Event will be invoked when the update was canceled.

[[Event('In-App Update', 'Update Canceled')]]

### Update Downloaded

Event will be invoked when the update is downloaded.

[[Event('In-App Update', 'Update Downloaded')]]

### Update Downloading

Event will be invoked when the update is still in downloading progress.

[[Event('In-App Update', 'Update Downloading')]]

### Update Failed

Event will be invoked when there was a update fail.

[[Event('In-App Update', 'Update Failed')]]

### Update Installed

Event will be invoked when the update is installed.

[[Event('In-App Update', 'Update Installed')]]

### Update Installing

Event will be invoked when the update is still in installing progress.

[[Event('In-App Update', 'Update Installing')]]

## Methods

### Install Flexible Update Now

Use this block to install a flexible update after it was downloaded.

[[Method('In-App Update', 'Install Flexible Update Now', False)]]

### Start Flexible Update

Start the process for flexible in-app updates. The update will be done in the background. Your users can still use your app in this time. After the update download is done you must restart your app.

[[Method('In-App Update', 'Start Flexible Update', False)]]

### Start Immediate Update

Start the process for immediate in-app updates. In this time your app user can NOT use your app. After the update download is done your app will be restarted automatically.

[[Method('In-App Update', 'Start Immediate Update', False)]]

## Properties

### Is Update Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if a update is available for your app.

[[PropertyBlockGetter('In-App Update', 'Is Update Available')]]