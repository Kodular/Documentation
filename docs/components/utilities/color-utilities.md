# Color Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that performs operations like conversion between formats, lightening, and darkening on color data.

## Methods

### Convert Hex To Int

[[Method('Color Utilities', 'Convert Hex To Int', True, 'hexColor')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|hex Color|Text|


Convert a hex color to a integer color. The result is returned as integer.

### Convert Int To Hex

[[Method('Color Utilities', 'Convert Int To Hex', True, 'color')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|color|Number|


Convert a integer color to a hex color. The result is returned as string.

### Get Luminance

[[Method('Color Utilities', 'Get Luminance', True, 'color')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|color|Number|


Returns the luminance of a color as a float between 0.0 and 1.0. The result is returned as double.

### Is Dark Color

[[Method('Color Utilities', 'Is Dark Color', True, 'color')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|color|Number|


Returns true if the color is dark, else it returns false, means the color is light. The result is returned as boolean.

### Set Alpha Value

[[Method('Color Utilities', 'Set Alpha Value', True, 'color', 'alpha')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|color|Number|
|alpha|Number|


Set a alpha value to a color. The result is returned as integer.