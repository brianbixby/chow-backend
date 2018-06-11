<!-- COVERALLS BADGE -->

## Project: Chow (A recipe App)

Chow is an application allows users to search and save recipes based on their own unique criteria.

You are able to signup, create a profile and signin. Users can search for recipes based on their own unique criteria and save these recipes to their favories. 

## Frontend

Information about the frontend of Chow can be found here: [Chow Frontend](https://github.com/brianbixby/chow-frontend)

## Tech/frameworks/packages

- Node 
- MongoDB
- Travis
- Coveralls
- Heroku
- Github
- NPM/Yarn
- Backend Node packages
  - Production
    - Bcrypt
    - Bluebird
    - Cors
    - Coveralls
    - Debug 
    - Del 
    - Dotenv 
    - Express  
    - Http-errors 
    - Istanbul 
    - Jsonwebtoken 
    - Mongoose 
    - Morgan
  - Development
    - Eslint
    - Faker
    - Jest
    - Superagent
    
- Frontend Node packages:
  - Autoprefixer          
  - Babel-core         
  - Babel-plugin-transform-class-properties          
  - Babel-plugin-transform-object-rest-spread          
  - Babel-preset-env          
  - Babel-preset-react                        
  - Cors                   
  - Dotenv          
  - Express          
  - Node-sass         
  - NPM          
  - Parcel-bundler
  - Postcss-modules          
  - React                   
  - React-dom          
  - React-redux          
  - React-router          
  - React-router-dom          
  - Redux                          
  - Superagent                  
  - Validator                  
- devDependencies:
  - Babel-jest
  - Babel-plugin-stylus-compiler
  - Babel-plugin-transform-async-to-generator
  - Babel-plugin-transform-css-import-to-string
  - Babel-plugin-transform-es2015-modules-amd
  - Babel-plugin-transform-es3-member-expression-literals
  - Babel-plugin-transform-es3-property-literals
  - Babel-plugin-transform-object-assign
  - Babel-plugin-transform-version-inline
  - Babel-preset-es2015
  - Babel-preset-stage-0     
  - Enzyme          
  - Enzyme-adapter-react-16          
  - Eslint          
  - Eslint-plugin-react          
  - Jest          
  - Redux-devtools-extension
  - Redux-logger  


## How to use?
Clone this repo, cd into the root of the project, run `npm i` from your command line to install all of our dependencies. Please make sure that you have mongodb and httpie installed on your machine. You can brew install them both if you do not already have them with `brew install httpie mongodb`. Please refernce the installation instructions for MongoDB `https://docs.mongodb.com/manual/administration/install-community/`, there are typically 1 or 2 quick things you need to do after you Brew install it. 

Run `npm run start` from terminal to start the server. Open a new tab in terminal and run `mongod` to start the Mongo process. Open another terminal tab and run `mongo` to open a Mongo shell (for viewing the contents of your local database). Lastly, open up a final terminal tab; this is where you will be making all of your server requests. Instructions and examples are below.

## Routes

### Auth/User Routes
#### POST: `/api/signup`
Create a new  user with the properties `username`, `email`, `password` and `findHash`, (findHash is automatically created for you).
```
http POST :3000/api/signup username=newusername email=newemail@gmail.com password=newpassword
http POST :3000/api/signup username=<username> email=<email> password=<password>
```
#### GET: `/api/signin`
As an existing user you can login to your profile, which will authenticate you with a json web token and allow you to make requests to our API.
```
http POST :3000/api/signup username=newusername email=newemail@gmail.com password=newpassword
http POST :3000/api/signup username=<username> email=<email> password=<password>
```
Throws an error if any of the requested properties that are not created for you are missing.

The User model will return a json web token if there are no errors, and create a profile model for the newly instantiated user to add more detailed information to.

### Profile Routes
#### GET: `/api/profile/<profile id>`
Retrieve your user profile and update your information for other users to see.

```
http -a newusername:newpassword :3000/api/signin
http -a <username>:<password> :3000/api/signin
```
Throws an error if any of the requested properties that are not created for you are missing.

The User model will return a json web token if there are no errors.
#### PUT: `/api/profile/<profile id>`
This will allow you to make changes to a specific profile.

## Tests

Tests are ran by using the jest testing suite. To run tests, first you must download and copy this repo and run `npm i` in the root directory to install all application dependancies. Run `npm run test` in the root directory of the application in your terminal to check tests.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Brian Bixby

## License

MIT. Use it up!
