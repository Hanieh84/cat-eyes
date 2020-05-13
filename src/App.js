import React from 'react';
import {Route, Switch} from "react-router";
import Home from './component/Home.js';
import Cat from './component/Cat';
import Stories from './component/Stories.js';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Flags_menu from "./component/Flags_menu";
import {stories_EN} from './component/data/Stories_List';
import Writer from "./component/Writer";

let button = ["#1de9b6", "#b3e5fc", "#5c6bc0",
    "#7e57c2", "#e040fb", "#ff1744", "#e65100",
    "#ffab00", "#ffca28", "#9ccc65"];
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            storiesName: "",
            username: ""
        };
    }

    componentDidMount(){
        // här kan du testa och från början kör console.log
        this.setState({
            stories: stories_EN
        });
    }

    selectStories(name) {
        this.setState({
            storiesName: name
        })
    }

    /*
        skapa en method handleStoriesList och skicka den genom porten till Flags_menu komponent,
        inparameter kommer att blir din stories
        och sedan do sätter värdet för this.state.stories till den storie som har kommit
    */

    handleStoriesList(stories) {
        this.setState({
            stories: stories
        })
    }
    render() {
        const CatPage = () => {
            return (
                //du skickar methoden som du skapate (handleStoriesList)
                //vi har skrivit separat i <Flags_menu> för att undvika skriva 10 gånger för varje circle button
                <div>
                    <div>
                        <Flags_menu
                            handleStoriesList={this.handleStoriesList.bind(this)}
                        />
                        <ul className='circle-container'>
                            <div id="adminText">
                                {/*  <text>
                                    info text.. info text..<br/> info text.. info text..<br/></text>*/}
                            </div>
                            {
                                this.state.stories.map((key, index) =>
                                    <li key={key}>
                                        <Cat
                                            name={key}
                                            actionButton={this.selectStories.bind(this)}
                                            buttonColor={button[index]}
                                        />
                                    </li>
                                )
                            }
                        </ul>
                    </div>
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
                        <Menu/>
                        <Switch>
                            <Route exact={true} path="/" component={Home}/>
                            <Route exact={true} path="/Cat" component={CatPage}/>
                            <Route exact={true} path="/Stories" component={StoriesPage}/>
                            <Route exact={true} path="/writer" component={Writer}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        )
    }

}
