import React from 'react'
import "./style/menu.css";
import {Route, Switch} from "react-router";
import Cat from "../component/Cat"
import {Link} from "react-router-dom";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
                                    <button className="dropdown-item">Cat</button>
                                </Link>
                                <Link to="/Writer">
                                    <button className="dropdown-item">Writer</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
