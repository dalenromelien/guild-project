This is a simple TXT detailing my troubleshooting and process for tackling this task

first step was to decide on the architecture for the task. Considering this is a simple task, we still want to use this opportunity to demonstrate knowledge of the full stack

The stack I decided on was MERN, to demonstrate Front end, back end and DB skills with technologies I am mostly familiar with 

getting up to speed with the basics of react was simple and no issue. Setting up an Express server was also simple and not generally an issue, but one major pitfall that made me pivot my strategy was the use of CORS for local testing

I got an error message on the client side app with React saying i needed it so included it in my Express app with app.use(cors), but my issue was not putting cors() with the parenthesis.
This led me down a debugging rabbit hole which made me decide in the essence of time, I will use a tutorial solution and just be sure I understand the technology being used and I am capable of explaining it all

I decided on React and Firebase considering the front end framework wasn't the issue and I generally understood it. Firebase simplified the DB and Backend development by providing a NoSql DB with built in functionality for front-end implementation

It took about an hour to implement a relatively nicely designed solution and the only code I didn't personally write from the tutorial was the CSS

Although completed with the assignment I was not satisified with the idea of submitting a project that was not wholely mine in idea and code, so I went back to the drawing board with the original implementaiton

I didn't end up resolving my CORS issue until I restarted the project and retraced my steps and discovered this one minor yet crucial change to the project that would get it working again.

my intention for the design is to have a switch at the top to switch users so you can select who is typing (hard coded users) and send the post information as the user and the message they sent and organize the data on screen using JSX and CSS according to what user is in view and what user is typing

I was then going to persist the data in the backend with Express and Mongodb

Although I am considering implementing a websocket instead as well. This may have been a quicker easier solution. I could have used Fastify with Node.JS to quickly script up a back end service with real time messaging


What i ended up doing is creating a model for a message with a user of type string, message of type string and date object using a mongoose schema. I was able to spin up a mongoDB instance in the cloud on a free tier to attempt to connect to the db

Next steps were to add the model to the controller for pushing the data received from the post request by the front-end and persisting it to MongoDB. I was going to code up a graceful shutdown for MongoDb when the connection ended

after getting messages with a username attached to persist to the DB I was going to return to the front-end and start designing the messages in CSS to align to one side of the wall or another depending on if the current user name matched the client using the chat app

I was going to hard code the users and just pass at most 2 names and allow the person using the interface to select one or the other.



Architecture used for this was the MERN Stack. The backend was created using Express and Node.JS. I implemented mongoose to connect to and interact with MongoDB a NoSQL db. I implemented MVC Architecture,
Model View Controller. This separated the business logic, database models/schemas (for mongoose) and views. I did not get a chance to clean up and remove the views as I do not need them.
to implement MVC, some small refactoring to the boilerplate express project was needed to separate controllers from routes. 

Front-end in react. I created the front-end in react because i know this position uses react. I wanted to be able to demonstrate a little domain knowledge and present that I may not need much ramp up time. I demonstrate the use of State through React Hooks and making API calls asynchronously using Axios
I may have left some console.logs(); aroud the code to demonstrate where I was testing for functions being hit and results being returned from promises. the front end is incredibly simple and I did not get an opportunity to fully flush it out
I would have designed the button and text box better and perhaps attempted to make it cross-platform frinedly so for mobile web experiences as well.

to test, I will have the reviewers clone the repository from github, run an npm install from the server/ and front-end/ folders respectively and then proceed to open 2 separate terminals and run 'npm run start' from each. backend server first and then the front-end, since I hardcoded backend API to be at localhost:3000 I would like it to get to that port first

then react will prompt you in the console to run on 3001 since 3000 is occupied which you will respond yes to. once started, the front-end app should open, type in a message, click send and as it stands the messages do no appear on the screen they simply send to the back end and you receive a succesful status code along with success message in the console (open dev tools for chrome, shift+i+control on windows)
 I would have liked to perhaps have the controller that handles this in express persist this message to mongodb, and pull maybe an updated list of the messages and print them to the screen. I actually didn't think this far and wasn't sure how to display the database info on screen best. Websockets may have been best here after all.

did not get time to write tests, but I'd likely use Jest for writing tests in the front-end, I would test for mocking the Axios request and ensuring I received an appropiate response. Maybe test for a failure instance of some sort as well. If I had all the time in the world could've added form validation and tested for that as well, ensuring no bad data gets persisted to the DB

I would write unit tests for backend controller functions, not sure if Jest is the framework here as well I think it is, I would write functional unit tests here. 