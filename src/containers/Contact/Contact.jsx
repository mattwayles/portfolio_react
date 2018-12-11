import React from 'react';
import logo from '../../assets/home/logo.png';
import facebookIcon from '../../assets/home/social/facebookIcon.png';
import linkedinIcon from '../../assets/home/social/linkedinIcon.png';
import phoneIcon from '../../assets/home/social/phoneIcon.png';
import classes from './Contact.css';
import * as emailjs from 'emailjs-com';
import Button from "../../components/ui/Button/Button";

/**
 * Display a contact OR collaboration page; these were consolidated into one page because they are so similar. Rendering is
 * donw based on 'collab' prop; render Collaboration page is true, Contact page if false.
 */
class Contact extends React.Component {
    state = {
        name: {value: "", error: false, placeholder: "Name"},
        email: {value: "", error: false, placeholder: "E-Mail"},
        message: {value: "", error: false, placeholder: this.props.collab ?
                "Details about your project! What technologies are you using? What's your basic design and architecture " +
                "look like? How involved would you like me to be? This is the place to totally nerd out!"
                : "Tell me your life story! How's it going today? What are your hopes and dreams? What brought you to my site?"}
    };

    /**
     * Manage input validation by updating state every time an input value changes
     * @param e The input event
     * @param field The field to update
     */
    type = (e, field) => {
        this.setState({ [field]: {value: e.target.value, error: false} });
    };

    /**
     * Validate form fields and send e-mail using emailjs
     */
    send = () => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (this.state.name.value.length < 1) {
            this.setState({ name: {placeholder: "Please tell me your name!", value: "", error: true} })
        }
        else if (this.state.email.value.length < 1) {
            this.setState({ email: {placeholder: "I'll need your E-Mail to reply!", value: "", error: true} })
        }
        else if (!this.state.email.value.match(emailRegex)) {
            this.setState({ email: {placeholder: "That's not a valid e-mail", value: "", error: true} })
        }
        else if (this.state.message.value.length < 1) {
            this.setState({ message: {placeholder: "C'mon, blank e-mails are no fun!", value: "", error: true} })
        }
        else {
            emailjs.sendForm('gmail', 'collaborate', '#collaborate', 'user_L1fdjLcl96mo7Y7tPXIqn')
                .then((response) => {
                    console.log('Sent Mail Successfully', response.status, response.text);

                }, (err) => {
                    console.error('Error while sending e-mail:', err);
                });
            window.scrollTo(0, window.innerHeight);
        }
    };

    render() {
        const {name, email, message} = this.state;
        return (
            <section className={classes.Main}>
                <section className={classes.LogoDiv}>
                    <img className={classes.Logo} src={logo} alt={"Contact Me"} />
                </section>
                {!this.props.collab ?
                            <section className={classes.FlexRow}>
                                <a href={'http://facebook.com/mwayles'} rel="noopener noreferrer" target="_blank">
                                    <img src={facebookIcon} className={classes.SocialIcon} alt={"Facebook Message"}/></a>
                                <a href={'https://www.linkedin.com/in/matthew-wayles-03354369'} rel="noopener noreferrer" target="_blank">
                                    <img src={linkedinIcon} className={classes.SocialIcon} alt={"LinkedIn Message"}/></a>
                                <a href="tel:+1843-368-9968" rel="noopener noreferrer" target="_blank">
                                    <img className={classes.SocialIcon} src={phoneIcon} alt="843-368-9968" /></a>
                            </section>
                    : null}
                <form id="collaborate" className={classes.Form}>
                    <input type="text" name="name"
                        onChange={(e) => this.type(e, 'name')}
                        className={name.error ? classes.FormError : classes.FormInput}
                        placeholder={name.placeholder} />
                    <input type="email" name="user_email"
                        onChange={(e) => this.type(e, 'email')}
                           className={email.error ? classes.FormError : classes.FormInput}
                           placeholder={email.placeholder} />
                    <textarea
                        onChange={(e) => this.type(e, 'message')}
                        className={message.error ? classes.FormMessageError : classes.FormMessage}
                        placeholder={message.placeholder}
                        name="message" />
                </form>

                <section className={classes.Button}>
                    <Button visible={true} pressed={false} enter={"left"} click={this.send} label={this.props.collab ? "Let's do Business!" : "All done, send it off!"} />
                </section>
            </section>
        );
    }
}

export default (Contact);