# Understanding Kodular

The apps in Kodular are built as a combination of various <span class=keyword>*Components*</span> , with each individual _Component_ being used
for a specific purpose.

The **Component**'s behaviour is configured using <span class=keyword>*Blocks*</span>

<br><br>
![Illustration](/assets/images/other/components-blocks-illustration.jpg)

Components + Blocks = Your Awesome App !
{: .img-caption }


## What are Components ?

Components are the basic building elements of any app in Kodular.
Everything in the app is done with the help of one component or the other.

Different components are used for different purposes.
One component may be used to design the User Interface(UI) of the app,
for example a _Button_ component, while others may be used for performing actions like
communicating to a database, saving an image to the Android device's folder etc. 
for example the _FirebaseDB_ component.

## What are Blocks ?

Blocks are ones which are used describe how to do a task. The way in which the **_Components_**
respond to various actions and events in the app is designed using the **_Blocks_**.

For example, how the app should respond when a _Button_ is clicked, what data is to be communicated to the database using FirebaseDB component etc. are all configured using
the **_Blocks_**.


Thus, by using the various **_Components_**  and by configuring its behaviour and response to actions from the user
with the help of **_Blocks_**, an app is "koded" in Kodular.


## The Car Analogy

Let us consider an analogy of a _Car_ to better understand the concept
of the components and blocks.


A Car is constructed using various parts, like _wheels, doors, engine, steering_ etc. each performing its own unique function.

Some of these parts are visible to the driver(who is the user of the car) and he interacts with them directly,
while some of them are not visible.
And these parts know what their function is and how to perform it, for example, the function of the 
wheel is to provide support and move the car, the function of the steering wheel is to help streer the car and so on.

An Android app is like the Car.
Like how a car has various parts, an app is constructed using various _Components_, like _Button, Label, File_ etc. with each _component_ being used for a particular purpose.

Like the parts of the Car, some of these _Components_ are visible to the user of the app and they interact with 
it, while some of the _components_ don't interact directly with the user.
The _behaviour_ or the purpose of these _components_ are configured using the _Blocks_.
The "how to perform the function of a component" part is configured by using the **_Blocks_ **.


## Types of Components


 * **<span class="keyword">Visible Components</span>:** The components that can be viewed in the _Viewer_ panel  of the _Designer_ page are known as Visible Component. They are visible to the user in the app and the user
  can interact with it directly and help in building the User Interface of the app.
<br>

 * **<span class="keyword">Non-Visible Components</span>:** The components that are not viewed in the _Viewer_
   panel of the _Designer_ page are known as Non-Visible Component. They are the components that usually do other things like saving a _file_ to the device's storage, getting data from various sensors of the device
   etc. But, sometimes, these components may also be used to create visible elements in the app. For example,
   the **_Notifier_** component, which is a _Non-visible Component_ can be used to create a dialog which is visible on the device's screen.


## Types of Blocks <small> of components</small>


Each _Component_ has its own set of blocks, divided into three types:

* [Property blocks](#property-blocks)
* [Method blocks](#method-blocks)
* [Event blocks](#event-blocks)

### Property Blocks

Each _component_ comes with its own set of <span class="keyword">Properties</span>, which describe its characteristics. For example, the _Button_ component has properties like _Background Color, Text Color, Text Font Size_ etc. which are characteristics that describe the features of that particular button.

Some these _Properties_ can either be set from **_Designer_** page, or through **_Blocks_**, while some can be 
set only through **_Blocks_** and some only from the **_Designer_**.

<br><br>
![property-blocks](/assets/images/other/property-block-example.jpg){: .preview-img }

The _Setter and Getter_ block for the Background Color property of a button.
{: .img-caption }

At any time in the app, the given property of a _component_ can be read through a <span class="keyword">Getter Block</span>.
It gives the current value of that property of that particular _component_.

Similarly, the given _property_ of a _component_ can be modified during the runtime of the app thorugh 
<span class="keyword">Setter Blocks</span>.

The _Property_ blocks are <span style="color: green;">Green </span> in color.

!!! info
    Not all the _properties_ of the component have both _Getter and Setter_ Blocks.
    Some of them may have only _Getter_ or sometimes only _Setter_ blocks.



### Method Blocks


<span class="keyword">Methods</span> are certain functions that a _component_ can do. For example, the _Sound_ 
component should be able to play the music when required. This is done by using a _Method_ called **Play**,
which instructs the components to carry out the task of playing the music.

So, _Methods_ are nothing but an instruction to carry out a particular task, like playing the music.

Some _methods_ require some additional data, which will also be used in carrying out that task.
For example, _Firebase DB_ component stores the data using a method called _Store Value_. But how 
will the component know what data to store and under what name ?
This is where <span class=keyword> Parameters</span> or simply **Params** are used.

The _Store Value_ methods has takes two _parameters_(i.e it makes use of two different data that need to be 
specified) namely _tag_ and _value To Store_. So this method can be <span class=keywords> called</span>(i.e used
in the blocks) along with the two data that it needs like shown below.

<br><br>
![method-block](/assets/images/other/method-block-example.png){: .preview-img }

The _Method_ to store data in the Firebase DB.
{: .img-caption }


### Event Blocks


Kodular apps are "koded" in an event-driven approach. That is, the _blocks_ or _behaviour_ of the app is  executed based on the various events that occur. There is a wide range of _events_ that occur thorughout the
time for which the app is running, and the response of the app to these _events_ can be configured.

For example, the user _clicking a Button_, _the app starting_ are all events.
The response of the app to such events are configured by grouping the desired behaviour under the <span class="keyword">Event</span> block.
The _methods_ and _property_ blocks grouped under each event are executed whenever that particular event occurs.

Let us take an example.  
If you want to change the _Button_ text when the user clicks it, you have to
group the logic to change the text under the **_Button.Clicked_** event. This is shown below.

<br><br>
![event-block](/assets/images/other/event-block-example.png){: .preview-img }

The _Event_ block for changing button text when clicked.
{: .img-caption }


!!! tip ""
    If you have any queries or doubts, feel free to ask about it on the [community](https://community.kodular.io)