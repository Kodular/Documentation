# Chamaeleon

## 1.3 Draco   \|   _13 January 2019_

### Major Changes

- Full **HTTPS** Support  
_Big thanks to MIT App Inventor, specially to Jeffrey Schiller_

- **Integrated Kodular Account**, making _login & signup_ easier  
_In order to login, you will be redirected to Kodular Account, where you can just use your Google account or any other social provider to access to Creator_  
_You will not lose any project data with this change_

- **Compressed images** making _loading_ faster

- Added Target **SDK 28** (_Android 9_) for all apps

- Added **New Languages**
	- **Arabic** Language  
	- **Romanian**  Language

- Updated **runtime permission system**  
_It will now prompt for permissions when required, and not on start_  
[Add blocks to assist in permission workflow · mit-cml/appinventor-sources@2d19558 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/2d19558acd16f2a3bbe1920215e3bfe4bca05675)

### Companion

- Companion can be _exited_ by **pressing back button**

- Companion now works **without being connected to the same WiFi network**  
_You can even use it with your phone connected to mobile network_

### UI Changes

- Added **apps' icons** at Projects Dashboard

- Added **Show & Hide All Comments** to menu in _Blocks Editor_

- Added **Social Networks** to _Splash Screen_

- Fix **erroneously shown**  _edit and delete icons_ on Screen Properties panel

### New Components

- Added new **Bottom Navigation** component to _User Interface_ category  
![image|243x119](https://community.kodular.io/uploads/default/original/2X/f/f2ce9deff1d09fe463611de0e4b4e42278b037ad.png)

- Added new **State Progress Bar** component to _User Interface_ category  
![image|244x121](https://community.kodular.io/uploads/default/original/2X/7/7b43ffeafc01245a105942f8825f2bbb4526f511.png)

- Added new **Firebase Authentication** component to _Google_ category  
![image|243x125](https://community.kodular.io/uploads/default/original/2X/a/aa7f51685c526c1b3a8bc9bbe95e7e2ad92646f1.png)

- Added new **Firebase Remote Config** component to _Google_ category  
![download|236x125](https://community.kodular.io/uploads/default/original/2X/e/e649a29a7bff946c5749eeac2f6d8f068befe621.png)

- Moved **Fiebase DB** component to _Google_ category and renamed to **Firebase Database**

- Added new **Chameleon Ads** component to _Monetization_ category  
_Find more about this [HERE](https://community.kodular.io/t/chameleon-ads-what-is-it/15802)_  
![image|250x142](https://community.kodular.io/uploads/default/original/2X/6/62f917c42e423bccad07ec2db06bf1a521310b18.png)

### New Blocks

- Add new **bitwise** operator blocks to _Math_ category  
![image|519x80](https://community.kodular.io/uploads/default/original/2X/d/dc29a2e0ba91e3ede8a89ac51800e9345dcaef32.png)

### New Events

- **Screen**
	- `Keyboard Visiblity Changed`: triggered after _keyboard_ becomes visible or hidden  
![image|355x103](https://community.kodular.io/uploads/default/original/2X/f/f665c291e364f25092c9481e0e44555010c191f1.png)  
&nbsp;  
	- `Permission Denied`: triggered after a _permission has been denied_  
![image|396x98](https://community.kodular.io/uploads/default/original/2X/1/19625edacc44c48ca5f0c7b62b6d42711f7ec329.png)  
&nbsp;  
	- `Permission Granted`: triggered after a _permission has been granted_  
![image|299x106](https://community.kodular.io/uploads/default/original/2X/d/d2cf8b2562baab82f754dc0d0988d6fed3a3002d.png)

- **Chat View** component  
	- `Double Tap Click`: triggered after a message is _double clicked_  
![image|690x73](https://community.kodular.io/uploads/default/original/2X/a/aab1c0e6476516542aa476c40f8415f78d570fc5.png)

- **Device** component  
	- `Got IMEI`: triggered after the _Get IMEI_ method  
![image|279x109](https://community.kodular.io/uploads/default/original/2X/2/2e9bb34641ffc34d0d9907980c2b874246b98899.png)

### New Functions

- **Screen**  
	- `Ask For Permission`: prompts user asking a permission using the native Android method  
![image|283x70](https://community.kodular.io/uploads/default/original/2X/2/20fe65dca5894d6c759f04330ca694d82abc308d.png)

- **Chat View** component  
	- `Clear Chat View`: deletes all messages from layout  
![image|287x50](https://community.kodular.io/uploads/default/original/2X/d/da0401831c5a279805a2eb0073b236f85ee6ec6a.png)

- **ExoPlayer** component
	- `Resume`: resumes the paused track  
![image|233x55](https://community.kodular.io/uploads/default/original/2X/8/8ca2a74adb301ecf9fee1c07c5e07116393e5199.png)

- **Device** component  
	- `Get IMEI`: attempts to get device's IMEI code  
![image|247x39](https://community.kodular.io/uploads/default/original/2X/0/0e7859c7c6a3649bc3e8e2c31714e7854e3f5326.png)

### New Properties

- **Chat View** component  
	- `Double Tap`: enables double clicking messages  
![image|297x65](https://community.kodular.io/uploads/default/original/2X/2/236daa119bedc24670cb94459d3a1dfd588ba9c2.png)

- **Label** component  
  - `Marquee`: adds a marquee effect to the label  
![image|292x66](https://community.kodular.io/uploads/default/original/2X/0/02a47796177cc5b92e7434a9ed3894a2e252b601.png)  
&nbsp;  
  - Support for _inline clickable links_

- **Lottie** component  
	- `Clickable`: enables Lottie layout to be clickable by the user  
![image|297x66](https://community.kodular.io/uploads/default/original/2X/f/f6651b844d00bc255f8371dda6ffcae33dec4777.png)

- **Map** component  
	- `ScaleBar`: adds a scale bar to generated map  
![image|282x64](https://community.kodular.io/uploads/default/original/2X/9/9c2c0410e6b49a873a2811e529f7a152cbc742b1.png)  
&nbsp;  
	- `ScaleUnits`: changes unit system of the scale bar
![image|288x62](https://community.kodular.io/uploads/default/original/2X/9/95bd7d691ae2b44f7a2b50b1736aa69d16229b25.png)

&nbsp;

### Bugs Fixed

- _Too many extensions_ resulted on **compilation error**

- **Backpack icon** state was bugged with _multiple screens_

- **Screen**
	- **HighQuality** is now by default _false_

- **User Interface**
	- **Button** _border shadow_ fixed
	- **Chat View** messages now have _dynamic width_
	- **Chat View** _swipe on message_ fixed

- **Layout**
	- **Arrangements** _borders' color_ with _IsCard_ property  
[Changing programmatically the background color of arrangements defined as "iscard" doesn't change borders color](https://community.kodular.io/t/changing-programmatically-the-background-color-of-arrangements-defined-as-iscard-doesnt-change-borders-color/13996)  
&nbsp;  
	- **CardView** _elevation_ property wasn't working properly
[CardView ELEVATION property does't work correctly](https://community.kodular.io/t/cardview-elevation-property-doest-work-correctly/12583)

- **Drawing and Animation**
	- **Lottie** Component fixed as it was causing an _unexpected error_

- **Connectivity**
	- **ActivityStarter** Component fixed when _opening files_

- **Monetization**
	- **AdMob** Components loading bug fixed  
&nbsp;  
	- **Facebook Ads** Components fixed by upgrading libraries

- [Set webViewString directly to bypass event from blocks (#1320) · mit-cml/appinventor-sources@2869a13 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/2869a13e01c1fbcfdf5e27640c15ca36e7cde912)

- [Fix null pointer when logging before user info available · mit-cml/appinventor-sources@b99cfc4 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/b99cfc47eea0d514da2340c99f2a8fa84d6cf863)

- [Fix GeoJSON parsing in MockFeatureCollection · mit-cml/appinventor-sources@517360b · GitHub](https://github.com/mit-cml/appinventor-sources/commit/517360b2b19f2e5b1c797f88619f0e49f2af0f9f)

- [Make Backpack open in Firefox · mit-cml/appinventor-sources@3372a19 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/3372a195e0829556267bfb7811d7c7eafc7e7544)

- [Ensure connections added to ConnectionDB on load · mit-cml/appinventor-sources@55b5834 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/55b5834229e56c018cc9eddb95a5b233ac81a296)

- [Fix connection DB bug when workspace contains blocks with errors · mit-cml/appinventor-sources@f6f0160 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/f6f0160297b6a50e72bccd880e7ef063235fa13d)

- [Stop resetting list of connections when errors occur · mit-cml/appinventor-sources@ac7c0e4 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/ac7c0e4c74009b064e617ab2387caa43fb60f9fa)

- [Fix handling of Map.ZoomLevel when animating changes · mit-cml/appinventor-sources@6f14488 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/6f144887abd7be4bb78714720d8df343726890fa)
