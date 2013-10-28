DZMob
=====

Install iOS apps to your iOS devices using NodeJS and the CLI

Use the --help to invoke the help bit and check the required parameters. 

#### Installing

* Get started by cloning this repo to your `node_modules` dir
  
~~~~
//Install all dependancies
npm install node-ios-device
npm install commander

cd ~/node_modules/
//Create this dir if it doesn't exist

git clone https://github.com/dezinezync/DZMob.git
~~~~

* Create an alias for dzmob.js by adding the following to your `.bash_profile` file

~~~~
alias dzmob="node /Users/[your username]/node_modules/DZMob/dzmob.js"
~~~~

* Then type `source ~/.bash_profile` or source your profile from where ever it is located
* That's it! 

#### Usage

**LIST DEVICES**
~~~~
dzmob -l
//or
dzmob --list
~~~~

**INSTALL TO DEVICE**
~~~~
dzmob -i -d [device id from above] -a [.app location]
//or
dzmob --install --device [device id] --app [.app location]

//Example
dzmob -i -d 7d5b4e0701649bd18317bb04088ed0babdf00000 -a /build/iphone/build/Release-iphoneos/MyApp.app
~~~~

Feel free to send PRs this way! :D
