# Chamaeleon

## 1.2 Chamaeleon   \|   _27 October 2018_

### Major Changes

- Renamed _Makeroid_ to **Kodular**

- _Deployed_ new custom **Rendezvous** server

- _Improved_ **signing APK** procedure

- _Added_ **64bit support** for apps


### Companion

- Fixed _little bug_ when **downloading APKs through HTTPS**


### UI Changes

- **Halloween Easter Eggs** are hidden in our Creator
_Share the ones you find using the #halloween18 tag_  


### Bugs Fixed

- **_Critical Issue_** with libraries was causing apps to not open

- **User Interface**
  - BottomSheet: _Registering components were causing error sometimes_


&nbsp;


### New Components

- Added new **Chat View** component to _User Interface_ category  
![image|241x128](https://community.kodular.io/uploads/default/original/2X/f/f91a33fb718e72ea13bf7279cc5816c97338eb8f.png)

- :exclamation: Added new **Lottie** component to _Drawing and Animation_ category  
![image|249x166](https://community.kodular.io/uploads/default/original/2X/5/5d2d608dd60e1b1afbf8387aec181f980d121c82.png)

- :exclamation: Added new **Cryptography** component to _Storage_ category  
![image|250x134](https://community.kodular.io/uploads/default/original/2X/0/0b15f0e7dadf742f2545f6cb2d9ae256c6a5fc6c.png)


### New Events

- **Web View** component
  - `After JS Evaluated`: triggered after the _JS Inject_ function  
![image|333x109](https://community.kodular.io/uploads/default/original/2X/a/a02dc885521723d55d4308a743b3334506150486.png)
&nbsp;
  - `Page Loaded`: triggered after the page has been loaded _at 100%_  
![image|306x84](https://community.kodular.io/uploads/default/original/2X/b/ba78ac720c76fb1ed2db673432c9310258efddab.png)
&nbsp;
  - `On Console Message`: triggered after a message _is pushed_ to console  
![image|354x112](https://community.kodular.io/uploads/default/original/2X/c/c2785d28b860ab20585c00ae792103c7e3f71403.png)
&nbsp;
  - `On Download Start`: triggered after a download _starts_  
![image|457x110](https://community.kodular.io/uploads/default/original/2X/c/c2785d28b860ab20585c00ae792103c7e3f71403.png)


### New Functions

- **Web View** component
  - `Load HTML`: loads and displays an HTML text  
![image|281x75](https://community.kodular.io/uploads/default/original/2X/c/c2785d28b860ab20585c00ae792103c7e3f71403.png)
&nbsp;
  - `Evaluate JS`: executes a JS piece in the website  
![image|286x74](https://community.kodular.io/uploads/default/original/2X/c/c2785d28b860ab20585c00ae792103c7e3f71403.png)
&nbsp;
  - `Go Back or Forward`: goes back the given steps (_negative number_) or forward (_positive number_)  
![image|348x73](https://community.kodular.io/uploads/default/original/2X/c/c2785d28b860ab20585c00ae792103c7e3f71403.png)
&nbsp;
  - `Reload`: refreshes the current page  
![image|240x50](https://community.kodular.io/uploads/default/original/2X/c/c2785d28b860ab20585c00ae792103c7e3f71403.png) 


### New Properties

- **Web Viewer** component
  - `Desktop Mode`: loads the page in Desktop Mode  
![image|279x61](https://community.kodular.io/uploads/default/original/2X/5/54cb6cbe50692accbce40d9e6c7e1463657285c1.png)
&nbsp;
  - `Enable JavaScript`: allows the page to execute JavaScript  
![image|293x71](https://community.kodular.io/uploads/default/original/2X/5/54cb6cbe50692accbce40d9e6c7e1463657285c1.png)  
&nbsp;
  - `User Agent`: changes the requested User Agent  
![image|282x71](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  

- **Notifier** component
  - `Text Font Typeface`: changes the font type in the message  
![image|272x65](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  
&nbsp;
  - `Text Font Typeface Import`: loads an external font type in the message  
![image|275x72](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  
&nbsp;
  - `Title Color`: changes the color of the title  
![image|269x60](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  
&nbsp;
  - `Title Font Typeface`: changes the font type in the title  
![image|277x62](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  
&nbsp;
  - `Title Font Typeface Import`: loads an external font type in the title  
![image|241x71](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  

- **Bottom Sheet** component
  - `Show Statusbar`: shows or hides the statusbar
![image|277x68](https://community.kodular.io/uploads/default/original/2X/8/8dd5f9c7d7a6b83ccb0b14eabbc810dc04a9e94c.png)  


## 1.2.1 Chamaeleon   \|   _23 November 2018_

### Improvements

- Removed **_Subscribe to Notifications_** button in _Creator_  
_It was added on [our main website](https://www.kodular.io)_
- Changed **_Donations Link_** in _Creator_  
_Now points to [Donate Kodular](https://www.kodular.io/donate)_
- Stop propagation of mouse events on warning toggle button  
_[Stop propagation of mouse events on warning toggle button · mit-cml/appinventor-sources@c1e9dc7 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/c1e9dc7e38600eb702373cf3d78c896508a9eb98)_

### UI Changes

- _Reverted_ **_Pumpkin Backpack_**
- _Reverted_ **_Halloween Dark Theme_**
- _Changed_ a few more **_references_** to <del>Makeroid</del><ins>Kodular</ins>

### Bugs Fixed

- **_Signup email_** with wrong content (`activation link was not visible`)
- **_Cryptography_** component using Base64 on low APIs (`it was crashing`)
- **_Lottie_** component using Fill Parent properties (`it was not working`)
- GeoJSON Source processing in **_MockFeatureCollection_**  
_[Fix GeoJSON Source processing in MockFeatureCollection (#1248) · mit-cml/appinventor-sources@9d95098 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/9d95098654ff5d6e02dfb462a7dd125163d0e277)_
- Clearing of **_MockFeatureCollection_** when Source is None  
_[Fix clearing of MockFeatureCollection when Source is None · mit-cml/appinventor-sources@0206b00 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/0206b0064affe0fe692cb5b2c7183f5befc2ef0b)_
- Removed **_BOM_** from GeoJSON files  
_[Remove BOM from GeoJSON files · mit-cml/appinventor-sources@560b372 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/560b3724a6c86bd2a5f678dfc270d9a185b0ed2f)_
- Little bug on **_AARLibrary_**  
_[Bugfix to AARLibrary · mit-cml/appinventor-sources@eebd635 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/eebd635fd6c331955ac86c4ea2e7f9f1080726ae)_
- Force **_MockCircle_** default position to (0, 0)  
_[Force MockCircle default position to (0, 0) · mit-cml/appinventor-sources@118fe43 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/118fe43072288ed62dffda1339f58f758694b199)_
