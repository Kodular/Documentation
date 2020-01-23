# Resource Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that loads string resources from a file.

## Methods

### Get String Content By Name

:warning: ==**Deprecated**==

[[Method('Resource Utilities', 'Get String Content By Name', True, 'resourceName', 'ifResourceNotFoundUse')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|resource Name|Text|
|if Resource Not Found Use|Text|


This block is deprecated and will be removed soon. Use instead 'Get String From Asset' or 'Get String From Path'.

### Get String From Asset

[[Method('Resource Utilities', 'Get String From Asset', True, 'resourceName', 'ifResourceNotFoundUse')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|resource Name|Text|
|if Resource Not Found Use|Text|


Get the text from a asset resource file. Make sure you uploaded a file at 'Resource File From Asset' property.

### Get String From Path

[[Method('Resource Utilities', 'Get String From Path', True, 'resourceName', 'ifResourceNotFoundUse')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|resource Name|Text|
|if Resource Not Found Use|Text|


Get the text from a path resource file. Make sure you added a file path at 'Resource File From Path' property. The path can be too a link to a url.

## Properties

### Resource File From Asset

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the file which is used as resource file. The file must be stored in the assets folder.

[[PropertyBlockGetterAndSetter('Resource Utilities', 'Resource File From Asset')]]

### Resource File From Path

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the file which is used as resource file. The file path must be valid to any file you want to use. The path can be too a link to a url.

[[PropertyBlockGetterAndSetter('Resource Utilities', 'Resource File From Path')]]