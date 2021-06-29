# Dynamic Text Box

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Dynamic Components**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

## Overview

A component to create dynamic textboxes in Arrangements

## Events

### On Text Changed

Trigger when the text of a Dynamic TextBox changes

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22On%20Text%20Changed%22,%20%22param%22:%20%5B%22id%22,%20%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|

## Methods

### Create Text Box

Create a Dynamic TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Create%20Text%20Box%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22arrangement%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|

### Delete Text Box

Remove a textbox component with the given id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Delete%20Text%20Box%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Get Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Get the Enabled status of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Get%20Enabled%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Get Font Size

<span class="chip chip-number">Returns: <i>Number</i></span>

Get the Font Size of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Get%20Font%20Size%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span>

Get the Height of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Get%20Height%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Get Text

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the Text of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Get%20Text%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Get Text Box By Id

<span class="chip chip-component">Returns: <i>Component</i></span>

Returns the textbox referenced by its id.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Get%20Text%20Box%20By%20Id%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span>

Get the Width of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Get%20Width%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|

### Set Alignment

Update the Text Alignment of a TextBox. 0 = left, 1 = center and 2 = right.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Alignment%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22alignment%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|alignment|<span class="chip chip-number">Number</span>|

### Set Background Color

Update the Background Color of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Background%20Color%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### Set Enabled

Update the Enabled status of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Enabled%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22enabled%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|enabled|<span class="chip chip-boolean">Boolean</span>|

### Set Font

Update the Font of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Font%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22bold%22,%20%22italic%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|bold|<span class="chip chip-boolean">Boolean</span>|
|italic|<span class="chip chip-boolean">Boolean</span>|

### Set Font Size

Update the Font Size of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Font%20Size%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22size%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|

### Set Height

Update the Height of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Height%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22height%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|

### Set Text

Update the Text of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Text%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|text|<span class="chip chip-text">Text</span>|

### Set Text Color

Update the Text Color of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Text%20Color%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### Set Width

Update the Width of a TextBox

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Dynamic%20Text%20Box%22,%20%22name%22:%20%22Set%20Width%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22id%22,%20%22width%22%5D%7D"></div>

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
