import React from 'react';
import classes from '../ProjectStyle.css';
import milsSetupUiImg from '../../../assets/portfolio/expanded/milsSetupUi.jpg';
import Auxil from "../../Auxil";

const PROJECT_NAME = "milsSetupUi";

const milsSetupUi = (props) => (
    <Auxil>
        <section className={props.closing ? classes.ProjectClosing : classes.Project}>
            <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
            <section className={classes.ProjectDiv}>
                <section className={classes.ProjectDetails}>
                        <p className={classes.ProjectName}>MILS Setup (UI)</p>
                        <p className={classes.ProjectDescription}>Modernization effort to reduce dependencies on paid third-party libraries by
                            implementing functionality though internal database collections.
                            Written in <span className={classes.Bold}>React</span> with <span className={classes.Bold}>Redux</span> and
                            <span className={classes.Bold}> GraphQL</span> API.</p>
                        <ul className={classes.List}>
                            <li>Agile Team Project</li>
                            <li><span className={classes.Bold}>My Role:</span> Lead UI Engineer</li>
                            <li><span className={classes.Bold}>My Contributions:</span></li>
                            <ul className={classes.InnerList}>
                                <li>Architected UI solution from business requirements</li>
                                <li>Set up UI framework from scratch, establishing reusable component templates and containers</li>
                                <li>Led team of developers to duplicate templates for individual use cases</li>
                                <li>Implemented GraphQL API and developed all query/mutation contracts</li>
                                <li>Worked extensively in back-end development (Java using Spring Boot)</li>
                            </ul>
                            <li><em>Source is proprietary information owned by Tapestry Solutions, Inc. Release by authorized request only.</em></li>
                        </ul>
                </section>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={milsSetupUiImg} alt="MILS Setup UI"/>
                </section>
            </section>
        </section>
    </Auxil>
);

export default milsSetupUi;