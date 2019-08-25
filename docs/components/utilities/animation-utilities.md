# Animation Utilities

## Overview

The **Animation Utilities** component can be used to animate components on the screen. This component offers several animation options like zoom, bounce, and overshoot.

!!! info
		Components whose positions change while being animated will **not** affect other components. Such components will instead overlap over static components.
		
![](/assets/images/components/utilities/animation-utilities/pr_notice.gif#phone)	
Overlapping of animated and static components
{: .img-caption}

!!! caution
		Do not add multiple animations to the same component before returning the component to its initial state. For example, zooming to scale 5 and rotating by 180deg will cause the component to glitch.


## Methods

### Bounce Horizontal
![](/assets/images/components/utilities/animation-utilities/m_bounce-horizontal.png)
![](/assets/images/components/utilities/animation-utilities/pr_bounce-horizontal.gif#animationUtilsPreview)

\[ Component `component`, Number `start Position`, Number `end Position`, Number `duration` \]

Animates the selected component from the start position to the end in a bounce-style motion.

<br>

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component which is to be animated.
`start Position` | **Number:**  The initial X co-ordinate of the component (in pixels).
`end Position`   | **Number:**  The final X co-ordinate of the component (in pixels).
`duration`       | **Number:**  The duration of the animation (in milliseconds).


### Bounce Vertical
![](/assets/images/components/utilities/animation-utilities/m_bounce-vertical.png)
![](/assets/images/components/utilities/animation-utilities/pr_bounce-vertical.gif#animationUtilsPreview)

\[ Component `component`, Number `start Position`, Number `end Position`, Number `duration` \]

Animates the selected component from the start position to the end in a bounce-style motion.
 
<br>

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component which is to be animated.
`start Position` | **Number:**  The initial Y co-ordinate of the component (in pixels).
`end Position`   | **Number:**  The final Y co-ordinate of the component (in pixels).
`duration`       | **Number:**  The duration of the animation (in milliseconds).


### Get Bottom Position
![](/assets/images/components/utilities/animation-utilities/m_get-bottom-position.png)

\[ Component `component` \]

Returns the distance between the bottom margin of the component's container and the bottom margin of the component in pixels.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the bottom position is to be returned.


### Get Left Position
![](/assets/images/components/utilities/animation-utilities/m_get-left-position.png)

\[ Component `component` \]

Returns the distance between the left margin of the component's container and the left margin of the component in pixels.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the left position is to be returned.


### Get Right Position
![](/assets/images/components/utilities/animation-utilities/m_get-right-position.png)

\[ Component `component` \]

Returns the distance between the right margin of the component's container and the right margin of the component in pixels.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the right position is to be returned.


### Get Top Position
![](/assets/images/components/utilities/animation-utilities/m_get-top-position.png)

\[ Component `component` \]

Returns the distance between the top margin of the component's container and the top margin of the component in pixels.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the top position is to be returned.


### Get X Position
![](/assets/images/components/utilities/animation-utilities/m_get-x-position.png)

\[ Component `component` \]

Returns the distance between the top margin of the component's container and the top margin of the component in pixels. Works similar to the [Get Left Position](#get-left-position) block.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the top position is to be returned.


### Get Y Position
![](/assets/images/components/utilities/animation-utilities/m_get-y-position.png)

\[ Component `component` \]

Returns the distance between the top margin of the component's container and the top margin of the component in pixels. Works similar to the [Get Top Position](#get-top-position) block.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component of which the top position is to be returned.

!!! info
		The methods [Get Bottom Position](#get-bottom-position), [Get Left Position](#get-left-position), 
		[Get Right Position](#get-right-position), [Get Top Position](#get-top-position), [Get X Position](#get-x-position),
		and [Get Y Position](#get-y-position) return `-9999` if there was an error getting the positions.


### Overshoot Horizontal
![](/assets/images/components/utilities/animation-utilities/m_overshoot-horizontal.png)
![](/assets/images/components/utilities/animation-utilities/pr_overshoot-horizontal.gif#animationUtilsPreview)

\[ Component `component`, Number `start Position`, Number `end Position`, Number `duration`, Number `tension` \]

Animates the selected component from the start position to the end, emulating the action of a catapult. For any value of `tension` greater than `0`, the component will overshoot the end position and then slowly return to it.

Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component which is to be animated.
`start Position` | **Number:**  The initial X co-ordinate of the component (in pixels).
`end Position`   | **Number:**  The final X co-ordinate of the component (in pixels).
`duration`       | **Number:**  The duration of the animation (in milliseconds).
`tension`        | **Number:**  The amount by which the component should overshoot the `end Position`. If this value is `0`, then the component will simply slide from the `start Position` to the `end Position`.


### Overshoot Vertical
![](/assets/images/components/utilities/animation-utilities/m_overshoot-vertical.png)
![](/assets/images/components/utilities/animation-utilities/pr_overshoot-vertical.gif#animationUtilsPreview)

\[ Component `component`, Number `start Position`, Number `end Position`, Number `duration`, Number `tension` \]

Animates the selected component from the start position to the end, emulating the action of a catapult. For any value of `tension` greater than `0`, the component will overshoot the end position and then slowly return to it.


Params           |  []()       
---------------- | ------- 
`component`      | **Component:**  The component which is to be animated.
`start Position` | **Number:**  The initial Y co-ordinate of the component (in pixels).
`end Position`   | **Number:**  The final Y co-ordinate of the component (in pixels).
`duration`       | **Number:**  The duration of the animation (in milliseconds).
`tension`        | **Number:**  The amount by which the component should overshoot the `end Position`. If this value is `0`, then the component will simply slide from the `start Position` to the `end Position`.


### Rotation
![](/assets/images/components/utilities/animation-utilities/m_rotation.png)
![](/assets/images/components/utilities/animation-utilities/pr_rotation.gif#animationUtilsPreview)

\[ Component `component`, Number `rotation Start Degrees`, Number `rotation End Degrees`, Number `duration` \]

Rotates the selected component from the start value to the end value. All values are in degrees. 

<br>

Params                   |  []()       
------------------------ | ------- 
`component`              | **Component:**  The component which is to be rotated.
`rotation Start Degrees` | **Number:**  The initial rotation angle of the component (in degrees).
`rotation End Degrees`   | **Number:**  The final rotation angle of the component (in degrees).
`duration`               | **Number:**  The duration of the animation (in milliseconds).


### Zoom
![](/assets/images/components/utilities/animation-utilities/m_zoom.png)
![](/assets/images/components/utilities/animation-utilities/pr_zoom.gif#animationUtilsPreview)

\[ Component `component`, Number `start Scale`, Number `end Scale`, Number `duration` \]

Scales the selected component from the start value to the end value. To scale from the initial zoom level, set `start Scale` to `1`.

<br>

Params        |  []()       
------------- | ------- 
`component`   | **Component:**  The component which is to be scaled.
`start Scale` | **Number:**  The initial scale of the component (`1` if the animation should start from the component's default size).
`end Scale`   | **Number:**  The final scale of the component.
`duration`    | **Number:**  The duration of the animation (in milliseconds).
