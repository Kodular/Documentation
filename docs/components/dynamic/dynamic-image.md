# Dynamic Image

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Dynamic Components|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic image in Arrangements.

## Methods

### Create Image

[[Method('Dynamic Image', 'Create Image', False, 'id', 'arrangement', 'path', 'width', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|
|path|Text|
|width|Number|
|height|Number|


Create a new image component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### Delete Image

[[Method('Dynamic Image', 'Delete Image', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove a image component with the given id.

### Get Height

[[Method('Dynamic Image', 'Get Height', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Height of a image component.

### Get Image By Id

[[Method('Dynamic Image', 'Get Image By Id', True, 'id')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|id|Number|


Returns the image referenced by its id.

### Get Width

[[Method('Dynamic Image', 'Get Width', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Width of a image component.

### Rotation Angle

[[Method('Dynamic Image', 'Rotation Angle', False, 'id', 'rotationAngle')]]

| Params | []() |
|--------|------|
|id|Number|
|rotation Angle|Number|


Specifies the angle of a image component with the given id.

### Scale Picture To Fit

[[Method('Dynamic Image', 'Scale Picture To Fit', False, 'id', 'scale')]]

| Params | []() |
|--------|------|
|id|Number|
|scale|Boolean|


Specifies whether a image component with the given id should be resized to match the size of the ImageView.

### Set Height

[[Method('Dynamic Image', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|height|Number|


Update the Height of a image component.

### Set Width

[[Method('Dynamic Image', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Update the Width of a image component.

### Update Image

[[Method('Dynamic Image', 'Update Image', False, 'id', 'path')]]

| Params | []() |
|--------|------|
|id|Number|
|path|Text|


Update a image component with the given id.