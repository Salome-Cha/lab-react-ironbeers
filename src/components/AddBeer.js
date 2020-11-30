import React from 'react';
import BeersService from '../utils/api';
import { Link } from 'react-router-dom';
import Header from './Header'
import './addBeer.css';

class AddBeer extends React.Component {
    state = {
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: ""
    }

    handleChange = (event) => {
        let {name, value, type} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const beersService = new BeersService();   // because here this.state represents one character.
        beersService.addBeer(this.state).then(() => {
            this.props.history.push('/beers')
        });
    }

render () {
    return (
    <div>
        <Header />
        <div>
             <form onSubmit={this.handleFormSubmit} className="form-add container">
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>

                <label>Tagline</label>
                <input type="text" name="tagline" onChange={this.handleChange} value={this.state.tagline} />

                <label>First Brewed:</label>
                <input type="text" name="first_brewed" onChange={this.handleChange} value={this.state.first_brewed}  />

                <label>Attenuation Level:</label>
                <input type="number" name="attenuation_level" onChange={this.handleChange} value={this.state.attenuation_level}  />

                <label>Description:</label>
                <input type="text" name="description" onChange={this.handleChange} value={this.state.description}  />

                <label>Contributor:</label>
                <input type="text" name="contributed_by" onChange={this.handleChange} value={this.state.contributor}  />
            
            <button> Create </button>
            </form>
      
        </div>
    </div>
    )
    }
}

export default AddBeer;