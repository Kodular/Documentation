# Color Utilities

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that performs operations like conversion between formats, lightening, and darkening on color data.

## Methods

### Convert Hex To Int

<span class="chip chip-number">Returns: <i>Number</i></span>

Convert a hex color to a integer color. The result is returned as integer.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Color%20Utilities%22,%20%22name%22:%20%22Convert%20Hex%20To%20Int%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22hex%20Color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|hex Color|<span class="chip chip-text">Text</span>|

### Convert Int To Hex

<span class="chip chip-text">Returns: <i>Text</i></span>

Convert a integer color to a hex color. The result is returned as string.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Color%20Utilities%22,%20%22name%22:%20%22Convert%20Int%20To%20Hex%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|

### Get Luminance

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns the luminance of a color as a float between 0.0 and 1.0. The result is returned as double.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Color%20Utilities%22,%20%22name%22:%20%22Get%20Luminance%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|

### Is Dark Color

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the color is dark, else it returns false, means the color is light. The result is returned as boolean.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Color%20Utilities%22,%20%22name%22:%20%22Is%20Dark%20Color%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|

### Set Alpha Value

<span class="chip chip-number">Returns: <i>Number</i></span>

Set a alpha value to a color. The result is returned as integer.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Color%20Utilities%22,%20%22name%22:%20%22Set%20Alpha%20Value%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22color%22,%20%22alpha%22%5D%7D"></div>

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|alpha|<span class="chip chip-number">Number</span>|
