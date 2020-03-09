import React from 'react'
import './style/home.css'
import BackgroundSlider from 'react-background-slider'
import image1 from '../images/Illustrationer/12.jpg'
import image2 from '../images/Illustrationer/12b.jpg'
import {Link} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        return <div>
            <BackgroundSlider
                images={[image1, image2]}
                duration={2.2} transition={2}>
            </BackgroundSlider>
            <Link to="/Cat">
                <button className="img-btn">Enter</button>
            </Link>
        </div>
    }
}
