import React from 'react';
import classes from './ProjectStyle.css';
import closeButton from '../../assets/arrows/upArrow.png';
import burgerBuilderImg from '../../assets/portfolio/expanded/burgerbuilder.jpg';
import Button from "../ui/Button/Button";

const PROJECT_NAME = "burgerBuilder";

const burgerBuilder = (props) => (
    <section className={classes.Project}>
        <img onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} src={closeButton} alt={"X"} />
        <section className={classes.ProjectDiv}>
            <section className={classes.ProjectDetails}>
            <p className={classes.ProjectName}>Burger Builder</p>
            <p className={classes.ProjectDescription}>Hamburger building application with user authentication and storage. Written in
                <span className={classes.Bold}> React.js</span>.</p>
            <ul className={classes.List}>
                <li>Solo Educational Project</li>
                <ul className={classes.InnerList}>
                    <li>Course project in <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview" rel="noopener noreferrer"
                                             target="_blank">Udemy Advanced React/Redux class</a></li>
                    <li>Utilizes browser token storage and <span className={classes.Bold}>Redux</span> for state management</li>
                    <li>RESTful API calls using <span className={classes.Bold}>Axios</span></li>
                    <li>Employs <span className={classes.Bold}>Base64</span> Authentication</li>
                    <li>Uses browser <span className={classes.Bold}>LocalSession</span> for token storage and retrieval</li>
                </ul>
            </ul>
            </section>
            <section className={classes.ImageDiv}>
                <img className={classes.Image} src={burgerBuilderImg} alt="Burger Builder"/>
                <section className={classes.Buttons}>
                    <a href="https://github.com/mattwayles/burgerbuilder" rel="noopener noreferrer"
                       target="_blank"><Button classes={classes.Button} visible={true} pressed={false} enter={"right"} label={"Open Source"} /></a>
                </section>
            </section>
        </section>
    </section>
);

export default burgerBuilder;