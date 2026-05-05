# Push Notifications

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">7</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

A non-visible component that remotely sends notifications to the device.  
Powered by OneSignal.

## Events

### Got Available Tags

:warning: ==**Deprecated**==

Event to detect available one signal tags.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Got%20Available%20Tags%22,%20%22param%22:%20%5B%22tags%20As%20String%22,%20%22tags%20As%20List%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tags As String|<span class="chip chip-text">Text</span>|
|tags As List|<span class="chip chip-list">List</span>|

### Got Value

:warning: ==**Deprecated**==

Event to receive value for a tag.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Got%20Value%22,%20%22param%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|

### Notification Opened

:warning: ==**Deprecated**==

User opened a notification.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Notification%20Opened%22,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Notification Received

:warning: ==**Deprecated**==

User received a notification.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Notification%20Received%22,%20%22param%22:%20%5B%22id%22,%20%22title%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Send Message Done

:warning: ==**Deprecated**==

Returns true if your message was send with success out of your app to all users.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Send%20Message%20Done%22,%20%22param%22:%20%5B%22success%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|

## Methods

### Clear All Notifications

:warning: ==**Deprecated**==

Clear All Notifications.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Clear%20All%20Notifications%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Delete Tag

:warning: ==**Deprecated**==

Deletes a single tag that was previously set on a user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Delete%20Tag%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|

### Get Available Tags

:warning: ==**Deprecated**==

Get a list of available tags.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Available%20Tags%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Value

:warning: ==**Deprecated**==

Get value for tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22value%20If%20Tag%20Not%20There%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-text">Text</span>|

### Send Message

:warning: ==**Deprecated**==

Send a message to all users. The message and your REST Api Key can not be empty! You will find your REST Api Key in your OneSignal account settings.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Send%20Message%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22message%22,%20%22rest%20API%20Key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|
|rest API Key|<span class="chip chip-text">Text</span>|

### Send Tag

:warning: ==**Deprecated**==

Tag a user based on an app event of your choosing so later you can create segments in to target these users.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Send%20Tag%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22key%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|

## Properties

### Enable Log

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

If you want to enable the log then set it to true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Enable%20Log%22,%20%22getter%22:%20false%7D"></div>

### Enable Sound

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Enable Sound.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Enable%20Sound%22,%20%22getter%22:%20false%7D"></div>

### Enable Vibration

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Enable Vibration.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Enable%20Vibration%22,%20%22getter%22:%20false%7D"></div>

### Get Email Subscription Email Address

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the email subscription email address.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Email%20Subscription%20Email%20Address%22,%20%22getter%22:%20true%7D"></div>

### Get Email Subscription User Id

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the email subscription user id.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Email%20Subscription%20User%20Id%22,%20%22getter%22:%20true%7D"></div>

### Get Permission Status

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get Permission Status

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Permission%20Status%22,%20%22getter%22:%20true%7D"></div>

### Get Subscription Status

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the subscription Status

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20Subscription%20Status%22,%20%22getter%22:%20true%7D"></div>

### Get User Id

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Get the User ID. If there is no user id it will return '-1'.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Get%20User%20Id%22,%20%22getter%22:%20true%7D"></div>

### Set Subscription

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

If you want to subscribe then set it to true.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Push%20Notifications%22,%20%22name%22:%20%22Set%20Subscription%22,%20%22getter%22:%20false%7D"></div>
