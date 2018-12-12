import React from 'react';
import classes from './Resume.css';

import {Document, Page} from 'react-pdf';
import resume from './Matthew_Wayles_Resume.pdf';
import Auxil from "../../components/Auxil";
import Button from "../../components/ui/Button/Button";

/**
 * Display my resume
 */
class Resume extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1,
    };

    /**
     * Manage page number in state after document is loaded
     * @param numPages  The number of pages in the document
     */
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    /**
     * Return to the previous page when the BACK arrow is clicked
     */
    handleBack = () => {
        this.setState({ pageNumber: this.state.pageNumber - 1 });
        const doc = document.getElementById("pdfDoc");
        doc.scrollTop = 0;
    };

    /**
     * Move to the next page when the NEXT arrow is clicked
     */
    handleNext = () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 });
        const doc = document.getElementById("pdfDoc");
        doc.scrollTop = 0;
    };


    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <Auxil>
                <section className={classes.Main}>
                    <section id="pdfDoc" className={classes.PdfDoc}>
                        <Document loading={"Loading something GREAT..."} file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
                            <Page width={window.innerWidth < 600 ? window.innerWidth : window.innerWidth / 2} pageNumber={pageNumber} />
                        </Document>
                    </section>

                    <section className={classes.FlexRow}>
                        {pageNumber > 1 ? <p className={ classes.BackArrow } onClick={this.handleBack}>
                            {"<"} </p> : null}
                        <p className={classes.Pages}>Page {pageNumber} of {numPages}</p>
                        {pageNumber <= 1 ? <p className={classes.NextArrow} onClick={this.handleNext}>
                            {">"} </p>  : null}
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