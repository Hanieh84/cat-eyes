import React from 'react'
import "./style/menu.css";
import {Link} from "react-router-dom";
import logo from "../images/background/logo.png";


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <img className="logo" src={logo} alt="logo"></img>
                </div>
                <div className="row">
                    <div className="col-8">
                    </div>
                    <div className="col-4">
                        <div className="dropdown">
                            <button className="btn btn-primary  dropdown-toggle" type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MENU
                            </button>
                            <div className="dropdown-menu"
                                 aria-labelledby="dropdownMenuButton">
                                <Link to="/">
                                    <button className="dropdown-item">Home</button>
                                </Link>
                                <Link to="/Cat">
                                    <button className="dropdown-item">Tales</button>
                                </Link>
                                <Link to="/Writer">
                                    <button className="dropdown-item">Writer</button>
                                </Link>
                                <Link to="/Bracelet">
                                    <button className="dropdown-item">Bracelet</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
