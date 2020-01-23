# Fingerprint

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads fingerprints using the device''s in-built fingerprint scanner.

## Events

### On Authentication Error

[[Event('Fingerprint', 'On Authentication Error', 'errorId', 'message')]]

| Params | []() |
|--------|------|
|error Id|Number|
|message|Text|


Triggers when there is a Authentication Error

### On Authentication Failed

[[Event('Fingerprint', 'On Authentication Failed')]]

Triggers when the Authentication Failed

### On Authentication Help

[[Event('Fingerprint', 'On Authentication Help', 'helpId', 'message')]]

| Params | []() |
|--------|------|
|help Id|Number|
|message|Text|


Triggers when there is a Authentication Help

### On Authentication Succeeded

[[Event('Fingerprint', 'On Authentication Succeeded')]]

Trigger when the Authentication Succeeded

## Methods

### Authenticate

[[Method('Fingerprint', 'Authenticate', False)]]

Authenticate the user with a Fingerprint scanner

### Cancel Scan

[[Method('Fingerprint', 'Cancel Scan', False)]]

Cancel the current Fingerprint Scan

### Has Fingerprint Scanner

[[Method('Fingerprint', 'Has Fingerprint Scanner', True)]]

{>>Returns `boolean`<<}

True if hardware is present and functional, false otherwise

### Has Fingers Added

[[Method('Fingerprint', 'Has Fingers Added', True)]]

{>>Returns `boolean`<<}

True if at least one fingerprint is enrolled, false otherwise

## Properties

### Dialog Help Text

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Scan your finger</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the dialog help text

[[PropertyBlockGetterAndSetter('Fingerprint', 'Dialog Help Text')]]

### Dialog Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Sign in with your fingerprint</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the dialog title

[[PropertyBlockGetterAndSetter('Fingerprint', 'Dialog Title')]]

### Light Theme

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the current theme

[[PropertyBlockGetterAndSetter('Fingerprint', 'Light Theme')]]

### Use Dialog

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to use a dialog

[[PropertyBlockGetterAndSetter('Fingerprint', 'Use Dialog')]]