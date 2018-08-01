import React from 'react';
import contact from '../../assets/contact/contact.png';
import phoneicon from '../../assets/contact/phoneIcon.png';
import classes from './Contact.css';
import {SocialIcon} from "react-social-icons";

class Contact extends React.Component {
    componentWillMount() {
        window.scroll(0,0);
    }

    render() {

        return (
            <section className={classes.Main}>
                <p className={classes.Header}>Contact Me</p>
                <section className={classes.FlexRow}>
                    <img className={classes.Image} src={contact} alt="Contact Me" />
                    <section>
                        <p className={classes.Text}>Thank you for visiting my Digital Portfolio.
                            Please feel free to contact me with inquiries, comments, concerns, or freelance work. I look forward to hearing from you!</p>
                        <section className={classes.FlexRow}>
                            <section className={classes.FlexColumn}>
                                <SocialIcon style={{width: '50px'}} className={classes.SocialIcon} url={'mailto:mattwayles@gmail.com'} /><p>Send an E-Mail</p>
                            </section>
                            <section className={classes.FlexColumn}>
                                <SocialIcon style={{width: '50px'}} className={classes.SocialIcon} url={'https://m.me/mwayles'} network="facebook"/><p>Send a Facebook Message</p>
                            </section>
                            <section className={classes.FlexColumn}>
                                <SocialIcon style={{width: '50px'}} className={classes.SocialIcon} url='https://www.linkedin.com/in/matthew-wayles-03354369' /><p>Send a LinkedIn Message</p>
                            </section>
                            <section className={classes.FlexColumn}>
                                <a href="tel:+1843-368-9968"><img style={{width: '80px'}} className={classes.SocialIcon} src={phoneicon} alt="843-368-9968"/></a><p>Call or Send a Text</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}

export default (Contact);