import React from 'react';
import classes from './Resume.css';
import {Document, Page} from 'react-pdf';
import resume from './Matthew_Wayles_Resume.pdf';
import back from '../../assets/arrows/back.png'
import backHover from '../../assets/arrows/back_hover.png'
import next from '../../assets/arrows/next.png'
import nextHover from '../../assets/arrows/next_hover.png'


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
        const { pageNumber, numPages, hover } = this.state;
        return (
            <section className={classes.Main}>
                    <Document
                        file={resume}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page loading="Loading..." width={window.innerWidth} pageNumber={pageNumber} />
                    </Document>
                <section className={classes.FlexRow}>
                        <p className={classes.Pages}>
                            { pageNumber !== 1 ? <img
                            className={classes.PageButton}
                            onClick={this.handleBack}
                            src={hover? backHover : back} alt="<=" /> : null}
                        Page {pageNumber} of {numPages}
                        { pageNumber !== numPages ? <img
                            className={classes.PageButton}
                            onClick={this.handleNext}
                            src={hover? nextHover : next} alt="=>" /> : null}
                        </p>
                </section>
            </section>
        )
    }
}

export default Resume;