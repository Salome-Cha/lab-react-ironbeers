import React from 'react';
import {Link} from 'react-router-dom';
import './Homepage.css';

class Homepage extends React.Component {
   

render () {
    return (
    <div>
        <div className="intro-bloc">
            <img className="beer-pic" src="image1.jpg" alt="beer1" /> 
            <Link exact to="/beers">  <h2>All Beers</h2>  </Link>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>

        <div className="intro-bloc">
           <img className="beer-pic" src="image2.jpg" alt="beer2" />
            <Link exact to="/random-beer">    <h2>Random Beers</h2> </Link>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>

        <div className="intro-bloc"> 
        <img className="beer-pic" src="image3.jpg" alt="beer3" />   
            <Link exact to="/new-beer"> <h2>New Beers</h2>  </Link>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
        </div>


    </div>
    )
    }
}

export default  Homepage;