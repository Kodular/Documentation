# Leadbolt

## Overview

The **LeadBolt** component allows you to show interstitial and rewarded ads from [Leadbolt.com](https://www.leadbolt.com/)

## Methods

### Is Network Ad Ready
[[Method('LeadBolt', 'Is Network Ad Ready', True)]]

Returns `true` if a network ad is ready to be shown, `false` otherwise

### Is Rewarded Ad Ready
[[Method('LeadBolt', 'Is Rewarded Ad Ready', True)]]

Returns `true` if a rewarded ad is ready to be shown, `false` otherwise

### Load Network Ad
[[Method('LeadBolt', 'Load Network Ad')]]

Use this block to load a network ad. This block does not show an ad to the user.

### Load Rewarded Ad
[[Method('LeadBolt', 'Load Rewarded Ad')]]

Use this block to load a rewarded ad. This block does not show an ad to the user.

### Show Network Ad
[[Method('LeadBolt', 'Show Network Ad')]]

Use this block to show the previously loaded network ad.

### Show Rewarded Ad
[[Method('LeadBolt', 'Show Rewarded Ad')]]

Use this block to show the previously loaded rewarded ad.


## Events

### Ad Loaded
[[Event('LeadBolt', 'Ad Loaded', 'location')]]

\[ Text `location` \]

Triggered when an ad is loaded.

Params           |  []()       
---------------- | ------- 
`location`          | **Text:**  The type of ad loaded `inapp` or `reward`.


### Ad Clicked
[[Event('LeadBolt', 'Ad Clicked', 'location')]]

\[ Text `location` \]

Triggered when the end-user clicks on an ad.

Params           |  []()       
---------------- | ------- 
`location`          | **Text:**  The type of ad clicked `inapp` or `reward`.


### Ad Closed
[[Event('LeadBolt', 'Ad Closed', 'location')]]

\[ Text `location` \]

Triggered when the end-user closes the ad.

Params           |  []()       
---------------- | ------- 
`location`          | **Text:**  The type of ad closed `inapp` or `reward`.


### Ad Failed To Load
[[Event('LeadBolt', 'Ad Failed To Load', 'location', 'error', 'is Cache')]]

\[ Text `location` , Text `error`, Boolean `is Cache` \]

Triggered when an ad fails to load.

Params           |  []()       
---------------- | ------- 
`location`          | **Text:**  The type of ad `inapp` or `reward`.
`error`          | **Text:**  The error message.
`is Cache`          | **Boolean:**  Whether or not the ad was cached.

### Ad Shown
[[Event('LeadBolt', 'Ad Shown', 'location')]]

\[ Text `location` \]

Triggered when an ad is shown to the end-user.

Params           |  []()       
---------------- | ------- 
`location`          | **Text:**  The type of ad shown `inapp` or `reward`.
