# Firebase Realtime Database

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

Non-visible component that communicates with Firebase Realtime Database to store and retrieve data in real-time. Requires google-services.json. Authenticate users via the KodularFirebaseAuthentication component.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Data Changed

Indicates that the data in the Firebase has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Data%20Changed%22,%20%22param%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|

### Firebase Error

Indicates that the communication with the Firebase signaled an error.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Firebase%20Error%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### First Removed

Event triggered by the "RemoveFirst" function. The argument "value" is the object that was the first in the list, and which is now removed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22First%20Removed%22,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-any">Any</span>|

### Got Value

Indicates that a GetValue request has succeeded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Got%20Value%22,%20%22param%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|

### Initialize

Fired when the component finishes initialization. Mirrors legacyFirebaseDB.Initialize.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Initialize%22,%20%22param%22:%20%5B%5D%7D"></div>

### Tag List

Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Tag%20List%22,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-list">List</span>|

## Methods

### Append Value

Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Append%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22value%20To%20Add%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Add|<span class="chip chip-any">Any</span>|

### Clear Tag

Remove the tag from Firebase

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Clear%20Tag%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|

### Get Tag List

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Get%20Tag%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Value

Method for GetValue

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22value%20If%20Tag%20Not%20There%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-any">Any</span>|

### Go Offline

Take the database offline

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Go%20Offline%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Go Online

Take the database online

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Go%20Online%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Remove First

Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Remove%20First%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|

### Store Value

Method for StoreValue

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Store%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22value%20To%20Store%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|

## Properties

### Persist

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If true, data will be cached locally and survive app restarts. Must be set in the designer before any FirebaseDatabase operation; changing this at runtime via blocks is not supported.

### Project Path

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Optional root path prefix for all operations. Empty means operate at the database root.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Project%20Path%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Realtime%20Database%22,%20%22name%22:%20%22Project%20Path%22,%20%22getter%22:%20false%7D"></div>
