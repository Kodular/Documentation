# In App Billing

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > General**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that lets the user purchase items, powered by Google''s In-App Purchases service.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [com.android.vending.BILLING](https://developer.android.com/reference/android/Manifest.permission.html#com.android.vending.BILLING)

## Events

### After Purchase

After purchase event.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22After%20Purchase%22,%20%22param%22:%20%5B%22product%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|

### Error Occurred

Error occurred event.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Got Owned Purchases

Got Owned Purchases

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Got%20Owned%20Purchases%22,%20%22param%22:%20%5B%22owned%20Products%22,%20%22owned%20Subscriptions%22%5D%7D"></div>

| Params | []() |
|--------|------|
|owned Products|<span class="chip chip-list">List</span>|
|owned Subscriptions|<span class="chip chip-list">List</span>|

### Got Product Details

Got Product Details

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Got%20Product%20Details%22,%20%22param%22:%20%5B%22success%22,%20%22product%20Id%22,%20%22title%22,%20%22description%22,%20%22currency%22,%20%22price%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|product Id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|description|<span class="chip chip-text">Text</span>|
|currency|<span class="chip chip-text">Text</span>|
|price|<span class="chip chip-text">Text</span>|

### Got Subscription Details

Got Subscription Details

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Got%20Subscription%20Details%22,%20%22param%22:%20%5B%22success%22,%20%22is%20Subscription%22,%20%22subscription%20Id%22,%20%22title%22,%20%22description%22,%20%22currency%22,%20%22price%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|is Subscription|<span class="chip chip-boolean">Boolean</span>|
|subscription Id|<span class="chip chip-text">Text</span>|
|title|<span class="chip chip-text">Text</span>|
|description|<span class="chip chip-text">Text</span>|
|currency|<span class="chip chip-text">Text</span>|
|price|<span class="chip chip-text">Text</span>|

## Methods

### Consume

:warning: ==**Deprecated**==

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Consume%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22product%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|

### Initialize

:warning: ==**Deprecated**==

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Initialize%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22license%20Key%22,%20%22merchant%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|license Key|<span class="chip chip-text">Text</span>|
|merchant Id|<span class="chip chip-text">Text</span>|

### Is Purchased

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the product with the specific id is purchased.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Is%20Purchased%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22product%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|

### Is Subscribed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the product is subscribed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Is%20Subscribed%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22subscription%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|

### Load Owned Purchases

Load Owned Purchases from Google.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Load%20Owned%20Purchases%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Product Details

Get product details from the specific product id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Product%20Details%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22product%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|

### Purchase

Purchase a product with the given product id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Purchase%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22product%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|

### Subscribe

Subscribe a product with the given product id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Subscribe%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22subscription%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|

### Subscription Details

Get subscription details from the given id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Subscription%20Details%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22subscription%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|

### Update Subscription

:warning: ==**Deprecated**==

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Update%20Subscription%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22subscription%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|

## Properties

### Is IAB Service Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Check Play Market services availability.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Is%20IAB%20Service%20Available%22,%20%22getter%22:%20true%7D"></div>

### Is One Time Purchase Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Is one time purchase supported.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Is%20One%20Time%20Purchase%20Available%22,%20%22getter%22:%20true%7D"></div>

### Is Subscription Update Supported

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Is subscription update supported.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Is%20Subscription%20Update%20Supported%22,%20%22getter%22:%20true%7D"></div>

### Ready To Purchase

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Whether In-app billing service is ready to purchase.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Ready%20To%20Purchase%22,%20%22getter%22:%20true%7D"></div>

### Suppress Toast

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>true</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Whether it is testing mode enabled or not.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22In%20App%20Billing%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>
