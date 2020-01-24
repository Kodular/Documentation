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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-128%20Decode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22AES-128%20Hash%22%5D%7D"></div>


| Params | []() |
|--------|------|
|AES-128 Hash|<span class="chip chip-text">Text</span>|


### AES-128 Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using the given key through AES-128. If any exception occurs, returns empty string.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-128%20Encode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### Generate AES 128 Key

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a secure random AES 128 key

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22Generate%20AES%20128%20Key%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### AES-256 Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using the given key through AES-256. If there are any exceptions, returns empty string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-256%20Decode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22AES-256%20Hash%22%5D%7D"></div>


| Params | []() |
|--------|------|
|AES-256 Hash|<span class="chip chip-text">Text</span>|


### AES-256 Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using the given key through AES-256. If there are any exceptions, returns empty string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-256%20Encode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### Generate AES 256 Key

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a secure random AES 256 key

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22Generate%20AES%20256%20Key%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### BCrypt Create Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hash using BCrypt

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22BCrypt%20Create%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22,%20%22salt%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|salt|<span class="chip chip-text">Text</span>|


### BCrypt Generate Salt

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a salt usable for hashing with BCrypt

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22BCrypt%20Generate%20Salt%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### BCrypt Validate Password

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Verifies if the input password is the same one as the correct hashed password using BCrypt algorithm

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22BCrypt%20Validate%20Password%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22,%20%22correct%20Hash%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|correct Hash|<span class="chip chip-text">Text</span>|


### Base64 Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using Base64

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22Base64%20Decode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22base64%20Hash%22%5D%7D"></div>


| Params | []() |
|--------|------|
|base64 Hash|<span class="chip chip-text">Text</span>|


### Base64 Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using Base64

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22Base64%20Encode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### Enigma Parser

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encrypts or decrypts the given string simulating an Enigma machine. Rotors can go from 1 to 8, but they cannot be repeated. Reflector can be B, C or 0 if none. Plugboard is a list with sub-list of two items containing a character each one, which replace the first character with the second one.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22Enigma%20Parser%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22,%20%22rotor%201%22,%20%22rotor%202%22,%20%22rotor%203%22,%20%22reflector%22,%20%22plugboard%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22MD5%20Create%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### PBKDF2 Create Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hash using PBKDF2

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Create%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### PBKDF2 Validate Hash

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Verifies if the input password is the same one as the correct hashed password using PBKDF2 algorithm

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Validate%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22,%20%22correct%20Hash%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|
|correct Hash|<span class="chip chip-text">Text</span>|


### SHA-1 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-1 string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22SHA-1%20Generate%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-224 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-224 string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22SHA-224%20Generate%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-256 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-256 string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22SHA-256%20Generate%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-384 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-384 string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22SHA-384%20Generate%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### SHA-512 Generate Hash

<span class="chip chip-text">Returns: <i>Text</i></span> 

Generates a hashed SHA-512 string

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22SHA-512%20Generate%20Hash%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


### TripleDES Decode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Decodes the given hash using the given key through TripleDES

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22TripleDES%20Decode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22tripleDES%20Hash%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tripleDES Hash|<span class="chip chip-text">Text</span>|


### TripleDES Encode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Encodes the given string using the given key through TripleDES

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22TripleDES%20Encode%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22input%20Text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|input Text|<span class="chip chip-text">Text</span>|


## Properties

### AES-128 Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the AES-128 Key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-128%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-128%20Key%22,%20%22getter%22:%20false%7D"></div>


### AES-256 Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the AES-256 Key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-256%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22AES-256%20Key%22,%20%22getter%22:%20false%7D"></div>


### BCrypt Salt Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>10</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the BCrypt Salt Size

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22BCrypt%20Salt%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22BCrypt%20Salt%20Size%22,%20%22getter%22:%20false%7D"></div>


### PBKDF2 Hash Byte Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>18</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the PBKDF2 Hash Byte Size

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Hash%20Byte%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Hash%20Byte%20Size%22,%20%22getter%22:%20false%7D"></div>


### PBKDF2 Iterations Number

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>64000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the PBKDF2 number of Iterations

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Iterations%20Number%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Iterations%20Number%22,%20%22getter%22:%20false%7D"></div>


### PBKDF2 Salt Byte Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>24</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the PBKDF2 Salt Byte Size

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Salt%20Byte%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22PBKDF2%20Salt%20Byte%20Size%22,%20%22getter%22:%20false%7D"></div>


### TripleDES Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the TripleDES Key

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22TripleDES%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Cryptography%22,%20%22name%22:%20%22TripleDES%20Key%22,%20%22getter%22:%20false%7D"></div>
