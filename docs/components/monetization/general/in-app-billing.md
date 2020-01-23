# In App Billing

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > General|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets the user purchase items, powered by Google''s In-App Purchases service.

## Events

### After Purchase

[[Event('In App Billing', 'After Purchase', 'productId')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |product Id|`text`|


After purchase event.

### Error Occurred

[[Event('In App Billing', 'Error Occurred', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


Error occurred event.

### Got Owned Purchases

[[Event('In App Billing', 'Got Owned Purchases', 'ownedProducts', 'ownedSubscriptions')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |owned Products|`list`|
    |owned Subscriptions|`list`|


Got Owned Purchases

### Got Product Details

[[Event('In App Billing', 'Got Product Details', 'success', 'productId', 'title', 'description', 'currency', 'price')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|
    |product Id|`text`|
    |title|`text`|
    |description|`text`|
    |currency|`text`|
    |price|`text`|


Got Product Details

### Got Subscription Details

[[Event('In App Billing', 'Got Subscription Details', 'success', 'isSubscription', 'subscriptionId', 'title', 'description', 'currency', 'price')]]

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


Got Subscription Details

## Methods

### Consume

:warning: ==**Deprecated**==

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |product Id|`text`|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Initialize

:warning: ==**Deprecated**==

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |license Key|`text`|
    |merchant Id|`text`|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

### Is Purchased

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |product Id|`text`|


Returns true if the product with the specific id is purchased.

### Is Subscribed

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |subscription Id|`text`|


Returns true if the product is subscribed.

### Load Owned Purchases

_Block preview not available_

Load Owned Purchases from Google.

### Product Details

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |product Id|`text`|


Get product details from the specific product id.

### Purchase

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |product Id|`text`|


Purchase a product with the given product id.

### Subscribe

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |subscription Id|`text`|


Subscribe a product with the given product id.

### Subscription Details

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |subscription Id|`text`|


Get subscription details from the given id.

### Update Subscription

:warning: ==**Deprecated**==

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |subscription Id|`text`|


Do not use this block anymore. This block is deprecated and does nothing and will be removed in the future!

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

<small>Available as ^^Common^^ Property</small>

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