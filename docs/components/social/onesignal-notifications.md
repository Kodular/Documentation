# OneSignal Notifications

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component for receiving and controlling push notifications sent remotely using OneSignal.

??? example "Permissions"
    * [com.sonyericsson.home.permission.BROADCAST_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonyericsson.home.permission.BROADCAST_BADGE)
    * [com.htc.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.READ_SETTINGS)
    * [android.permission.FOREGROUND_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#FOREGROUND_SERVICE)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#RECEIVE_BOOT_COMPLETED)
    * [com.huawei.android.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.WRITE_SETTINGS)
    * [me.everything.badger.permission.BADGE_COUNT_READ](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_READ)
    * [com.sec.android.provider.badge.permission.WRITE](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.WRITE)
    * [com.sec.android.provider.badge.permission.READ](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.READ)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [com.anddoes.launcher.permission.UPDATE_COUNT](https://developer.android.com/reference/android/Manifest.permission.html#com.anddoes.launcher.permission.UPDATE_COUNT)
    * [android.permission.POST_NOTIFICATIONS](https://developer.android.com/reference/android/Manifest.permission.html#POST_NOTIFICATIONS)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)
    * [com.oppo.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.WRITE_SETTINGS)
    * [android.permission.READ_APP_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_APP_BADGE)
    * [%packageName%.permission.C2D_MESSAGE](https://developer.android.com/reference/android/Manifest.permission.html#%packageName%.permission.C2D_MESSAGE)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#VIBRATE)
    * [com.huawei.android.launcher.permission.CHANGE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.CHANGE_BADGE)
    * [com.majeur.launcher.permission.UPDATE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.majeur.launcher.permission.UPDATE_BADGE)
    * [com.sonymobile.home.permission.PROVIDER_INSERT_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonymobile.home.permission.PROVIDER_INSERT_BADGE)
    * [com.htc.launcher.permission.UPDATE_SHORTCUT](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.UPDATE_SHORTCUT)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [com.huawei.android.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.READ_SETTINGS)
    * [me.everything.badger.permission.BADGE_COUNT_WRITE](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_WRITE)
    * [com.oppo.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.READ_SETTINGS)

## Events

### Error Occurred

Called when an error occurs.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Notification Clicked

Called when the user clicks the notification.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Notification%20Clicked%22,%20%22param%22:%20%5B%22android%20Notification%20ID%22,%20%22from%20Project%20Number%22,%20%22group%20Key%22,%20%22sent%20Time%22,%20%22ttl%22,%20%22notification%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|android Notification ID|<span class="chip chip-number">Number</span>|
|from Project Number|<span class="chip chip-text">Text</span>|
|group Key|<span class="chip chip-text">Text</span>|
|sent Time|<span class="chip chip-number">Number</span>|
|ttl|<span class="chip chip-number">Number</span>|
|notification ID|<span class="chip chip-text">Text</span>|

### Notification Permission State Changed

Called when the user accepts or declines the permission prompt, or enables or disables notifications for your app in the device's app settings and then returns to your app.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Notification%20Permission%20State%20Changed%22,%20%22param%22:%20%5B%22granted%22%5D%7D"></div>

| Params | []() |
|--------|------|
|granted|<span class="chip chip-boolean">Boolean</span>|

### Push Subscription State Changed

Called when subscription state changes. This can happen when: 1. The device receives a new push token from Google (FCM) or Apple (APNs). 2. OneSignal assigns a subscription ID. 3. The optedIn value changes (e.g. called "OptIn" or "OptOut"). 4. The user toggles push permission in system settings, then opens the app.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Push%20Subscription%20State%20Changed%22,%20%22param%22:%20%5B%22subscription%20Id%22,%20%22opted%20In%22,%20%22token%22%5D%7D"></div>

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|
|opted In|<span class="chip chip-boolean">Boolean</span>|
|token|<span class="chip chip-text">Text</span>|

## Methods

### Get Push Subscription ID

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the current push subscription ID. May return null if called too early.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Get%20Push%20Subscription%20ID%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Push Subscription Token

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the current push subscription token. May return null if called too early.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Get%20Push%20Subscription%20Token%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Has Opted In

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the current push subscription status is subscribed, otherwise false. If the push token is valid but OptOut was called, this will return false.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Has%20Opted%20In%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Opt In

Does one of three actions: 1. If the Subscription has a valid push token, it sets the current push subscription status to subscribed. 2. If the Subscription does not have a valid push token, it displays the push permission prompt. 3. If the push permission prompt has been displayed more than the operating system's limit (twice Android), it displays the fallback prompt.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Opt%20In%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Opt Out

Sets the current push subscription status to unsubscribed (even if the user has a valid push token).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Opt%20Out%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove All Notifications

Removes all OneSignal notifications.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Remove%20All%20Notifications%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Grouped Notifications

Cancel all notifications in a specific group based on its group key.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Remove%20Grouped%20Notifications%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22group%20Key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|group Key|<span class="chip chip-text">Text</span>|

### Remove Notification

Cancel a single notification based on its Android notification ID.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Remove%20Notification%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22android%20Notification%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|android Notification ID|<span class="chip chip-number">Number</span>|

### Request Notification Permission

Shows the native system prompt asking the user for push notification permission. If "fallbackToSettings" is true, the fallback prompt will be displayed if the user denied push permissions more than twice.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Request%20Notification%20Permission%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22fallback%20To%20Settings%22%5D%7D"></div>

| Params | []() |
|--------|------|
|fallback To Settings|<span class="chip chip-boolean">Boolean</span>|

## Properties

### Can Request Permission

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-unknown">Continuation</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns whether attempting to request permission will result in a prompt being displayed to the user. If false, the user has already denied permission and can either be shown the fallback prompt or no prompt at all.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Notifications%22,%20%22name%22:%20%22Can%20Request%20Permission%22,%20%22getter%22:%20false%7D"></div>
