# Notification

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that sends a notification to the user''s device.

## Methods

### AreNotificationsEnabled

_Block preview not available_

{>>Returns `boolean`<<}

Check whether the app can send Notifications

### CancelAll

_Block preview not available_

Cancel all Notifications

### CancelNotification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Cancel a Notification with an id

### NotificationBuilderAndroidCar

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |accent Color|`number`|


Set the accent color for Android Car devices

### NotificationBuilderAndroidWear

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |background Image|`text`|


Set the background image for Android Wear devices

### NotificationBuilderAutoCancel

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |auto Cancel|`boolean`|


Set whether the notification should me removed after the user clicks on it.

### NotificationBuilderBigPicture

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |big Picture|`text`|


Set the big picture for the notification

### NotificationBuilderID

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Set the notification id.

### NotificationBuilderPriority

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |priority|`number`|


Set the notification builder priority. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

### NotificationBuilderSend

_Block preview not available_

Send the notification that you build

### NotificationBuilderStart

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|


Start building a new notification

### NotificationBuilderStartValue

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |start Value|`text`|


Set the start value of the notification.

### NotificationBuilderVisibility

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |visibility|`number`|


Set the notification builder visibility. 1 = "public", 2 = "private", 3 = "secret".

### SendAdvancedNotification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|
    |title|`text`|
    |message|`text`|
    |start Value|`text`|
    |time On|`number`|
    |time Off|`number`|


Send a advanced notification (Android Wear Support)

### SendNotification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|


Send a notification

## Properties

### Priority

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Priority')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

### Visibility

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Visibility')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".