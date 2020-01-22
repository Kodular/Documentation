# In App Billing

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > General|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that lets the user purchase items, powered by Google''s In-App Purchases service._

## Events

### After Purchase

[[Event('In App Billing', 'After Purchase', 'productId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |product Id|`text`|


_After purchase event._

### Error Occurred

[[Event('In App Billing', 'Error Occurred', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Error occurred event._

### Got Owned Purchases

[[Event('In App Billing', 'Got Owned Purchases', 'ownedProducts ownedSubscriptions')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |owned Products|`list`|
    |owned Subscriptions|`list`|


_Got Owned Purchases_

### Got Product Details

[[Event('In App Billing', 'Got Product Details', 'success productId title description currency price')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|
    |product Id|`text`|
    |title|`text`|
    |description|`text`|
    |currency|`text`|
    |price|`text`|


_Got Product Details_

### Got Subscription Details

[[Event('In App Billing', 'Got Subscription Details', 'success isSubscription subscriptionId title description currency price')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|
    |is Subscription|`boolean`|
    |subscription Id|`text`|
    |title|`text`|
    |description|`text`|
    |currency|`text`|
    |price|`text`|


_Got Subscription Details_

## Methods

### Consume

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Consume', false, 'productId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |product Id|`text`|


_Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!_

### Initialize

:warning: ==**Deprecated**==

[[Method('In App Billing', 'Initialize', false, 'licenseKey merchantId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |license Key|`text`|
    |merchant Id|`text`|


_Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!_

### IsPurchased

[[Method('In App Billing', 'IsPurchased', true, 'productId')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |product Id|`text`|


_Returns true if the product with the specific id is purchased._

### IsSubscribed

[[Method('In App Billing', 'IsSubscribed', true, 'subscriptionId')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |subscription Id|`text`|


_Returns true if the product is subscribed._

### LoadOwnedPurchases

[[Method('In App Billing', 'LoadOwnedPurchases', false)]]

_Load Owned Purchases from Google._

### ProductDetails

[[Method('In App Billing', 'ProductDetails', false, 'productId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |product Id|`text`|


_Get product details from the specific product id._

### Purchase

[[Method('In App Billing', 'Purchase', false, 'productId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |product Id|`text`|


_Purchase a product with the given product id._

### Subscribe

[[Method('In App Billing', 'Subscribe', false, 'subscriptionId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |subscription Id|`text`|


_Subscribe a product with the given product id._

### SubscriptionDetails

[[Method('In App Billing', 'SubscriptionDetails', false, 'subscriptionId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |subscription Id|`text`|


_Get subscription details from the given id._

### UpdateSubscription

:warning: ==**Deprecated**==

[[Method('In App Billing', 'UpdateSubscription', false, 'subscriptionId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |subscription Id|`text`|


_Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!_

## Properties

### Suppress Toast

:warning: ==**Deprecated**== <small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('In App Billing', 'Suppress Toast')]]

| Type | Default |
|:----:|:-------:|
|boolean|true|

_Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!_

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('In App Billing', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

_Whether it is testing mode enabled or not._

### Is IAB Service Available

:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Is IAB Service Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Check Play Market services availability._

### Is One Time Purchase Available

:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Is One Time Purchase Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Is one time purchase supported._

### Is Subscription Update Supported

:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Is Subscription Update Supported')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Is subscription update supported._

### Ready To Purchase

:eyes: Read-Only property
[[PropertyBlockGetter('In App Billing', 'Ready To Purchase')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether In-app billing service is ready to purchase._