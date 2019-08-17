# Chameleon Ad

## Overview

[Chameleon Ads](https://chameleon.ad) is an ad network focused on websites. This components allows you to monetize your smartphone app with their network.

![Preview of Chameleon Ad](/assets/images/components/monetization/chameleon-ad/preview.png){: class="preview-img"}

Test Ad displayed with Chameleon Ads
{: .img-caption}

In order to use this component, you will need an User ID and an App ID. Both parameters can be requested at Kodular Account ([account.kodular.io/cpanel/creator/ads](https://account.kodular.io/cpanel/creator/ads)).  
It is not needed to register on their website, as we have already integrated their service in our system.

## Properties

### App ID

![Designer App ID](/assets/images/components/monetization/chameleon-ad/d_appid.png) ![Blocks App ID](/assets/images/components/monetization/chameleon-ad/p_appid.png)

_**\(** Setter only **\)**  
`Type: Integer`_

The App ID is used to identify which app is serving ads.

### Test Mode

![Designer Test Mode](/assets/images/components/monetization/chameleon-ad/d_testmode.png) ![Blocks Test Mode](/assets/images/components/monetization/chameleon-ad/p_testmode.png)

_**\(** Getter + Setter **\)**  
`Type: Boolean`_

Defines wether the app is in development mode or not.

Options             | []()
------------------- | ------------
`true`              | Chameleon Ads will load a sample ad.
`false`             | App is in production, and will load normal ads

### User ID

![Designer UUID](/assets/images/components/monetization/chameleon-ad/d_userid.png) ![Blocks User ID](/assets/images/components/monetization/chameleon-ad/p_userid.png)

_**\(** Setter only **\)**  
`Type: String`_

The User ID is generated using an UUID (Universally Unique IDentifier) format. It is used to determine which user should the earnings be sent.

## Methods

### Load Ad

![Method Load Ad](/assets/images/components/monetization/chameleon-ad/m_loadad.png)

_**\(** None **\)**_

Perform a process in the background to request an ad. It triggers _On Ad Loaded_ event if request succeeds.

### Show Ad

![Method Show Ad](/assets/images/components/monetization/chameleon-ad/m_showad.png)

_**\(** None **\)**_

Opens a pop-up with the loaded ad. After 5 seconds, user can close the ad.

## Events

### Ad Closed

![Event Ad Closed](/assets/images/components/monetization/chameleon-ad/e_adclosed.png)

_**\(**  None  **\)**_

Indicates that the user has closed the ad after being successfully showed.

### Ad Failed To Load

![Event Ad Failed To Load](/assets/images/components/monetization/chameleon-ad/e_adfailedtoload.png)

_**\(**  Text `error Message`  **\)**_

Triggered after a failed attempt to load the ad.

Params               | []()
-------------------- | ----------
`error Message`      | **String:** Contains the reason of why ad failed to load.

### Ad Failed To Show

![Event Ad Failed To Show](/assets/images/components/monetization/chameleon-ad/e_adfailedtoshow.png)

_**\(**  Text `error Message`  **\)**_

Triggered after a failed attempt to show the ad.

Params               | []()
-------------------- | ----------
`error Message`      | **String:** Contains the reason of why ad failed to show. _In most cases it might be that ad was not previously loaded._

### Ad Loaded

![Event Ad Loaded](/assets/images/components/monetization/chameleon-ad/e_adloaded.png)

_**\(**  None  **\)**_

Indicates that the ad has been successfully loaded and is ready to be shown.

## Example

The below blocks can be used for the showing a an ad using **Chameleon Ad** component.
In this example, ad starts loading in background and, when it is ready, the ad pop-outs.

![Chameleon Ads Example](/assets/images/components/monetization/chameleon-ad/example.png)
