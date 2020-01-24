# Dynamic Button

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Dynamic Components**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic buttons in Arrangements

## Events

### Button Click

Trigger when a Dynamic Button is clicked.

[[Event('Dynamic Button', 'Button Click', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Button Long Click

Trigger when a Dynamic Button is long clicked.

[[Event('Dynamic Button', 'Button Long Click', 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


## Methods

### Create Button

Create a Dynamic Button.

[[Method('Dynamic Button', 'Create Button', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|


### Delete Button

:warning: ==**Deprecated**==

This block is DEPRECATED! Please use instead the 'Delete Button' block without arrangement parameter.

[[Method('Dynamic Button', 'Delete Button', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|


### Delete Button

Delete a Dynamic Button.

[[Method('Dynamic Button', 'Delete Button', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Button By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the button referenced by its id.

[[Method('Dynamic Button', 'Get Button By Id', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Get the Enabled status of a button.

[[Method('Dynamic Button', 'Get Enabled', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Font Size

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Font Size of a button.

[[Method('Dynamic Button', 'Get Font Size', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Height of a button.

[[Method('Dynamic Button', 'Get Height', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Text of a button.

[[Method('Dynamic Button', 'Get Text', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Width of a button.

[[Method('Dynamic Button', 'Get Width', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Set Background Color

Update the Background Color of a button.

[[Method('Dynamic Button', 'Set Background Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Enabled

Update the Enabled status of a button.

[[Method('Dynamic Button', 'Set Enabled', False, 'id', 'enabled')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Set Font

Update the Font of a button.

[[Method('Dynamic Button', 'Set Font', False, 'id', 'bold', 'italic')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|bold|<span class="chip chip-boolean">Boolean</span>|
|italic|<span class="chip chip-boolean">Boolean</span>|


### Set Font Size

Update the Font Size of a button.

[[Method('Dynamic Button', 'Set Font Size', False, 'id', 'size')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### Set Height

Update the Height of a button.

[[Method('Dynamic Button', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Text

Update the Text of a button.

[[Method('Dynamic Button', 'Set Text', False, 'id', 'text')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|


### Set Text Color

Update the Text Color of a button.

[[Method('Dynamic Button', 'Set Text Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Width

Update the Width of a button.

[[Method('Dynamic Button', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
