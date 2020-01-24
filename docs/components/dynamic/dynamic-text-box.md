# Dynamic Text Box

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Dynamic Components**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic textboxes in Arrangements

## Events

### On Text Changed

Trigger when the text of a Dynamic TextBox changes

[[Event('Dynamic Text Box', 'On Text Changed', 'id', 'text')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|


## Methods

### Create Text Box

Create a Dynamic TextBox

[[Method('Dynamic Text Box', 'Create Text Box', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|


### Delete Text Box

Remove a textbox component with the given id.

[[Method('Dynamic Text Box', 'Delete Text Box', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Button By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the button referenced by its id.

[[Method('Dynamic Text Box', 'Get Button By Id', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Get the Enabled status of a TextBox

[[Method('Dynamic Text Box', 'Get Enabled', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Font Size

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Font Size of a TextBox

[[Method('Dynamic Text Box', 'Get Font Size', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Height of a TextBox

[[Method('Dynamic Text Box', 'Get Height', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Text of a TextBox

[[Method('Dynamic Text Box', 'Get Text', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Width of a TextBox

[[Method('Dynamic Text Box', 'Get Width', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Set Alignment

Update the Text Alignment of a TextBox. 0 = left, 1 = center and 2 = right.

[[Method('Dynamic Text Box', 'Set Alignment', False, 'id', 'alignment')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|alignment|<span class="chip chip-number">Number</span>|


### Set Background Color

Update the Background Color of a TextBox

[[Method('Dynamic Text Box', 'Set Background Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Enabled

Update the Enabled status of a TextBox

[[Method('Dynamic Text Box', 'Set Enabled', False, 'id', 'enabled')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|


### Set Font

Update the Font of a TextBox

[[Method('Dynamic Text Box', 'Set Font', False, 'id', 'bold', 'italic')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|bold|<span class="chip chip-boolean">Boolean</span>|
|italic|<span class="chip chip-boolean">Boolean</span>|


### Set Font Size

Update the Font Size of a TextBox

[[Method('Dynamic Text Box', 'Set Font Size', False, 'id', 'size')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### Set Height

Update the Height of a TextBox

[[Method('Dynamic Text Box', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Text

Update the Text of a TextBox

[[Method('Dynamic Text Box', 'Set Text', False, 'id', 'text')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|


### Set Text Color

Update the Text Color of a TextBox

[[Method('Dynamic Text Box', 'Set Text Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Width

Update the Width of a TextBox

[[Method('Dynamic Text Box', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
