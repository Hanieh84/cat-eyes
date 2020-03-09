import React from 'react';
import {Router, Route, Switch} from "react-router";
import Home from './component/Home.js';
import Cat from './component/Cat';
import Stories from './component/Stories.js';
import Menu from "./component/Menu";
import Flags from "./component/Flags";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
/*
import '~bootstrap/scss/bootstrap.scss';
import './custom.scss';
*/


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            storiesEnglish: ["Saga1", "Saga2", "Saga3", "Saga4", "Saga5", "Saga6", "Saga7", "Saga8", "Saga9", "Saga10"],

        }
    }

    selectStories(id) {
        console.log(id)
    }

    render() {

        const CatPage = () => {
            return (
                <div>
                    <ul className='circle-container'>
                        {this.state.storiesEnglish.map(storie =>
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
                /*     this.state.stories.map(storie =>
                         <Cat
                             key={storie}
                             actionButton={() => this.selectStories(this)}
                         />
                     )*/
            )
        }
        const StoriesPage = () => {
            return (
                <div>
                    <Stories></Stories>
                </div>
            )
        }
        return (
            <BrowserRouter>
                <div className="container">
                    <Menu/>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/Cat" component={CatPage}/>
                        <Route exact={true} path="/Stories" component={StoriesPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )


    }
}

