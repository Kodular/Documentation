# Control

* [if & if else](control.md#if)
* [for each from to](control.md#forrange)
* [for each in list](control.md#foreach)
* [while](control.md#while)
* [if then else](control.md#choose)
* [do](control.md#doreturn)
* [evaluate but ignore result](control.md#evaluate)
* [open another screen](control.md#openscreen)
* [open another screen with start value](control.md#openscreenwithvalue)
* [get start value](control.md#getstartvalue)
* [close screen](control.md#closescreen)
* [close screen with value](control.md#closescreenwithvalue)
* [close application](control.md#closeapp)
* [get plain start text](control.md#getplainstarttext)
* [close screen with plain text](control.md#closescreenwithplaintext)
* [break](control.md#break)

## if & if else {#if}

![](/assets/images/blocks/control/if.png)

Tests a given condition. If the condition is true, performs the actions in a given sequence of blocks; otherwise, the blocks are ignored.

![](/assets/images/blocks/control/ifelse.png)

Tests a given condition. If the result is true, performs the actions in the -do sequence of blocks; otherwise, performs the actions in the -else sequence of blocks.

![](/assets/images/blocks/control/ifelseif.png)

Tests a given condition. If the result is true, performs the actions in the -do sequence of blocks; otherwise tests the statement in the -else if section. If the result is true, performs the actions in the -do sequence of blocks; otherwise, performs the actions in the -else sequence of blocks.

The gif below shows how to use the if else mutator block.

![](/assets/images/blocks/control/if.gif)

## for each from to {#forrange}

![](/assets/images/blocks/control/forrange.png)

Runs the blocks in the do section for each numeric value in the range starting at_from\_and ending at\_to_, incrementing\_number\_by the value of\_by\_each time. Use the given variable name,\_number\_to refer to the current value. You can change the name\_number\_to something else if you wish.

## for each in list {#foreach}

![](/assets/images/blocks/control/foreach.png)

Runs the blocks in the do section for each item in the list. Use the given variable name,_item_, to refer to the current list item. You can change the name\_item\_to something else if you wish.

## while {#while}

![](/assets/images/blocks/control/while.png)

Tests the -test condition. If true, performs the action given in -do , then tests again. When test is false, the block ends and the action given in -do is no longer performed.

## if then else {#choose}

![](/assets/images/blocks/control/choose.png)

Tests a given condition. If the statement is true, performs the actions in the then-return sequence of blocks and returns the then-return value; otherwise, performs the actions in the else-return sequence of blocks and returns the else-return value.

## do {#doreturn}

![](/assets/images/blocks/control/doreturn.png)

Sometimes in a procedure or another block of code, you may need to do something and return something, but for various reasons you may choose to use this block instead of creating a new procedure.

## evaluate but ignore result {#evaluate}

![](/assets/images/blocks/control/evaluate.png)

Provides a "dummy socket" for fitting a block that has a plug on its left into a place where there is no socket, such as one of the sequence of blocks in the do part of a procedure or an if block. The block you fit in will be run, but its returned result will be ignored. This can be useful if you define a procedure that returns a result, but want to call it in a context that does not accept a result.

## open another screen {#openscreen}

![](/assets/images/blocks/control/openscreen.png)

Opens the screen with the provided name.

## open another screen with start value {#openscreenwithvalue}

![](/assets/images/blocks/control/openscreenwithvalue.png)

Opens another screen and passes a value to it.

## get start value {#getstartvalue}

![](/assets/images/blocks/control/getstartvalue.png)

Returns the start value given to the current screen.

This value is given from usingopen another screen with start valueorclose screen with value.

## close screen {#closescreen}

![](/assets/images/blocks/control/closescreen.png)

Closes the current screen.

## close screen with value {#closescreenwithvalue}

![](/assets/images/blocks/control/closescreenwithvalue.png)

Closes the current screen and returns a value to the screen that opened this one

## close application {#closeapp}

![](/assets/images/blocks/control/closeapp.png)

Closes the application.

## get plain start text {#getplainstarttext}

![](/assets/images/blocks/control/getplainstarttext.png)

Returns the plain text that was passed to this screen when it was started by another app. If no value was passed, it returns the empty text. For multiple screen apps, use get start value rather than get plain start text

## close screen with plain text {#closescreenwithplaintext}

![](/assets/images/blocks/control/closescreenwithplaintext.png)

Closes the current screen and passes text to the app that opened this one. This command is for returning text to non-App Inventor activities, not to App Inventor screens. For App Inventor Screens, as in multiple screen apps, use Close Screen with Value, not Close Screen with Plain Text.

## break {#break}
![](/assets/images/blocks/control/break.png)

Break out of the containing loop
