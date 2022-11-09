# In-App Update

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that lets the user download app updates from within the app.   
Note\: For this component to work correctly, set the MIN API to 21 (Android 5).

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Initialized

Use this event to check if updates from Google Play Store are available for your app.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Initialized%22,%20%22param%22:%20%5B%5D%7D"></div>

### Update Canceled

Event will be invoked when the update was canceled.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Update%20Canceled%22,%20%22param%22:%20%5B%5D%7D"></div>

### Update Downloaded

Event will be invoked when the update is downloaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Update%20Downloaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Update Downloading

Event will be invoked when the update is still in downloading progress.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Update%20Downloading%22,%20%22param%22:%20%5B%5D%7D"></div>

### Update Failed

Event will be invoked when there was a update fail.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Update%20Failed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Update Installed

Event will be invoked when the update is installed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Update%20Installed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Update Installing

Event will be invoked when the update is still in installing progress.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Update%20Installing%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Install Flexible Update Now

Use this block to install a flexible update after it was downloaded.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Install%20Flexible%20Update%20Now%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start Flexible Update

Start the process for flexible in-app updates. The update will be done in the background. Your users can still use your app in this time. After the update download is done you must restart your app.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Start%20Flexible%20Update%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start Immediate Update

Start the process for immediate in-app updates. In this time your app user can NOT use your app. After the update download is done your app will be restarted automatically.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Start%20Immediate%20Update%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Is Update Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if a update is available for your app.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In-App%20Update%22,%20%22name%22:%20%22Is%20Update%20Available%22,%20%22getter%22:%20true%7D"></div>
