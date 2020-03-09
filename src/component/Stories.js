import React from 'react'
import './style/stories.css'
import Image from 'react-image'
import Text from 'react-text'
import { Form, TextArea,Button, Comment,Header } from 'semantic-ui-react'


export default class Stories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }
    componentDidMount() {
        this.readTextFile(this.props.txt);
    }

    readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "Files/TLFTSpanish.txt", false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    this.setState({
                        text: allText
                    });
                }
            }
        };
        rawFile.send(null);
    };
    render() {

        return <div>

            <div>

                <div className="card-header border-0 float-left" >
                    <img id="pic" src={require('../images/Illustrationer/1.jpg')} alt="image"></img>
                </div>
                <div>
                <Form>
                    <TextArea id="text">
                        tt detKATTÖGATS GODNATTSAGOR
                        I SAMBAND MED CATS-EYES ARMBAND
                        Dessa är några skri är konstigt med en historia som börjar så här men det här är av resande typ.
                        Den hade knD MED CATS-EYES ARMBAND
                        Dessa är några skriftliga berättelser och anpassningar av inspirerande berättelser hämtade från Internet och valda för att matcha varje pärla i armbandet.
                        Av Nik Dee  2014-07-12appt avslutat meningen, bet si KATTÖGATS GODNATTSAGOR
                        I SAMBAND MED D MED CATS-EYES ARMBAND
                        Dessa är några skriftliga berättelser och anpassningar av inspirerande berättelser hämtade från Internet och valda för att matcha varje pärla i armbandet.
                        Av Nik Dee  2014-07-12CATS-EYES ARMBAND
                        Dessa är några skriftliga berättelser och anpassningar av inspirerande berättelser hämtade från Internet och valda för att matcha varje pärla i armbandet.
                        Av Nik Dee  2014-07-12D MED CATS-EYES ARMBAND
                        Dessa är några skriftliga berättelser och anpassningar av inspirerande berättelser hämtade från Internet och valda för att matcha varje pärla i armbandet.
                        Av Nik Dee  2014-07-12.

                    </TextArea>
                </Form>

                </div>
               {/* <div className="card-block px-2">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">
*/}

                    {/*</p>*/}


                <div>
                    <a href="#" className="btn btn-primary">BUTTON</a>
                </div>

            </div>
                <div className="w-100"></div>


                <div className="card-footer w-100 text-muted">
                    FOOTER
                </div>
            </div>
/*
        </div>
*/
    }

}
