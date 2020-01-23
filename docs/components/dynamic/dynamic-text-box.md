# Dynamic Text Box

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|3|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic textboxes in Arrangements

## Events

### On Text Changed

[[Event('Dynamic Text Box', 'On Text Changed', 'id', 'text')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|


Trigger when the text of a Dynamic TextBox changes

## Methods

### Create Text Box

[[Method('Dynamic Text Box', 'Create Text Box', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|


Create a Dynamic TextBox

### Delete Text Box

[[Method('Dynamic Text Box', 'Delete Text Box', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove a textbox component with the given id.

### Get Button By Id

[[Method('Dynamic Text Box', 'Get Button By Id', True, 'id')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|id|Number|


Returns the button referenced by its id.

### Get Enabled

[[Method('Dynamic Text Box', 'Get Enabled', True, 'id')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Enabled status of a TextBox

### Get Font Size

[[Method('Dynamic Text Box', 'Get Font Size', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Font Size of a TextBox

### Get Height

[[Method('Dynamic Text Box', 'Get Height', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Height of a TextBox

### Get Text

[[Method('Dynamic Text Box', 'Get Text', True, 'id')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Text of a TextBox

### Get Width

[[Method('Dynamic Text Box', 'Get Width', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Width of a TextBox

### Set Alignment

[[Method('Dynamic Text Box', 'Set Alignment', False, 'id', 'alignment')]]

| Params | []() |
|--------|------|
|id|Number|
|alignment|Number|


Update the Text Alignment of a TextBox. 0 = left, 1 = center and 2 = right.

### Set Background Color

[[Method('Dynamic Text Box', 'Set Background Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Update the Background Color of a TextBox

### Set Enabled

[[Method('Dynamic Text Box', 'Set Enabled', False, 'id', 'enabled')]]

| Params | []() |
|--------|------|
|id|Number|
|enabled|Boolean|


Update the Enabled status of a TextBox

### Set Font

[[Method('Dynamic Text Box', 'Set Font', False, 'id', 'bold', 'italic')]]

| Params | []() |
|--------|------|
|id|Number|
|bold|Boolean|
|italic|Boolean|


Update the Font of a TextBox

### Set Font Size

[[Method('Dynamic Text Box', 'Set Font Size', False, 'id', 'size')]]

| Params | []() |
|--------|------|
|id|Number|
|size|Number|


Update the Font Size of a TextBox

### Set Height

[[Method('Dynamic Text Box', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|height|Number|


Update the Height of a TextBox

### Set Text

[[Method('Dynamic Text Box', 'Set Text', False, 'id', 'text')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|


Update the Text of a TextBox

### Set Text Color

[[Method('Dynamic Text Box', 'Set Text Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Update the Text Color of a TextBox

### Set Width

[[Method('Dynamic Text Box', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Update the Width of a TextBox