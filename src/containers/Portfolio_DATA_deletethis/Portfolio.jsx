import React from 'react';
import classes from './Portfolio.css';
import more from '../../assets/arrows/more.png';
import moreHover from '../../assets/arrows/more_hover.png';
import less from '../../assets/arrows/less.png';
import lessHover from '../../assets/arrows/less_hover.png';
import JavaProjects from "../../components/Projects/JavaProjects/JavaProjects";
import CSharpProjects from "../../components/Projects/CSharpProjects/CSharpProjects";
import AutoItProjects from "../../components/Projects/AutoItProjects/AutoItProjects";
import JavascriptProjects from "../../components/Projects/JavascriptProjects/JavascriptProjects";

class Portfolio extends React.Component {
    state = {
        java: {expanded: false, hover: false},
        cSharp: {expanded: false, hover: false},
        javascript: {expanded: false, hover: false},
        autoIt: {expanded: false, hover: false}
    };

    handleJavaExpand = (e, hover) => {
        if (hover !== undefined) {
            this.setState({java: {...this.state.java, hover: hover}})
        } else {
            this.setState({java: {hover: false, expanded: !this.state.java.expanded}})}
    };

    handleCSharpExpand = (e, hover) => {
        if (hover !== undefined) {
            this.setState({cSharp: {...this.state.cSharp, hover: hover}})
        } else {
            this.setState({cSharp: {hover: false, expanded: !this.state.cSharp.expanded}})}
    };

    handleJavascriptExpand = (e, hover) => {
        if (hover !== undefined) {
            this.setState({javascript: {...this.state.javascript, hover: hover}})
        } else {
            this.setState({javascript: {hover: false, expanded: !this.state.javascript.expanded}})}
    };

    handleAutoItExpand = (e, hover) => {
        if (hover !== undefined) {
            this.setState({autoIt: {...this.state.autoIt, hover: hover}})
        } else {
            this.setState({autoIt: {hover: false, expanded: !this.state.autoIt.expanded}})}
    };

    render() {
        const { java, cSharp, javascript, autoIt } = this.state;
        
        return (
            <section className={classes.Main}>
                <section onMouseEnter={(e) => this.handleJavaExpand(e, true)}
                         onMouseLeave={(e) => this.handleJavaExpand(e, false)}
                         onClick={(e) => this.handleJavaExpand(e)} className={classes.Language}>
                    &emsp;Java
                    {java.expanded ?
                        java.hover ? <img className={classes.ExpandCollapse} src={lessHover} alt="\/" />
                            : <img className={classes.ExpandCollapse} src={less} alt="\/" />
                        : java.hover ? <img className={classes.ExpandCollapse} src={moreHover} alt="\/" /> :
                            <img className={classes.ExpandCollapse} src={more} alt="\/" />}
                    {java.expanded ? <JavaProjects />: null}
                </section>
                <section onMouseEnter={(e) => this.handleCSharpExpand(e, true)}
                         onMouseLeave={(e) => this.handleCSharpExpand(e, false)}
                         onClick={(e) => this.handleCSharpExpand(e)} className={classes.Language}>
                    &emsp;C#
                    {cSharp.expanded ?
                        cSharp.hover ? <img className={classes.ExpandCollapse} src={lessHover} alt="\/" />
                            : <img className={classes.ExpandCollapse} src={less} alt="\/" />
                        : cSharp.hover ? <img className={classes.ExpandCollapse} src={moreHover} alt="\/" /> :
                            <img className={classes.ExpandCollapse} src={more} alt="\/" />}
                    {cSharp.expanded ? <CSharpProjects />: null}
                </section>
                <section onMouseEnter={(e) => this.handleJavascriptExpand(e, true)}
                         onMouseLeave={(e) => this.handleJavascriptExpand(e, false)}
                         onClick={(e) => this.handleJavascriptExpand(e)} className={classes.Language}>
                    &emsp;JavaScript
                    {javascript.expanded ?
                        javascript.hover ? <img className={classes.ExpandCollapse} src={lessHover} alt="\/" />
                            : <img className={classes.ExpandCollapse} src={less} alt="\/" />
                        : javascript.hover ? <img className={classes.ExpandCollapse} src={moreHover} alt="\/" /> :
                            <img className={classes.ExpandCollapse} src={more} alt="\/" />}
                    {javascript.expanded ? <JavascriptProjects />: null}
                </section>
                <section onMouseEnter={(e) => this.handleAutoItExpand(e, true)}
                         onMouseLeave={(e) => this.handleAutoItExpand(e, false)}
                         onClick={(e) => this.handleAutoItExpand(e)} className={classes.Language}>
                    &emsp;AutoIt
                    {autoIt.expanded ?
                        autoIt.hover ? <img className={classes.ExpandCollapse} src={lessHover} alt="\/" />
                            : <img className={classes.ExpandCollapse} src={less} alt="\/" />
                        : autoIt.hover ? <img className={classes.ExpandCollapse} src={moreHover} alt="\/" /> :
                            <img className={classes.ExpandCollapse} src={more} alt="\/" />}
                    {autoIt.expanded ? <AutoItProjects />: null}
                </section>
            </section>
        );
    }
}

export default (Portfolio);