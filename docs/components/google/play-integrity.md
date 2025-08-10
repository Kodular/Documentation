# Play Integrity

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that lets you connect to the Google Play Integrity API to request integrity tokens and verify with verdicts the authenticity of your app, device, and user.

## Events

### Error Occurred

Event triggered when an error occurs during Google Play Integrity API operations. The errorCode parameter contains the specific error code from the API, and the message parameter provides a human-readable description of the error that occurred.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Play%20Integrity%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

### Integrity Token Received

Event triggered when a valid integrity token has been successfully obtained from the Google Play Integrity API. The token parameter contains the encoded integrity token that can be sent to your server for verification, and the requestHash parameter contains the original request hash that was used to generate this token.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Play%20Integrity%22,%20%22name%22:%20%22Integrity%20Token%20Received%22,%20%22param%22:%20%5B%22token%22,%20%22request%20Hash%22%5D%7D"></div>

| Params | []() |
|--------|------|
|token|<span class="chip chip-text">Text</span>|
|request Hash|<span class="chip chip-text">Text</span>|

### Retryable Error Occurred During Warmup

Event triggered when a recoverable error occurs during the integrity provider warm-up process. IMPORTANT NOTE: No user action is required as the system automatically retries the operation up to 3 times with exponential backoff in the background. The errorCode parameter contains the specific error code, and the message parameter provides details about the error condition.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Play%20Integrity%22,%20%22name%22:%20%22Retryable%20Error%20Occurred%20During%20Warmup%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|

## Methods

### Is Provider Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Checks if the Google Play Integrity API token provider has been initialized and is ready to generate integrity tokens. Returns true if the provider is available and properly configured, false otherwise.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Play%20Integrity%22,%20%22name%22:%20%22Is%20Provider%20Ready%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Request Integrity Token

Initiates a request to obtain an integrity token from Google Play Integrity API using the specified request hash. The request hash should be a unique identifier for this specific integrity verification request. Upon completion, either IntegrityTokenReceived or ErrorOccurred event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Play%20Integrity%22,%20%22name%22:%20%22Request%20Integrity%20Token%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22request%20Hash%22%5D%7D"></div>

| Params | []() |
|--------|------|
|request Hash|<span class="chip chip-text">Text</span>|
