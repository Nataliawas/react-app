import React, { Component } from 'react';
import List from './List'


class App extends Component {
  render() {
    return (
      <div>
   <Route path="/list" component={List} />
      </div>
    );
  }
}

export default App;
