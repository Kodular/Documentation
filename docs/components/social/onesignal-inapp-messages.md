# OneSignal InApp Messages

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component for displaying and controlling in-app messages sent remotely using OneSignal. In-app messages are customizable, targeted messages that display within your mobile app.

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

### Message Clicked

Called when the message is clicked.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Message%20Clicked%22,%20%22param%22:%20%5B%22message%20ID%22,%20%22action%20ID%22,%20%22url%22,%20%22is%20Closing%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|
|action ID|<span class="chip chip-text">Text</span>|
|url|<span class="chip chip-text">Text</span>|
|is Closing Message|<span class="chip chip-boolean">Boolean</span>|

### Message Did Dismiss

Called after an in-app message has been dismissed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Message%20Did%20Dismiss%22,%20%22param%22:%20%5B%22message%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|

### Message Did Display

Called after an in-app message has finished displaying.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Message%20Did%20Display%22,%20%22param%22:%20%5B%22message%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|

### Message Will Dismiss

Called right before an in-app message is dismissed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Message%20Will%20Dismiss%22,%20%22param%22:%20%5B%22message%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|

### Message Will Display

Called right before an in-app message is displayed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Message%20Will%20Display%22,%20%22param%22:%20%5B%22message%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message ID|<span class="chip chip-text">Text</span>|

## Methods

### Add Trigger

Adds a new trigger with provided key-value pair for the current user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Add%20Trigger%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22key%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|

### Remove Trigger

Removes the trigger with provided key for the current user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Remove%20Trigger%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|

## Properties

### Pause InApp Messages

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Prevent In-app messages from being displayed to the user. When set to true, no in-app messages will be presented. When set to false, any messages the user qualifies for will be presented to them at the appropriate time.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20InApp%20Messages%22,%20%22name%22:%20%22Pause%20InApp%20Messages%22,%20%22getter%22:%20false%7D"></div>
