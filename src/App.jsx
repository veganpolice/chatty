import React, {Component, Fragment} from 'react';
import Nav from './Nav.jsx'
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          id: '1'
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          id: '2'
        }
      ],
      currentUser: {name: 'Aaron'}
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage = (event) => {
    event.preventDefault();
    console.log(event);
    const id = this.state.messages.length + 1;
    const username = event.target.elements['username'].value || this.state.currentUser.name;
    const content = event.target.elements['text'].value

    const newMessage = {id, username, content};

    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
    event.target.elements['text'].value = ''
  }

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} onSubmit={this.sendMessage}/>
      </Fragment>
    );
  }
}
export default App;