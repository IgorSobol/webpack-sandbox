## Webpack sandbox

You can always read the detailed documentation [here](https://webpack.js.org/)

### The purpose of this project 

In my work I often have to do a variety of projects related to the development of sites.
I do a lot of these jobs using the same tools. For example scss or **less**, **js**, **html**, etc.
Also, the compression and conversion process also needs attention...
<br />
But you really want to install, press one button, and you are already working, and you can concentrate on the task and not on constant tuning and assembly
<br />
In order to speed up the process of starting development and make the process of assembling my projects simpler and faster,
I decided to move the basic setting of my work into a separate topic.
<br />
I will gradually add description and instructions, as well as new features as I work on my projects.

### INSTALLATION

```
  src/                  Work file structure
      styles/           Project styles are located here
      assets/           Mostly images and other necessary files
      analytics
      babel.js
      favicon.ico
      index.html
      index.jsx
      Post.js
  package.json
  webpack.config.js     Webpack config
  LICENSE               license of Webpack sandbox
  README                this file
```

### QUICK START

In order for you to use this assembly, you need to choose one of the paths:
* Use the button "Use this template"

or

* or clone this project to yourself

Next, you need to install all dependencies with ```yarn``` or ```npm```.

**Congratulations, you can use this build***

### SCRIPTS

Possible build scripts you can find in the file ```package.json```

```js
...
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
    "start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open"
  }
...
```
### WHAT'S NEXT

* Add a detailed description for configuring webpack
* Add stylelint
* Develop the project and make it as accessible as possible for everyone
