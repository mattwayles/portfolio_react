import React from 'react';
import logo from '../../assets/contact/logo.png';
import facebookIcon from '../../assets/contact/facebookContactIcon.png';
import linkedinIcon from '../../assets/contact/linkedinContactIcon.png';
import mailIcon from '../../assets/contact/mailMe.png';
import callIcon from '../../assets/contact/callMe.png';
import phoneIcon from '../../assets/contact/phoneIcon.png';
import classes from './Contact.css';
import * as emailjs from 'emailjs-com';
import Button from "../../components/ui/Button/Button";
import posed from "react-pose/lib/index";
import Auxil from "../../components/Auxil";

const TRANSITION_DURATION = 1000;
const HOVER_DURATION = 500;
const SHOW_LOGO = 105;
const SHOW_ICONS = 110;
const SHOW_NAME_INPUT = 120;
const SHOW_EMAIL_INPUT = 130;
const SHOW_MESSAGE_INPUT = 140;
const SHOW_SUBMIT_BUTTON = 140;

/**
 * React-Pose poses for page elements
 */
const Logo = posed.img({
    hidden: { opacity: 0 },
    visible: {opacity: 1, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} }
});

const FormInput = posed.input({
    visible:  {opacity: 1, x: 0, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} },
    hidden: { opacity: 0, x: '-50vw' }
});

const FormTextarea = posed.textarea({
    hidden: { opacity: 0, x: '-50vw' },
    visible: {opacity: 1, x: 0, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} }
});

const Icon = posed.img({
    hoverable: true,
    init: {rotate: 0, scale: 1, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION}},
    hover: {rotate: 360, scale: 1.5, transition: { ease: 'easeIn', duration:  HOVER_DURATION}},
    hidden: { opacity: 0},
    visible: { opacity: 1, rotate: 0, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} },
});

const ContactDetails = posed.section({
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { ease: 'easeIn', duration:  TRANSITION_DURATION} },
});

/**
 * Display a contact OR collaboration page; these were consolidated into one page because they are so similar. Rendering is
 * down based on 'collab' prop; render Collaboration page is true, Contact page if false.
 */
class Contact extends React.Component {
    state = {
        display: {
            logo: false,
            form: this.props.collab,
            icons: {
                fb: false,
                li: false,
                phone: false,
                call: false,
                mail: false
            },
            mailButton: false,
            nameInput: false,
            emailInput: false,
            messageInput: false,
            submitButton: false,
        },
        sent: false,
        name: {value: "", error: false, placeholder: "Name"},
        email: {value: "", error: false, placeholder: "E-Mail"},
        message: {value: "", error: false, placeholder: this.props.collab ?
                "Details about your project! What technologies are you using? What does your basic design and architecture " +
                "look like? How involved would you like me to be? This is the place to totally nerd out!"
                : "Tell me your life story! How's it going today? What are your hopes and dreams? What brought you to my site?"}
    };

    /**
     * On component update, analyze scroll location to determine what to render
     */
    componentDidUpdate() {
        if (this.props.scrollPercent > SHOW_LOGO) {
            if (!this.state.display.logo) { //Render logo
                this.setState({display: {...this.state.display, logo: true}});
            }
            else if (this.props.scrollPercent > SHOW_ICONS && !this.state.display.icons.fb) {
                this.setState({display: {...this.state.display, icons: {...this.state.display.icons, fb: true}}});
                setTimeout(() => this.setState({display: {...this.state.display, icons: {...this.state.display.icons, li: true}}}), 250);
                setTimeout(() => this.setState({display: {...this.state.display, icons: {...this.state.display.icons, phone: true}}}), 500);
                setTimeout(() => this.setState({display: {...this.state.display, icons: {...this.state.display.icons, call: true}}}), 750);
                setTimeout(() => this.setState({display: {...this.state.display, icons: {...this.state.display.icons, mail: true}}}), 1000);
                setTimeout(() => this.setState({display: {...this.state.display, mailButton: true}}), 125);
            }
            if (this.state.display.form) {
                //Render form elements
                if (this.props.scrollPercent > SHOW_NAME_INPUT && !this.state.display.nameInput) {
                    this.setState({display: {...this.state.display, nameInput: true}});
                }
                else if (this.props.scrollPercent > SHOW_EMAIL_INPUT && !this.state.display.emailInput) {
                    this.setState({display: {...this.state.display, emailInput: true}});
                }
                else if (this.props.scrollPercent > SHOW_MESSAGE_INPUT && !this.state.display.messageInput) {
                    this.setState({display: {...this.state.display, messageInput: true}});
                }
                else if (this.props.scrollPercent > SHOW_SUBMIT_BUTTON && !this.state.display.submitButton) {
                    this.setState({display: {...this.state.display, submitButton: true}});
                }
            }
        }
        else if (this.props.scrollPercent < SHOW_LOGO && this.state.display.logo) {
            this.setState({  display: {
                    logo: false,
                    icons: {
                        fb: false,
                        li: false,
                        ph: false
                    },
                    nameInput: false,
                    emailInput: false,
                    messageInput: false,
                    submitButton: false
                }});
        }
    }

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
            this.setState({ sent: true });
        }
    };

    /**
     * Open the form
     */
    openForm = () => {
        this.setState({ display: {...this.state.display, form: true }});
        const view = document.getElementById("collaborate");
        view.scrollIntoView({block: 'start', behavior: 'smooth'});
    };

    render() {
        const {name, email, message, display, sent} = this.state;
        const {collab} = this.props;

        return (
            <section className={classes.Main}>
                <section className={classes.View} id={"view"}>
                <section className={classes.LogoDiv}>
                    <Logo pose={display.logo ? "visible" : "hidden"} className={classes.Logo} src={logo} alt={"Contact Me"} />
                </section>
                {!collab ?
                    <Auxil>
                        <section className={classes.Icons}>
                            <a href={'http://facebook.com/mwayles'} rel="noopener noreferrer" target="_blank">
                                <Icon pose={display.icons.fb ? "visible" : "hidden"} src={facebookIcon} className={classes.SocialIcon} alt={"Facebook Message"}/></a>
                            <a href={'https://www.linkedin.com/in/matthew-wayles-03354369'} rel="noopener noreferrer" target="_blank">
                                <Icon pose={display.icons.li ? "visible" : "hidden"} src={linkedinIcon} className={classes.SocialIcon} alt={"LinkedIn Message"}/></a>
                            <a href="tel:+1843-368-9968" rel="noopener noreferrer" target="_blank">
                                <Icon pose={display.icons.phone ? "visible" : "hidden"} className={classes.SocialIcon} src={phoneIcon} alt="843-368-9968" /></a>
                        </section>
                        <section className={classes.ContactDiv}>
                            <ContactDetails pose={display.icons.call ? "visible" : "hidden"} className={classes.ContactRow}>
                                <img src={callIcon} alt={"Call:"} /><p>843-368-9968</p>
                            </ContactDetails>
                            <ContactDetails pose={display.icons.mail ? "visible" : "hidden"} className={classes.ContactRow}>
                                <img src={mailIcon} alt={"Mail:"} /><p>mattwayles@gmail.com</p>
                            </ContactDetails>
                        </section>
                        {display.form ? null : <ContactDetails pose={display.mailButton ? "visible" : "hidden"} className={classes.Button}>
                            <Button visible={display.mailButton} pressed={false} classes={classes.MailButton} enter={"left"} click={this.openForm} label={"I want to send an e-mail "} span={" NOW"} suffix={", from here!"} />
                        </ContactDetails>}
                    </Auxil>
                    : null}
                <form id="collaborate" className={classes.Form}>
                    <FormInput type="text" name="name"
                               pose={display.nameInput ? "visible" : "hidden"}
                        onChange={(e) => this.type(e, 'name')}
                        className={name.error ? classes.FormError : classes.FormInput}
                        placeholder={name.placeholder} />
                    <FormInput type="email" name="user_email"
                               pose={display.emailInput ? "visible" : "hidden"}
                        onChange={(e) => this.type(e, 'email')}
                           className={email.error ? classes.FormError : classes.FormInput}
                           placeholder={email.placeholder} />
                    <FormTextarea name="message"
                        pose={display.messageInput ? "visible" : "hidden"}
                        onChange={(e) => this.type(e, 'message')}
                        className={message.error ? classes.FormMessageError : classes.FormMessage}
                        placeholder={message.placeholder} />
                </form>

                <section className={classes.Button}>
                    <Button visible={display.submitButton} pressed={false} classes={classes.Button} enter={"left"} click={this.send} label={collab ? "Let's do Business!" : "All done, send it off!"} />
                </section>
                {sent ? <p className={classes.Sent}>E-mail sent successfully!</p> : null }
            </section>
            </section>
        );
    }
}

export default (Contact);