# Google Account Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows a pop-up list of Google accounts currently signed-in on the device for the user to pick from._

## Events

### Picked

[[Event('Google Account Picker', 'Picked', 'accountName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |account Name|`text`|


Event raised after account has been picked.

## Methods

### Pick

[[Method('Google Account Picker', 'Pick', false)]]

Provide an account picker to pick a Google account.