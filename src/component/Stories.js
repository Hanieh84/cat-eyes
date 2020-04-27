import React from 'react'
import './style/stories.css'
import {Form, TextArea} from 'semantic-ui-react'
import Text_list from "./data/Text_list";

export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            image: "",
            text_image: []
        };
    }

    componentDidMount() {
        const name = this.props.storiesName;
        this.getStoriesName(name);

    }

    setTextImageToState(list) {
        this.state.text_image = list
    }

    readTextFile = inputText => {
        const rawFile = new XMLHttpRequest();
        rawFile.open("GET", inputText, false);
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

    readImageFile(inputImage) {
        this.setState({
            image: inputImage
        });
    }

    render() {
        return (
            <div>
                <br/>
                <div>
                    <h2>{this.props.storiesName}</h2>

                    <div className="card-header border-0 float-left">
                        <img id="pic" src={this.state.image} alt="image"></img>
                    </div>
                    <Form>
                        <TextArea id="text" value={this.state.text}/>
                    </Form>
                    <br/>
                    <div>
                        <a href="/Cat" className="btn btn-primary">Back</a>
                    </div>
                    <br/><br/><br/><br/>
                    <div className="card-footer w-100 text-muted">
                        FOOTER
                    </div>
                </div>
                <Text_list
                    text_image={this.setTextImageToState.bind(this)}
                />
            </div>
        )
    }

    getStoriesName(name) {
        console.log('Name for stories:' + name);
        let list = this.state.text_image;

        for (const [index, value] of list.entries()) {
            if (value[name] != undefined) {
                let valueText = value[name].text;
                let valueImage = value[name].image;
                this.readTextFile(valueText);
                this.readImageFile(valueImage);
            }
        }
    }
}

