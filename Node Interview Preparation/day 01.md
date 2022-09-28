# Node Preparation Day 1

1. What is Node.JS?

Ans. Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

2. What is NPM?

Ans. NPM stands for 'Node Package Manager',NPM is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

NPM consists of three distinct components:

i) the website
ii) the Command Line Interface (CLI)
iii) the registry

3. What are the different modules in Node.JS?

Ans. In Node.js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.

Modules are of three types:

Core Modules
local Modules
Third-party Modules

4. What is the purpose of the module.exports?

Ans. Module exports are the instructions that tell Node. js which bits of code (functions, objects, strings, etc.)
to export from a given file so that other files are allowed to access the exported code

5. Difference between default export and named export?

Ans. Exports without default tag are named export and exports with default tag are default export Using one over the other can have effects on your code readability, file structure, and component organization.


6. How do you import any node modules in Node.JS?

Ans. To import our own Node JS module. var express = require("express");
To import existing Node JS Module Import Node JS “express” module; var arthmetic = require("express"); Import Node JS “mongoose” module; var mongoose = require("mongoose")
