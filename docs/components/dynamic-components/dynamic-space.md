# Dynamic Space

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to create dynamic space in Arrangements._

## Methods

### CreateSpace



[[Method('Dynamic Space', 'CreateSpace', false, 'id arrangement width height')]]

**Parameters**

| Name | Type |
|------|------|
|id|`number`|
|arrangement|`component`|
|width|`number`|
|height|`number`|


Create a new space component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### DeleteSpace



[[Method('Dynamic Space', 'DeleteSpace', false, 'id')]]

**Parameters**

| Name | Type |
|------|------|
|id|`number`|


Remove a space component with the given id.

### GetHeight



[[Method('Dynamic Space', 'GetHeight', true, 'id')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|id|`number`|


Get the Height of a space component.

### GetSpaceById



[[Method('Dynamic Space', 'GetSpaceById', true, 'id')]]

{>>Returns `component`<<}


**Parameters**

| Name | Type |
|------|------|
|id|`number`|


Returns the space referenced by its id.

### GetWidth



[[Method('Dynamic Space', 'GetWidth', true, 'id')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|id|`number`|


Get the Width of a space component.

### SetHeight



[[Method('Dynamic Space', 'SetHeight', false, 'id height')]]

**Parameters**

| Name | Type |
|------|------|
|id|`number`|
|height|`number`|


Update the Height of a space component.

### SetWidth



[[Method('Dynamic Space', 'SetWidth', false, 'id width')]]

**Parameters**

| Name | Type |
|------|------|
|id|`number`|
|width|`number`|


Update the Width of a space component.