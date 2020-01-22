# Fingerprint

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that reads fingerprints using the device''s in-built fingerprint scanner._

## Events

### On Authentication Error

[[Event('Fingerprint', 'On Authentication Error', 'errorId message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Id|`number`|
    |message|`text`|


Triggers when there is a Authentication Error

### On Authentication Failed

[[Event('Fingerprint', 'On Authentication Failed')]]

Triggers when the Authentication Failed

### On Authentication Help

[[Event('Fingerprint', 'On Authentication Help', 'helpId message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |help Id|`number`|
    |message|`text`|


Triggers when there is a Authentication Help

### On Authentication Succeeded

[[Event('Fingerprint', 'On Authentication Succeeded')]]

Trigger when the Authentication Succeeded

## Methods

### Authenticate

[[Method('Fingerprint', 'Authenticate', false)]]

Authenticate the user with a Fingerprint scanner

### CancelScan

[[Method('Fingerprint', 'CancelScan', false)]]

Cancel the current Fingerprint Scan

### HasFingerPrintScanner

[[Method('Fingerprint', 'HasFingerPrintScanner', true)]]

{>>Returns `boolean`<<}

True if hardware is present and functional, false otherwise

### HasFingersAdded

[[Method('Fingerprint', 'HasFingersAdded', true)]]

{>>Returns `boolean`<<}

True if at least one fingerprint is enrolled, false otherwise

## Properties

### Dialog Help Text

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Dialog Help Text')]]

| Type | Default |
|:----:|:-------:|
|text|Scan your finger|

Sets the dialog help text

### Dialog Title

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Dialog Title')]]

| Type | Default |
|:----:|:-------:|
|text|Sign in with your fingerprint|

Sets the dialog title

### Light Theme

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Light Theme')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Sets the current theme

### Use Dialog

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Use Dialog')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to use a dialog