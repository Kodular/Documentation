# Cryptography

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that encrypts and decrypts data using a variety of techniques.

## Methods

### AES-128 Decode

[[Method('Cryptography', 'AES-128 Decode', True, 'aes128Hash')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|AES-128 Hash|Text|


Decodes the given hash using the given key through AES-128. If any exception occurs, returns empty string.

### AES-128 Encode

[[Method('Cryptography', 'AES-128 Encode', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Encodes the given string using the given key through AES-128. If any exception occurs, returns empty string.

### Generate AES 128 Key

[[Method('Cryptography', 'Generate AES 128 Key', True)]]

{>>Returns `text`<<}

Generates a secure random AES 128 key

### AES-256 Decode

[[Method('Cryptography', 'AES-256 Decode', True, 'aes256Hash')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|AES-256 Hash|Text|


Decodes the given hash using the given key through AES-256. If there are any exceptions, returns empty string

### AES-256 Encode

[[Method('Cryptography', 'AES-256 Encode', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Encodes the given string using the given key through AES-256. If there are any exceptions, returns empty string

### Generate AES 256 Key

[[Method('Cryptography', 'Generate AES 256 Key', True)]]

{>>Returns `text`<<}

Generates a secure random AES 256 key

### BCrypt Create Hash

[[Method('Cryptography', 'BCrypt Create Hash', True, 'inputText', 'salt')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|
|salt|Text|


Generates a hash using BCrypt

### BCrypt Generate Salt

[[Method('Cryptography', 'BCrypt Generate Salt', True)]]

{>>Returns `text`<<}

Generates a salt usable for hashing with BCrypt

### BCrypt Validate Password

[[Method('Cryptography', 'BCrypt Validate Password', True, 'inputText', 'correctHash')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|input Text|Text|
|correct Hash|Text|


Verifies if the input password is the same one as the correct hashed password using BCrypt algorithm

### Base64 Decode

[[Method('Cryptography', 'Base64 Decode', True, 'base64Hash')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|base64 Hash|Text|


Decodes the given hash using Base64

### Base64 Encode

[[Method('Cryptography', 'Base64 Encode', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Encodes the given string using Base64

### Enigma Parser

[[Method('Cryptography', 'Enigma Parser', True, 'inputText', 'rotor1', 'rotor2', 'rotor3', 'reflector', 'plugboard')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|
|rotor 1|Number|
|rotor 2|Number|
|rotor 3|Number|
|reflector|Text|
|plugboard|List|


Encrypts or decrypts the given string simulating an Enigma machine. Rotors can go from 1 to 8, but they cannot be repeated. Reflector can be B, C or 0 if none. Plugboard is a list with sub-list of two items containing a character each one, which replace the first character with the second one.

### MD5 Create Hash

[[Method('Cryptography', 'MD5 Create Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a MD5 hash

### PBKDF2 Create Hash

[[Method('Cryptography', 'PBKDF2 Create Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a hash using PBKDF2

### PBKDF2 Validate Hash

[[Method('Cryptography', 'PBKDF2 Validate Hash', True, 'inputText', 'correctHash')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|input Text|Text|
|correct Hash|Text|


Verifies if the input password is the same one as the correct hashed password using PBKDF2 algorithm

### SHA-1 Generate Hash

[[Method('Cryptography', 'SHA-1 Generate Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a hashed SHA-1 string

### SHA-224 Generate Hash

[[Method('Cryptography', 'SHA-224 Generate Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a hashed SHA-224 string

### SHA-256 Generate Hash

[[Method('Cryptography', 'SHA-256 Generate Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a hashed SHA-256 string

### SHA-384 Generate Hash

[[Method('Cryptography', 'SHA-384 Generate Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a hashed SHA-384 string

### SHA-512 Generate Hash

[[Method('Cryptography', 'SHA-512 Generate Hash', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Generates a hashed SHA-512 string

### TripleDES Decode

[[Method('Cryptography', 'TripleDES Decode', True, 'tripleDESHash')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|tripleDES Hash|Text|


Decodes the given hash using the given key through TripleDES

### TripleDES Encode

[[Method('Cryptography', 'TripleDES Encode', True, 'inputText')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|input Text|Text|


Encodes the given string using the given key through TripleDES

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