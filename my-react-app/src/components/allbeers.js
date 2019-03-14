import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import AddProject from './AddProject';

class Allbeers extends Component {
  constructor(){
      super();
      this.state = { listOfBeers: [] };
  }

  getAllbeers = () =>{
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllbeers();
  }

  render(){
    return(
        <div>
          { this.state.listOfBeers.map((beers, index) => {
            return (
                <div>
                  <Link to={`beers/${beers._id}`}><h1>{beers.name}</h1></Link>       
                  <p className="image-beer"><img src={beers.image_url} width="10%" alt={beers.name}/></p>
                  <p className="tagline"> {beers.tagline} </p>
                </div>
            )})
          }
        </div>
    )
  }
}

export default Allbeers;