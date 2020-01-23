# Dynamic Image

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Dynamic Components|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic image in Arrangements.

## Methods

### Create Image

Create a new image component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

[[Method('Dynamic Image', 'Create Image', False, 'id', 'arrangement', 'path', 'width', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|arrangement|<span class="chip chip-component">Component</span>|
|path|<span class="chip chip-text">Text</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Delete Image

Remove a image component with the given id.

[[Method('Dynamic Image', 'Delete Image', False, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Height

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Height of a image component.

[[Method('Dynamic Image', 'Get Height', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Image By Id

<span class="chip chip-component">Returns: <i>Component</i></span> 

Returns the image referenced by its id.

[[Method('Dynamic Image', 'Get Image By Id', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Get Width

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the Width of a image component.

[[Method('Dynamic Image', 'Get Width', True, 'id')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|


### Rotation Angle

Specifies the angle of a image component with the given id.

[[Method('Dynamic Image', 'Rotation Angle', False, 'id', 'rotationAngle')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|rotation Angle|<span class="chip chip-number">Number</span>|


### Scale Picture To Fit

Specifies whether a image component with the given id should be resized to match the size of the ImageView.

[[Method('Dynamic Image', 'Scale Picture To Fit', False, 'id', 'scale')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|scale|<span class="chip chip-boolean">Boolean</span>|


### Set Height

Update the Height of a image component.

[[Method('Dynamic Image', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


### Set Width

Update the Width of a image component.

[[Method('Dynamic Image', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|


### Update Image

Update a image component with the given id.

[[Method('Dynamic Image', 'Update Image', False, 'id', 'path')]]

| Params | []() |
|--------|------|
|id|<span class="chip chip-number">Number</span>|
|path|<span class="chip chip-text">Text</span>|
