// npm 
// npm is file manager for node js like pip in python 
//to get version of npm --->npm --version
//to get version of node --->node --version
//---> npm install | create package-lock.json 
// ---> npm init | create package.json npm install initialize folder as package of node js. whenever we install package it added in dependency

// to install any package in this folder ---> npm install package_name
// npm install slugify
// npm install express 

// to uninstall any package in this folder ---> npm uninstall package_name
// npm uninstall slugify

// to see packages in package.json dependencies 
// if you deleted node_modules then simply ----> npm install
// npm install will install all dependencies of dependencies of dependencies

// to install specific version of module ----> npm install slugify@1.3.5
// Here 1 is major, 3 minor, 5 badge

// if you install packages of development you don't need in production then install as save dev
// if you want to restart server automaticaly then install nodemon
// ----> npm install nodemon --save-dev  it put in devDependencies

// to install package as globly for access any where
// -----> npm install nodemon --global 

//----> npm i browserify  here i means install

// in package.json dependencies modules are there express": "^4.17.1"  here '^' means specific version , ~ means latest version, > means greater version of module. 

// to view to version of package 
// ----> npm view slugify version