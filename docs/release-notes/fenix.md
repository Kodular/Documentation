# Kodular Fenix

![Kodular Fenix](https://assets.kodular.io/images/creator/versions/fenix_white.png)

## 1.5 Fenix   \|   _15 July 2021_

### Major Changes

- Reverted **Ads Commission** system.  
*We hear you when you say commissions are a hassle to calculate; we are bringing back our legacy system of simpler
commissions for each component. You can find their values in their respective docs pages.*

- Migrated to **AndroidX** libraries.  
*Our sources no longer use legacy support libraries and have switched to AndroidX. Some extensions may face crashes
until their developers upgrade them.*

- Added new **app settings modal**.  
*Generic app settings that were previously placed in Screen1’s properties or properties that were global for the app
have been moved to a new app settings modal just next to the Designer/Blocks buttons. Here’s a full list of properties
that have been moved:*  
    - **App Name** <small>`Screen1` > `General`</small>
    - **Icon** <small>`Screen1` > `General`</small>
    - **Splash Screen** <small>`Screen1` > `General`</small>
    - **Splash Image** <small>`Screen1` > `General`</small>
    - **Accepted Shared File Types** <small>`Screen1` > `General`</small>
    - **Sizing** <small>`Screen1` > `General`</small>
    - **Show Lists As Json** <small>`Screen1` > `General`</small>
    - **RTL Support** <small>`Screen1` > `General`</small>
    - **Tutorial URL** <small>`Screen1` > `General`</small>
    - **Primary Color** <small>`Screen1` > `Theming`</small>
    - **Primary Color Dark** <small>`Screen1` > `Theming`</small>
    - **Accent Color** <small>`Screen1` > `Theming`</small>
    - **Theme** <small>`Screen1` > `Theming`</small>
    - **Minimum SDK Level** <small>`Screen1` > `Publishing`</small>
    - **Package Name** <small>`Screen1` > `Publishing`</small>
    - **Version Code** <small>`Screen1` > `Publishing`</small>
    - **Version Name** <small>`Screen1` > `Publishing`</small>
    - **Google Ads App ID** <small>`AdMob`/`Ad Manager` > `Monetization`</small>
    - **Google Play Games App ID** <small>`Google Play Games` > `API Keys`</small>
    - **OneSignal App ID** <small>`OneSignal` > `API Keys`</small>
    - **Google Maps App ID** <small>`Google Maps` > `API Keys`</small>

- [**kodular.app**](https://kodular.app) links will be **valid for only 10 minutes**.  
*Generated links will move from a 2-hour validity to just 10 minutes.*

- [Implemented **metadata annotations** for **extensions**](https://github.com/mit-cml/appinventor-sources/commit/9db6dc2914f572aab9e7531bbba133eab1f9ff48).

### New Components

- **Google reCaptcha** <small>Google</small>  
![image|266x155](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/e/7eb9b3c0131ec749ed4472a0c5b615aa34618378.png)

- **Banner Ad** <small>Monetization > Advertising</small>  
![image|244x206](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/c/6ccae5219345b88304cc96c20ac7c6bdd6765e5e.png)

- **Interstitial Ad** <small>Monetization > Advertising</small>  
![image|238x203](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/a/8/a8d5a81a5baf5f99f24a144c412857705a61a234.png)

- **Rewarded Ad** <small>Monetization > Advertising</small>  
![image|244x205](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/1/e/1effb5b6547a7af6c53e42b1d010cbd7ba970af4.png)

- **ExoPlayer** <small>_Moved_ to Experimental</small>

- **YouTube Player** <small>_Moved_ to Experimental</small>

### New Features

- **Label** <small>User Interface</small>  
    - Added **`Max Lines`** property. <small>Advanced</small>  
![image|278x50](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/2/62ee48e89e76b02b110f3a863af9a7f43bc71db6.png)

- **Textbox** <small>User Interface</small>  
    - Added **`Max Lines`** property. <small>Advanced</small>  
![image|278x50](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/2/62ee48e89e76b02b110f3a863af9a7f43bc71db6.png)

- **Google Maps** <small>Google</small>  
    - Added **`API Key`** property. <small>App Settings Modal</small>  
![image|606x135](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/1/9128e719ef7b6492fde8c4d7d6c01cdb267f14de.png)

- **AdMob Banner** <small>Monetization > Advertising</small>  
    - Added **`App ID`** property. <small>App Settings Modal</small>  
![image|614x137](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/0/402299c86ff6ac79319961e1f54d75d473e4bd4d.png)

- **AdMob Interstitial** <small>Monetization > Advertising</small>  
    - Added **`App ID`** property. <small>App Settings Modal</small>  
![image|614x137](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/0/402299c86ff6ac79319961e1f54d75d473e4bd4d.png)

- **AdMob Rewarded Video** <small>Monetization > Advertising</small>  
    - Added **`App ID`** property. <small>App Settings Modal</small>  
![image|614x137](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/0/402299c86ff6ac79319961e1f54d75d473e4bd4d.png)

### Library Upgrades

- Material Icons Font > `latest`
- Facebook Audience Network > `6.5.0`
- Onesignal SDK > `3.15.6`
- Play Billing > `3.0.3`
- Play Services > `18.0.0`

### Bugs Fixed

- Enhanced **anti-malicious extension system**.  
*We have improved our malicious extension detection system; now apps won't start if a malicious extension is detected.*

- Fixed **assets bug**.  
*There was a small bug that caused assets to not load sometimes due to a missing `file://` in path.*

- Fixed **buildserver bug** that them caused to sometimes **fatally terminate**.  
*Buildservers should be more stable now with this bugfix.*

- Fixed bug in **File/Exists block**.  
*The Exists block should now work as expected.*

- **Relative file paths** are now accepted in **File/Copy** block.  
*Only absolute paths were working; now relative paths work too.*

- Allow **Lottie** to access assets from Companion.  
*Lottie component was previously not loading assets in the Companion.*

- **OneSignal** now shows **native notifications** if app is focused.  
*A new native notification will show instead of the standard Android dialog when triggered if the app is open.*

- Fixed **Play Billing** component.  
*We have refactored and fixed this outdated component.*

- [Mitigate **Chrome 89 change**](https://github.com/mit-cml/appinventor-sources/commit/b4557d64c8938e60298e5376157365c0c98a6b72).  
The Companion should now work as expected on Chromium browsers.
