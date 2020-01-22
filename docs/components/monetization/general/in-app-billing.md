# In App Billing

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > General|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that lets the user purchase items, powered by Google''s In-App Purchases service._

## Properties

### Suppress Toast

:warning: ==**Deprecated**== <small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('In App Billing', 'Suppress Toast')]]

| Type | Default |
|:----:|:-------:|
|boolean|true|

Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Test Mode

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('In App Billing', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

Whether it is testing mode enabled or not.

### Is IAB Service Available



:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Is IAB Service Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Check Play Market services availability.

### Is One Time Purchase Available



:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Is One Time Purchase Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Is one time purchase supported.

### Is Subscription Update Supported



:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Is Subscription Update Supported')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Is subscription update supported.

### Ready To Purchase



:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Ready To Purchase')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether In-app billing service is ready to purchase.

## Methods

### Consume

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Consume', false, 'productId')]]

**Parameters**

| Name | Type |
|------|------|
|product Id|`text`|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Initialize

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Initialize', false, 'licenseKey merchantId')]]

**Parameters**

| Name | Type |
|------|------|
|license Key|`text`|
|merchant Id|`text`|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### IsPurchased



[[Method('In App Billing', 'IsPurchased', true, 'productId')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|product Id|`text`|


Returns true if the product with the specific id is purchased.

### IsSubscribed



[[Method('In App Billing', 'IsSubscribed', true, 'subscriptionId')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|subscription Id|`text`|


Returns true if the product is subscribed.

### LoadOwnedPurchases



[[Method('In App Billing', 'LoadOwnedPurchases', false)]]

Load Owned Purchases from Google.

### ProductDetails



[[Method('In App Billing', 'ProductDetails', false, 'productId')]]

**Parameters**

| Name | Type |
|------|------|
|product Id|`text`|


Get product details from the specific product id.

### Purchase



[[Method('In App Billing', 'Purchase', false, 'productId')]]

**Parameters**

| Name | Type |
|------|------|
|product Id|`text`|


Purchase a product with the given product id.

### Subscribe



[[Method('In App Billing', 'Subscribe', false, 'subscriptionId')]]

**Parameters**

| Name | Type |
|------|------|
|subscription Id|`text`|


Subscribe a product with the given product id.

### SubscriptionDetails



[[Method('In App Billing', 'SubscriptionDetails', false, 'subscriptionId')]]

**Parameters**

| Name | Type |
|------|------|
|subscription Id|`text`|


Get subscription details from the given id.

### UpdateSubscription

:warning: ==**Deprecated**==

[[Method('In App Billing', 'UpdateSubscription', false, 'subscriptionId')]]

**Parameters**

| Name | Type |
|------|------|
|subscription Id|`text`|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!