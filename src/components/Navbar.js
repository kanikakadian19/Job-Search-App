import React, { Component } from 'react';
import logo from "../images/logo.svg";
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handletoggle = ()=>{
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-header">
                    
                    <button type="button" className="nav-btn" onClick={this.handletoggle}>
                        <FaAlignRight  className="nav-icon"/>
                    </button>

                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                <li>
                    <Link to="/">Home(होम)</Link>
                </li>
                <li>
                    <Link to="/room">Jobs(जॉब)</Link>
                </li>
                </ul>
            </nav>
        );
    }
}

