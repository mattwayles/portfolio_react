import React from 'react';
import classes from './Resume.css';

import {Document, Page} from 'react-pdf';
import resume from './Matthew_Wayles_Resume.pdf';
import back from '../../assets/arrows/backArrow.png'
import next from '../../assets/arrows/nextArrow.png'
import Auxil from "../../hoc/Auxil";
import Button from "../../components/ui/Button/Button";

class Resume extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    handleBack = () => {
        this.setState({ pageNumber: this.state.pageNumber - 1 });
        window.scrollTo(0, this.props.scrollTo)
    };

    handleNext = () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 });
        window.scrollTo(0, this.props.scrollTo)
    };


    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <Auxil>
                <section className={classes.Main}>
                    <Document
                        file={resume}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page
                            loading="Loading..." width={window.innerWidth} pageNumber={pageNumber} />
                    </Document>
                    <section className={classes.FlexRow}>
                        <p className={classes.Pages}>
                            <img
                                className={pageNumber !== 1 ? classes.BackArrow : classes.Placeholder}
                                onClick={this.handleBack}
                                src={back} alt="<=" />
                            Page {pageNumber} of {numPages}
                            <img
                                className={pageNumber !== numPages ? classes.NextArrow : classes.Placeholder}
                                onClick={this.handleNext}
                                src={next} alt="=>" />
                        </p>
                    </section>
                </section>
                <section className={classes.ButtonDiv}>
                    <a href={resume} className={classes.ButtonDiv} download><Button visible={true} enter={"left"} span={"Download"} suffix={" this awesome Resume"} /></a>
                </section>
            </Auxil>
        )
    }
}

export default Resume;