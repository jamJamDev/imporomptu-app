import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EnterEmail from '../components/EnterEmail.js';
import logoColor from '../logoColor.png';
import 'mui-react/dist/mui-react.css';
import {Appbar,Container,Button} from 'mui-react';

class MapPage extends Component {
    render() {
        return (
            <div className="MapPage" style={{textAlign: "center"}}>
                <h1>Impromptu: Do something right now, today, or tomorrow!</h1>

                <div>
                  <img src={logoColor} style={{width:270, height:270, padding:20}} alt="logo" />
                </div>

                <div >
                  <EnterEmail />
                </div>

                <div>
                  <Link to="/map" style={{color:"white", textDecoration:"none", padding:100}}>
                  <button onClick={this.handleClick} style={{backgroundColor:"#14ad24 ", outline:"none", color:"white"}}>
                    <a href="/map" className="Button" style={{color:"white", textDecoration:"none"}}>Login</a>
                  </button>
                  </Link>
                </div>

            </div>
        );
    }
}

export default MapPage;
