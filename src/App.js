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
import Bracelet from "./component/Bracelet"
import cat from "./images/background/cat.jpg";

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

    componentDidMount() {
        this.setState({
            stories: stories_EN
        });
        this.getDataFromDatabase();
    }

    getDataFromDatabase() {
        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(data =>
                console.log(data));
    }

    selectStories(name) {
        this.setState({
            storiesName: name
        })
    }

    handleStoriesList(stories) {
        this.setState({
            stories: stories
        })
    }

    render() {
        const CatPage = () => {
            return (
                <div>
                    <div>
                        <Flags_menu
                            handleStoriesList={this.handleStoriesList.bind(this)}
                        />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <textarea className="ReadText" rows="20" cols="40" disabled >Welcome to Cats Eyes Tales.
                                        10 healing and inspiring stories that will help you stand up on
                                        the inside, find your way in the dark and reflect upon the meaning of
                                        life as well as sharing this with others. Some with added audio.
                                        We encourage you to learn these stories of by heart in order to retell them to
                                        others or to remember when the going gets tuff and life presents you with challenges.
                                        The oral tradition of telling of stories round the fireplace has been more and more
                                        forgotten in our digital era. Where is then your alternative space and time for personal
                                        sharing of story? While travelling, on a long walk, at a café, during a school break, as
                                        a bedtime story??...
                                        Cats Eyes Tales is a peer to peer narrative toolkit. Symbolically each story is a gem that
                                        is part of what we call your personal Cats Eyes Bracelet. This bracelet is a great tool for
                                        you to remember not only these 10 stories but also your own chosen personal stories that you
                                        can connect to any of the gems.
                                        This with the intent of making you a storyteller. A healing storyteller on the quest of
                                        finding your own very unique potential along with personal wellbeing as well as a strive
                                        towards the greater good for all. This is the beginning of your invisible back-pack of
                                        stories, each carrying an inspirational message that will help you navigate in life and
                                        deal with challenges as they arise.
                                        Cats Eyes Bracelet is fictive but you  can also order your personal Cats Eyes physical
                                        Bracelet here on this site. By doing that you also support the great work of Shraddha
                                        Charitable Trust with Specially Abled in India.
                                    </textarea>
                                </div>
                                <div className="col-md-7">
                                    <ul className='circle-container'>
                                        <div className="adminImage">
                                              <img className="img-fluid" src={cat} alt="cat"></img>
                                        </div>
                                        {this.state.stories.map((key, index) =>
                                            <li key={key}>
                                                <Cat
                                                    name={key}
                                                    number={index + 1}
                                                    actionButton={this.selectStories.bind(this)}
                                                    buttonColor={button[index]}
                                                />
                                            </li>
                                        )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
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
                            <Route exact={true} path="/Bracelet" component={Bracelet}/>
                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        )
    }

}
