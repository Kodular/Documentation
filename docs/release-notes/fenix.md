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

## 1.5.1 Fenix   \|   _02 August 2021_

### Behaviour Changes

- Download app button now opens a **new tab**.
*It was instead opening the link in the same tab, causing some navigation issues.*

- **Upgraded the extension protection** system.
*Now your apps will be safer from malicious extensions.*

- Changed **default app name** to "Kodular App".
*Now by default, app names will not be blank.*

- Changed **Google Ad Manager ad unit** format.
*Rebuilds are required for apps exported before this update.*

### Component Changes

- **YouTube Player** <small>*Moved* to Google</small>

### Bug Fixed

- Fixed **Web Viewer positioning**.
*Web Viewer was rendering in a different position rather than the defined one.*

- Fixed **File provider** issue.
*Manifest contained Kodular's package name rather than real app package name.*

- Fixed **copying assets in Companion**.
*The original path was being replaced.*

- Fixed **Google Ad Manager test mode**.
*Companion will now be forced to display test ads.*

- [Fix issue with extension info being lost in builds](https://github.com/mit-cml/appinventor-sources/pull/2491)

## 1.5.2 Fenix   \|   _15 September 2021_

### Behaviour Changes

- Implemented **Target SDK 30**.
*This is a hotfix so you can keep publishing your apps. Some bugs may occur in Android 11 devices.*

- Updated **initial view to Projects** in main dashboard.
*We have addressed some issues causing the launch screen to sometimes be the Designer of random projects.*

- [Implement annotations for Services and Content Providers.](https://github.com/mit-cml/appinventor-sources/pull/2217)
*We are adding support for `<service>` and `<provider>` tags in AndroidManifest.*

- [Implement conditional permissions for Texting and PhoneCall.](https://github.com/mit-cml/appinventor-sources/pull/1506)
*We are adding conditional permission for those two components to better comply with Play Store policies.*

- [Implement a universal URL format for assets in WebViewer.](https://github.com/mit-cml/appinventor-sources/pull/2272)
*Added `localhost` as universal URL format to access assets in both Companion and compiled app.*

### Bug Fixed

- Fixed **State Progress Bar** causing issues with AndroidX.
*We have updated SPB library to be compatible with AndroidX sources.*

- Improved **file saving** in Creator.
*After fixing a couple of bugs, we will be saving files with more confidence, and better handling those errors.*

- [Fix AAB asset compression breaking media files.](https://github.com/mit-cml/appinventor-sources/pull/2530)
*Assets within AAB files should now work properly with multimedia components.

## 1.5.3 Fenix   \|   _03 October 2021_

### Behaviour Changes

- **Google Ad Manager** monetization components are now **available for everyone**.
*You can now go to your My Kodular payments section, and apply for a child account to start maximizing your revenue.*

### Bug Fixed

- [Fix building apps with non-ASCII app names.](https://github.com/mit-cml/appinventor-sources/pull/2543)
*It turns out that the Java Properties class was reading/writing using a different default charset depending on whether
  the method is called with an InputStream or a Reader.*

## 1.5.4 Fenix   \|   _26 April 2022_

### Behaviour Changes

- **Increased Minimum SDK to 21 (*Android 5.0* :lollipop:)**
We're bumping Minimum SDK to be able to add more features to the platform later on. Based on usage analytics, this
- increment will have a minimum impact over the entire users' pool.

- **App Name can be defined in the creation modal**
When creating a new project, you can now set the app's name directly from the initial dialog.

- [Add dropdown blocks to the blocks editor.](https://github.com/mit-cml/appinventor-sources/pull/2301)

### Components Changes

- **Admob Banner**
_Not available to new projects anymore_

- **Admob Interstitial**
_Not available to new projects anymore_

- **Admob Rewarded Video**
_Not available to new projects anymore_

### New Blocks

- **Custom Tabs** component
  - Added **Prefer Native** property

- **Pollfish** component
  - Added **Request UUID** block property

### Bug Fixed

- **AdColony Library** --> Version 4.6.5

- **StartApp Library** --> Version 4.9.2

- [Fix streaming SpeechRecognizer not working on Android 11.](https://github.com/mit-cml/appinventor-sources/pull/2559)

- [Implement multidex in the buildserver.](https://github.com/mit-cml/appinventor-sources/pull/2187)

## 1.5.5 Fenix   \|   _26 June 2022_

### Behaviour Changes

- **Implemented Target SDK 30 (*Android 11*)**
We've finally fully implemented and integrated Target SDK 30 in our system, to make all apps compatible with Android
11. It took a little bit more than expected because of lots of breaking changes in the Android filesystem.
Target SDK 31 (*Android 12*) will arrive in a few weeks, but there are not so many changes required.

### Components Changes

- **Admob Banner**
_Not available anymore, please switch to Google Ad Manager_

- **Admob Interstitial**
_Not available anymore, please switch to Google Ad Manager_

- **Admob Rewarded Video**
_Not available anymore, please switch to Google Ad Manager_

### Bug Fixed

- Fixed _Screen Orientation_ property.

- Fixed _Enum_ blocks causing some strange behavior.

- [Update all writing components to use Form's DefaultFileScope.](https://github.com/mit-cml/appinventor-sources/commit/ce0fd4f0e552a40df822fdf3cd66bf2293ca538c)

- [Fix permission requests for some components.](https://github.com/mit-cml/appinventor-sources/commit/fc1e550f1a53f72e36af83c1cee2546c7f07f8f9)

- Some other minor bugs have been fixes.

## 1.5.6 Fenix   \|   _04 July 2022_

### Behavioral Changes

- **Allow setting a custom *Floor eCPM* value per ad component**
If you are using Google Ad Manager components, you can now specify a custom **Floor eCPM** value for each of your ad
slots. _It is recommended to keep it in `Optimized`, so Google chooses the best inventory to suit your needs._
![image|295x471, 75%](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/2/52bdf45a51ff17a97099feed613ef56fed5fc9b1.png)![image|507x40, 75%](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/1/9/19b411510c073c7400723026ac2337a8dfdb98d5.png)

### Bugs Fixed

- Added missing upgrader for ***File*** component.

- Fixed *Exists* method in **_File_** component.

- Fixed *Is Directory* method in ***File*** component.

- Fixed specific case when *pathBlock* had a null case in ***File*** component.

- Fixed null-pointer exception when property type is missing in ***File*** component.

- Fixed *Test Mode* in ***Google Ad Manager*** components.

- Fixed ad sizes in ***Google Ad Manager*** components.

- Fixed *Notification Opened* event wrongly triggering in ***Push Notifications*** component.

- Fixed text direction in components using ***Text View***.

- Fixed some alignments using a wrong gravity values.

- Some other minor bugs have been fixes.

## 1.5B.0 Fenix   \|   _13 July 2022_

### Behavioral Changes

- **Introducing [Kodular Premium](https://community.kodular.io/t/kodular-premium/187508)**
  *We will be actively monitoring user feedback. We have already received some suggestions about it, and we will probably increase the extension limit in the upcoming days.*

### Bugs Fixed

- Reduced built app size by removing unused libraries.

- Some other minor bugs have been fixes.

## 1.5B.1 Fenix   \|   _31 July 2022_

### Bugs Fixed

- Fixed Premium payments which were taking a few hours to reflect changes.

- Fixed Download component missing permission.

- Fixed some permissions bugs related to Android 11.

- Some other minor bugs have been fixes.

## 1.5B.2 Fenix   \|   _08 October 2022_

### Major Changes

- Update Target SDK to 31 (_Android 12_)

### Bugs Fixed

- Fixed Play Billing library (`4.1.0`).

* [Fix crash when File.MoveFile target exists](https://github.com/mit-cml/appinventor-sources/pull/2722)

* [Make FileUtil.getFile create missing parent directories](https://github.com/mit-cml/appinventor-sources/pull/2713)

* [Make sure AppInventorBinaries exists](https://github.com/mit-cml/appinventor-sources/pull/2719)

* [Fix how FileUtil.readFile handles assets](https://github.com/mit-cml/appinventor-sources/pull/2720)

* [Allow extension option list enums to not have fromUnderlyingValue method](https://github.com/mit-cml/appinventor-sources/pull/2731)

* [Fix read permission asked in CloudDB.GotValue on Android 12](https://github.com/mit-cml/appinventor-sources/pull/2726)

## 1.5B.3 Fenix   \|   _12 February 2023_

### Components Changes

- Added new **In-App Review** component.

- Deprecated **Google Admob** components.
_This component no longer serves ads, please switch to Google Ad Manager._

### Bugs Fixed

- Upgraded Google Play libraries.

- Some other minor bugs have been fixes.

## 1.5C.0 Fenix   \|   _12 February 2023_

### Components Changes

- Upgraded **Target SDK** to 33 (Android 14).

- Deprecated **Unity Ads** components.  
  _Current SDK is not suitable for Kodular compatibility._

### Bugs Fixed   \|   _15 October 2023_

- Sound files were never loaded from EXTERNAL_APP_FILES_DIRECTORY.

- Upgraded Google Ad Manager SDK libraries.

- Upgraded StartApp / Start.io SDK libraries.

- Some other minor bugs have been fixed.

## 1.5C.1 Fenix

### Major Changes

- Increased build files timeout to 1h.

### Bugs Fixed

- Fixed AAB build issues related to DEX files.

- Added missing permissions to some components.

- Some other minor bugs have been fixed.

## 1.5C.2 Fenix

### Library Upgrades

- Upgraded Google Play Billing library to v5.

### Bugs Fixed

- Fixed Google Ad Manager consent bug.

- Some other minor bugs have been fixed.

## 1.5C.3 Fenix   \|   _31 March 2024_

### Library Upgrades

- Upgraded Start.io / StartApp library to 4.10.1 (Google compliant).

### Bugs Fixed

- Added missing `AD_ID` permission for Google Ad Manager components.

- Some other minor bugs have been fixed.

## 1.5D.0 Fenix   \|   _3 November 2024_

### Main Changes

* Added support for **Target SDK 34**.

### Library Upgrades

* Upgraded Google Ad Manager library to v23.

### Bugs Fixed

* Other minor bugs have been fixed.

## 1.5D.1 Fenix   \|   _9 February 2025_

### Library Upgrades

* Upgraded Google Play Billing library to v7.1.1.
* Upgraded Facebook Audience Network library to v6.18.0.

### Bugs Fixed

* Added `RECEIVER_EXPORTED` flag while registering receivers in Download component.
* `KeyboardVisibilityChanged` event should fire when the visibility actually changes.
* Video Player will now play videos from assets
* Various crashes when testing via USB.
* Other minor bugs have been fixed.

## 1.5D.2 Fenix   \|   _23 March 2025_

## New Features

* Build apps using a new experimental D8 flag.
    * More details here: https://community.kodular.io/t/d8-fix-is-available/285281?u=diego.
* [Added @UsesXmls annotation which allows to create xml files in APK resources](https://github.com/mit-cml/appinventor-sources/pull/3292)
* [Implement a default uncaught exception handler](https://github.com/mit-cml/appinventor-sources/pull/3254)

## Bugs Fixed

* Fixed some build issues with the new D8 compiler.
* Made small improvements to the Google Ad Manager integration.
* [Fix crashes in `EventDispatcher`](https://github.com/mit-cml/appinventor-sources/pull/3062)
* [Replaced resizableActivity to resizeableActivity](https://github.com/mit-cml/appinventor-sources/pull/3192)
* Other minor bugs have been fixed.

### Pending Known Issues

* `Flags.initialize` issue for Google Ad Manager is still on ongoing investigation. It seems to be an issue in the SDK.

## 1.5D.3 Fenix   \|   _13 May 2025_

## Bugs Fixed

* Google Ad Manager components have been reworked from scratch, fixing the `Flags.initialize` issue.
* Updated AppLoving libraries.
* Fixed issues with Premium subscription not being activated temporarily.
* Other minor bugs have been fixed.

## 1.5D.4 Fenix   \|   _13 July 2025_

## Bugs Fixed

* Fix null authority check in WebViewer request interception.
* Duplicate gravity exception by removing existing drawer views with START gravity.
* Validate toast message to prevent IllegalStateException
* Other minor bugs have been fixed.
