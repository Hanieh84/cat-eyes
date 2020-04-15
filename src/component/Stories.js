import React from 'react'
import './style/stories.css'
import {Form, TextArea} from 'semantic-ui-react'
import farsiText from '../Files/CATS EYES BEDTIME STORIES/1_CONNECTED TO CATS-EYES BRACELET_AF.txt'
import img from '../images/Illustrationer/2.jpg';
import Text_list from "./data/Text_list";


export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            stories_list: {},
            //nameObj: {}
        };
    }

    componentDidMount() {
        const name = this.props.storiesName;
        this.getStoriesName(name);
    }

    setObjectToState(obj) {
        this.state.stories_list = obj
    }

    readTextFile = input => {
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", input, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    const allText = rawFile.responseText;
                    this.setState({
                        text: allText
                    });
                }
            }
        };
        rawFile.send(null);
    };

    render() {
        return (
            <div>
                <div className="card-header border-0 float-left">
                    <img id="pic" src={img} alt="image"></img>
                </div>
                <Form>
                    <TextArea id="text" value={this.state.text}/>
                </Form>
                <div>
                    <a href="#" className="btn btn-primary">BUTTON</a>
                </div>
                <div className="card-footer w-100 text-muted">
                    FOOTER
                </div>
                <Text_list
                    allStories={this.state.stories_list}
                    nameObj={this.setObjectToState.bind(this)}
                />
            </div>
        )
    }

    getStoriesName(name) {
        let list = this.state.stories_list;

            if (list.hasOwnProperty(name)){
                this.readTextFile(list[name]);
                console.log( list[name])

            }


        /*
                for (const [index, value] of this.state.stories_list.entries()) {
        */
        //console.log(value)

        /* const stories_list=[]
         for (const value of stories_list) {
             console.log(value);


         }*/

    }
}

