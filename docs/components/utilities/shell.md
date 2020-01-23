# Shell

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that executes shell commands and checks the device''s root status.

## Events

### Got Output

Read output after executing shell command

[[Event('Shell', 'Got Output', 'out')]]

| Params | []() |
|--------|------|
|out|<span class="chip chip-text">Text</span>|


## Methods

### Has Super User Apk Installed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns TRUE if one of 6 known root packages or varients is installed. The name of the package is not returned, so the user does not know which package name to change. Developed by Cian.

[[Method('Shell', 'Has Super User Apk Installed', True)]]

### Execute

Executes shell commands. To get output, use "GotOutput" event block.

[[Method('Shell', 'Execute', False, 'in')]]

| Params | []() |
|--------|------|
|in|<span class="chip chip-text">Text</span>|


### Is Rooted

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if Phone is Rooted

[[Method('Shell', 'Is Rooted', True)]]

### Is System User

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

This returns TRUE if the system user is running the application, and could be a sign of a rooted device. Developed by Cian.

[[Method('Shell', 'Is System User', True)]]