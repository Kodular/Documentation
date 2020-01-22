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


_Triggers when there is a Authentication Error_

### On Authentication Failed

[[Event('Fingerprint', 'On Authentication Failed')]]

_Triggers when the Authentication Failed_

### On Authentication Help

[[Event('Fingerprint', 'On Authentication Help', 'helpId message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |help Id|`number`|
    |message|`text`|


_Triggers when there is a Authentication Help_

### On Authentication Succeeded

[[Event('Fingerprint', 'On Authentication Succeeded')]]

_Trigger when the Authentication Succeeded_

## Methods

### Authenticate

[[Method('Fingerprint', 'Authenticate', false)]]

_Authenticate the user with a Fingerprint scanner_

### CancelScan

[[Method('Fingerprint', 'CancelScan', false)]]

_Cancel the current Fingerprint Scan_

### HasFingerPrintScanner

[[Method('Fingerprint', 'HasFingerPrintScanner', true)]]

{>>Returns `boolean`<<}

_True if hardware is present and functional, false otherwise_

### HasFingersAdded

[[Method('Fingerprint', 'HasFingersAdded', true)]]

{>>Returns `boolean`<<}

_True if at least one fingerprint is enrolled, false otherwise_

## Properties

### Dialog Help Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Dialog Help Text')]]

| Type | Default |
|:----:|:-------:|
|text|Scan your finger|

_Sets the dialog help text_

### Dialog Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Dialog Title')]]

| Type | Default |
|:----:|:-------:|
|text|Sign in with your fingerprint|

_Sets the dialog title_

### Light Theme

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Light Theme')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Sets the current theme_

### Use Dialog

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Fingerprint', 'Use Dialog')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to use a dialog_