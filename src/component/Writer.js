import React from 'react'
import './style/writer.css'
import Nik from '../images/background/Nik.png'
import {Link} from "react-router-dom";


export default class Writer extends React.Component {

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid" src={Nik} alt="Nik"></img>
                    </div>
                        <br/>
                        <div className="col-md-9">

                                <p>Nik Dee is an experienced storyteller using different
                                    arts and media for the narratives with a special interest
                                    in fairy tales and healing stories. In particular stories for the little
                                    child that resides in us all regardless age.
                                    Stories that are not only healing but build resilience towards future
                                    challenges in life. As for the Cats Eyes Tales making each and one of us
                                    a storyteller provided with a transparent backpack filled with inspiring
                                    narratives to be shared or kept for personal use once needed.
                                    This as part of personal growth and in order to find and
                                    nurture the unique potential within us all.
                                    Further more as the old lion concludes;
                                    using stories to reflect light into dark corners of our life and in the world.
                                    Providing hope, love, care and presence in the now as well as towards the future.
                                    Want to find out more? Please visit  <a
                                        href="http://nikdee.se/"> nik.dee.se</a></p>
                            </div>
                        </div>
                </div>
                <div>
                    <br/><br/><br/><br/><br/>
                    <Link to="/Cat">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                </div>
                <br/><br/><br/><br/>
            </div>

        )
    }
}
