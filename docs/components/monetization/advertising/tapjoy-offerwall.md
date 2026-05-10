# Tapjoy Offerwall

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A component for displaying an offerwall from Tapjoy with virtual currency management.

??? example "Permissions"
    * [com.google.android.gms.permission.AD_ID](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.gms.permission.AD_ID)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Currency Awarded

Called when currency has been successfully awarded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Awarded%22,%20%22param%22:%20%5B%22amount%22,%20%22totalBalance%22%5D%7D"></div>

| Param | Type |
|--------|------|
|amount|<span class="chip chip-number">Number</span>|
|totalBalance|<span class="chip chip-number">Number</span>|

### Currency Balance Received

Called when the currency balance has been received.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Balance%20Received%22,%20%22param%22:%20%5B%22currencyName%22,%20%22balance%22%5D%7D"></div>

| Param | Type |
|--------|------|
|currencyName|<span class="chip chip-text">Text</span>|
|balance|<span class="chip chip-number">Number</span>|

### Currency Earned

Called when the user earns currency by completing an offer.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Earned%22,%20%22param%22:%20%5B%22currencyName%22,%20%22amount%22,%20%22totalBalance%22%5D%7D"></div>

| Param | Type |
|--------|------|
|currencyName|<span class="chip chip-text">Text</span>|
|amount|<span class="chip chip-number">Number</span>|
|totalBalance|<span class="chip chip-number">Number</span>|

### Currency Request Failed

Called when a currency request fails.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Request%20Failed%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

### Currency Spent

Called when currency has been successfully spent.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Spent%22,%20%22param%22:%20%5B%22amount%22,%20%22totalBalance%22%5D%7D"></div>

| Param | Type |
|--------|------|
|amount|<span class="chip chip-number">Number</span>|
|totalBalance|<span class="chip chip-number">Number</span>|

### Offerwall Clicked

Called when the user clicks on an offer.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Offerwall%20Clicked%22,%20%22param%22:%20%5B%5D%7D"></div>

### Offerwall Closed

Called when the offerwall is closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Offerwall%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Offerwall Failed To Load

Called when the offerwall fails to load.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Offerwall%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Offerwall Loaded

Called when the offerwall has been loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Offerwall%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Offerwall Shown

Called when the offerwall is displayed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Offerwall%20Shown%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Award Currency

Awards the specified amount of virtual currency.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Award%20Currency%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22amount%22%5D%7D"></div>

| Param | Type |
|--------|------|
|amount|<span class="chip chip-number">Number</span>|

### Dismiss Content

Dismisses any currently displayed Tapjoy content.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Dismiss%20Content%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Currency Balance

Requests the current virtual currency balance. Fires CurrencyBalanceReceived event.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Get%20Currency%20Balance%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Is Content Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the offerwall content is ready to be shown.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Is%20Content%20Ready%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is European User

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the user is in Europe (GDPR applies).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Is%20European%20User%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Load Offerwall

Loads the offerwall.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Load%20Offerwall%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Privacy Policy

Configures privacy policy settings. Parameters are: subjectToGdpr (true/false), userConsent (true/false), belowConsentAge (true/false), and usPrivacy (a US privacy string, e.g. '1YNN').

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Set%20Privacy%20Policy%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22subjectToGdpr%22,%20%22userConsent%22,%20%22belowConsentAge%22,%20%22usPrivacy%22%5D%7D"></div>

| Param | Type |
|--------|------|
|subjectToGdpr|<span class="chip chip-boolean">Boolean</span>|
|userConsent|<span class="chip chip-boolean">Boolean</span>|
|belowConsentAge|<span class="chip chip-boolean">Boolean</span>|
|usPrivacy|<span class="chip chip-text">Text</span>|

### Show Offerwall

Shows the loaded offerwall.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Show%20Offerwall%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Spend Currency

Spends the specified amount of virtual currency.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Spend%20Currency%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22amount%22%5D%7D"></div>

| Param | Type |
|--------|------|
|amount|<span class="chip chip-number">Number</span>|

## Properties

### Ad Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies whether ads should be enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Currency Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Optional display name for the virtual currency.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tapjoy%20Offerwall%22,%20%22name%22:%20%22Currency%20Name%22,%20%22getter%22:%20false%7D"></div>

### Entry Point

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unknown</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Sets the entry point for ad placements. Valid values: unknown, other, main_menu, hud, exit, fail, complete, inbox, init, store.

### Placement Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for PlacementName

### SDK Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Property for SdkKey

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If enabled, test mode is activated. Always enabled in companion.

### User ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Sets the user ID for Tapjoy. Should be set before loading ads.
