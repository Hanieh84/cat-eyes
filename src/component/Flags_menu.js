import React from "react";
import {
    stories_EN, stories_FA, stories_SE, stories_SO,
    stories_ES, stories_JP, stories_DE, stories_FR, stories_CN,
    stories_UAE, stories_IN, stories_RU, stories_AF,
    stories_TI
} from './component/data/Stories_List';

export default class Flags_menu extends React.Component {
    constructor(props) {
        super(props);
    }

    // här inne kan komma din switch

    onClickFlagCountry(id) {
        switch (id) {
            case "SE":
                this.setState({
                    stories: stories_SE
                });
                break;
            case "IR":
                this.setState({
                    stories: stories_FA
                });
                break;
            case "GB":
                this.setState({
                    stories: stories_EN
                });
                break;
            case "SO":
                this.setState({
                    stories: stories_SO
                });
                break;
            case "JP":
                this.setState({
                    stories: stories_JP
                });
                break;
            case "CN":
                this.setState({
                    stories: stories_CN
                });
                break;
            case "ES":
                this.setState({
                    stories: stories_ES
                });
                break;
            case "DE":
                this.setState({
                    stories: stories_DE
                });
                break;
            case "FR":
                this.setState({
                    stories: stories_FR
                });
                break;
            case "UAE":
                this.setState({
                    stories: stories_UAE
                });
                break;
            case "IN":
                this.setState({
                    stories: stories_IN
                });
                break;
            case "RU":
                this.setState({
                    stories: stories_RU
                });
                break;
            case "AF":
                this.setState({
                    stories: stories_AF
                });
                break;
            case "ET":
                this.setState({
                    stories: stories_TI
                });
                break;
            default:
                console.log("cant find flag number ");
        }
    }
    handleClickEvent(e, id) {
        this.props.onClickFlagCountry(id);
    };

    render() {

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
                </div>

            </div>
        )
    }

}
