---
title: Dictionaries
---

* [create empty dictionary](#create-empty-dictionary)
* [make a dictionary](#make-a-dictionary)
* [pair](#pair)
* [get value for key](#get-value-for-key)
* [set value for key](#set-value-for-key)
* [delete entry for key](#delete-entry-for-key)
* [get value at key path](#get-value-at-key-path)
* [set value for key path](#set-value-for-key-path)
* [get keys](#get-keys)
* [get values](#get-values)
* [is key in dictionary?](#is-key-in-dictionary)
* [size of dictionary](#size-of-dictionary)
* [list of pairs to dictionary](#list-of-pairs-to-dictionary)
* [dictionary to list of pairs](#dictionary-to-list-of-pairs)
* [copy dictionary](#copy-dictionary)
* [merge into dictionary](#merge-into-dictionary)
* [list by walking key path](#list-by-walking-key-path)
* [walk all at level](#walk-all-at-level)
* [is a dictionary?](#is-a-dictionary)

## create empty dictionary

![](@assets/images/blocks/dictionaries/create-with.png)

The create empty dictionary block creates a dictionary without any key-value pairs. Entries can be added to the empty dictionary using the set value for key block. The create empty dictionary block can also be turned into a make a dictionary block by using the blue mutator button to add pair entries.

## make a dictionary

![](@assets/images/blocks/dictionaries/make-a-dictionary.png)

The make a dictionary is used to create a dictionary with a set of pairs known in advance. Additional entries can be added using set value for key.

## pair

![](@assets/images/blocks/dictionaries/pair.png)

The pair block is a special purpose block used for constructing dictionaries.

## get value for key

![](@assets/images/blocks/dictionaries/get-value-for-key.png)

The get value for key block checks to see if the dictionary contains a corresponding value for the given key. If it does, the value is returned. Otherwise, the value of the not found parameter is returned. This behavior is similar to the behavior of the lookup in pairs block.

## set value for key

![](@assets/images/blocks/dictionaries/set-value-for-key.png)

The set value for key block sets the corresponding value for the given key in the dictionary to value. If no mapping exists for key, a new one will be created. Otherwise, the existing value is replaced by the new value.

## delete entry for key

![](@assets/images/blocks/dictionaries/delete-value-for-key.png)

The delete entry for key block removes the key-value mapping in the dictionary for the given key. If no entry for the key exists in the dictionary, the dictionary is not modified.

## get value at key path

![](@assets/images/blocks/dictionaries/get-value-at-key-path.png)

The get value at key path block is a more advanced version of the get value for key block. Rather than getting the value of a specific key, it instead takes a list of valid keys and numbers representing a path through a data structure. The get value for key block is equivalent to using this block with a key path of length 1 containing the key.

## set value for key path

![](@assets/images/blocks/dictionaries/set-value-for-key-path.png)

The set value for key path block updates the value at a specific key path in a data structure. It is the mirror of get value for key path, which retrieves a value at a specific key path. The path must be valid, except for the last key, which if a mapping does not exist will create a mapping to the new value. Otherwise, the existing value is replaced with the new value.

## get keys

![](@assets/images/blocks/dictionaries/get-keys.png)

The get keys returns a list of keys in the dictionary.

## get values

![](@assets/images/blocks/dictionaries/get-values.png)

The get values returns a list containing the values in the dictionary. Modifying the contents of a value in the list will also modify it in the dictionary.

## is key in dictionary?

![](@assets/images/blocks/dictionaries/is-key-in.png)

The is key in dictionary? tests whether the key exists in the dictionary and returns true if it does, otherwise it returns false.

## size of dictionary

![](@assets/images/blocks/dictionaries/size.png)

The size of dictionary block returns the number of key-value pairs present in the dictionary.

## list of pairs to dictionary

![](@assets/images/blocks/dictionaries/alist-to-dict.png)

The list of pairs to dictionary block converts an associative list of the form ((key1 value1) (key2 value2) ...) into a dictionary mapping the keys to their values. Because dictionaries provide better lookup performance than associative lists, if you want to perform many operations on a data structure it is advisable to use this block to convert the associative list into a dictionary first.

## dictionary to list of pairs

![](@assets/images/blocks/dictionaries/dict-to-alist.png)

The dictionary to list of pairs converts a dictionary into an associative list. This block reverses the conversion performed by the list of pairs to dictionary block.

## copy dictionary

![](@assets/images/blocks/dictionaries/copy-dict.png)

The copy dictionary makes a deep copy of the given dictionary. This means that all of the values are copied recursively and that changing a value in the copy will not change it in the original.

## merge into dictionary

![](@assets/images/blocks/dictionaries/combine-dicts.png)

The merge into dictionary from dictionary block copies the key-value pairs from one dictionary into another, overwriting any keys in the target dictionary.

## list by walking key path

![](@assets/images/blocks/dictionaries/walk-tree.png)

The list by walking key path block works similarly to the get value at key path, but creates a list of values rather than returning a single value. It works by starting at the given dictionary and walking down the tree of objects following the given path. Unlike the get value at key path though, its path can be composed of three major types: dictionary keys, list indices, and the walk all at level block. If a key or index is provided, the specific path is taken at that point in the tree. If the walk all at level is specified, every value at that point is followed in succession (breadth-first), at which point the walk continues from the next element in the path. Any element that matches the whole path is added to the output list.

## walk all at level

![](@assets/images/blocks/dictionaries/walk-all.png)

The walk all at level block is a specialized block that can be used in the key path of a list by walking key path. When encountered during a walk, it causes every item at that level to be explored. For dictionaries, this means that every value is visited. For lists, each item in the list is visited. This can be used to aggregate information from a list of items in a dictionary, such as the first name of every person in a database represented by JSON objects.

## is a dictionary?

![](@assets/images/blocks/dictionaries/is-dict.png)

The is a dictionary? block tests to see whether the thing given to it is a dictionary or not. It will return true if the thing is a dictionary and false otherwise.
