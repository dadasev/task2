TASK 2: 
Create one page responsive layout and use "Youtube" APIs (https://developers.google.com/youtube/v3) to search, preview results and log user action in the back-end.

Deployed with Netlify:
https://hardcore-lumiere-145390.netlify.app
This deployment features front end features only. 
In order to review the back end part - please download the repo and use the commmands below to set it up on your local machine. 

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
