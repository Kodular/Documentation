# OneSignal Management

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

The core OneSignal component for managing user identity, data, and privacy. Use it in addition to other OneSignal components to handle logins, set tags, manage subscriptions, and track outcomes.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Error Occurred

Called when an error occurs.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

## Methods

### Add Alias

Adds a new alias. Aliases are alternative identifiers (like usernames or CRM IDs). Set "externalId" with "Login" before adding aliases. Aliases added to subscriptions without external_id willnot sync across multiple subscriptions.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20Alias%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22label%22,%20%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|label|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-text">Text</span>|

### Add Email

Adds an email Subscription (email address) to the current user. Call AddEmail after Login to set the correct user context.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20Email%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|

### Add Outcome

Adds an outcome with the provided name, captured against the current session. An outcome track actions taken by users and attribute them to messages.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20Outcome%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22outcome%22%5D%7D"></div>

| Params | []() |
|--------|------|
|outcome|<span class="chip chip-text">Text</span>|

### Add Outcome With Value

Adds an outcome with the provided name and value (number) captured against the current session.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20Outcome%20With%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22outcome%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|outcome|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-number">Number</span>|

### Add SMS

Adds an SMS Subscription (phone number) to the current user. Requires E.164 format. Call AddSms after Login to set the correct user context.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20SMS%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22phone%22%5D%7D"></div>

| Params | []() |
|--------|------|
|phone|<span class="chip chip-text">Text</span>|

### Add Tag

Adds a tag on the current user. Tags are custom key-value pairs of string data you set on users based on events or user properties.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20Tag%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22key%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|

### Add Unique Outcome

Adds a unique outcome with the provided name, captured against the current session.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Add%20Unique%20Outcome%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22outcome%22%5D%7D"></div>

| Params | []() |
|--------|------|
|outcome|<span class="chip chip-text">Text</span>|

### Get External ID

<span class="chip chip-text">Returns: <i>Text</i></span>

Retrieve the current External ID. May be null if not set or called before user state is initialized.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Get%20External%20ID%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get One Signal ID

<span class="chip chip-text">Returns: <i>Text</i></span>

Retrieve the current OneSignal ID. May be null if called before user state is initialized.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Get%20One%20Signal%20ID%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Tags

<span class="chip chip-unknown">Returns: <i>Dictionary</i></span>

Returns all tags on the current user as a dictionary of their key-value pairs.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Get%20Tags%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Consent Given

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns whether user consent for data collection is granted. Without consent, no data is sent to OneSignal and no subscription is created.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Is%20Consent%20Given%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Login

Sets the user context to the provided "externalId". Ensures that all subscriptions and properties associated with this "externalId" are unified under a single OneSignal ID. If the "externalId" already exists, the SDK switches to that user. Anonymous data collected before login is not merged and will be discarded. If the "externalId" does not exist, the local state will be saved under the current OneSignal ID. Any data collected while the user was anonymous will be kept. SDK retries automatically on network failure or server error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Login%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22external%20ID%22%5D%7D"></div>

| Params | []() |
|--------|------|
|external ID|<span class="chip chip-text">Text</span>|

### Logout

Unlinks the current user from the subscription. Removes the "externalId" from the current push subscription. Resets the OneSignal ID to a new anonymous user. Any new data (e.g tags, Subscriptions, session data, etc.) will now be set on the new anonymous user until they are identified with the login method.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Logout%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove Alias

Removes an alias.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Remove%20Alias%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22label%22%5D%7D"></div>

| Params | []() |
|--------|------|
|label|<span class="chip chip-text">Text</span>|

### Remove Email

Removes an email Subscription from the current user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Remove%20Email%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22email%22%5D%7D"></div>

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|

### Remove SMS

Removes an SMS Subscription from the current user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Remove%20SMS%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22phone%22%5D%7D"></div>

| Params | []() |
|--------|------|
|phone|<span class="chip chip-text">Text</span>|

### Remove Tag

Removes a tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Remove%20Tag%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|

### Set Consent Given

Grants or revokes user consent for data collection. Without consent, no data is sent to OneSignal and no subscription is created.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Set%20Consent%20Given%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22given%22%5D%7D"></div>

| Params | []() |
|--------|------|
|given|<span class="chip chip-boolean">Boolean</span>|

## Properties

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Overrides the auto-detected language of the user. Use ISO 639-1 language code.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22OneSignal%20Management%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20false%7D"></div>
