import React from 'react';
import classes from './Resume.css';

import {Document, Page} from 'react-pdf';
import resume from './Matthew_Wayles_Resume.pdf';
import Button from "../../components/ui/Button/Button";

/**
 * Display my resume
 */
class Resume extends React.Component {
    state = {
        width: 0,
        numPages: null,
        pageNumber: 1,
    };

    componentDidMount() {
        this.setState({ width: window.innerWidth });
    }

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
        const view = document.getElementById("view");
        view.scrollIntoView({block: "start", behavior: "smooth"});
    };

    /**
     * Move to the next page when the NEXT arrow is clicked
     */
    handleNext = () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 });
        const view = document.getElementById("view");
        view.scrollIntoView({block: "start", behavior: "smooth"});
    };


    render() {
        const { pageNumber, numPages, width } = this.state;

        return (
                <section className={classes.Main}>
                    <section id={"view"}>
                    <section className={document.documentMode || window.StyleMedia ? classes.PdfDoc : null}>
                        <Document loading={"Loading something GREAT..."} file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
                            <Page width={document.documentMode || window.StyleMedia ? width / 1.5 : width} pageNumber={pageNumber} />
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
                    <a href={resume} className={classes.ButtonDiv} download><Button visible={true} enter={"left"} span={"Download"} suffix={" my Resume"} /></a>
                </section>
                </section>
        )
    }
}

export default Resume;