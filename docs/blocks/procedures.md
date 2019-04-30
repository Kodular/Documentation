# Procedures

A procedure is a sequence of blocks or code that is stored under a name, the name of your procedure block. Instead of having to keep putting together the same long sequence of blocks, you can create a procedure and just call the procedure block whenever you want your sequence of blocks to run. In computer science, a procedure also might be called a function or a method.

### Blocks:

* [procedure do](procedures.md#do)
* [procedure result](procedures.md#return)

## procedure do {#do}

![](/assets/images/blocks/procedure/do.png)

Collects a sequence of blocks together into a group. You can then use the sequence of blocks repeatedly by calling the procedure. If the procedure has arguments, you specify the arguments by using the block's mutator button. If you click the blue plus sign, you can drag additional arguments into the procedure.

When you create a new procedure block, Makeroid chooses a unique name automatically. You can click on the name and type to change it. Procedure names in an app must be unique. Makeroid will not let you define two procedures in the same app with the same name. You can rename a procedure at any time while you are building the app, by changing the label in the block. Makeroid will automatically rename the associated call blocks to match.

![](/assets/images/blocks/procedure/calldo.png)

When you create a procedure, Makeroid automatically generates a call block and places it in the My Definitions drawer. You use the call block to invoke the procedure.

## procedure result {#return}

![](/assets/images/blocks/procedure/return.png)

Same as a [`procedure do`](procedures.md#do) block, but calling this procedure returns a result.

![](/assets/images/blocks/procedure/callreturn.png)

After creating this procedure, a call block that needs to be plugged in will be created. This is because the result from executing this procedure will be returned in that call block and the value will be passed on to whatever block is connected to the plug.
