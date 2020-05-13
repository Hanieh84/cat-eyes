import React from 'react'
import "./style/menu.css";
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
                    <br/><br/><br/><br/><br/>
                    <hr className="hr"/>
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
                                <a className="dropdown-item" href="/">Home</a>
                                <a className="dropdown-item" href="/cat">Cat</a>
                                <a className="dropdown-item" href="/Writer">Writer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
