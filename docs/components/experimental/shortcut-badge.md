# Shortcut Badge

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that adds a dot/badge to the app''s launcher icon when a there are unread notifications in the app.

??? example "Permissions"
    * [com.android.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.android.launcher.permission.READ_SETTINGS)
    * [com.sonyericsson.home.permission.BROADCAST_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonyericsson.home.permission.BROADCAST_BADGE)
    * [android.permission.READ_APP_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_APP_BADGE)
    * [com.htc.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.READ_SETTINGS)
    * [com.huawei.android.launcher.permission.CHANGE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.CHANGE_BADGE)
    * [com.huawei.android.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.WRITE_SETTINGS)
    * [com.majeur.launcher.permission.UPDATE_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.majeur.launcher.permission.UPDATE_BADGE)
    * [com.android.launcher.permission.UNINSTALL_SHORTCUT](https://developer.android.com/reference/android/Manifest.permission.html#com.android.launcher.permission.UNINSTALL_SHORTCUT)
    * [com.sonymobile.home.permission.PROVIDER_INSERT_BADGE](https://developer.android.com/reference/android/Manifest.permission.html#com.sonymobile.home.permission.PROVIDER_INSERT_BADGE)
    * [com.htc.launcher.permission.UPDATE_SHORTCUT](https://developer.android.com/reference/android/Manifest.permission.html#com.htc.launcher.permission.UPDATE_SHORTCUT)
    * [me.everything.badger.permission.BADGE_COUNT_READ](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_READ)
    * [com.sec.android.provider.badge.permission.WRITE](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.WRITE)
    * [com.sec.android.provider.badge.permission.READ](https://developer.android.com/reference/android/Manifest.permission.html#com.sec.android.provider.badge.permission.READ)
    * [com.anddoes.launcher.permission.UPDATE_COUNT](https://developer.android.com/reference/android/Manifest.permission.html#com.anddoes.launcher.permission.UPDATE_COUNT)
    * [com.huawei.android.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.huawei.android.launcher.permission.READ_SETTINGS)
    * [com.oppo.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.WRITE_SETTINGS)
    * [me.everything.badger.permission.BADGE_COUNT_WRITE](https://developer.android.com/reference/android/Manifest.permission.html#me.everything.badger.permission.BADGE_COUNT_WRITE)
    * [com.android.launcher.permission.INSTALL_SHORTCUT](https://developer.android.com/reference/android/Manifest.permission.html#com.android.launcher.permission.INSTALL_SHORTCUT)
    * [com.oppo.launcher.permission.READ_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.oppo.launcher.permission.READ_SETTINGS)
    * [com.android.launcher.permission.WRITE_SETTINGS](https://developer.android.com/reference/android/Manifest.permission.html#com.android.launcher.permission.WRITE_SETTINGS)

## Methods

### Apply Count

Use this block to apply a notification badge count.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shortcut%20Badge%22,%20%22name%22:%20%22Apply%20Count%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22count%22%5D%7D"></div>


| Params | []() |
|--------|------|
|count|<span class="chip chip-number">Number</span>|


### Count

<span class="chip chip-number">Returns: <i>Number</i></span> 

Use this block to return the notification count.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shortcut%20Badge%22,%20%22name%22:%20%22Count%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Remove Count

Use this block to remove the notification badge count.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Shortcut%20Badge%22,%20%22name%22:%20%22Remove%20Count%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>
