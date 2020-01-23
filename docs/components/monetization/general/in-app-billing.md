# In App Billing

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > General|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets the user purchase items, powered by Google''s In-App Purchases service.

## Events

### After Purchase

[[Event('In App Billing', 'After Purchase', 'productId')]]

| Params | []() |
|--------|------|
|product Id|Text|


After purchase event.

### Error Occurred

[[Event('In App Billing', 'Error Occurred', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Error occurred event.

### Got Owned Purchases

[[Event('In App Billing', 'Got Owned Purchases', 'ownedProducts', 'ownedSubscriptions')]]

| Params | []() |
|--------|------|
|owned Products|List|
|owned Subscriptions|List|


Got Owned Purchases

### Got Product Details

[[Event('In App Billing', 'Got Product Details', 'success', 'productId', 'title', 'description', 'currency', 'price')]]

| Params | []() |
|--------|------|
|success|Boolean|
|product Id|Text|
|title|Text|
|description|Text|
|currency|Text|
|price|Text|


Got Product Details

### Got Subscription Details

[[Event('In App Billing', 'Got Subscription Details', 'success', 'isSubscription', 'subscriptionId', 'title', 'description', 'currency', 'price')]]

| Params | []() |
|--------|------|
|success|Boolean|
|is Subscription|Boolean|
|subscription Id|Text|
|title|Text|
|description|Text|
|currency|Text|
|price|Text|


Got Subscription Details

## Methods

### Consume

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Consume', False, 'productId')]]

| Params | []() |
|--------|------|
|product Id|Text|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Initialize

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Initialize', False, 'licenseKey', 'merchantId')]]

| Params | []() |
|--------|------|
|license Key|Text|
|merchant Id|Text|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Is Purchased

[[Method('In App Billing', 'Is Purchased', True, 'productId')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|product Id|Text|


Returns true if the product with the specific id is purchased.

### Is Subscribed

[[Method('In App Billing', 'Is Subscribed', True, 'subscriptionId')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|subscription Id|Text|


Returns true if the product is subscribed.

### Load Owned Purchases

[[Method('In App Billing', 'Load Owned Purchases', False)]]

Load Owned Purchases from Google.

### Product Details

[[Method('In App Billing', 'Product Details', False, 'productId')]]

| Params | []() |
|--------|------|
|product Id|Text|


Get product details from the specific product id.

### Purchase

[[Method('In App Billing', 'Purchase', False, 'productId')]]

| Params | []() |
|--------|------|
|product Id|Text|


Purchase a product with the given product id.

### Subscribe

[[Method('In App Billing', 'Subscribe', False, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|Text|


Subscribe a product with the given product id.

### Subscription Details

[[Method('In App Billing', 'Subscription Details', False, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|Text|


Get subscription details from the given id.

### Update Subscription

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Update Subscription', False, 'subscriptionId')]]

| Params | []() |
|--------|------|
|subscription Id|Text|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

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