import React from 'react';
import {Route, Switch} from "react-router";
import Home from './component/Home.js';
import Cat from './component/Cat';
import Stories from './component/Stories.js';
import Menu from "./component/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link} from "react-router-dom";
import Flags_menu from "./component/Flags_menu";
import {stories_EN} from './component/data/Stories_List';
import Writer from "./component/Writer";
import Order from "./component/Order";

let button = ["btn btn-primary", "btn btn-secondary", "btn btn-success",
    "btn btn-danger", "btn btn-warning", "btn btn-info", "btn btn-primary",
    "btn btn-dark", "btn btn-info", "btn btn-warning"];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            storiesName: ""
        };
    }

    componentDidMount() {
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
                                <text>
                                    info text.. info text..<br/> info text.. info text..<br/> info text.. info
                                    text..<br/>
                                    info text.. info text..
                                </text>
                            </div>
                            {
                                this.state.stories.map((key, index) =>
                                    <li key={key}>
                                        <Cat
                                            name={key}
                                            actionButton={this.selectStories.bind(this)}
                                            buttonColor = {button[index]}
                                        />
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    {/*   <div>
                      <ul>
                          {
                              this.state.button.map(button =>
                                  <li key={button}>
                                      <Cat
                                          buttonColor={button}
                                      />
                                  </li>
                              )
                          }
                      </ul>
                  </div>*/}
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
                            <Route exact={true} path="/order" component={Order}/>
                        </Switch>


                    </div>
                </BrowserRouter>

            </div>
        )
    }

    /*
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
    */

}
