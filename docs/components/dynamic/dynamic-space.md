# Dynamic Space

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Dynamic Components**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic space in Arrangements.

## Methods

### Create Space

Create a new space component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

[[Method('Dynamic Space', 'Create Space', False, 'id', 'arrangement', 'width', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Delete Space

Remove a space component with the given id.

[[Method('Dynamic Space', 'Delete Space', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Height of a space component.

[[Method('Dynamic Space', 'Get Height', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Space By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the space referenced by its id.

[[Method('Dynamic Space', 'Get Space By Id', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Width of a space component.

[[Method('Dynamic Space', 'Get Width', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Set Height

Update the Height of a space component.

[[Method('Dynamic Space', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Width

Update the Width of a space component.

[[Method('Dynamic Space', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
