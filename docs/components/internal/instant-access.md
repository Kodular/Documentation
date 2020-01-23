# Instant Access

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that allows user to connect with the service from 'Instant Access.io'

## Events

### On Request Sent

[[Event('Instant Access', 'On Request Sent', 'success', 'data', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|
    |data|`text`|
    |message|`text`|


A event to detect that the login request was sent.

### On Status Received

[[Event('Instant Access', 'On Status Received', 'success', 'data', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|
    |data|`text`|
    |message|`text`|


A event to detect that the status was received.

## Methods

### CheckStatus

[[Method('Instant Access', 'CheckStatus', false, 'user')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |user|`text`|


Check the current status with a given username.

### ClientID

[[Method('Instant Access', 'ClientID', true)]]

{>>Returns `text`<<}

Returns the client id.

### ClientSecret

[[Method('Instant Access', 'ClientSecret', true)]]

{>>Returns `text`<<}

Returns the client secret.

### Request

[[Method('Instant Access', 'Request', false, 'user')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |user|`text`|


Start a request to user with the instant access login service.

## Properties

### Client ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Instant Access', 'Client ID')]]

| Type |
|:----:|
|text|

_No description available_

### Client Secret

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Instant Access', 'Client Secret')]]

| Type |
|:----:|
|text|

_No description available_