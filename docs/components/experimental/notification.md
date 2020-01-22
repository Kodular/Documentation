# Notification

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that sends a notification to the user''s device._

## Methods

### AreNotificationsEnabled

[[Method('Notification', 'AreNotificationsEnabled', true)]]

{>>Returns `boolean`<<}

_Check wether the app can send Notifications_

### BigPictureNotification

[[Method('Notification', 'BigPictureNotification', false, 'notificationID title message bigPicture startValue removeOnClick')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |notification ID|`number`|
    |title|`text`|
    |message|`text`|
    |big Picture|`text`|
    |start Value|`text`|
    |remove On Click|`boolean`|


_Send a normal notification_

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

### NormalNotification

[[Method('Notification', 'NormalNotification', false, 'notificationID title message startValue removeOnClick')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |notification ID|`number`|
    |title|`text`|
    |message|`text`|
    |start Value|`text`|
    |remove On Click|`boolean`|


_Send a normal notification_

### SimpleNotification

[[Method('Notification', 'SimpleNotification', false, 'title message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|


_Send a simple notification_

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