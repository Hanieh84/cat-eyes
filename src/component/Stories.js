import React from 'react'
import './style/stories.css'
import {Form, TextArea} from 'semantic-ui-react'
import Text_list from "./data/Text_list";
import {Link} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';


export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            image: "",
            sound: "",
            text_image_sound: []
        };
    }

    componentDidMount() {
        const name = this.props.storiesName;
        this.getStoriesName(name);

    }

    setTextImageToState(list) {
        this.state.text_image_sound = list
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

    readSoundFile(inputSound) {
        this.setState({
            sound: inputSound
        });
    }

    render() {
        return (
            <div>
                <br/>
                <div class="container">
                    <h2 className="storiesName">{this.props.storiesName}</h2>
                    <div className="card-header border-0 float-left">
                        <img id="pic" src={this.state.image} alt="image"></img>
                    </div>
                    <Form>
                        <TextArea id="text" value={this.state.text}/>
                    </Form>
                    <br/>
                    <div>
                        <ReactAudioPlayer
                            className="audio"
                            src={this.state.sound}
                            autoPlay
                            controls
                        />
                    </div>
                    <br/><br/>
                    <div>
                        <Link to="/Cat">
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                    <br/><br/><br/><br/>
                    {/*FOOTER*/}
                    <div className="card-footer w-100 text-muted">
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
        let list = this.state.text_image_sound;

        for (const [index, value] of list.entries()) {
            if (value[name] != undefined) {
                let valueText = value[name].text;
                let valueImage = value[name].image;
                let valueSound = value[name].sound;
                console.log(valueSound)
                this.readTextFile(valueText);
                this.readImageFile(valueImage);
                this.readSoundFile(valueSound);
            }
        }
    }
}

