import React, {Component} from 'react';



// -title
// -actors
// -plot
// -imdbRating
// -director 
// -year
// -date added

class MovieForm extends Component {

    render(){
        return (
            <form>
                <label htmlFor='title'>Title:</label><br/>
                <input type="text" id="title" name="title"></input><br/>
                <label htmlFor='actors'>Actors:</label><br/>
                <input type="text" id="actors" name="actors"></input><br/>
                <label htmlFor='plot'>Plot:</label><br/>
                <input type="text" id="plot" name="plot"></input><br/>
                <label htmlFor='imdbRating'>IMDB Rating:</label><br/>
                <input type="number" id="imdbRating" name="imdbRating"></input><br/>
                <label htmlFor='director'>Director:</label><br/>
                <input type="text" id="director" name="director"></input><br/>
                <label htmlFor='year'>Year:</label><br/>
                <input type="number" id="year" name="year"></input><br/>
            </form>
        )
    }
}


export default MovieForm