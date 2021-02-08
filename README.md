TASK 2

FRONT END:

Inside the client directory:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


BACK END:

This node js app logs keywords and previewed videos and stores it in mongoDB.
Inside the api directory:

### `node index.js`
Starts the app. 


In order to lauch the mongoDB you need to have homebrew/mongoDB installed.

In a separate terminal window:
### `brew services start mongodb-community@4.4`
Starts mongoDB


### `brew services stop mongodb-community@4.4`
Stops it.


In a separate terminal window:
### `mongo`
Opens up a Mongo Shell.
