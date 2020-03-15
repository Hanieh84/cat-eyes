import React from 'react'
import './style/catstyle.css'
import './style/cat_style.scss'

export default class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cssButtonColor: ["btn btn-primary", "btn btn-secondary"]
        }
    }

    render() {
        return (
            <div>
                <button id="btn" type="button"
                        className={this.state.cssButtonColor[0]}
                >{this.props.name}</button>
            </div>
        )


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
/*
    handleCreate(event) {
        event.preventDefault();

        const input = this.refs.inputName;
        const task = input.value;

    }*/
}
