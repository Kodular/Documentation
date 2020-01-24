# Push Notifications

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">6</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that remotely sends notifications to the device.  
Powered by OneSignal.

??? example "Permissions"
    * [android.permission.READ_APP_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_APP_BADGE)
    * [com.sonyericsson.home.permission.BROADCAST_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonyericsson.home.permission.BROADCAST_BADGE)
    * [com.htc.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.READ_SETTINGS)
    * [android.permission.VIBRATE](https://developer.android.com/reference/android/Manifest.permission.html#VIBRATE)
    * [com.huawei.android.launcher.permission.CHANGE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.CHANGE_BADGE)
    * [android.permission.RECEIVE_BOOT_COMPLETED](https://developer.android.com/reference/android/Manifest.permission.html#RECEIVE_BOOT_COMPLETED)
    * [com.huawei.android.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.WRITE_SETTINGS)
    * [com.majeur.launcher.permission.UPDATE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.majeur.launcher.permission.UPDATE_BADGE)
    * [com.sonymobile.home.permission.PROVIDER_INSERT_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonymobile.home.permission.PROVIDER_INSERT_BADGE)
    * [com.htc.launcher.permission.UPDATE_SHORTCUT](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.UPDATE_SHORTCUT)
    * [me.everything.badger.permission.BADGE_COUNT_READ](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_READ)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [com.sec.android.provider.badge.permission.WRITE](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.WRITE)
    * [com.sec.android.provider.badge.permission.READ](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.READ)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [com.anddoes.launcher.permission.UPDATE_COUNT](https://developer.android.com/reference/android/Manifest.permission.html#com.anddoes.launcher.permission.UPDATE_COUNT)
    * [com.huawei.android.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.READ_SETTINGS)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)
    * [com.oppo.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.WRITE_SETTINGS)
    * [me.everything.badger.permission.BADGE_COUNT_WRITE](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_WRITE)
    * [com.oppo.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.READ_SETTINGS)


## Events

### Got Available Tags

Event to detect available one signal tags.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Got%20Available%20Tags%22,%20%22params%22:%20%5B%22tags%20As%20String%22,%20%22tags%20As%20List%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tags As String|<span class="chip chip-text">Text</span>|
|tags As List|<span class="chip chip-list">List</span>|


### Got Value

Event to receive value for a tag.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Got%20Value%22,%20%22params%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|


### Notification Opened

User opened a notification.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Notification%20Opened%22,%20%22params%22:%20%5B%22id%22,%20%22title%22,%20%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Notification Received

User received a notification.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Notification%20Received%22,%20%22params%22:%20%5B%22id%22,%20%22title%22,%20%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Send Message Done

Returns true if your message was send with success out of your app to all users.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Send%20Message%20Done%22,%20%22params%22:%20%5B%22success%22%5D%7D"></div>


| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Clear All Notifications

Clear All Notifications.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Clear%20All%20Notifications%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Delete Tag

Deletes a single tag that was previously set on a user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Delete%20Tag%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22key%22%5D%7D"></div>


| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


### Get Available Tags

Get a list of available tags.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Available%20Tags%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get Value

Get value for tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22,%20%22value%20If%20Tag%20Not%20There%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-text">Text</span>|


### Send Message

Send a message to all users. The message and your REST Api Key can not be empty! You will find your REST Api Key in your OneSignal account settings.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Send%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22title%22,%20%22message%22,%20%22rest%20API%20Key%22%5D%7D"></div>


| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|rest API Key|<span class="chip chip-text">Text</span>|


### Send Tag

Tag a user based on an app event of your choosing so later you can create segments in to target these users.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Send%20Tag%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22key%22,%20%22value%22%5D%7D"></div>


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

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Enable%20Log%22,%20%22getter%22:%20false%7D"></div>


### Enable Sound

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Enable Sound.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Enable%20Sound%22,%20%22getter%22:%20false%7D"></div>


### Enable Vibration

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Enable Vibration.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Enable%20Vibration%22,%20%22getter%22:%20false%7D"></div>


### Get Email Subscription Email Address

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the email subscription email address.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Email%20Subscription%20Email%20Address%22,%20%22getter%22:%20true%7D"></div>


### Get Email Subscription User Id

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the email subscription user id.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Email%20Subscription%20User%20Id%22,%20%22getter%22:%20true%7D"></div>


### Get Permission Status

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get Permission Status

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Permission%20Status%22,%20%22getter%22:%20true%7D"></div>


### Get Subscription Status

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the subscription Status

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Subscription%20Status%22,%20%22getter%22:%20true%7D"></div>


### Get User Id

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the User ID. If there is no user id it will return '-1'.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20User%20Id%22,%20%22getter%22:%20true%7D"></div>


### Set Subscription

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

If you want to subscribe then set it to true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Set%20Subscription%22,%20%22getter%22:%20false%7D"></div>
