# Push Notifications

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that remotely sends notifications to the device.<br>Powered by OneSignal._

## Events

### Got Available Tags

[[Event('Push Notifications', 'Got Available Tags', 'tagsAsString tagsAsList')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tags As String|`text`|
    |tags As List|`list`|


_Event to detect available one signal tags._

### Got Value

[[Event('Push Notifications', 'Got Value', 'tag value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value|`text`|


_Event to receive value for a tag._

### Notification Opened

[[Event('Push Notifications', 'Notification Opened', 'id title message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`text`|
    |title|`text`|
    |message|`text`|


_User opened a notification._

### Notification Received

[[Event('Push Notifications', 'Notification Received', 'id title message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id|`text`|
    |title|`text`|
    |message|`text`|


_User received a notification._

### Send Message Done

[[Event('Push Notifications', 'Send Message Done', 'success')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|


_Returns true if your message was send with success out of your app to all users._

## Methods

### ClearAllNotifications

[[Method('Push Notifications', 'ClearAllNotifications', false)]]

_Clear All Notifications._

### DeleteTag

[[Method('Push Notifications', 'DeleteTag', false, 'key')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |key|`text`|


_Deletes a single tag that was previously set on a user._

### GetAvailableTags

[[Method('Push Notifications', 'GetAvailableTags', false)]]

_Get a list of available tags._

### GetValue

[[Method('Push Notifications', 'GetValue', false, 'tag valueIfTagNotThere')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value If Tag Not There|`text`|


_Get value for tag._

### SendMessage

[[Method('Push Notifications', 'SendMessage', false, 'title message restApiKey')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|
    |rest API Key|`text`|


_Send a message to all users. The message and your REST Api Key can not be empty! You will find your REST Api Key in your OneSignal account settings._

### SendTag

[[Method('Push Notifications', 'SendTag', false, 'key value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |key|`text`|
    |value|`text`|


_Tag a user based on an app event of your choosing so later you can create segments in to target these users._

## Properties

### OneSignal App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'OneSignal App ID')]]

| Type |
|:----:|
|text|

_Set here your One Signal App ID_

### Enable Log

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Log')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_If you want to enable the log then set it to true._

### Enable Sound

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Sound')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Enable Sound._

### Enable Vibration

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Enable Vibration')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Enable Vibration._

### Get Email Subscription Email Address

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Email Subscription Email Address')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Get the email subscription email address._

### Get Email Subscription User Id

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Email Subscription User Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Get the email subscription user id._

### Get Permission Status

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Permission Status')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Get Permission Status_

### Get Subscription Status

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get Subscription Status')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Get the subscription Status_

### Get User Id

:eyes: Read-Only property
[[PropertyBlockGetter('Push Notifications', 'Get User Id')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Get the User ID. If there is no user id it will return '-1'._

### Set Subscription

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Push Notifications', 'Set Subscription')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_If you want to subscribe then set it to true._