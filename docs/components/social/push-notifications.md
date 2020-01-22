# Push Notifications

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that remotely sends notifications to the device.<br>Powered by OneSignal._

## Properties

### OneSignal App ID

<small>Available as Common Property</small>

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