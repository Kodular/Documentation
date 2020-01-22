# Instant Access

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that allows user to connect with the service from 'Instant Access.io'_

## Properties

### Client ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Instant Access', 'Client ID')]]

| Type |
|:----:|
|text|

_No description available_

### Client Secret

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Instant Access', 'Client Secret')]]

| Type |
|:----:|
|text|

_No description available_

## Methods

### CheckStatus



[[Method('Instant Access', 'CheckStatus', false, 'user')]]

**Parameters**

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

**Parameters**

| Name | Type |
|------|------|
|user|`text`|


Start a request to user with the instant access login service.