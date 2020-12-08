import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Chat from './Pages/ChatPage/Chat';
import Join from './Pages/JoinPage/Join';


class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" component={Join} exact/>
        <Route path="/chat" component={Chat}/>
      </div>
    );
  }
}

export default App;
