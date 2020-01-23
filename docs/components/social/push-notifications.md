# Push Notifications

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|6|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that remotely sends notifications to the device.  
Powered by OneSignal.

## Events

### Got Available Tags

[[Event('Push Notifications', 'Got Available Tags', 'tagsAsString', 'tagsAsList')]]

| Params | []() |
|--------|------|
|tags As String|Text|
|tags As List|List|


Event to detect available one signal tags.

### Got Value

[[Event('Push Notifications', 'Got Value', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|Text|
|value|Text|


Event to receive value for a tag.

### Notification Opened

[[Event('Push Notifications', 'Notification Opened', 'id', 'title', 'message')]]

| Params | []() |
|--------|------|
|id|Text|
|title|Text|
|message|Text|


User opened a notification.

### Notification Received

[[Event('Push Notifications', 'Notification Received', 'id', 'title', 'message')]]

| Params | []() |
|--------|------|
|id|Text|
|title|Text|
|message|Text|


User received a notification.

### Send Message Done

[[Event('Push Notifications', 'Send Message Done', 'success')]]

| Params | []() |
|--------|------|
|success|Boolean|


Returns true if your message was send with success out of your app to all users.

## Methods

### Clear All Notifications

[[Method('Push Notifications', 'Clear All Notifications', False)]]

Clear All Notifications.

### Delete Tag

[[Method('Push Notifications', 'Delete Tag', False, 'key')]]

| Params | []() |
|--------|------|
|key|Text|


Deletes a single tag that was previously set on a user.

### Get Available Tags

[[Method('Push Notifications', 'Get Available Tags', False)]]

Get a list of available tags.

### Get Value

[[Method('Push Notifications', 'Get Value', False, 'tag', 'valueIfTagNotThere')]]

| Params | []() |
|--------|------|
|tag|Text|
|value If Tag Not There|Text|


Get value for tag.

### Send Message

[[Method('Push Notifications', 'Send Message', False, 'title', 'message', 'restApiKey')]]

| Params | []() |
|--------|------|
|title|Text|
|message|Text|
|rest API Key|Text|


Send a message to all users. The message and your REST Api Key can not be empty! You will find your REST Api Key in your OneSignal account settings.

### Send Tag

[[Method('Push Notifications', 'Send Tag', False, 'key', 'value')]]

| Params | []() |
|--------|------|
|key|Text|
|value|Text|


Tag a user based on an app event of your choosing so later you can create segments in to target these users.

## Properties

### OneSignal App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set here your One Signal App ID

[[PropertyBlockGetterAndSetter('Push Notifications', 'OneSignal App ID')]]

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