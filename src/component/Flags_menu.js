import React from "react";
import {
    stories_AF,
    stories_CN,
    stories_DE,
    stories_EN,
    stories_ES,
    stories_FA,
    stories_FR,
    stories_IN,
    stories_JP,
    stories_RU,
    stories_SE,
    stories_SO,
    stories_TI,
    stories_UAE
} from './data/Stories_List';


export default class Flags_menu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickEvent(e, id) {
        let stories = [];
        switch (id) {
            case "SE":
                stories = stories_SE;
                break;
            case "IR":
                stories = stories_FA;
                break;
            case "GB":
                stories = stories_EN;
                break;
            case "SO":
                stories = stories_SO;
                break;
            case "JP":
                stories = stories_JP;
                break;
            case "CN":
                stories = stories_CN;
                break;
            case "ES":
                stories = stories_ES;
                break;
            case "DE":
                stories = stories_DE;
                break;
            case "FR":
                stories = stories_FR;
                break;
            case "UAE":
                stories = stories_UAE;
                break;
            case "IN":
                stories = stories_IN;
                break;
            case "RU":
                stories = stories_RU;
                break;
            case "AF":
                stories = stories_AF;
                break;
            case "ET":
                stories = stories_TI;
                break;
            default:
                console.log("cant find flag number ");
        }
        // här slutar switch och stories har den senaste värdet
        // här man kalla på method som anropade i porten från App.js
        this.props.handleStoriesList(stories)
    }

    render() {
        const {flag, code, name, countries} = require('country-emoji');
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-8">
                        <div className="flag-fonts">
                            <a title="Swedish" onClick={(e) => this.handleClickEvent(e, 'SE')}>{flag('SE')}</a>
                            <a title="Farsi" onClick={(e) => this.handleClickEvent(e, 'IR')}>{flag('IR')}</a>
                            <a title="French" onClick={(e) => this.handleClickEvent(e, 'FR')}>{flag('FR')}</a>
                            <a title="German" onClick={(e) => this.handleClickEvent(e, 'DE')}> {flag('DE')}</a>
                            <a title="Hindi" onClick={(e) => this.handleClickEvent(e, 'IN')}> {flag('IN')}</a>
                            <a title="Japanese" onClick={(e) => this.handleClickEvent(e, 'JP')}> {flag('JP')}</a>
                            <a title="Arabic" onClick={(e) => this.handleClickEvent(e, 'UAE')}> {flag('UAE')}</a>
                            <a title="Chinese" onClick={(e) => this.handleClickEvent(e, 'CN')}> {flag('CN')}</a>
                            <a title="Pashto" onClick={(e) => this.handleClickEvent(e, 'AF')}> {flag('AF')}</a>
                            <a title="Russian" onClick={(e) => this.handleClickEvent(e, 'RU')}> {flag('RU')}</a>
                            <a title="Somali" onClick={(e) => this.handleClickEvent(e, 'SO')}> {flag('SO')}</a>
                            <a title="Spanish" onClick={(e) => this.handleClickEvent(e, 'ES')}> {flag('ES')}</a>
                            <a title="Ethiopia" onClick={(e) => this.handleClickEvent(e, 'ET')}> {flag('ET')}</a>
                            <a title="United Kingdom" onClick={(e) => this.handleClickEvent(e, 'GB')}> {flag('GB')}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
