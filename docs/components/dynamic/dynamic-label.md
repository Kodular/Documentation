# Dynamic Label

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Dynamic Components**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic labels in Arrangements

## Methods

### Create Label

Create a Dynamic Label

[[Method('Dynamic Label', 'Create Label', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|


### Delete Label

Remove a label component with the given id.

[[Method('Dynamic Label', 'Delete Label', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Font Size

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Font Size of a Label

[[Method('Dynamic Label', 'Get Font Size', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Height of a Label

[[Method('Dynamic Label', 'Get Height', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Label By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the label referenced by its id.

[[Method('Dynamic Label', 'Get Label By Id', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the Text of a Label

[[Method('Dynamic Label', 'Get Text', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Width of a Label

[[Method('Dynamic Label', 'Get Width', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Set Alignment

Update the Text Alignment of a Label. 0 = left, 1 = center and 2 = right.

[[Method('Dynamic Label', 'Set Alignment', False, 'id', 'alignment')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|alignment|<span class="chip chip-number">Number</span>|


### Set Background Color

Update the Background Color of a Label

[[Method('Dynamic Label', 'Set Background Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Font

Update the Font of a Label

[[Method('Dynamic Label', 'Set Font', False, 'id', 'bold', 'italic')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|bold|<span class="chip chip-boolean">Boolean</span>|
|italic|<span class="chip chip-boolean">Boolean</span>|


### Set Font Size

Update the Font Size of a Label

[[Method('Dynamic Label', 'Set Font Size', False, 'id', 'size')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### Set Height

Update the Height of a Label

[[Method('Dynamic Label', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Text

Update the Text of a Label

[[Method('Dynamic Label', 'Set Text', False, 'id', 'text', 'html')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|
|html|<span class="chip chip-boolean">Boolean</span>|


### Set Text Color

Update the Text Color of a Label

[[Method('Dynamic Label', 'Set Text Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Width

Update the Width of a Label

[[Method('Dynamic Label', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


## Properties

### Alignment Center

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Center alignment (1)

[[PropertyBlockGetter('Dynamic Label', 'Alignment Center')]]

### Alignment Left

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Left alignment (0)

[[PropertyBlockGetter('Dynamic Label', 'Alignment Left')]]

### Alignment Right

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Right alignment (2)

[[PropertyBlockGetter('Dynamic Label', 'Alignment Right')]]