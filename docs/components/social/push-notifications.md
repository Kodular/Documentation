# Push Notifications

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Social|API 19, Android 4.4 - 4.4.4 KitKat|6|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that remotely sends notifications to the device.  
Powered by OneSignal.

??? example "Permissions"
    * [android.permission.READ_APP_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.READ_APP_BADGE)
    * [com.sonyericsson.home.permission.BROADCAST_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonyericsson.home.permission.BROADCAST_BADGE)
    * [com.htc.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.READ_SETTINGS)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.VIBRATE)
    * [com.huawei.android.launcher.permission.CHANGE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.CHANGE_BADGE)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.RECEIVE_BOOT_COMPLETED)
    * [com.huawei.android.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.WRITE_SETTINGS)
    * [com.majeur.launcher.permission.UPDATE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.majeur.launcher.permission.UPDATE_BADGE)
    * [com.sonymobile.home.permission.PROVIDER_INSERT_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonymobile.home.permission.PROVIDER_INSERT_BADGE)
    * [com.htc.launcher.permission.UPDATE_SHORTCUT](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.UPDATE_SHORTCUT)
    * [me.everything.badger.permission.BADGE_COUNT_READ](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_READ)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [com.sec.android.provider.badge.permission.WRITE](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.WRITE)
    * [com.sec.android.provider.badge.permission.READ](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.READ)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.WAKE_LOCK)
    * [com.anddoes.launcher.permission.UPDATE_COUNT](https://developer.android.com/reference/android/Manifest.permission.html#com.anddoes.launcher.permission.UPDATE_COUNT)
    * [com.huawei.android.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.READ_SETTINGS)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)
    * [com.oppo.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.WRITE_SETTINGS)
    * [me.everything.badger.permission.BADGE_COUNT_WRITE](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_WRITE)
    * [com.oppo.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.READ_SETTINGS)


## Events

### Got Available Tags

Event to detect available one signal tags.

[[Event('Push Notifications', 'Got Available Tags', 'tagsAsString', 'tagsAsList')]]

| Params | []() |
|--------|------|
|tags As String|<span class="chip chip-text">Text</span>|
|tags As List|<span class="chip chip-list">List</span>|


### Got Value

Event to receive value for a tag.

[[Event('Push Notifications', 'Got Value', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|


### Notification Opened

User opened a notification.

[[Event('Push Notifications', 'Notification Opened', 'id', 'title', 'message')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Notification Received

User received a notification.

[[Event('Push Notifications', 'Notification Received', 'id', 'title', 'message')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Send Message Done

Returns true if your message was send with success out of your app to all users.

[[Event('Push Notifications', 'Send Message Done', 'success')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Clear All Notifications

Clear All Notifications.

[[Method('Push Notifications', 'Clear All Notifications', False)]]

### Delete Tag

Deletes a single tag that was previously set on a user.

[[Method('Push Notifications', 'Delete Tag', False, 'key')]]

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


### Get Available Tags

Get a list of available tags.

[[Method('Push Notifications', 'Get Available Tags', False)]]

### Get Value

Get value for tag.

[[Method('Push Notifications', 'Get Value', False, 'tag', 'valueIfTagNotThere')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-text">Text</span>|


### Send Message

Send a message to all users. The message and your REST Api Key can not be empty! You will find your REST Api Key in your OneSignal account settings.

[[Method('Push Notifications', 'Send Message', False, 'title', 'message', 'restApiKey')]]

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|rest API Key|<span class="chip chip-text">Text</span>|


### Send Tag

Tag a user based on an app event of your choosing so later you can create segments in to target these users.

[[Method('Push Notifications', 'Send Tag', False, 'key', 'value')]]

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|


## Properties

### OneSignal App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Set here your One Signal App ID

### Enable Log

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If you want to enable the log then set it to true.

[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Log')]]

### Enable Sound

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Enable Sound.

[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Sound')]]

### Enable Vibration

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Enable Vibration.

[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Vibration')]]

### Get Email Subscription Email Address

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the email subscription email address.

[[PropertyBlockGetter('Push Notifications', 'Get Email Subscription Email Address')]]

### Get Email Subscription User Id

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the email subscription user id.

[[PropertyBlockGetter('Push Notifications', 'Get Email Subscription User Id')]]

### Get Permission Status

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get Permission Status

[[PropertyBlockGetter('Push Notifications', 'Get Permission Status')]]

### Get Subscription Status

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the subscription Status

[[PropertyBlockGetter('Push Notifications', 'Get Subscription Status')]]

### Get User Id

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the User ID. If there is no user id it will return '-1'.

[[PropertyBlockGetter('Push Notifications', 'Get User Id')]]

### Set Subscription

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If you want to subscribe then set it to true.

[[PropertyBlockGetterAndSetter('Push Notifications', 'Set Subscription')]]