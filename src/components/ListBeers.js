import React from 'react';
import BeersService from '../utils/api';
import { Link } from 'react-router-dom';
import Header from './Header'
import './ListBeers.css';


class ListBeers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount () {
        const beersService = new BeersService ();  
        beersService.getAll()
        .then((response) => {
            // console.log("The beer all response is", response);
            this.setState({
                beers: response.data
            })
        })
    }


render () {
    return (
    <div>
        <Header />
        <div className='list-beers'>

            <form>
            <input type="text" name="search" onChange={this.handleChange} value={this.state.search}/>
            </form>
        
                 {this.state.beers.map((beer, index) => {
                    return (
                        <div key={index}>
                            <div>
                        <img className="mini-pic" src={beer.image_url} alt="beer" />
                            </div>
                        <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                        <h5>{beer.tagline}</h5>
                        <p> Created by: {beer.contributed_by}</p>
                        </div>
                )
                 })}
        </div>
    </div>
    )
    }
}

export default ListBeers;