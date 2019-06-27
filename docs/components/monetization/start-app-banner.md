# StartApp Banner

## Overview

[StartApp](https://www.startapp.com/) is an ad network focused on mobile solutions. We have partnered with them to allow you to monetize your apps through their network.

![Preview of StartApp Banner](/assets/images/components/monetization/start-app-banner/preview.png){: class="preview-img"}

Demo Ad displayed with StartApp
{: .img-caption}

In order to use this component, you will need an App ID. It can be requested in their Portal ([portal.startapp.com](https://portal.startapp.com/#/pub/applications)).

## Properties

### App ID

[[PropertyBlockSetter('StartApp_Banner', 'App ID')]]

_**\(** Setter only **\)**  
`Type: Integer`_

The App ID is used to identify which app is serving ads. Requested at StartApp Portal.

### Visible

[[PropertyBlockGetterAndSetter('StartApp_Banner', 'Visible')]]

_**\(** Getter + Setter **\)**  
`Type: Color`_

Toggles the visibility of the StartApp Banner in the Screen.

Options             | []()
------------------- | ------------
`true`              | Ad will be displayed in the screen.
`false`             | Banner will be hidden to the user.

## Methods

### Load Ad

![Method Load Ad](/assets/images/components/monetization/start-app-banner/m_loadad.png)

_**\(** None **\)**_

Perform a process in the background to request an ad. It triggers _On Receive Ad_ event if request succeeds.

## Events

### Ad Clicked

[[Event('StartApp_Banner', 'Ad Clicked')]]

_**\(**  None  **\)**_

Triggered when the user clicks on an ad to open its page.

### Ad Failed To Load

[[Event('StartApp_Banner', 'Ad Failed To Load', 'error Code', 'error Message')]]

_**\(**  Number `error Code`, Text `error Message`  **\)**_

Raised when an ad from StartApp fails to load.

Params               | []() 
-------------------- | ---------- 
`error Code`         | **Number:** The internal error code.
`error Message`      | **Text:** A human-readable message with the error reason.

### On Failed To Receive Ad

[[Event('StartApp_Banner', 'On Failed To Receive Ad', 'error Message')]]

_**\(**  Text `error Message`  **\)**_

Raised when an ad from StartApp is not received (probably because of a network error).

Params               | []() 
-------------------- | ---------- 
`error Message`      | **Text:** A human-readable message with the error reason.

### On Receive Ad

[[Event('StartApp_Banner', 'On Receive Ad')]]

_**\(**  None  **\)**_

Indicates that the ad has been successfully received and is has been shown.


## Example

The below blocks can be used for the showing a an ad using **StartApp Banner** component.  
In this example, ad starts loading in when the Screen initializes and it is shown automatically.

![Chameleon Ads Example](/assets/images/components/monetization/start-app-baner/example.png)
