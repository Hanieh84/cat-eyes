import React from 'react'
import './style/Bracelet.css'
import {Link} from "react-router-dom";
import bracelet from "../images/background/bracelet.JPG"
import bracelet1 from "../images/background/bracelet1.jpg"


export default class Bracelet extends React.Component {

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <div className="card mb-3">
                </div>
                <div>
                        <p className="card-text">CATS EYES is a bracelet consisting of 20 beads or gems as I prefer to call them.<br /> 4 letters,
                            6 coloured, 7 silver, 2 cats eyes and 1 invisible.
                            Each one carrying its own meaning and message to you, or the contrary: you to them.
                            <br />By using them you are giving them meaning and importance, in return:<br />
                            …they will empower you to become an advocate for the invisible gem we
                            all carry inside and the holistic learning for wellbeing; a right for all children; an ‘advoCATS’.<br />
                            …they will empower the kitten that resides within us all to become the wild cat it is meant to be.<br />
                            …they will empower you to support a child; child to child towards initiatives of change challenging challenges bringing hope to the future.
                            <br />Let these gems guide you on the circle of life. Hakuna matata!<br /> Put on your CATS EYES in order to listen within and see in the dark,
                            one looking inside yourself and the other out in the world.
                            Both bringing light into dark places, hence giving meaning in life. It is not necessarily easy.
                            Perhaps you don’t initially hear what they say or feel how they touch you.<br /> It doesn’t matter. Just stay with it, patient and peaceful and keep listening – they are truly magic but don’t expect you to prove anything. They but wish to help you find your true ‘being’ and from that seed grow potentially into a ‘doing’.
                            To find your inner voice of guidance.
                            To find what’s important in life.
                            To find joy and love enclosed in your inner gem.
                            …and from that gem and joy visualise how your world, if needed, could be different, talk about it and start walk the talk; agile as a cat and brave as a lion, in truth a wild cat.
                            Approximately price is 10€ / bracelet.
                            <br />For orders or further info contact <a href = "mailto: Nikdeedahlstrom@gmail.com">Nikdeedahlstrom@gmail.com</a>

                        </p>
                </div>
                <br/>
                <div id="carouselExampleIndicators">
                <div className="row">
                    <div id="bracelet" className="column">
                        <img className="img-fluid" src={bracelet} alt="bracelet"></img>
                    </div>
                    <div id="bracelet1" className="column">
                        <img className="img-fluid" src={bracelet1} alt="bracelet1"></img>
                    </div>
                </div>
                </div>
                <div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <Link to="/Cat">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                </div>
                <br/><br/><br/><br/><br/><br/>

            </div>

        )
    }
}
