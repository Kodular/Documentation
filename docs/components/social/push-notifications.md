# Push Notifications

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that remotely sends notifications to the device.  
Powered by OneSignal.

## Events

### Got Available Tags

[[Event('Push Notifications', 'Got Available Tags', 'tagsAsString', 'tagsAsList')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tags As String|`text`|
    |tags As List|`list`|


Event to detect available one signal tags.

### Got Value

[[Event('Push Notifications', 'Got Value', 'tag', 'value')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tag|`text`|
    |value|`text`|


Event to receive value for a tag.

### Notification Opened

[[Event('Push Notifications', 'Notification Opened', 'id', 'title', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`text`|
    |title|`text`|
    |message|`text`|


User opened a notification.

### Notification Received

[[Event('Push Notifications', 'Notification Received', 'id', 'title', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`text`|
    |title|`text`|
    |message|`text`|


User received a notification.

### Send Message Done

[[Event('Push Notifications', 'Send Message Done', 'success')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|


Returns true if your message was send with success out of your app to all users.

## Methods

### ClearAllNotifications

_Block preview not available_

Clear All Notifications.

### DeleteTag

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |key|`text`|


Deletes a single tag that was previously set on a user.

### GetAvailableTags

_Block preview not available_

Get a list of available tags.

### GetValue

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tag|`text`|
    |value If Tag Not There|`text`|


Get value for tag.

### SendMessage

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|
    |rest API Key|`text`|


Send a message to all users. The message and your REST Api Key can not be empty! You will find your REST Api Key in your OneSignal account settings.

### SendTag

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |key|`text`|
    |value|`text`|


Tag a user based on an app event of your choosing so later you can create segments in to target these users.

## Properties

### OneSignal App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'OneSignal App ID')]]

| Type |
|:----:|
|text|

Set here your One Signal App ID

### Enable Log

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Log')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

If you want to enable the log then set it to true.

### Enable Sound

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Sound')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Enable Sound.

### Enable Vibration

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Vibration')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Enable Vibration.

### Get Email Subscription Email Address

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Email Subscription Email Address')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Get the email subscription email address.

### Get Email Subscription User Id

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Email Subscription User Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Get the email subscription user id.

### Get Permission Status

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Permission Status')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Get Permission Status

### Get Subscription Status

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Subscription Status')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Get the subscription Status

### Get User Id

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get User Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Get the User ID. If there is no user id it will return '-1'.

### Set Subscription

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Set Subscription')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

If you want to subscribe then set it to true.