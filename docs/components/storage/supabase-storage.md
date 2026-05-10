# Supabase Storage

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that provides file storage operations via Supabase Storage. Supports file upload (with upsert), download, deletion, listing, public URLs, and signed URLs for time-limited access.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Error Occurred

Fired when any operation fails

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22operation%22,%20%22status%20Code%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|operation|<span class="chip chip-text">Text</span>|
|status Code|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### File Deleted

Fired when a file is deleted successfully

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22File%20Deleted%22,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### File Downloaded

Fired when a file download completes successfully

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22File%20Downloaded%22,%20%22param%22:%20%5B%22path%22,%20%22local%20Path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|
|local Path|<span class="chip chip-text">Text</span>|

### File Uploaded

Fired when a file upload completes successfully

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22File%20Uploaded%22,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### Got File List

Fired when a file listing is retrieved

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Got%20File%20List%22,%20%22param%22:%20%5B%22files%22%5D%7D"></div>

| Param | Type |
|--------|------|
|files|<span class="chip chip-list">List</span>|

### Got Signed URL

Fired when a signed URL is created

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Got%20Signed%20URL%22,%20%22param%22:%20%5B%22url%22,%20%22path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|path|<span class="chip chip-text">Text</span>|

## Methods

### Create Signed URL

Create a time-limited signed URL for a private file

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Create%20Signed%20URL%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22,%20%22expires%20In%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|
|expires In|<span class="chip chip-number">Number</span>|

### Delete File

Delete a file from Supabase Storage

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Delete%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### Download File

Download a file from Supabase Storage and save it locally

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Download%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22,%20%22save%20To%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|
|save To|<span class="chip chip-text">Text</span>|

### Get Public URL

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the public URL for a file. This is synchronous (no network call).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Get%20Public%20URL%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|

### List Files

List files in the bucket with an optional path prefix

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22List%20Files%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22prefix%22%5D%7D"></div>

| Param | Type |
|--------|------|
|prefix|<span class="chip chip-text">Text</span>|

### Upload File

Upload a file to Supabase Storage. Creates or overwrites the file. Accepts plain file paths, content:// URIs (e.g. ImagePicker selections), file://, asset paths.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Upload%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22path%22,%20%22file%20Path%22%5D%7D"></div>

| Param | Type |
|--------|------|
|path|<span class="chip chip-text">Text</span>|
|file Path|<span class="chip chip-text">Text</span>|

## Properties

### Access Token

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

JWT auth token from SupabaseAuthentication (optional). Set at runtime from SupabaseAuthentication.AccessToken after sign-in.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Access%20Token%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Access%20Token%22,%20%22getter%22:%20false%7D"></div>

### Bucket

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The bucket name to operate on

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Bucket%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Bucket%22,%20%22getter%22:%20false%7D"></div>

### Project URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Supabase project URL (e.g. https://xxx.supabase.co)

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Project%20URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Project%20URL%22,%20%22getter%22:%20false%7D"></div>

### Publishable API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Supabase publishable API key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Publishable%20API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Storage%22,%20%22name%22:%20%22Publishable%20API%20Key%22,%20%22getter%22:%20false%7D"></div>
