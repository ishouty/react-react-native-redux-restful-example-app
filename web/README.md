# React js Apollo Client Redux Restful Boostrap Example

Starter kit to apollo client. You will need two run both respositories to fully get this working.

This repositorty is related to the backend apollo service.

https://github.com/ishouty/apollo-express-graphql-mongo-backend-api-starter-project.git

## Features of client

- Appollo client
  - list of users
  - list of products
- redux forms
  - login form
    - client validation
- Pagination
- Integrating api with front end
  - login form
  - list of users
- Navigation menu
  - login
  - logoff
  - list of users
- Notification banner
  - bad response
  - bad request

Client application core technology stack:
Here are the core libaries that was used to implement the application.

## React Js (16.9.0)

https://reactjs.org/

## Apollo Client

https://www.apollographql.com/docs/react

## Axios

https://github.com/axios/axios

## Redux-form

https://redux-form.com/7.1.1/

## React-router

https://github.com/ReactTraining/react-router

## Redux

http://redux.js.org/docs/basics/UsageWithReact.html

## React Bootstrap

https://react-bootstrap.github.io/

## Gulp

https://gulpjs.com/

## Webpack (4)

https://webpack.js.org/

## Less

http://lesscss.org/

## API Calls

https://randomuser.me/

## Jest (24.3.0)

https://facebook.github.io/jest/blog/2016/09/01/jest-15.html

## Enzyme

https://github.com/airbnb/enzyme

## Structure

```
build // all the development files compiled
dist // the distribution version for production environment
src // source of application
app // source of application
    actions //all actions sent to store
    assets // all various assets for application
           css //bootstrap base
           html //the default html which gets compiled to build via webpack plugin
           images // all images used within the application
           less // all the various less components for react. this can be done differently but preffered having this structure.
    components // all the core react components
    config // config for different environments
    constants // all constants of reducers and text
    containers // core layouts
    middlewear // middlewear used before the store
    reducers //intital state of the stores and state
    store // the core store of the application
    subscribers //listen for changes within store
    utils  // utils which are used for components
    tests // config for unit tests
```

## Install

Install Node
https://nodejs.org/en/download/

Before installing Node, use NVM to allow multiple versions of Node on the develop/build environment.
https://github.com/creationix/nvm

### Version of Node used `12.4.1`

There is a file `.nvmrc` in the project root that contains the Node version to use.

Use the Node with the version of project

```
nvm use

nvm install

npm install

npm install --global gulp-cli
```

### Test Driven Development

Using Jest for unit testing framework and enyzme all files will be locally within the folder structure.

To run all the unit tests within the application use :

```
npm run test,
```

## Developing unit tests

If you are developing and would like to see your tests being watched use

```
npm run test:watch
```

you can watch a specific file by running this command

```
npm run test:watch example.spec.js
```

## Updating Snapshots

```
npm run test:update-snapshot
```

## Coverage of unit tests

To check the coverage of files being covered by unit tests you are write this command

```
npm run jest --coverage,
```

this will also generate reports on the test-coverage folder

Note: please make sure you have the right permissions for the folder so the library can write to it.

### Development HMR Build Development

Will compile into memory which is used to make changes directly

NOTE: please run the `gulp dev-webpack` first which compiles the assets and html files and cleans directory

```
ENVIRONMENT=local gulp

ENVIRONMENT=dev gulp

ENVIRONMENT=staging gulp

ENVIRONMENT=production gulp
```

### Build

### Build Compiled Files : Development/local/Staging

Will compile to to a build directory

```
npm run dev-webpack
```

### Build Compiled Files : Staging/Production

Will compile to to a build distributed version

```
npm run prod-webpack
```

### Debugging

redux dev tools is available for you to debug any issues with state.

You will need to download chrome extension in order to use this and see whats in your state and what calls are being use.

### Improvements

- Chucking files to increase performance - load core bundle and load others after
- Improve jest coverage of components - testing
- integrating testing of components - cypress
- treeshaking - remove javascript which are not used
- code splitting - Not loading all code in one bundle
- Server side rendering instead of making the core bundle large
- improvement of first content paint via inline css
- source assets from CDN

### Cache Busting

All of the javascript files and css files will be concatenated and provided a version which will clear the cache issues
on Browsers

### Latest Blogs on main libraries

https://facebook.github.io/react/blog/2016/03/29/react-v0.14.8.html

### Debugging tools

https://facebook.github.io/react-native/docs/debugging.html

https://github.com/zalmoxisus/remote-redux-devtools

//dev tools extension

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en-GB

### ie tools

http://helpdeskgeek.com/windows-7/windows-7-hosts-file/
