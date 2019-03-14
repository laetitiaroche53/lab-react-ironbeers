import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleBeer();
  }

  getSingleBeer = () => {
      const { params } = this.props.match;
      console.log(params)
      axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.beerId}`)
      .then( responseFromApi =>{
          console.log("coucou",responseFromApi)
          const theBeer = responseFromApi.data;
          this.setState(theBeer);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>   
        <p>{this.state.tagline}</p>
        <p className="image-beer"><img src={this.state.image_url} width="10%" alt={this.state.name}/></p>
        <p>{this.state.first_brewed}</p>
        <p>{this.state.description}</p>
        <p>{this.state.attenuation_level}</p>
        <p>{this.state.contributed_by}</p>

        {/* <Link to={'/projects'}>Back to projects</Link> */}
      </div>
    )
  }
}

export default BeerDetails;