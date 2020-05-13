import React from 'react'
import './style/writer.css'
import Nik from '../images/background/Nik.png'


export default class Writer extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <h1 className="nik">Nik Dee</h1><br/>
                <hr/>
                <br/>
                <div className="row">
                    <div className="col-5">
                        <div>
                            <img src={Nik} alt="Nik"></img>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="dropdown"></div>
                        <h4 className="nik"> ACTOR, STORYTELLER, AUTHOR </h4>
                        <br/>
                        <p className="c">This a paragraph, oThis isparagraph, oThis is
                            a paragparagraph, oThis isa paragraph,
                            oThis isparaa paragraph, oThis isparaa paragraph,
                            oThis ispara a paragis a paragraph,ispara a paragis
                            a paragraph, oblispara a paragis a paragraph,
                            oblispara a paragis a paragraph, obl oblique.ispara
                            a paragis a paragraph, oblispara a paragis a paragraph,
                            ispara a paragis a paragraph, obloblThis a paragraph, oThis isparagraph, oThis is
                            a paragparagraph, oThis isa paragraph,
                            oThis isparaa paragraphThis a paragraph, oThis isparagraph, oThis is
                            a paragparagraph, oThis isa paragraph,
                            oThis isparaa paragraph, o, o</p>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="card-footer w-100 text-muted">
                    FOOTER
                </div>
            </div>


        )

    }
}
