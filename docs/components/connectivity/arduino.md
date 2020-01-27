# Arduino

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that connects the device via the USB Serial to Arduino hardware.

## Events

### After Read

Triggered after Read function

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22After%20Read%22,%20%22param%22:%20%5B%22success%22,%20%22data%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|data|<span class="chip chip-text">Text</span>|

## Methods

### Baud Rate

Default baud rate is 9600 bps

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Baud%20Rate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22baud%20Rate%22%5D%7D"></div>

| Params | []() |
|--------|------|
|baud Rate|<span class="chip chip-number">Number</span>|

### Close

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Closes Arduino Connection

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Close%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Initialize

Initializes Arduino Connection

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Initialize%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Is Opened

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true when the Arduino connection is open

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Is%20Opened%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Open

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Opens Arduino Connection

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Open%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Read

Read from Serial

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Read%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Write

Write Data to Serial

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Arduino%22,%20%22name%22:%20%22Write%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22data%22%5D%7D"></div>

| Params | []() |
|--------|------|
|data|<span class="chip chip-text">Text</span>|
