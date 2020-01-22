# Notification

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that sends a notification to the user''s device._

## Properties

### Priority

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Priority')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

### Visibility

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Visibility')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".

## Methods

### AreNotificationsEnabled



[[Method('Notification', 'AreNotificationsEnabled', true)]]

{>>Returns `boolean`<<}


Check whether the app can send Notifications

### CancelAll



[[Method('Notification', 'CancelAll', false)]]

Cancel all Notifications

### CancelNotification



[[Method('Notification', 'CancelNotification', false, 'id')]]

**Parameters**

| Name | Type |
|------|------|
|id|`number`|


Cancel a Notification with an id

### NotificationBuilderAndroidCar



[[Method('Notification', 'NotificationBuilderAndroidCar', false, 'accentColor')]]

**Parameters**

| Name | Type |
|------|------|
|accent Color|`number`|


Set the accent color for Android Car devices

### NotificationBuilderAndroidWear



[[Method('Notification', 'NotificationBuilderAndroidWear', false, 'backgroundImage')]]

**Parameters**

| Name | Type |
|------|------|
|background Image|`text`|


Set the background image for Android Wear devices

### NotificationBuilderAutoCancel



[[Method('Notification', 'NotificationBuilderAutoCancel', false, 'autoCancel')]]

**Parameters**

| Name | Type |
|------|------|
|auto Cancel|`boolean`|


Set whether the notification should me removed after the user clicks on it.

### NotificationBuilderBigPicture



[[Method('Notification', 'NotificationBuilderBigPicture', false, 'bigPicture')]]

**Parameters**

| Name | Type |
|------|------|
|big Picture|`text`|


Set the big picture for the notification

### NotificationBuilderID



[[Method('Notification', 'NotificationBuilderID', false, 'id')]]

**Parameters**

| Name | Type |
|------|------|
|id|`number`|


Set the notification id.

### NotificationBuilderPriority



[[Method('Notification', 'NotificationBuilderPriority', false, 'priority')]]

**Parameters**

| Name | Type |
|------|------|
|priority|`number`|


Set the notification builder priority. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

### NotificationBuilderSend



[[Method('Notification', 'NotificationBuilderSend', false)]]

Send the notification that you build

### NotificationBuilderStart



[[Method('Notification', 'NotificationBuilderStart', false, 'title message')]]

**Parameters**

| Name | Type |
|------|------|
|title|`text`|
|message|`text`|


Start building a new notification

### NotificationBuilderStartValue



[[Method('Notification', 'NotificationBuilderStartValue', false, 'startValue')]]

**Parameters**

| Name | Type |
|------|------|
|start Value|`text`|


Set the start value of the notification.

### NotificationBuilderVisibility



[[Method('Notification', 'NotificationBuilderVisibility', false, 'visiblity')]]

**Parameters**

| Name | Type |
|------|------|
|visibility|`number`|


Set the notification builder visibility. 1 = "public", 2 = "private", 3 = "secret".

### SendAdvancedNotification



[[Method('Notification', 'SendAdvancedNotification', false, 'id title message startValue timeOn timeOff')]]

**Parameters**

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



[[Method('Notification', 'SendNotification', false, 'title message')]]

**Parameters**

| Name | Type |
|------|------|
|title|`text`|
|message|`text`|


Send a notification