# Instant Access

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

A non-visible component that allows user to connect with the service from 'Instant Access.io'

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### On Request Sent

A event to detect that the login request was sent.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Instant%20Access%22,%20%22name%22:%20%22On%20Request%20Sent%22,%20%22param%22:%20%5B%22success%22,%20%22data%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|data|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### On Status Received

A event to detect that the status was received.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Instant%20Access%22,%20%22name%22:%20%22On%20Status%20Received%22,%20%22param%22:%20%5B%22success%22,%20%22data%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|data|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

## Methods

### Check Status

Check the current status with a given username.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Instant%20Access%22,%20%22name%22:%20%22Check%20Status%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22user%22%5D%7D"></div>

| Param | Type |
|--------|------|
|user|<span class="chip chip-text">Text</span>|

### Client ID

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the client id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Instant%20Access%22,%20%22name%22:%20%22Client%20ID%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Client Secret

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the client secret.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Instant%20Access%22,%20%22name%22:%20%22Client%20Secret%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Request

Start a request to user with the instant access login service.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Instant%20Access%22,%20%22name%22:%20%22Request%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22user%22%5D%7D"></div>

| Param | Type |
|--------|------|
|user|<span class="chip chip-text">Text</span>|

## Properties

### Client ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for ClientID

### Client Secret

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for ClientSecret
