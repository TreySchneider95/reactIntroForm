import React, {Component} from 'react';
import MovieForm from './MovieForm';
import dbMovies from './db';


class App extends Component {
  state = {
      movies: dbMovies
  }
  render() {
  const { movies } = this.state
    return (
      <div className="container">
        <MovieForm movies={movies}/>
      </div>
    )
  }
}

export default App
