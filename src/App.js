import React from 'react';
import {Route, Switch} from "react-router";
import Home from './component/Home.js';
import Cat from './component/Cat';
import Stories from './component/Stories.js';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories_EN: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_IR: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_SE: ["SE1", "SE2", "SE3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_SO: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_ES: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_JP: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_DE: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_FR: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_CN: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_UAE: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_IN: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_RU: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_AF: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],
            stories_TI: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5",
                "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"]
        }
    }
    selectStories(id) {
        console.log(id)
    }
    handleClickEvent(id) {
        switch (id) {
            case "SE":
                console.log("SWEDEN")
                break;
            case "IR":
                console.log("IRAN")
                break;
            default:
                console.log("Dont show")
        }
    };
    render() {
        const CatPage = () => {
            return (
                <div>
                    <ul className='circle-container'>
                        {this.state.stories_EN.map(storie =>
                            <li>
                                <Cat
                                    key={storie}
                                    name={storie}
                                    actionButton={() => this.selectStories(this)}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            )
        };

        const StoriesPage = () => {
            return (
                <div>
                    <Stories>
                    </Stories>
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
}

