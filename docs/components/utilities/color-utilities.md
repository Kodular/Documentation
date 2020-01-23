# Color Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that performs operations like conversion between formats, lightening, and darkening on color data.

## Methods

### Convert Hex To Int

<span class="chip chip-number">Returns: <i>Number</i></span> 

Convert a hex color to a integer color. The result is returned as integer.

[[Method('Color Utilities', 'Convert Hex To Int', True, 'hexColor')]]

| Params | []() |
|--------|------|
|hex Color|<span class="chip chip-text">Text</span>|


### Convert Int To Hex

<span class="chip chip-text">Returns: <i>Text</i></span> 

Convert a integer color to a hex color. The result is returned as string.

[[Method('Color Utilities', 'Convert Int To Hex', True, 'color')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|


### Get Luminance

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the luminance of a color as a float between 0.0 and 1.0. The result is returned as double.

[[Method('Color Utilities', 'Get Luminance', True, 'color')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|


### Is Dark Color

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the color is dark, else it returns false, means the color is light. The result is returned as boolean.

[[Method('Color Utilities', 'Is Dark Color', True, 'color')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|


### Set Alpha Value

<span class="chip chip-number">Returns: <i>Number</i></span> 

Set a alpha value to a color. The result is returned as integer.

[[Method('Color Utilities', 'Set Alpha Value', True, 'color', 'alpha')]]

| Params | []() |
|--------|------|
|color|<span class="chip chip-number">Number</span>|
|alpha|<span class="chip chip-number">Number</span>|
