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
