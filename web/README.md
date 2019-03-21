React js Redux Restful Boostrap Example 
=====================

React js application with restful calls. 

Here are the core libaries that was used to implement the application. 

## React Js (16.8.4)
https://reactjs.org/
## Axios
https://github.com/axios/axios
## Redux-form (8.0)
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
    test - unit tests (wip) 
```

## Install

Install Node 
https://nodejs.org/en/download/
    
Before installing Node, use NVM to allow multiple versions of Node on the develop/build environment.
https://github.com/creationix/nvm

### Version of Node used `8.5.0`

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

### Development HMR Build Development
Will compile into memory which is used to make changes directly

NOTE: please run the `gulp build-dev` first which compiles the assets and html files and cleans directory
 
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

npm run build-dev 


```

### Build Compiled Files : Staging/Production 

Will compile to to a build distributed version 

```
npm run build-prod 

```

### Improvements 
* Chucking files to increase performance - load core bundle and load others after 
* Improve jest testing 


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
