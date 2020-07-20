## Setup

https://jscomplete.com/learn/1rd-reactful <br>
https://github.com/jscomplete/learn-fullstack-javascript

In the project folder:
- `npm init`
Main Backend Dependency:
- `npm i express`
- `npm i mongodb`
Main Front end:
- `npm i react react-dom`
Dev Dependencies:
- `npm i -D webpack webpack-cli`
- `npm i -D babel-loader @babel/core @babel/node @babel/preset-env @babel/preset-react @bable/plugin-proposal-class-properties`
- `npm i -D nodemon`
- `npm i -D eslint babel-eslint eslint-plugin-react eslint-plugin-react-hooks`
- Create .eslintrc.js in the project root folder:
	  `module.exports = {
	  parser: 'babel-eslint',
	  env: {
	    browser: true,
	    commonjs: true,
	    es6: true,
	    node: true,
	    jest: true,
	  },
	  parserOptions: {
	    ecmaVersion: 2020,
	    ecmaFeatures: {
	      impliedStrict: true,
	      jsx: true,
	    },
	    sourceType: 'module',
	  },
	  plugins: ['react', 'react-hooks'],
	  extends: [
	    'eslint:recommended',
	    'plugin:react/recommended',
	    'plugin:react-hooks/recommended',
	  ],
	  settings: {
	    react: {
	      version: 'detect',
	    },
	  },
	  rules: {
	    // You can do your customizations here...
	    // For example, if you don't want to use the prop-types package,
	    // you can turn off that recommended rule with: 'react/prop-types': ['off']
	  },
	};`

 
## Node Modules

Export everything which is to be passed to caller. <br>
Default exports are placed in default() function.


## Folder Structure

1. api folder for api files
2. public folder for html files
3. src folder for React code
4. view folder for EJS


## The main file - server.js

`server.use(express.static('public'));`<br>
This renders html files directly from public folder by reading URL.


## EJS

Template Language


## Running the project

`npm run dev` - creates a bundle.js file, it has to be included in footer
`npm start` - starts the server