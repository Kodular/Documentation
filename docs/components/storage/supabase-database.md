# Supabase Database

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that provides database operations via Supabase PostgREST API. Supports query building with filters, ordering, and pagination, CRUD operations, and RPC function calls.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Error Occurred

Fired when any operation fails

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22operation%22,%20%22status%20Code%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|operation|<span class="chip chip-text">Text</span>|
|status Code|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### Got Function Result

Fired after a successful RPC function call

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Got%20Function%20Result%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Param | Type |
|--------|------|
|result|<span class="chip chip-any">Any</span>|

### Got Rows

Fired after a Select or RawQuery with the resulting rows

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Got%20Rows%22,%20%22param%22:%20%5B%22rows%22,%20%22operation%22%5D%7D"></div>

| Param | Type |
|--------|------|
|rows|<span class="chip chip-list">List</span>|
|operation|<span class="chip chip-text">Text</span>|

### Row Inserted

Fired after a successful Insert with the returned row

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Row%20Inserted%22,%20%22param%22:%20%5B%22row%22%5D%7D"></div>

| Param | Type |
|--------|------|
|row|<span class="chip chip-unknown">Dictionary</span>|

### Rows Deleted

Fired after a successful Delete with deleted rows

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Rows%20Deleted%22,%20%22param%22:%20%5B%22rows%22,%20%22count%22%5D%7D"></div>

| Param | Type |
|--------|------|
|rows|<span class="chip chip-list">List</span>|
|count|<span class="chip chip-number">Number</span>|

### Rows Inserted

Fired after a successful BulkInsert with the returned rows

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Rows%20Inserted%22,%20%22param%22:%20%5B%22rows%22%5D%7D"></div>

| Param | Type |
|--------|------|
|rows|<span class="chip chip-list">List</span>|

### Rows Updated

Fired after a successful Update with affected rows

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Rows%20Updated%22,%20%22param%22:%20%5B%22rows%22,%20%22count%22%5D%7D"></div>

| Param | Type |
|--------|------|
|rows|<span class="chip chip-list">List</span>|
|count|<span class="chip chip-number">Number</span>|

## Methods

### Add Filter

Add a PostgREST filter. Operators: eq, neq, gt, gte, lt, lte, like, ilike, is, in, cs, cd, ov, fts, plfts, phfts, wfts. Operators are passed through to the server without validation.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Add%20Filter%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22column%22,%20%22operator%22,%20%22value%22%5D%7D"></div>

| Param | Type |
|--------|------|
|column|<span class="chip chip-text">Text</span>|
|operator|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-text">Text</span>|

### Bulk Insert

Insert multiple rows into the table

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Bulk%20Insert%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|data|<span class="chip chip-list">List</span>|

### Call Function

Call a Supabase database function (RPC)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Call%20Function%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22function%20Name%22,%20%22params%22%5D%7D"></div>

| Param | Type |
|--------|------|
|function Name|<span class="chip chip-text">Text</span>|
|params|<span class="chip chip-unknown">Dictionary</span>|

### Clear Query

Clear all query builder state

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Clear%20Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Delete

Delete rows matching the current filters. Requires at least one filter to prevent accidental full-table deletes.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Delete%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Insert

Insert a new row into the table

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Insert%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|data|<span class="chip chip-unknown">Dictionary</span>|

### Raw Query

Execute a raw query with custom PostgREST query parameters

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Raw%20Query%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22table%22,%20%22query%20String%22%5D%7D"></div>

| Param | Type |
|--------|------|
|table|<span class="chip chip-text">Text</span>|
|query String|<span class="chip chip-text">Text</span>|

### Select

Select rows from the table using current builder state

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Select%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Columns

Set which columns to return (comma-separated)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Set%20Columns%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22columns%22%5D%7D"></div>

| Param | Type |
|--------|------|
|columns|<span class="chip chip-text">Text</span>|

### Set Limit

Set the maximum number of rows to return

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Set%20Limit%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22limit%22%5D%7D"></div>

| Param | Type |
|--------|------|
|limit|<span class="chip chip-number">Number</span>|

### Set Offset

Set the number of rows to skip (for pagination)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Set%20Offset%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22offset%22%5D%7D"></div>

| Param | Type |
|--------|------|
|offset|<span class="chip chip-number">Number</span>|

### Set Order

Set the ordering for results

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Set%20Order%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22column%22,%20%22ascending%22%5D%7D"></div>

| Param | Type |
|--------|------|
|column|<span class="chip chip-text">Text</span>|
|ascending|<span class="chip chip-boolean">Boolean</span>|

### Set Table

Set the target table for the next operation

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Set%20Table%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22table%22%5D%7D"></div>

| Param | Type |
|--------|------|
|table|<span class="chip chip-text">Text</span>|

### Update

Update rows matching the current filters. Requires at least one filter to prevent accidental full-table updates.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Update%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22data%22%5D%7D"></div>

| Param | Type |
|--------|------|
|data|<span class="chip chip-unknown">Dictionary</span>|

## Properties

### Access Token

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

JWT auth token from SupabaseAuthentication (optional, enables RLS). Set at runtime from SupabaseAuthentication.AccessToken after sign-in.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Access%20Token%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Access%20Token%22,%20%22getter%22:%20false%7D"></div>

### Default Schema

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>public</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The default database schema

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Default%20Schema%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Default%20Schema%22,%20%22getter%22:%20false%7D"></div>

### Project URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Supabase project URL (e.g. https://xxx.supabase.co)

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Project%20URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Project%20URL%22,%20%22getter%22:%20false%7D"></div>

### Publishable API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The Supabase publishable API key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Publishable%20API%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Supabase%20Database%22,%20%22name%22:%20%22Publishable%20API%20Key%22,%20%22getter%22:%20false%7D"></div>
