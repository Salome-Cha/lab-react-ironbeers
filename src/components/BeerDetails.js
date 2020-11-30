import React from 'react';
import BeersService from '../utils/api';
import Header from './Header'
import './BeerDetails.css';

class BeerDetails extends React.Component {
    state = {
        image: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: ""
    }

    componentDidMount () {
        const beersService = new BeersService();
        let id = this.props.match.params.id;
   
        beersService.getOneBeer(id)
            .then((response) => {
                console.log("The response for one beer is:", response);
                this.setState({
                    image: response.data.image_url,
                    name: response.data.name,
                    tagline: response.data.tagline,
                    first_brewed: response.data.first_brewed,
                    attenuation_level: response.data.attenuation_level,
                    description: response.data.description,
                    contributed_by: response.data.contributed_by                   
                })
            })
    }

render () {
    return (
            <div>
                <Header />
                    <div className="beerdetail-container">
                        <img className="image-detail" src={this.state.image}></img>
                        <h2> {this.state.name}</h2>
                        <h4> {this.state.tagline}</h4>
                        <p> {this.state.attenuation_level}</p>
                        <p> {this.state.first_brewed}</p>
                        <p className="description">{this.state.description}</p>
                        <p>{this.state.contributed_by}</p>
                    </div>
            </div>
    )
    }
}

export default BeerDetails;