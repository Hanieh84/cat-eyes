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

    render() {
        return (
            <div>
                <Link to="/Stories">
                <button id="btn" className={this.props.buttonColor}
                        onClick={(e) => this.handleCreate(e, this.props.name)}
                >{this.props.name}</button>
                </Link>
            </div>
        )

       /*     <Link to="/Cat">
            <button className="img-btn">Enter</button>
    </Link>
*/
        /*return <form onSubmit={this.handleCreate.bind(this) }>
            <ul className='circle-container'>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-primary text-right"
                            ref="inputName"
                            onClick={this.props.actionButton}>{this.props.children}</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-secondary">storie2</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-success text-left">storie3</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-danger">storie4</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-warning">storie5</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-info">storie6</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-light">storie7</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-dark">storie8</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-info">storie9</button>
                </li>
                <li>
                    <button id="btn" type="button"
                            className="btn btn-light">storie10</button>
                </li>
                <li>
                    <p className="text-justify">TEXT</p>
                </li>
            </ul>
        </form>*/
    }

}
