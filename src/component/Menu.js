import React from 'react'
import {Link} from "react-router-dom";
import "./style/menu.css";

export default class Menu extends React.Component {
    render() {
        const {flag, code, name, countries} = require('country-emoji');
        return <div>
            <br/>
            <div className="flag-fonts">
                {flag('SE')}
                {flag('IR')}
                {flag('FR')}
                {flag('DE')}
                {flag('IN')}
                {flag('JP')}
                {flag('UAE')}
                {flag('CN')}
                {flag('AF')}
                {flag('RU')}
                {flag('SO')}
                {flag('ES')}
            </div>
            <br/>
            <div className="dropdown">
                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MENU
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Home</a>
                    <a className="dropdown-item" href="/cat">Cat</a>
                    <a className="dropdown-item" href="/stories">Stories</a>
                </div>
            </div>
        </div>
    }
}
