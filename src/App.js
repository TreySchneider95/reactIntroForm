import React, {Component} from 'react';
// import Table from './Table';
// import Form from './Form';
// import Welcome from './Welcome';
import dbMovies from './db';


class App extends Component {
  state = {
      movies: dbMovies
  }
  render() {
  const { movies } = this.state
    return (
      <div className="container">
          <h1>Test</h1>
      </div>
    )
  }
}

export default App
