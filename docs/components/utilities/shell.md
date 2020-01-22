# Shell

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that executes shell commands and checks the device''s root status._

## Events

### Got Output

[[Event('Shell', 'Got Output', 'out')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |out|`text`|


_Read output after executing shell command_

## Methods

### CheckForSuperUserAPK

[[Method('Shell', 'CheckForSuperUserAPK', true)]]

{>>Returns `boolean`<<}

_Returns TRUE if one of 6 known root packages or varients is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian._

### Execute

[[Method('Shell', 'Execute', false, 'in')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |in|`text`|


_Executes shell commands. To get output, use "GotOutput" event block._

### IsRooted

[[Method('Shell', 'IsRooted', true)]]

{>>Returns `boolean`<<}

_Returns true if Phone is Rooted_

### Is System User

[[Method('Shell', 'Is System User', true)]]

{>>Returns `boolean`<<}

_This returns TRUE if the system user is running the application, and could be a sign of a rooted device. Developed by Cian._