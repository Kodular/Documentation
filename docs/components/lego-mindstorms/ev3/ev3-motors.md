# EV3 Motors

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides both high- and low-level interfaces to a LEGO MINDSTORMS EV3 robot, with functions that can control the motors.

## Events

### Tacho Count Changed

Called when the tacho count has changed.

[[Event('EV3 Motors', 'Tacho Count Changed', 'tachoCount')]]

| Params | []() |
|--------|------|
|tacho Count|<span class="chip chip-number">Number</span>|


## Methods

### Get Tacho Count

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the current tacho count.

[[Method('EV3 Motors', 'Get Tacho Count', True)]]

### Reset Tacho Count

Set the current tacho count to zero.

[[Method('EV3 Motors', 'Reset Tacho Count', False)]]

### Rotate In Distance

Rotate the motors in a distance.

[[Method('EV3 Motors', 'Rotate In Distance', False, 'power', 'distance', 'useBrake')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate In Duration

Rotate the motors in a period of time.

[[Method('EV3 Motors', 'Rotate In Duration', False, 'power', 'milliseconds', 'useBrake')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|milliseconds|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate In Tacho Counts

Rotate the motors in a number of tacho counts.

[[Method('EV3 Motors', 'Rotate In Tacho Counts', False, 'power', 'tachoCounts', 'useBrake')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|tacho Counts|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Indefinitely

Start to rotate the motors.

[[Method('EV3 Motors', 'Rotate Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|


### Rotate Sync In Distance

Rotate the motors at the same speed for a distance in cm.

[[Method('EV3 Motors', 'Rotate Sync In Distance', False, 'power', 'distance', 'turnRatio', 'useBrake')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Sync In Duration

Rotate the motors at the same speed in a period of time.

[[Method('EV3 Motors', 'Rotate Sync In Duration', False, 'power', 'milliseconds', 'turnRatio', 'useBrake')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|milliseconds|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Sync In Tacho Counts

Rotate the motors at the same speed in a number of tacho counts.

[[Method('EV3 Motors', 'Rotate Sync In Tacho Counts', False, 'power', 'tachoCounts', 'turnRatio', 'useBrake')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|tacho Counts|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Sync Indefinitely

Start to rotate the motors at the same speed.

[[Method('EV3 Motors', 'Rotate Sync Indefinitely', False, 'power', 'turnRatio')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|


### Stop

Stop the motors of the robot.

[[Method('EV3 Motors', 'Stop', False, 'useBrake')]]

| Params | []() |
|--------|------|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Toggle Direction

Toggle the direction of motors.

[[Method('EV3 Motors', 'Toggle Direction', False)]]

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Bluetooth Client')]]

### Enable Speed Regulation

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether to keep motor rotation at constant speed.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Enable Speed Regulation')]]

### Motor Ports

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ABC</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The motor ports that the motors are connected to. The ports are specified by a sequence of port letters.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Motor Ports')]]

### Reverse Direction

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set whether the direction of motors is reversed or not.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Reverse Direction')]]

### Stop Before Disconnect

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to stop the motor before disconnecting.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Stop Before Disconnect')]]

### Tacho Count Changed Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the TachoCountChanged event should fire when the angle is changed.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Tacho Count Changed Event Enabled')]]

### Wheel Diameter

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>4.32</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the diameter of the wheels attached on motors.

[[PropertyBlockGetterAndSetter('EV3 Motors', 'Wheel Diameter')]]