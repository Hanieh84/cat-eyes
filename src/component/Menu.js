import React from 'react'
import "./style/menu.css";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickEvent(e, id) {
        this.props.onClickFlagCountry(id);
    };

    render(){

        const {flag, code, name, countries} = require('country-emoji');
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-8">
                        <div className="flag-fonts">
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'SE')}>{flag('SE')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'IR')}>{flag('IR')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'FR')}>{flag('FR')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'DE')}> {flag('DE')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'IN')}> {flag('IN')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'JP')}> {flag('JP')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'UAE')}> {flag('UAE')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'CN')}> {flag('CN')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'AF')}> {flag('AF')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'RU')}> {flag('RU')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'SO')}> {flag('SO')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'ES')}> {flag('ES')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'ET')}> {flag('ET')}</a>
                            <a href="#" onClick={(e) => this.handleClickEvent(e, 'GB')}> {flag('GB')}</a>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MENU
                            </button>
                            <div className="dropdown-menu"
                                 aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/">Home</a>
                                <a className="dropdown-item" href="/cat">Cat</a>
                                <a className="dropdown-item" href="/stories">Stories</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
