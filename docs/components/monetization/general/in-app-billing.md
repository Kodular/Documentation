# In App Billing

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > General|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets the user purchase items, powered by Google''s In-App Purchases service.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [com.android.vending.BILLING](https://developer.android.com/reference/android/Manifest.permission.html#com.android.vending.BILLING)


## Events

### After Purchase

After purchase event.

[[Event('In App Billing', 'After Purchase', 'productId')]]

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|


### Error Occurred

Error occurred event.

[[Event('In App Billing', 'Error Occurred', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Got Owned Purchases

Got Owned Purchases

[[Event('In App Billing', 'Got Owned Purchases', 'ownedProducts', 'ownedSubscriptions')]]

| Params | []() |
|--------|------|
|owned Products|<span class="chip chip-list">List</span>|
|owned Subscriptions|<span class="chip chip-list">List</span>|


### Got Product Details

Got Product Details

[[Event('In App Billing', 'Got Product Details', 'success', 'productId', 'title', 'description', 'currency', 'price')]]

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

[[Event('In App Billing', 'Got Subscription Details', 'success', 'isSubscription', 'subscriptionId', 'title', 'description', 'currency', 'price')]]

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

[[Method('In App Billing', 'Consume', False, 'productId')]]

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|


### Initialize

:warning: ==**Deprecated**==

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

[[Method('In App Billing', 'Initialize', False, 'licenseKey', 'merchantId')]]

| Params | []() |
|--------|------|
|license Key|<span class="chip chip-text">Text</span>|
|merchant Id|<span class="chip chip-text">Text</span>|


### Is Purchased

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the product with the specific id is purchased.

[[Method('In App Billing', 'Is Purchased', True, 'productId')]]

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|


### Is Subscribed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the product is subscribed.

[[Method('In App Billing', 'Is Subscribed', True, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|


### Load Owned Purchases

Load Owned Purchases from Google.

[[Method('In App Billing', 'Load Owned Purchases', False)]]

### Product Details

Get product details from the specific product id.

[[Method('In App Billing', 'Product Details', False, 'productId')]]

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|


### Purchase

Purchase a product with the given product id.

[[Method('In App Billing', 'Purchase', False, 'productId')]]

| Params | []() |
|--------|------|
|product Id|<span class="chip chip-text">Text</span>|


### Subscribe

Subscribe a product with the given product id.

[[Method('In App Billing', 'Subscribe', False, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|


### Subscription Details

Get subscription details from the given id.

[[Method('In App Billing', 'Subscription Details', False, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|


### Update Subscription

:warning: ==**Deprecated**==

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

[[Method('In App Billing', 'Update Subscription', False, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|<span class="chip chip-text">Text</span>|


## Properties

### Suppress Toast

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>true</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

[[PropertyBlockGetterAndSetter('In App Billing', 'Suppress Toast')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether it is testing mode enabled or not.

[[PropertyBlockGetterAndSetter('In App Billing', 'Test Mode')]]

### Is IAB Service Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Check Play Market services availability.

[[PropertyBlockGetter('In App Billing', 'Is IAB Service Available')]]

### Is One Time Purchase Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Is one time purchase supported.

[[PropertyBlockGetter('In App Billing', 'Is One Time Purchase Available')]]

### Is Subscription Update Supported

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Is subscription update supported.

[[PropertyBlockGetter('In App Billing', 'Is Subscription Update Supported')]]

### Ready To Purchase

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether In-app billing service is ready to purchase.

[[PropertyBlockGetter('In App Billing', 'Ready To Purchase')]]