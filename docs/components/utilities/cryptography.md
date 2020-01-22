# Cryptography

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that encrypts and decrypts data using a variety of techniques._

## Methods

### AES128Decode

[[Method('Cryptography', 'AES128Decode', true, 'aes128Hash')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |AES-128 Hash|`text`|


_Decodes the given hash using the given key through AES-128. If any exception occurs, returns empty string._

### AES128Encode

[[Method('Cryptography', 'AES128Encode', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Encodes the given string using the given key through AES-128. If any exception occurs, returns empty string._

### AES128GenKey

[[Method('Cryptography', 'AES128GenKey', true)]]

{>>Returns `text`<<}

_Generates a secure random AES 128 key_

### AES256Decode

[[Method('Cryptography', 'AES256Decode', true, 'aes256Hash')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |AES-256 Hash|`text`|


_Decodes the given hash using the given key through AES-256. If there are any exceptions, returns empty string_

### AES256Encode

[[Method('Cryptography', 'AES256Encode', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Encodes the given string using the given key through AES-256. If there are any exceptions, returns empty string_

### AES256GenKey

[[Method('Cryptography', 'AES256GenKey', true)]]

{>>Returns `text`<<}

_Generates a secure random AES 256 key_

### BCryptCreateHash

[[Method('Cryptography', 'BCryptCreateHash', true, 'inputText salt')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|
    |salt|`text`|


_Generates a hash using BCrypt_

### BCryptGenerateSalt

[[Method('Cryptography', 'BCryptGenerateSalt', true)]]

{>>Returns `text`<<}

_Generates a salt usable for hashing with BCrypt_

### BCryptVerifyPassword

[[Method('Cryptography', 'BCryptVerifyPassword', true, 'inputText correctHash')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|
    |correct Hash|`text`|


_Verifies if the input password is the same one as the correct hashed password using BCrypt algorithm_

### Base64Decode

[[Method('Cryptography', 'Base64Decode', true, 'base64Hash')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |base64 Hash|`text`|


_Decodes the given hash using Base64_

### Base64Encode

[[Method('Cryptography', 'Base64Encode', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Encodes the given string using Base64_

### Enigma

[[Method('Cryptography', 'Enigma', true, 'inputText rotor1 rotor2 rotor3 reflector plugboard')]]

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


_Encrypts or decrypts the given string simulating an Enigma machine. Rotors can go from 1 to 8, but they cannot be repeated. Reflector can be B, C or 0 if none. Plugboard is a list with sub-list of two items containing a character each one, which replace the first character with the second one._

### MD5CreateHash

[[Method('Cryptography', 'MD5CreateHash', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a MD5 hash_

### PBKDF2CreateHash

[[Method('Cryptography', 'PBKDF2CreateHash', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a hash using PBKDF2_

### PBKDF2VerifyPassword

[[Method('Cryptography', 'PBKDF2VerifyPassword', true, 'inputText correctHash')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|
    |correct Hash|`text`|


_Verifies if the input password is the same one as the correct hashed password using PBKDF2 algorithm_

### SHA1

[[Method('Cryptography', 'SHA1', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a hashed SHA-1 string_

### SHA224

[[Method('Cryptography', 'SHA224', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a hashed SHA-224 string_

### SHA256

[[Method('Cryptography', 'SHA256', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a hashed SHA-256 string_

### SHA384

[[Method('Cryptography', 'SHA384', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a hashed SHA-384 string_

### SHA512

[[Method('Cryptography', 'SHA512', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Generates a hashed SHA-512 string_

### TripleDESDecode

[[Method('Cryptography', 'TripleDESDecode', true, 'tripleDESHash')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tripleDES Hash|`text`|


_Decodes the given hash using the given key through TripleDES_

### TripleDESEncode

[[Method('Cryptography', 'TripleDESEncode', true, 'inputText')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |input Text|`text`|


_Encodes the given string using the given key through TripleDES_

## Properties

### AES-128 Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'AES-128 Key')]]

| Type |
|:----:|
|text|

_Set the AES-128 Key_

### AES-256 Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'AES-256 Key')]]

| Type |
|:----:|
|text|

_Set the AES-256 Key_

### BCrypt Salt Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'BCrypt Salt Size')]]

| Type | Default |
|:----:|:-------:|
|number|10|

_Set the BCrypt Salt Size_

### PBKDF2 Hash Byte Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Hash Byte Size')]]

| Type | Default |
|:----:|:-------:|
|number|18|

_Set the PBKDF2 Hash Byte Size_

### PBKDF2 Iterations Number

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Iterations Number')]]

| Type | Default |
|:----:|:-------:|
|number|64000|

_Set the PBKDF2 number of Iterations_

### PBKDF2 Salt Byte Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Salt Byte Size')]]

| Type | Default |
|:----:|:-------:|
|number|24|

_Set the PBKDF2 Salt Byte Size_

### TripleDES Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Cryptography', 'TripleDES Key')]]

| Type |
|:----:|
|text|

_Set the TripleDES Key_