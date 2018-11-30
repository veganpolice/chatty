Chatty App
=====================
This app was built as part of the Lighthouse Labs web development bootcamp program. It emulates modern chat applications like Slack or Facebook to allow multiples users to converse in real time through websockets. It was built with React. 

### Getting Starting

Clone the repo and run npm install in the root. Run npm start to start the webserver.

Navigate to chatty_server dirictory and run npm install. Run npm start to start the websocket server.

Browse to http://0.0.0.0:3000/ to access the app.

![One user logged in](https://raw.githubusercontent.com/aaronrbg/chatty/master/images/Screen%20Shot%202018-11-29%20at%205.03.50%20pm.png)

![Multiple users logged in](https://raw.githubusercontent.com/aaronrbg/chatty/master/images/Screen%20Shot%202018-11-29%20at%205.05.26%20pm.png)

![Posting images](https://raw.githubusercontent.com/aaronrbg/chatty/master/images/Screen%20Shot%202018-11-29%20at%205.08.21%20pm.png)

### Stretch Features

#### Images

A user can submit image links and see them appear in the chat. Multiple links and text can be submitted at once.

#### Styles

Chatty has be customized to for a Trailor Park Boys theme.

### Dependencies

#### Chatty Server
* "express": "4.16.4",
* "uuid": "^3.3.2",
* "ws": "6.1.2"

#### Chatty

##### devDependencies:
* "babel-core": "6.23.1",
* "babel-loader": "6.3.1",
* "babel-preset-es2015": "6.22.0",
* "babel-preset-react": "6.23.0",
* "babel-preset-stage-0": "6.22.0",
* "css-loader": "0.26.1",
* "eslint": "3.15.0",
* "eslint-plugin-react": "6.9.0",
* "node-sass": "4.5.0",
* "sass-loader": "6.0.0",
* "sockjs-client": "^1.1.2",
* "style-loader": "0.13.1",
* "webpack": "2.2.1",
* "webpack-dev-server": "2.3.0"

##### dependencies:
* "react": "16.6.3",
* "react-dom": "16.6.3"
