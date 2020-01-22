# Keyguard Manager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that authenticates the user using their preferred security option._

## Properties

### Description

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Description')]]

| Type | Default |
|:----:|:-------:|
|text|Confirm your screen lock.|

Returns the keyguard manager description text.

### Title

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Keyguard Manager', 'Title')]]

| Type | Default |
|:----:|:-------:|
|text|Unlock|

Returns the keyguard manager title text.

### is Device Locked



:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Device Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether the device is currently locked and requires a PIN, pattern or password to unlock. Works only for devices with Android 5.1+

### is Device Secure



:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Device Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns whether the device is secured with a PIN, pattern or password. Works only for devices with Android 6+

### is Keyguard Locked



:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Locked')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Return whether the keyguard is currently locked.

### is Keyguard Secure



:eyes: Read-Only property
[[PropertyBlockGetter('Keyguard Manager', 'is Keyguard Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Return whether the keyguard is secured by a PIN, pattern or password or a SIM card is currently locked.