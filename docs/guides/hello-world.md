# Building your first app <small>with Kodular</small>

Welcome to Kodular !  
In this tutorial, you will learn to create your first app with Kodular.

!!! tip ""
    If you have any queries or doubts, feel free reach out to us on the [community](https://community.kodular.io).

## The first steps


1. Navigate to [Kodular Creator](http://creator.kodular.io). You will be presented with a _Login_ screen. Login to continue.

2. Then after that you will be taken to the <span class="keyword">Projects</span> screen. A _Project_ is nothing but an app.

3. Click on `+ New Project` button to create a `Project`.

4. You can enter any name you want. In this tutorial, we will name the app `HelloKodular`.  
Click `Next`.
The _project_ will be created and you will be taken to the <span class="keyword">Designer</span> page of your project.

5. For testing your app while developing,  please see [Live Development](/live-development).

!!! tip
    At this point, we recommend going through the [Understanding Kodular](/guides/kodular-concepts/) page to get an overview of
    developing apps in Kodular.

## The User Interface of Kodular Creator

First, let us walk thorough the Designer UI of Kodular Creator.
<br><br><br>
<div class="browser-mockup">
  <img src="/assets/images/other/designer-tagged-with-numbers.jpeg" />
</div>
<br><br><br>
The above shown screen is called **_Designer_**.  
From this page, you can add/delete <span class="keyword">Components</span> and modify their properties.

1. On the left side of your page, numbered `1` is the <span class="keyword">Components Palette</span> or simply   **_Palette_** . This consists of various components grouped under different categories.  
When you need to add a component, you can click on the component on the _Palette_, hold it and drag it onto the <span class="keyword">Viewer</span> area of the _Designer_ page.

2. On the right side, you have the <span class="keyword">_Components Hierarchy_</span> and the <span class="keyword">Designer Properties Panel</span> (which is visible when you select a _component_).  
The _Components Hierarchy_ shows the visible components added into the current `project`.  
The _Designer Properties Panel_ will be visible when clicking on a component and displays the properties of that component.

3. In the middle is the <span class="keyword">Viewer</span> which gives a mocked up view of the app as seen on  
a real device. To add a component to the `project`, drag the component from the _Palette_ and drop it inside the _Viewer_.  
Below the _Viewer_, the <span class="keyword">Non-visible Components Panel</span> is present, which shows all the _Non-Visible Components_ added to the current `project`.

4. At the top of the page, various menus and options are present.


## Building the app


Now that we are familiar with the interface, we can get to work and create a simple app, with a _[Button](/components/user-interface/button)_ which shows the text "Hello World".

**Step 1**  Find the _Button_ component from the _Palette_ under the _User Interface_ category. Click on it, and drag it onto the _Viewer_, while keeping the mouse button clicked down. This is how you add a component to
the project.

**Step 2**  Now click on the _Button1_ displayed on the _Components Hierarchy_. By default, this is how the components are named, you can rename them if needed.  
The _Properties Panel_ for the Button should be visible now.

**Step 3**  Now, find the _**Text**_ property in that panel and change that to `Hello World !`.  
If you have connected your companion and testing using it, then now the change should be reflected on the device.

**Step 4**  Now, you can select `Export` menu from the top menubar to build your project into an APK, which can be installed in an Android device.

**Step 5** Once the APK is built, the APK will either be downloaded onto your computer, or the barcode to the link will be shown based on the option you chose.  
You can transfer the APK onto the Android device and you can install your own app on the device!


!!! success "Yay !"
    That's it !! You have successfully built your first app with _Kodular_.