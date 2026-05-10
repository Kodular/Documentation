# Firebase Cloud Messaging

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component for receiving push notifications, managing device tokens, and subscribing to topics using Firebase Cloud Messaging (FCM). Requires a google-services.json file configured in your Firebase project.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [android.permission.POST_NOTIFICATIONS](https://developer.android.com/reference/android/Manifest.permission.html#POST_NOTIFICATIONS)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)

## Events

### Error Occurred

Fired when an error occurs during token retrieval, topic subscription, or Firebase initialization.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Message Received

Fired when a message is received from FCM, whether the app is in the foreground or background.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Message%20Received%22,%20%22param%22:%20%5B%22message%20ID%22,%20%22from%22,%20%22title%22,%20%22body%22,%20%22data%22,%20%22sent%20Time%22,%20%22ttl%22,%20%22priority%22,%20%22collapseKey%22,%20%22image%20URL%22%5D%7D"></div>

| Param | Type |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|
|from|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|body|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|
|sent Time|<span class="chip chip-number">Number</span>|
|ttl|<span class="chip chip-number">Number</span>|
|priority|<span class="chip chip-number">Number</span>|
|collapseKey|<span class="chip chip-text">Text</span>|
|image URL|<span class="chip chip-text">Text</span>|

### Notification Clicked

Fired when the user taps a notification. Provides the message data that was included in the notification.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Notification%20Clicked%22,%20%22param%22:%20%5B%22message%20ID%22,%20%22title%22,%20%22body%22,%20%22data%22,%20%22image%20URL%22%5D%7D"></div>

| Param | Type |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|body|<span class="chip chip-text">Text</span>|
|data|<span class="chip chip-unknown">Dictionary</span>|
|image URL|<span class="chip chip-text">Text</span>|

### Notification Permission State Changed

Called when the user accepts or declines the permission prompt, or enables or disables notifications for your app in the device's app settings and then returns to your app.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Notification%20Permission%20State%20Changed%22,%20%22param%22:%20%5B%22granted%22%5D%7D"></div>

| Param | Type |
|--------|------|
|granted|<span class="chip chip-boolean">Boolean</span>|

### Token Received

Fired with the current FCM registration token. Triggered by a GetToken call, and also when the token is rotated (fresh install, app data cleared, or security event). Send this token to your server to target this device for push notifications.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Token%20Received%22,%20%22param%22:%20%5B%22token%22%5D%7D"></div>

| Param | Type |
|--------|------|
|token|<span class="chip chip-text">Text</span>|

## Methods

### Are Notification Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the user has enabled notifications for this app, false otherwise. On Android 13+ this also reflects the POST_NOTIFICATIONS permission.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Are%20Notification%20Enabled%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Token

Requests the current FCM registration token. The token is delivered asynchronously via the TokenReceived event. The token uniquely identifies this app instance for push notifications.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Get%20Token%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Request Notification Permission

Shows the native system prompt asking the user for push notification permission. Required on Android 13+ to display notifications. Fires NotificationPermissionStateChanged with the result. On older Android versions where the permission is auto-granted at install time, the event reflects whether notifications are enabled in the device's app settings.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Request%20Notification%20Permission%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Subscribe To Topic

Subscribes to an FCM topic. Messages sent to this topic will be received by this device. Topic names must match the pattern [a-zA-Z0-9-_.~%]+.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Subscribe%20To%20Topic%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22topic%22%5D%7D"></div>

| Param | Type |
|--------|------|
|topic|<span class="chip chip-text">Text</span>|

### Unsubscribe From Topic

Unsubscribes from an FCM topic.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Unsubscribe%20From%20Topic%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22topic%22%5D%7D"></div>

| Param | Type |
|--------|------|
|topic|<span class="chip chip-text">Text</span>|

## Properties

### Show Notification In Foreground

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

When true, a system notification is automatically displayed for messages received while the app is in the foreground. The MessageReceived event fires regardless of this setting.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Show%20Notification%20In%20Foreground%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Cloud%20Messaging%22,%20%22name%22:%20%22Show%20Notification%20In%20Foreground%22,%20%22getter%22:%20false%7D"></div>
