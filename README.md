# Fayer

Fires only required functions on particular page, thus removing any unnecessary function calls.

* Sources: <http://github.com/sandeepjain/fayer>
* Author: [Sandeep Jain](http://jsvrocks.com/)
* Size: 0.7kb (Minified version)

Fayer is Dual licensed under the MIT or GPL Version 2 licenses..  

## Features

* Simple and easy to understand code, with small footprint (Just 0.7kb when minified).
* Doesn't require jQuery or any other JavaScript library
* Makes it easy to push all JavaScript code in single file.
* Has `fayer.notOn` function to prevent code from being fired on few particular pages on website.
* Expose single global object `fayer`

## Usage Guide

###Intialize (Optional)###

Use this function to instruct `fayer` to find unique page string.

`fayer.init(func/attr)` 

func (Function): This function must return string.
attr (String): If this is string then, fayer will search identifier string at body[function]

If no parameter is passed then `fayer` will search for identifier string at body[id].

###Fire functions###

`fayer.on(page, func)`

`fayer.notOn(page, func)`

page (Array/String): Array/String containing unique page identifiers.
func (Function): Function to be fired if condition is satisfied.

###Other Helpful functions###

`fayer.is(page)`

page (String): Unique page identifier.

`fayer.isIn(page)`

page (Array/String): Unique page identifier. 

## Todo

* RegEx based identifier matching.
* URL based identifier matching.

## Changelog

### v0.1 · *2011-08-10*
