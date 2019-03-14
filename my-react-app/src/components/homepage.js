import React, { Component } from 'react';
import {Link} from "react-router-dom";

const homepage = () => {
        return(
            <div>
                <div className="homepage">

                    <h1>Iron beers</h1>

                    <h2><Link to="/allbeers">All Beers</Link></h2>
                    <p>Bla bla bla bla bla</p>
                    <img className="img-homepage" src="/images/Allbeer.jpg" alt="allbeers"/>

                    <h2><Link to="/random">Random Beer</Link></h2>
                    <p>Bla bla bla bla bla</p>
                    <img className="img-homepage" src="/images/Randombeer.jpg" alt="randombeers"/>

                    <h2>New beer</h2>
                    <p>Bla bla bla bla bla</p>
                    <img className="img-homepage" src="/images/Onebeer.jpg" alt="newbeer"/>

                </div>
            </div>
        )
}


export default homepage;