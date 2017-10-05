MOWER
=====

Introduction
------------

this quick project is intended to handle instructions file for automatic mower

Usage
-----

$> node index.js orders.txt

The last argument in the previous command line must be a valid instructions file

To run the tedt suites that comes with the code please run the follwing command :

$> node test.js


How it works
------------

This project has been made in JavaScript (nodeJS) without any framework or third party library (even for tests).

The source code can be divided in two parts : first one, index.js file, is the "interface" ;
its responsability is to fetch data from the user input (ie command line) and feed an Area instance with it.
Area (Area.js) is the first class (second one is Engine class in Engine.js) of the second part which is responsible
for implementing business rules. The Area class represent the context in which the mower should evolve, and the 
Engine is the core or instructions interpretations. In order to being able to play instructions suites at various
speed (for animated rendering for exemple, that could have been implemented in the interface part of the code),
each class (of the business rules part) has a tick() method that is intented to execute one order : Area.tick()
method determine which engine is currently in use, and then call its tick method, the tick method of the Engine 
class executes one order per call. Each tick method returns true if it has order left, false if not.
