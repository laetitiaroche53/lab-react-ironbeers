import React from 'react';
import {Link} from "react-router-dom"
import axios from "axios"

 class RandomBeer extends React.Component{

   state={
    beers : []
  }


   getRandomBeer = () => {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random").then(response => {
      this.setState({
        beers: response.data[0]
      })
    })
  }

   componentDidMount() {
   this.getRandomBeer()
  }

   clickHandler = () => {
    this.getRandomBeer()
  }

   render() { 

     return (
        <div>
        
            <h1>{this.state.beers.name}</h1>
            <p className="image-beer"><img src={this.state.beers.image_url} width="10%" alt={this.state.name}/></p>
            <p className="tagline">{this.state.beers.taglinge}</p>
            <p className="description">{this.state.beers.description}</p>
            <p className="first-brewed">{this.state.beers.first_brewed}</p>
            <p className="attenuation-level">{this.state.beers.attenuation_level}</p>
            
            <h2><Link to="/">Home</Link></h2>

            <button onClick={() => this.clickHandler()}>new beer</button>

    </div>
    )
  }
}

 export default RandomBeer