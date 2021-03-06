# Po.et Web

[![Greenkeeper badge](https://badges.greenkeeper.io/poetapp/explorer-web.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/poetapp/explorer-web.svg?branch=master)](https://travis-ci.org/poetapp/explorer-web)

This is Po.et's frontend, as seen in https://app.po.et.

## Libraries, Frameworks, Etc
- Typescript
- ReactJS
- React Redux
- Redux-Saga
- Webpack
- [poet-js](https://github.com/poetapp/poet-js)

## File Structure

### Components
These are ReactJS components and Sass styles.
The components' architecture is inspired by Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

Most components have a single associated `.scss` file with the same name.
There are also a few global styles living in `components/styles`.
Styles are bundled and loaded by Webpack's `style-loader`, `css-loader`, `autoprefixer`, `postcss-loader`, and `sass-loader`.

Components are divided in atoms, molecules, organisms, pages and modals. Rule of thumb is: the smaller shouldn't use the larger.
That means atoms should have no dependencies on other components, mocules can only depend on atoms and so on.

Pages are currently living outside `/components` for historic reasons, but they'll be moved into this folder in the future.

The root component is [components/Root.tsx](./src/components/Root.tsx) and ReactDOM.render is called in [index.tsx](./src/index.tsx).

## Reducers

React Redux reducers live here. They shouldn't have any logic at all, just receive messages and update the redux store.

## Sagas

Redux-Saga sagas live here. Most of the application's logic, specifically all of the side effects, should be in sagas and sagas only.

## Images

All images used by the application. They are exposed as `static readonly` elements of a class in [images/Images.tsx](./src/images/Images.tsx), using the File Loader Webpack plugin to load and bundle them.

## Extensions

Extensions to Javascript's native types go here.

# Coding Standard

We mostly follow [StandardJS](https://standardjs.com/) and [AirBnB's JS Style Guide](https://github.com/airbnb/javascript). We're not automatically enforcing styles yet.

Some rules:
- **Write pure functional code**, side-effect-less, as much as possible. That means `var` is forbidden, and `let` should be avoided whenever possible - always use `const` instead.
- **Write small functions with clear purposes**
- **Avoid default exports**
- **Name files** following AirBnB's rules [23.6](https://github.com/airbnb/javascript#naming--filename-matches-export), [23.7](https://github.com/airbnb/javascript#naming--camelCase-default-export), and [23.8](https://github.com/airbnb/javascript#naming--PascalCase-singleton), applying for the most important export rather than the default export
- **Use 2 spaces** for indentation
- **Use single quotes** for strings except to avoid escaping
- **Add a space after keywords**
