import React from 'react'
import './style/catstyle.css'
import './style/cat_style.scss'
import {Link} from "react-router-dom";

export default class Cat extends React.Component {
    constructor(props) {
        super(props);

    }

    handleCreate(e, id) {
        this.props.actionButton(id)
    };
//det är hella circle 10 buttons
    render() {
        return (
            <div>
                <Link to="/Stories">
                    <button className="storiesButton" id="btn" style={{backgroundColor: this.props.buttonColor}}
                            onClick={(e) => this.handleCreate(e, this.props.name)}
                    >{this.props.name}</button>
                </Link>
            </div>
        )

    }

}
