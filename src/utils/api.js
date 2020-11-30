import axios from 'axios';

// We have to create this method for all APIs and then we can call these methods.
class BeersService {
    constructor () {
        let service = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com`
        }); 
        this.service = service;
    }
    getAll() { 
        return this.service.get('/beers');
    }

    getOneBeer(id) {
        return this.service.get(`/beers/${id}`)
    }

    getRandomBeer() {
        return this.service.get(`/beers/random`)
    }

    getQueriedBeer(query) {
        return this.service.get(`/beers/{query}`)
    }

    addBeer(beer) {
        return this.service.post('/beers/new', beer);
    }
}

export default BeersService;