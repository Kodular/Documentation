# Dynamic Label

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Dynamic Components|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic labels in Arrangements

## Methods

### Create Label

[[Method('Dynamic Label', 'Create Label', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|


Create a Dynamic Label

### Delete Label

[[Method('Dynamic Label', 'Delete Label', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Remove a label component with the given id.

### Get Font Size

[[Method('Dynamic Label', 'Get Font Size', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Font Size of a Label

### Get Height

[[Method('Dynamic Label', 'Get Height', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Height of a Label

### Get Label By Id

[[Method('Dynamic Label', 'Get Label By Id', True, 'id')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|id|Number|


Returns the label referenced by its id.

### Get Text

[[Method('Dynamic Label', 'Get Text', True, 'id')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Text of a Label

### Get Width

[[Method('Dynamic Label', 'Get Width', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Width of a Label

### Set Alignment

[[Method('Dynamic Label', 'Set Alignment', False, 'id', 'alignment')]]

| Params | []() |
|--------|------|
|id|Number|
|alignment|Number|


Update the Text Alignment of a Label. 0 = left, 1 = center and 2 = right.

### Set Background Color

[[Method('Dynamic Label', 'Set Background Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Update the Background Color of a Label

### Set Font

[[Method('Dynamic Label', 'Set Font', False, 'id', 'bold', 'italic')]]

| Params | []() |
|--------|------|
|id|Number|
|bold|Boolean|
|italic|Boolean|


Update the Font of a Label

### Set Font Size

[[Method('Dynamic Label', 'Set Font Size', False, 'id', 'size')]]

| Params | []() |
|--------|------|
|id|Number|
|size|Number|


Update the Font Size of a Label

### Set Height

[[Method('Dynamic Label', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|height|Number|


Update the Height of a Label

### Set Text

[[Method('Dynamic Label', 'Set Text', False, 'id', 'text', 'html')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|
|html|Boolean|


Update the Text of a Label

### Set Text Color

[[Method('Dynamic Label', 'Set Text Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Update the Text Color of a Label

### Set Width

[[Method('Dynamic Label', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Update the Width of a Label

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