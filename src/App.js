import React from 'react';
import Header from 'react-dom';
import {Route, Switch} from "react-router";
import Home from './component/Home.js';
import Cat from './component/Cat';
import Stories from './component/Stories.js';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {
    stories_GB, stories_IR, stories_SE, stories_SO,
    stories_ES, stories_JP, stories_DE, stories_FR, stories_CN,
    stories_UAE, stories_IN, stories_RU, stories_AF,
    stories_ET
} from './component/data/Stories_List';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            storiesName: ""
        };
    }

    componentDidMount(id) {
        this.setState({
            stories: stories_GB
        });
    }

    selectStories(id) {
        this.setState({
            storiesName: id
        })
    }

    render() {
        const CatPage = () => {
            return (
                <div>
                    <ul className='circle-container'>
                        {
                            this.state.stories.map(storie =>
                                <li key={storie}>
                                    <Cat
                                        name={storie}
                                        actionButton={this.selectStories.bind(this)}
                                    />
                                </li>
                            )
                        }
                    </ul>
                </div>
            )
        };

        const StoriesPage = () => {
            return (
                <div>
                    <Stories
                    storiesName={this.state.storiesName}
                    />

                </div>
            )
        };
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Menu
                            onClickFlagCountry={this.handleClickEvent.bind(this)}
                        />

                        <Switch>
                            <Route exact={true} path="/" component={Home}/>
                            <Route exact={true} path="/Cat" component={CatPage}/>
                            <Route exact={true} path="/Stories" component={StoriesPage}/>
                        </Switch>


                    </div>
                </BrowserRouter>

            </div>
        )
    }

    handleClickEvent(id) {
        switch (id) {
            case "SE":
                this.setState({
                    stories: stories_SE
                });
                break;
            case "IR":
                this.setState({
                    stories: stories_IR
                });
                break;
            case "GB":
                this.setState({
                    stories: stories_GB
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
                    stories: stories_ET
                });
                break;
            default:
                console.log("cant find flag number ");
        }
    }

}
