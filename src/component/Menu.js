import React from 'react'
import "./style/menu.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {flag, code, name, countries} = require('country-emoji');
        return (
            <div>
                <br/>
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
                                <a className="dropdown-item" href="/Order">Order</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
