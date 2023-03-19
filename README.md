# NPS-Feedback-UI

**Link to project:** https://nps-feedback-ui-production.up.railway.app/

NPS or net promoter score is used by many companies to make sense of customer reviews and identify key components of their products or services for improvement.

The App is built in JavaScript, using React as a framework.

I built this set of components using create-react-app and as a study to understand the basic react hooks useState and useffect. I also wanted to learn about some of the more complex hooks like useContext and useParams.

I added significant functionality to the base project, adding in a full backend with database.  

# How It's Made:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)


# Hooks: useState, useEffect, useContext

# Middleware: Morgan/logger, cors, express-session, Mongoose, concurrently, connect-mongo.

## Optimizations

I'm a big fan of Test Driven Development TDD, but need to gain more experience in writing tests for react components to really get going with that.
I added JEST to the project with the aim of deepening my knowledge and built snapshot tests for the main components.

I could have set up the backend and frontend separately but I wanted to have at least one project setup where they happily co-exist. 
I used concurrently to get node/express and create-react-app to sit side by side, with all routes and views handled by react, and express
taking care of only the database.

The structure of the App is set up as MVC - Model, View, Controller.  With MongoDB/Mongoose as Model, React as the view and Express as the Controller.

## Lessons Learned:

The devops side of this project was probably the trickiest part of it.  

Initally for the static site, I used Netlify, which worked great until I added a backend. 
Netlify doesn't support backend apps without the use of serverless functions, cyclic 
really didn't like the two projects being in the same location and so I ended on railway.app. 

Even railway had it's issues, typically I define the ports for front/backend manually, but railway prefers it if you don't define them at all and leave it to them to allocate. This is fine but it led to a lot of confusion before I fully understood what was happening. 

It's the first time I've deployed there and I'm quite happy with how it went.  Railway automatically containerizes apps with Docker which is actually a great feature. If the spin-up/down speed for containers on railway is good - I can see myself using them quite a bit more.

I wanted to have fetch routes and ports change dynamically based on the dev environment but this is basically impossible with create-react-app which solves and fixes all env variables on the front end at build compilation. This was a great learning experience in terms of learning about different deployments.

I think on reflection given the option - I would prefer to deploy with Vite or next.js over create-react-app

## Future Updates

I want to add in more dynamic features for the form, as you write longer messages - the color changes and the user gets feedback (think booking.com) I also want to make the connection from the front to back more secure, I'm already using cors but I'd like to add in more secure middleware like helmet and/or an API key.

## Examples:

Take a look at these other examples that I have in my own portfolio:

Tenzies: https://github.com/TheWoodenMan/react-tenzies
This simple app was built as a challenge to tie together my knowledge of core react hooks useState and useEffect.

Behavioural Recruitment RESTful API: https://github.com/TheWoodenMan/behavioural-recruitment
This RESTful API was my most detailed exploration of CRUD functions and my first real implementation of mongoose, both of which feature heavily in this app

## Footnote and Credits

Much of the code was put together as part of a code along project by Brad Traversy which can be found here: https://github.com/bradtraversy/feedback-app

Although the backend design and build was done 100% from scratch.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in production mode for both the frontend and backend concurrently.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
you can find the backend at  [http://localhost:8000](http://localhost:8000)

If you're using postman to check it out, routes are at /api/feedback

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
the build directory needs to be copied into the server directory so the backend can deliver it. 
The script automatically takes care of this - but you must delete old build directories before running.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
