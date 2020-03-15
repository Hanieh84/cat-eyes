import React from 'react'
import './style/stories.css'
import {Form, TextArea, Button, Comment, Header} from 'semantic-ui-react'
import farsiText from '../Files/CATS EYES BEDTIME STORIES/1_CONNECTED TO CATS-EYES BRACELET_AF.txt'
import img from '../images/Illustrationer/2.jpg';

export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    componentDidMount() {
        this.readTextFile(farsiText);
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
            </div>
        )
    }
}
