import React from 'react';
import classes from './Resume.css';
import {Document, Page} from 'react-pdf';
import resume from './Matthew_Wayles_Resume.pdf';
import back from '../../assets/resume/pages/back.png'
import backHover from '../../assets/resume/pages/back_hover.png'
import next from '../../assets/resume/pages/next.png'
import nextHover from '../../assets/resume/pages/next_hover.png'


class Resume extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
        hover: false
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    handleBack = () => {
        this.setState({ pageNumber: this.state.pageNumber - 1 });
        window.scrollTo(0, 0)
    };

    handleNext = () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 });
        window.scrollTo(0, 0)
    };


    render() {
        const { pageNumber, numPages, hover } = this.state;
        return (
            <main className={classes.Main}>
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
            </main>
        )
    }
}

export default Resume;