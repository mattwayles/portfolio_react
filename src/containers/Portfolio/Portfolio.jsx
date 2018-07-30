import React from 'react';
import classes from './Portfolio.css';
import more from '../../assets/portfolio/more/more.png';
import JavaProjects from "../../components/Projects/JavaProjects/JavaProjects";

class Portfolio extends React.Component {
    state = {
        javaExpanded: false,
        cSharpExpanded: false,
        javascriptExpanded: false,
        autoItExpanded: false
    };

    handleJavaExpand = () => {
        this.setState({ javaExpanded: !this.state.javaExpanded })
    };

    handleCSharpExpand = () => {
        this.setState({ cSharpExpanded: !this.state.cSharpExpanded })
    };

    handleJavascriptExpand = () => {
        this.setState({ javascriptExpanded: !this.state.javascriptExpanded })
    };

    handleAutoItExpand = () => {
        this.setState({ autoItExpanded: !this.state.autoItExpanded })
    };

    render() {
        const { javaExpanded, cSharpExpanded, javascriptExpanded, autoItExpanded } = this.state;


        return (
            <main className={classes.Main}>
                <p className={classes.Header}>Development Portfolio</p>
                <section onClick={this.handleJavaExpand} className={classes.Language}>
                    &nbsp;Java
                    <img className={classes.More} src={more} alt="\/" />
                    {javaExpanded ? <JavaProjects />: null}
                </section>
                <section onClick={this.handleCSharpExpand} className={classes.Language}>
                    &nbsp;C#
                    <img className={classes.More} src={more} alt="\/" />
                    {cSharpExpanded ? <JavaProjects />: null}
                </section>
                <section onClick={this.handleJavascriptExpand} className={classes.Language}>
                    &nbsp;JavaScript
                    <img className={classes.More} src={more} alt="\/" />
                    {javascriptExpanded ? <JavaProjects />: null}
                </section>
                <section onClick={this.handleAutoItExpand} className={classes.Language}>
                    &nbsp;AutoIt
                    <img className={classes.More} src={more} alt="\/" />
                    {autoItExpanded ? <JavaProjects />: null}
                </section>
            </main>
        );
    }
}

export default (Portfolio);