import React, {Component} from 'react';



// -title
// -actors
// -plot
// -imdbRating
// -director 
// -year
// -date added

class MovieForm extends Component {
    constructor(props){
        super(props)

        this.initialState = {
            title: '',
            actors: '',
            plot: '',
            imdbRating: '',
            director: '',
            year: '',
            dateAdded: new Date()
        }
        this.state = this.initialState
    }

    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const {title, actors, plot, imdbRating, director, year} = this.state
        return (
            <form>
                <label htmlFor='title'>Title:</label><br/>
                <input 
                    type="text"
                    id="title" 
                    name="title" 
                    value={title} 
                    onChange={this.handleChange}
                ></input><br/>

                <label htmlFor='actors'>Actors:</label><br/>
                <input 
                    type="text"
                    id="actors" 
                    name="actors" 
                    value={actors} 
                    onChange={this.handleChange}
                ></input><br/>

                <label htmlFor='plot'>Plot:</label><br/>
                <input 
                    type="text" 
                    id="plot" 
                    name="plot" 
                    value={plot} 
                    onChange={this.handleChange}
                ></input><br/>

                <label htmlFor='imdbRating'>IMDB Rating:</label><br/>
                <input 
                    type="number" 
                    id="imdbRating" 
                    name="imdbRating" 
                    value={imdbRating} 
                    onChange={this.handleChange}
                ></input><br/>

                <label htmlFor='director'>Director:</label><br/>
                <input 
                    type="text" 
                    id="director" 
                    name="director" 
                    value={director} 
                    onChange={this.handleChange}
                ></input><br/>

                <label htmlFor='year'>Year:</label><br/>
                <input 
                    type="number" 
                    id="year" 
                    name="year" 
                    value={year} 
                    onChange={this.handleChange}
                ></input><br/>
            </form>
        )
    }
}


export default MovieForm