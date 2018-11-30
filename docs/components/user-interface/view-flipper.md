

# View Flipper

## Overview

A **ViewFlipper** is a component that flips through the various views in a sequence like a slideshow.
The `views` are similar to a slide in a slideshow.
In a slide show, only one slide is visible at a time, likewise only one `view` can be visible at a time.
A `view` can be any component or an image.


## Properties

### Add Images From String

_**\(** Setter only **\)**    
`Type: Text`_

The images for the View Flipper to be animated.  
Use comma as a seperator to seperate different images.  
Example: `image1.png,image2.png`


### Background Color

_**\(** Getter + Setter **\)**    
`Type: Color`_

The background color with which the **View Flipper** is shown.

### Flip Interval

_**\(** Getter + Setter **\)**    
`Type: Number`_

The amount of time to wait before flipping(i.e switching to another view) in milliseconds


{!includes/height-property.md!}


### Swipeable

_**\(** Getter + Setter **\)**    
`Type: Boolean`_

Determines if the **View Flipper** will flip on swipe gestures.


{!includes/visible-property.md!}


{!includes/width-property.md!}


## Methods

### Add Component To View
_**\(**  Component `component`  **\)**_

Add a component to the **ViewFlipper**.
The order in which the components are shown are based on the order in which they are added to the **ViewFlipper**.  
The component which is added first will be the first view to be seen on the **ViewFlipper** and so on.


Params               | []() 
-------------------- | ---------- 
`component`          | **Component:** The component which is to be added as a `view` to the **ViewFlipper**


### Add Images To View
_**\(**  List `images`  **\)**_

Add images from a list, as `views` to the **ViewFlipper**.

Params               | []() 
-------------------- | ---------- 
`images`             | **List:** The _List_ containing the path to the images that are to be added as `views`. Each item in `images` is the path to an image.

### Show Next
_**\(**  None  **\)**_

Show the next `view` that is, flip through the current `view` to reveal the next one.


### Show Previous
_**\(**  None  **\)**_

Show the previous `view` that is, flip through the current `view` in the reverse direction.


### Start Flipping
_**\(**  None  **\)**_

Start flipping through the `views` automatically, pausing on each `view` for the time specified by  
[Flip Interval](#flip-interval)


### Stop Flipping
_**\(**  None  **\)**_

Stop the automatic flipping of the **ViewFlipper**. 


### Is Flipping
_**\(**  None  **\)**_

Return a `Boolean` whether the **ViewFlipper** is automatically flipping through the `views` added to it.

## Events

_This component has no events._
