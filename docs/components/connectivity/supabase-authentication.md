# Supabase Authentication

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that provides authentication services via Supabase. Supports email/password sign-up and sign-in, email OTP, session management, and password reset.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Error Occurred

Fired when any operation fails

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22operation%22,%20%22status%20Code%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|operation|<span class="chip chip-text">Text</span>|
|status Code|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### Got Current User

Fired when current user information is retrieved

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Got%20Current%20User%22,%20%22param%22:%20%5B%22user%20Id%22,%20%22email%22,%20%22metadata%22%5D%7D"></div>

| Params | []() |
|--------|------|
|user Id|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|metadata|<span class="chip chip-unknown">Dictionary</span>|

### OTP Sent

Fired when an OTP email has been sent

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22OTP%20Sent%22,%20%22param%22:%20%5B%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|

### Password Reset Sent

Fired when a password reset email has been sent

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Password%20Reset%20Sent%22,%20%22param%22:%20%5B%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|

### Session Refreshed

Fired when the session token has been refreshed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Session%20Refreshed%22,%20%22param%22:%20%5B%22access%20Token%22%5D%7D"></div>

| Params | []() |
|--------|------|
|access Token|<span class="chip chip-text">Text</span>|

### Sign In Completed

Fired when sign-in succeeds (password or OTP)

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Sign%20In%20Completed%22,%20%22param%22:%20%5B%22access%20Token%22,%20%22user%20Id%22,%20%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|access Token|<span class="chip chip-text">Text</span>|
|user Id|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|

### Sign Out Completed

Fired when sign-out completes (local state is always cleared)

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Sign%20Out%20Completed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Sign Up Completed

Fired when sign-up succeeds. accessToken is non-empty if email confirmation is disabled (auto-sign-in); empty if confirmation is required.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Sign%20Up%20Completed%22,%20%22param%22:%20%5B%22access%20Token%22,%20%22user%20Id%22,%20%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|access Token|<span class="chip chip-text">Text</span>|
|user Id|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|

## Methods

### Get Current User

Get the currently authenticated user's information

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Get%20Current%20User%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Refresh Session

Refresh the current session using the refresh token

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Refresh%20Session%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Reset Password

Send a password reset email

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Reset%20Password%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|

### Send OTP

Send a 6-digit OTP code to the specified email

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Send%20OTP%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|

### Sign In

Sign in with email and password

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Sign%20In%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22,%20%22password%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|

### Sign Out

Sign out the current user. Always clears local session state.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Sign%20Out%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Sign Up

Register a new user with email and password

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Sign%20Up%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22,%20%22password%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|

### Verify OTP

Verify an email OTP code and sign in

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Verify%20OTP%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22,%20%22otp%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|otp|<span class="chip chip-text">Text</span>|

## Properties

### Access Token

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The current JWT access token, or empty if not signed in

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Access%20Token%22,%20%22getter%22:%20true%7D"></div>

### Is Signed In

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Whether a user session is currently active

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Is%20Signed%20In%22,%20%22getter%22:%20true%7D"></div>

### Project URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Supabase project URL (e.g. https://xxx.supabase.co)

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Project%20URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Project%20URL%22,%20%22getter%22:%20false%7D"></div>

### Publishable API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Supabase publishable API key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Publishable%20API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Publishable%20API%20Key%22,%20%22getter%22:%20false%7D"></div>

### Refresh Token

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The refresh token for the current session

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22Refresh%20Token%22,%20%22getter%22:%20true%7D"></div>

### User Email

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The email of the authenticated user

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22User%20Email%22,%20%22getter%22:%20true%7D"></div>

### User ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The UUID of the authenticated user

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Authentication%22,%20%22name%22:%20%22User%20ID%22,%20%22getter%22:%20true%7D"></div>
