# Firebase Authentication

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets users sign in using authentication services provided by Firebase.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)


## Events

### Current User Failed

Triggers when the current Firebase User failed to load

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Current%20User%20Failed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Current User Success

Triggers when the current Firebase User was successful loaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Current%20User%20Success%22,%20%22params%22:%20%5B%22user%20ID%22,%20%22name%22,%20%22email%22,%20%22phone%20Number%22,%20%22profile%20Picture%22%5D%7D"></div>


| Params | []() |
|--------|------|
|user ID|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|phone Number|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### Got Id Token

Triggers when the 'Get Id Token' got a result. If there was a error it returns a empty text.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Got%20Id%20Token%22,%20%22params%22:%20%5B%22id%20Token%22%5D%7D"></div>


| Params | []() |
|--------|------|
|id Token|<span class="chip chip-text">Text</span>|


### Login Failed

Triggers when the Firebase Login failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Login%20Failed%22,%20%22params%22:%20%5B%22provider%22%5D%7D"></div>


| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|


### Login Success

Triggers when the Firebase Login was successful

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Login%20Success%22,%20%22params%22:%20%5B%22provider%22,%20%22user%20ID%22,%20%22name%22,%20%22email%22,%20%22phone%20Number%22,%20%22profile%20Picture%22%5D%7D"></div>


| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|user ID|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|phone Number|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### Reset Password Email Done

Triggers when the 'Send Reset Password Email' got a result. Returns true if the reset email was send.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Reset%20Password%20Email%20Done%22,%20%22params%22:%20%5B%22success%22%5D%7D"></div>


| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


### Sign Up Failed

Triggers when the Firebase Sign Up failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Sign%20Up%20Failed%22,%20%22params%22:%20%5B%22provider%22,%20%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Sign Up Success

Triggers when the Firebase Sign Up failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Sign%20Up%20Success%22,%20%22params%22:%20%5B%22provider%22,%20%22user%20ID%22,%20%22name%22,%20%22email%22,%20%22phone%20Number%22,%20%22profile%20Picture%22%5D%7D"></div>


| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|user ID|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|phone Number|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### User Update Failed

Triggers when updating of the user failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22User%20Update%20Failed%22,%20%22params%22:%20%5B%22type%22%5D%7D"></div>


| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|


### User Update Success

Triggers when updating of the user was successful

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22User%20Update%20Success%22,%20%22params%22:%20%5B%22type%22%5D%7D"></div>


| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|


## Methods

### Email Password Login

Try to let the user sign in with Email and Password

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Email%20Password%20Login%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22email%22,%20%22password%22%5D%7D"></div>


| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|


### Email Password Sign Up

Create a new user by Email and Password

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Email%20Password%20Sign%20Up%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22email%22,%20%22password%22%5D%7D"></div>


| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|


### Get Current User

Try to get the user that is signed in

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Get%20Current%20User%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get Id Token

Get the id token from the current user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Get%20Id%20Token%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Google Sign In

Try to let the user sign in with Google

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Google%20Sign%20In%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Is Signed In

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check if the user is signed in

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Is%20Signed%20In%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Logout

Log the current user out

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Logout%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Phone Number Sign In

Try to let the user sign in with a Phone Number

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Phone%20Number%20Sign%20In%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22phone%20Number%22%5D%7D"></div>


| Params | []() |
|--------|------|
|phone Number|<span class="chip chip-text">Text</span>|


### Send Reset Password Email

Get the id token from the current user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Send%20Reset%20Password%20Email%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22email%22%5D%7D"></div>


| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|


### Update Email

Try to update the email of the current user (The user must have been recently signed in)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Update%20Email%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22email%22%5D%7D"></div>


| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|


### Update Phone Number

Try to update the phone number of the current user (The user must have been recently signed in)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Update%20Phone%20Number%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22phone%20Number%22%5D%7D"></div>


| Params | []() |
|--------|------|
|phone Number|<span class="chip chip-text">Text</span>|


### Update Profile

Try to update the profile of the current user (The user must have been recently signed in)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Update%20Profile%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22name%22,%20%22profile%20Picture%22%5D%7D"></div>


| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### Verify Email

Verify the Email

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Verify%20Email%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Verify Phone Code

Verify the SMS code

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Authentication%22,%20%22name%22:%20%22Verify%20Phone%20Code%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22code%22%5D%7D"></div>


| Params | []() |
|--------|------|
|code|<span class="chip chip-text">Text</span>|
