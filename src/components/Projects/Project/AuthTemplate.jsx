import React from 'react';
import classes from '../ProjectStyle.css';
import authTemplateImg from '../../../assets/portfolio/expanded/authtemplate.jpg';
import Button from "../../ui/Button/Button";

const PROJECT_NAME = "authTemplate";

const authTemplate = (props) => (
    <section className={props.closing ? classes.ProjectClosing : classes.Project}>
        <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
            <p className={classes.ProjectName}>Authentication Template</p>
            <p className={classes.ProjectDescription}>Token-based authentication template for React.js applications. Authentication
                Template was designed as a secure portal providing Base64 authentication to any React application. It is intended to
                be used as a starting point for React applications to be built off of, or integrate seamlessly with existing React
                apps that require a login page.Written in <span className={classes.Bold}> React</span>.</p>
            <ul className={classes.List}>
                <li>Solo Recreational Project</li>
                <ul className={classes.InnerList}>
                    <li>Utilizes browser token storage and <span className={classes.Bold}>Redux</span> for state management</li>
                    <li>RESTful API calls using <span className={classes.Bold}>Axios</span></li>
                    <li>Employs <span className={classes.Bold}>Base64</span> Authentication</li>
                    <li>Uses browser <span className={classes.Bold}>LocalSession</span> for token storage and retrieval</li>
                    <li>Portable to MongoDB or Google Firebase databases</li>
                </ul>
            </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={authTemplateImg} alt="Authentication Template"/>
                <section className={classes.Buttons}>
                    <a href="https://github.com/mattwayles/authTemplate" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default authTemplate;