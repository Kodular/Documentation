---
title: Variables
---

There are five main types of variable blocks:

* [initialize global name to](#initialize-global-name-to)
* [get](#get)
* [set to](#set-to)
* [initialize local name to in \(do\)](#initialize-local-name-to---in-do)
* [initialize local name to in \(return\)](#initialize-local-name-to---in-return)

## initialize global name to

![](@assets/images/blocks/variables/initializeglobal.png)

This block is used to create global variables. It takes in any type of value as an argument. Clicking on\_name\_will change the name of this global variable. Global variables are used in all procedures or events so this block will stand alone.

Global variables can be changed while an app is running and can be referred to and changed from any part of the app even within procedures and event handlers. You can rename this block at any time and any associated blocks referring to the old name will be updated automatically.

## get

![](@assets/images/blocks/variables/get.png)

This block provides a way to get any variables you may have created.

## set to

![](@assets/images/blocks/variables/set.png)

This block follows the same rules as get. Only variables in scope will be available in the dropdown. Once a variable `var` is selected, the user can attach a new block and give `var` a new value.

## initialize Local name to - in \(do\)

![](@assets/images/blocks/variables/initializelocaldo.png)

This block is a mutator that allows you to create new variables that are only used in the procedure you run in the DO part of the block. This way all variables in this procedure will all start with the same value each time the procedure is run.

> **NOTE**: This block differs from the block described below because it is a DO block. You can attach _statements_ to it. Statements _do_ things. That is why this block has space inside for statement blocks to be attached.

You can rename the variables in this block at any time and any corresponding blocks elsewhere in your program that refer to the old name will be updated automatically

## initialize Local name to - in \(return\)

![](@assets/images/blocks/variables/initializelocalreturn.png)

This block is a mutator that allows you to create new variables that are only used in the procedure you run in the RETURN part of the block. This way all variables in this procedure will all start with the same value each time the procedure is run.

> **NOTE**: This block differs from the block described above because it is a RETURN block. You can attach _expressions_ to it. Expressions _return_ a value. That is why this block has a socket for plugging in expressions.

You can rename the variables in this block at any time and any corresponding blocks elsewhere in your program that refer to the old name will be updated automatically
