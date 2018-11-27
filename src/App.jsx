import React, {Component, Fragment} from 'react';
import Nav from './Nav.jsx'
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <MessageList />
        <ChatBar />
      </Fragment>
    );
  }
}
export default App;