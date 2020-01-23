# Cryptography

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that encrypts and decrypts data using a variety of techniques.

## Methods

### AES128Decode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |AES-128 Hash|`text`|


Decodes the given hash using the given key through AES-128. If any exception occurs, returns empty string.

### AES128Encode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Encodes the given string using the given key through AES-128. If any exception occurs, returns empty string.

### AES128GenKey

_Block preview not available_

{>>Returns `text`<<}

Generates a secure random AES 128 key

### AES256Decode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |AES-256 Hash|`text`|


Decodes the given hash using the given key through AES-256. If there are any exceptions, returns empty string

### AES256Encode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Encodes the given string using the given key through AES-256. If there are any exceptions, returns empty string

### AES256GenKey

_Block preview not available_

{>>Returns `text`<<}

Generates a secure random AES 256 key

### BCryptCreateHash

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|
    |salt|`text`|


Generates a hash using BCrypt

### BCryptGenerateSalt

_Block preview not available_

{>>Returns `text`<<}

Generates a salt usable for hashing with BCrypt

### BCryptVerifyPassword

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|
    |correct Hash|`text`|


Verifies if the input password is the same one as the correct hashed password using BCrypt algorithm

### Base64Decode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |base64 Hash|`text`|


Decodes the given hash using Base64

### Base64Encode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Encodes the given string using Base64

### Enigma

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|
    |rotor 1|`number`|
    |rotor 2|`number`|
    |rotor 3|`number`|
    |reflector|`text`|
    |plugboard|`list`|


Encrypts or decrypts the given string simulating an Enigma machine. Rotors can go from 1 to 8, but they cannot be repeated. Reflector can be B, C or 0 if none. Plugboard is a list with sub-list of two items containing a character each one, which replace the first character with the second one.

### MD5CreateHash

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a MD5 hash

### PBKDF2CreateHash

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a hash using PBKDF2

### PBKDF2VerifyPassword

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|
    |correct Hash|`text`|


Verifies if the input password is the same one as the correct hashed password using PBKDF2 algorithm

### SHA1

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a hashed SHA-1 string

### SHA224

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a hashed SHA-224 string

### SHA256

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a hashed SHA-256 string

### SHA384

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a hashed SHA-384 string

### SHA512

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Generates a hashed SHA-512 string

### TripleDESDecode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tripleDES Hash|`text`|


Decodes the given hash using the given key through TripleDES

### TripleDESEncode

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |input Text|`text`|


Encodes the given string using the given key through TripleDES

## Properties

### AES-128 Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'AES-128 Key')]]

| Type |
|:----:|
|text|

Set the AES-128 Key

### AES-256 Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'AES-256 Key')]]

| Type |
|:----:|
|text|

Set the AES-256 Key

### BCrypt Salt Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'BCrypt Salt Size')]]

| Type | Default |
|:----:|:-------:|
|number|10|

Set the BCrypt Salt Size

### PBKDF2 Hash Byte Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Hash Byte Size')]]

| Type | Default |
|:----:|:-------:|
|number|18|

Set the PBKDF2 Hash Byte Size

### PBKDF2 Iterations Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Iterations Number')]]

| Type | Default |
|:----:|:-------:|
|number|64000|

Set the PBKDF2 number of Iterations

### PBKDF2 Salt Byte Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Salt Byte Size')]]

| Type | Default |
|:----:|:-------:|
|number|24|

Set the PBKDF2 Salt Byte Size

### TripleDES Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'TripleDES Key')]]

| Type |
|:----:|
|text|

Set the TripleDES Key