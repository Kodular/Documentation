# Cryptography

## Overview

The **Cryptography** component includes a selection of algorithms for hashing, encoding, and decoding data.

## Properties

### AES-128 Key

\[ Getter + Setter \]  
`Type: Text`

[[PropertyBlockGetterAndSetter('Cryptography', 'AES-128 Key')]]

The key used for encoding and decoding with AES-128. Ideally a hexadecimal string of length 16.

### AES-256 Key

\[ Getter + Setter \]  
`Type: Text`

[[PropertyBlockGetterAndSetter('Cryptography', 'AES-256 Key')]]

The key used for encoding and decoding with AES-256. Ideally a hexadecimal string of length 32.

### BCrypt Salt Size

\[ Getter + Setter \]  
`Type: Number`

[[PropertyBlockGetterAndSetter('Cryptography', 'BCrypt Salt Size')]]

The size of the salt used by BCrypt. Has a value of 10 by default.

### PBKDF2 Hash Byte Size

\[ Getter + Setter \]  
`Type: Number`

[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Hash Byte Size')]]

The size of the PBKDF2 Hash in Bytes. Has a value of 18 by default.

### PBKDF2 Iterations Number

\[ Getter + Setter \]  
`Type: Number`

[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Iterations Number')]]

The number of iterations of PBKDF2 to run. Has a value of 64000 by default.

### PBKDF2 Salt Byte Size

\[ Getter + Setter \]  
`Type: Number`

[[PropertyBlockGetterAndSetter('Cryptography', 'PBKDF2 Salt Byte Size')]]

The size of the salt used by PBKDF2 in Bytes. Has a value of 24 by default.

### TripleDES Key

\[ Getter + Setter \]  
`Type: Text`

[[PropertyBlockGetterAndSetter('Cryptography', 'TripleDES Key')]]

The key used for encoding and decoding with TripleDES. The key must be a string of 48 hexadecimal characters.

## Methods

### AES-128 Decode

\[ Text `AES-128 Hash` \]  

[[Method('Cryptography', 'AES-128 Decode', True, 'AES-128 Hash')]]

Returns the output after decoding the Hash with the AES-128 Key. Returns `*empty-string*` if decoding failed, or if the plaintext was `*empty-string*`.

Params             |  []()       
------------------ | ------- 
`AES-128 Hash`     | **Text:**  The AES-128 encoded text to be decoded.

### AES-128 Encode

\[ Text `input Text` \]  

[[Method('Cryptography', 'AES-128 Encode', True, 'input Text')]]

Returns the output after encoding the input Text with the AES-128 Key.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be encoded.

### Generate AES 128 Key

\[ None \]  

[[Method('Cryptography', 'Generate AES 128 Key', True)]]

Generates a secure random AES 128 key.

### AES-256 Decode

\[ Text `AES-256 Hash` \]  

[[Method('Cryptography', 'AES-256 Decode', True, 'AES-256 Hash')]]

Returns the output after decoding the Hash with the AES-256 Key. Returns `*empty-string*` if decoding failed, or if the plaintext was `*empty-string*`.

Params             |  []()       
------------------ | ------- 
`AES-256 Hash`     | **Text:**  The AES-256 encoded text to be decoded.

### AES-256 Encode

\[ Text `input Text` \]  

[[Method('Cryptography', 'AES-256 Encode', True, 'input Text')]]

Returns the output after encoding the input Text with the AES-256 Key.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be encoded.

### Generate AES 256 Key

\[ None \]  

[[Method('Cryptography', 'Generate AES 256 Key', True)]]

Generates a secure random AES 256 key.

### BCrypt create Hash

\[ Text `input Text`, Text `salt` \]  

[[Method('Cryptography', 'BCrypt Create Hash', True, 'input Text', 'salt')]]

Returns the hash created from the input Text and the salt.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be hashed.
`salt`             | **Text:**  The salt to be used for hashing.

### BCrypt Generate Salt

\[ None \]  

[[Method('Cryptography', 'BCrypt Generate Salt', True)]]

Returns a salt usable for hashing with BCrypt.

### BCrypt Validate Password

\[ Text `input Text`, Text `correct Hash` \]  

[[Method('Cryptography', 'BCrypt Validate Password', True, 'input Text', 'correct Hash')]]

Verifies if the input password is the same one as the correct hashed password using BCrypt algorithm.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The password to be validated.
`correct Hash`     | **Text:**  The correct hashed password.

### Base64 Decode

\[ Text `base64 Hash` \]  

[[Method('Cryptography', 'Base64 Decode', True, 'base64 Hash')]]

Decodes Base64 encoded text.

Params             |  []()       
------------------ | ------- 
`base64 Hash`      | **Text:**  The Base64 hashed text to be decoded.

### Base64 Encode

\[ Text `input Text` \]  

[[Method('Cryptography', 'Base64 Encode', True, 'input Text')]]

Encodes Text to Base64.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be Base64 encoded.

### Enigma Parser

\[ Text `input Text`, Number `rotor 1`, Number `rotor 2`, Number `rotor 3`, Text `reflector`, List `plugboard` \]  

[[Method('Cryptography', 'Enigma Parser', True, 'input Text', 'rotor 1', 'rotor 2', 'rotor 3', 'reflector', 'plugboard')]]

Encrypts or decrypts the given string simulating an Enigma machine. Rotors can go from 1 to 8, but they cannot be repeated. Reflector can be B, C or 0 if none. Plugboard is a list with sub-list of two items containing one character each. The first character stored in each sub-list is replaced by the second.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to parse using the simulated Enigma machine.
`rotor 1`          | **Number:**  The value for Rotor 1.
`rotor 2`          | **Number:**  The value for Rotor 2.
`rotor 3`          | **Number:**  The value for Rotor 3.
`reflector`        | **Text:**  The reflector to be used.
`plugboard`        | **List:**  The list governing character substitutions.

### MD5 Create Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'MD5 Create Hash', True, 'input Text')]]

Creates an MD5 Hash for the given text.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be MD5 hashed.

### PBKDF2 Create Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'PBKDF2 Create Hash', True, 'input Text')]]

Creates a PBKDF2 Hash for the given Text, typically a password.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be PBKDF2 hashed.

### PBKDF2 Validate Hash

\[ Text `input Text`, Text `correct Hash` \]  

[[Method('Cryptography', 'PBKDF2 Validate Hash', True, 'input Text', 'correct Hash')]]

Validates if the input Text is the same as the original un-Hashed text. Returns a boolean.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The password to be validated.
`correct Hash`     | **Text:**  The hash of the correct password.

### SHA-1 Generate Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'SHA-1 Generate Hash', True, 'input Text')]]

Generates a SHA-1 Hash of the input Text.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be SHA-1 hashed.

### SHA-224 Generate Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'SHA-224 Generate Hash', True, 'input Text')]]

Generates a SHA-224 Hash of the input Text.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be SHA-224 hashed.

### SHA-256 Generate Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'SHA-256 Generate Hash', True, 'input Text')]]

Generates a SHA-256 Hash of the input Text.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be SHA-256 hashed.

### SHA-384 Generate Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'SHA-384 Generate Hash', True, 'input Text')]]

Generates a SHA-384 Hash of the input Text.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be SHA-384 hashed.

### SHA-512 Generate Hash

\[ Text `input Text` \]  

[[Method('Cryptography', 'SHA-512 Generate Hash', True, 'input Text')]]

Generates a SHA-512 Hash of the input Text.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be SHA-512 hashed.

### TripleDES Decode

\[ Text `tripleDES Hash` \]  

[[Method('Cryptography', 'TripleDES Decode', True, 'tripleDES Hash')]]

Decodes the TripleDES encoded Text with the given Key.

Params             |  []()       
------------------ | ------- 
`tripleDES Hash`   | **Text:**  The TripleDES Hash to be decoded.

### TripleDES Encode

\[ Text `input Text` \]  

[[Method('Cryptography', 'TripleDES Encode', True, 'input Text')]]

Encodes the input Text with the given Key using TripleDES algorithm.

Params             |  []()       
------------------ | ------- 
`input Text`       | **Text:**  The text to be TripleDES encoded.
