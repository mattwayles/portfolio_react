import React from 'react';
import classes from '../ProjectStyle.css';
import mobile40apiImg from '../../../assets/portfolio/expanded/mobile40api.jpg';
import Auxil from "../../Auxil";

const PROJECT_NAME = "mobile40api";

const mobile40api = (props) => (
    <Auxil>
        <section className={props.closing ? classes.ProjectClosing : classes.Project}>
            <section onClick={() => props.exit(PROJECT_NAME)} className={classes.CloseButton} />
            <section className={classes.ProjectDiv}>
                <section className={classes.ProjectDetails}>
                        <p className={classes.ProjectName}>Mobile 4.0 API</p>
                        <p className={classes.ProjectDescription}>Mobile modernization effort for Boeing's monolithic GOLDesp MRO & Supply application.
                            Written in <span className={classes.Bold}>C#</span> with <span className={classes.Bold}>GraphQL</span> endpoints.</p>
                        <ul className={classes.List}>
                            <li>Agile Team Project</li>
                            <li><span className={classes.Bold}>My Role:</span> Lead API Engineer</li>
                            <li><span className={classes.Bold}>My Contributions:</span></li>
                            <ul className={classes.InnerList}>
                                <li>Architected API framework</li>
                                <li>Designed complex request/response contract</li>
                                <li>Implemented client/server communication using GraphQL web filter</li>
                                <li>Implemented dozens of reusable, scalable GraphQL queries and mutations</li>
                            </ul>
                            <li><em>Source is proprietary information owned by Tapestry Solutions, Inc. Release by authorized request only.</em></li>
                        </ul>
                </section>
                <section className={classes.ImageDiv}>
                    <img className={classes.Image} src={mobile40apiImg} alt="Mobile 4.0 API"/>
                </section>
            </section>
        </section>
    </Auxil>
);

export default mobile40api;