# Cryptography

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that encrypts and decrypts data using a variety of techniques.

## Methods

### AES-128 Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using the given key through AES-128. If any exception occurs, returns empty string.

[[Method('Cryptography', 'AES-128 Decode', True, 'aes128Hash')]]

| Params | []() |
|--------|------|
|AES-128 Hash|<span class="chip chip-text">Text</span>|


### AES-128 Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using the given key through AES-128. If any exception occurs, returns empty string.

[[Method('Cryptography', 'AES-128 Encode', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### Generate AES 128 Key

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a secure random AES 128 key

[[Method('Cryptography', 'Generate AES 128 Key', True)]]

### AES-256 Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using the given key through AES-256. If there are any exceptions, returns empty string

[[Method('Cryptography', 'AES-256 Decode', True, 'aes256Hash')]]

| Params | []() |
|--------|------|
|AES-256 Hash|<span class="chip chip-text">Text</span>|


### AES-256 Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using the given key through AES-256. If there are any exceptions, returns empty string

[[Method('Cryptography', 'AES-256 Encode', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### Generate AES 256 Key

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a secure random AES 256 key

[[Method('Cryptography', 'Generate AES 256 Key', True)]]

### BCrypt Create Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hash using BCrypt

[[Method('Cryptography', 'BCrypt Create Hash', True, 'inputText', 'salt')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|salt|<span class="chip chip-text">Text</span>|


### BCrypt Generate Salt

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a salt usable for hashing with BCrypt

[[Method('Cryptography', 'BCrypt Generate Salt', True)]]

### BCrypt Validate Password

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Verifies if the input password is the same one as the correct hashed password using BCrypt algorithm

[[Method('Cryptography', 'BCrypt Validate Password', True, 'inputText', 'correctHash')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|correct Hash|<span class="chip chip-text">Text</span>|


### Base64 Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using Base64

[[Method('Cryptography', 'Base64 Decode', True, 'base64Hash')]]

| Params | []() |
|--------|------|
|base64 Hash|<span class="chip chip-text">Text</span>|


### Base64 Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using Base64

[[Method('Cryptography', 'Base64 Encode', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### Enigma Parser

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encrypts or decrypts the given string simulating an Enigma machine. Rotors can go from 1 to 8, but they cannot be repeated. Reflector can be B, C or 0 if none. Plugboard is a list with sub-list of two items containing a character each one, which replace the first character with the second one.

[[Method('Cryptography', 'Enigma Parser', True, 'inputText', 'rotor1', 'rotor2', 'rotor3', 'reflector', 'plugboard')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|rotor 1|<span class="chip chip-number">Number</span>|
|rotor 2|<span class="chip chip-number">Number</span>|
|rotor 3|<span class="chip chip-number">Number</span>|
|reflector|<span class="chip chip-text">Text</span>|
|plugboard|<span class="chip chip-list">List</span>|


### MD5 Create Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a MD5 hash

[[Method('Cryptography', 'MD5 Create Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### PBKDF2 Create Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hash using PBKDF2

[[Method('Cryptography', 'PBKDF2 Create Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### PBKDF2 Validate Hash

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Verifies if the input password is the same one as the correct hashed password using PBKDF2 algorithm

[[Method('Cryptography', 'PBKDF2 Validate Hash', True, 'inputText', 'correctHash')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|correct Hash|<span class="chip chip-text">Text</span>|


### SHA-1 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-1 string

[[Method('Cryptography', 'SHA-1 Generate Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-224 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-224 string

[[Method('Cryptography', 'SHA-224 Generate Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-256 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-256 string

[[Method('Cryptography', 'SHA-256 Generate Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-384 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-384 string

[[Method('Cryptography', 'SHA-384 Generate Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-512 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-512 string

[[Method('Cryptography', 'SHA-512 Generate Hash', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### TripleDES Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using the given key through TripleDES

[[Method('Cryptography', 'TripleDES Decode', True, 'tripleDESHash')]]

| Params | []() |
|--------|------|
|tripleDES Hash|<span class="chip chip-text">Text</span>|


### TripleDES Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using the given key through TripleDES

[[Method('Cryptography', 'TripleDES Encode', True, 'inputText')]]

| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


## Properties

### AES-128 Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the AES-128 Key

[[PropertyBlockGetterAndSetter('Cryptography', 'AES-128 Key')]]

### AES-256 Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the AES-256 Key

[[PropertyBlockGetterAndSetter('Cryptography', 'AES-256 Key')]]

### BCrypt Salt Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the BCrypt Salt Size

[[PropertyBlockGetterAndSetter('Cryptography', 'BCrypt Salt Size')]]

### PBKDF2 Hash Byte Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>18</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the PBKDF2 Hash Byte Size

[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Hash Byte Size')]]

### PBKDF2 Iterations Number

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>64000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the PBKDF2 number of Iterations

[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Iterations Number')]]

### PBKDF2 Salt Byte Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>24</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the PBKDF2 Salt Byte Size

[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Salt Byte Size')]]

### TripleDES Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the TripleDES Key

[[PropertyBlockGetterAndSetter('Cryptography', 'TripleDES Key')]]