# Dynamic Space

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Dynamic Components|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic space in Arrangements.

## Methods

### Create Space

[[Method('Dynamic Space', 'Create Space', False, 'id', 'arrangement', 'width', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|
|width|Number|
|height|Number|


Create a new space component dynamically. Use for width/height '-1' for wrap content or '-2' for fill parent.

### Delete Space

[[Method('Dynamic Space', 'Delete Space', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove a space component with the given id.

### Get Height

[[Method('Dynamic Space', 'Get Height', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Height of a space component.

### Get Space By Id

[[Method('Dynamic Space', 'Get Space By Id', True, 'id')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|id|Number|


Returns the space referenced by its id.

### Get Width

[[Method('Dynamic Space', 'Get Width', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Width of a space component.

### Set Height

[[Method('Dynamic Space', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|height|Number|


Update the Height of a space component.

### Set Width

[[Method('Dynamic Space', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Update the Width of a space component.