# Notification

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that sends a notification to the user''s device._

## Methods

### AreNotificationsEnabled

[[Method('Notification', 'AreNotificationsEnabled', true)]]

{>>Returns `boolean`<<}

_Check whether the app can send Notifications_

### CancelAll

[[Method('Notification', 'CancelAll', false)]]

_Cancel all Notifications_

### CancelNotification

[[Method('Notification', 'CancelNotification', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Cancel a Notification with an id_

### NotificationBuilderAndroidCar

[[Method('Notification', 'NotificationBuilderAndroidCar', false, 'accentColor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |accent Color|`number`|


_Set the accent color for Android Car devices_

### NotificationBuilderAndroidWear

[[Method('Notification', 'NotificationBuilderAndroidWear', false, 'backgroundImage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |background Image|`text`|


_Set the background image for Android Wear devices_

### NotificationBuilderAutoCancel

[[Method('Notification', 'NotificationBuilderAutoCancel', false, 'autoCancel')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |auto Cancel|`boolean`|


_Set whether the notification should me removed after the user clicks on it._

### NotificationBuilderBigPicture

[[Method('Notification', 'NotificationBuilderBigPicture', false, 'bigPicture')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |big Picture|`text`|


_Set the big picture for the notification_

### NotificationBuilderID

[[Method('Notification', 'NotificationBuilderID', false, 'id')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|


_Set the notification id._

### NotificationBuilderPriority

[[Method('Notification', 'NotificationBuilderPriority', false, 'priority')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |priority|`number`|


_Set the notification builder priority. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"_

### NotificationBuilderSend

[[Method('Notification', 'NotificationBuilderSend', false)]]

_Send the notification that you build_

### NotificationBuilderStart

[[Method('Notification', 'NotificationBuilderStart', false, 'title message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|


_Start building a new notification_

### NotificationBuilderStartValue

[[Method('Notification', 'NotificationBuilderStartValue', false, 'startValue')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |start Value|`text`|


_Set the start value of the notification._

### NotificationBuilderVisibility

[[Method('Notification', 'NotificationBuilderVisibility', false, 'visiblity')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |visibility|`number`|


_Set the notification builder visibility. 1 = "public", 2 = "private", 3 = "secret"._

### SendAdvancedNotification

[[Method('Notification', 'SendAdvancedNotification', false, 'id title message startValue timeOn timeOff')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |message|`text`|
    |start Value|`text`|
    |time On|`number`|
    |time Off|`number`|


_Send a advanced notification (Android Wear Support)_

### SendNotification

[[Method('Notification', 'SendNotification', false, 'title message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|


_Send a notification_

## Properties

### Priority

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Priority')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"_

### Visibility

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Visibility')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set the visibility property. 1 = "public", 2 = "private", 3 = "secret"._