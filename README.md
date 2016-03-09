Confection is a revolutionary new app that will disrupt the world of instant messaging as we know it.

# Technologies Used

## Gulp

Gulp is our build system

## Webpack

Webpack is the tool that will act as a development server to serve our client-side files and facilitate bundling of javascript and do hot-reloading

## Babel

Babel is our ES6 transpiler.

## Redux

Redux is our app framework that will allow us to structure our application in a Flux-like fashion.

## Deku

Deku is our rendering library. It enables us to write React-like components.

## Kandy

Kandy is our real-time communication platform.


# quick start
First you will need to `npm link` the `kandy-redux` module.
 - Clone kandy-redux (https://github.com/Fring/kandy-redux)
 - Follow the instructions in the README to link it in this project
 - NOTE: This should change when kandy-redux is more complete and requires less active development

```
$ npm install
$ npm install gulp -g
$ gulp serve
```
and navigate to http://localhost:8080

# commands

* `gulp build` - build js for production
