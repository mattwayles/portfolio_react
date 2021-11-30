import React from 'react';
import downArrowImg from '../../../assets/arrows/downArrow.png';
import classes from './PortfolioFilter.css';

/**
 * Allow the user to apply filters to my development portfolio based on different criteria
 */
class PortfolioFilter extends React.Component {
    state = {
        open: false,
        closing: false
    };

    /**
     * Handler the user clicking the Filter label, which opens the filter options menu
     */
    filterLabelClick = () => {
        if (this.state.open) {
            this.setState({ open: false, closing: true });
            setTimeout(() => this.setState({ closing: false }), 1000);
        } else {
            this.setState({ open: true });
        }
    };

    /**
     * Render a clickable Filter label. When clicked, the user is presented with a list of filter options separated
     * into logical sections
     */
    render() {
        const {open, closing} = this.state;
        const {click, filters} = this.props;

        //Mapping source for Source Availability section
        const sourceAvailability = [
            ['openSource', 'Open Source']
        ];

        //Mapping source for Collaboration section
        const collaboration = [
            ['solo', 'Solo'],
            ['team', 'Team']
        ];

        //Mapping source for Project Type section
        const projectType = [
            ['educational', 'Educational'],
            ['freelance', 'Freelance'],
            ['professional', 'Professional'],
            ['recreational', 'Recreational']
        ];

        //Mapping source for Technologies section
        const technologies = [
            ['android', 'Android'],
            ['autoit', 'AutoIt'],
            ['html', 'HTML/CSS'],
            ['csharp', 'C#'],
            ['java', 'Java'],
            ['javafx', 'JavaFX'],
            ['javascript', 'JavaScript'],
            ['libgdx', 'LibGDX'],
            ['python', 'Python'],
            ['react', 'React'],
            ['spring', 'Spring']

        ];

        return (
            <section className={classes.Main}  id={"view"}>
                <section className={classes.FilterSection}>
                    <section className={classes.Filter}>
                        <img onClick={this.filterLabelClick} className={open ? classes.DownArrowOpen : classes.DownArrow} src={downArrowImg} alt="Expand" />
                        <p className={classes.FilterLabel} onClick={this.filterLabelClick}>
                            {filters.length > 0 ? "Filtering Results (" + filters.length + ")" : "Filter Results"}</p>
                    </section>
                    <section className={open ? classes.ExpandedSection : closing ? classes.ExpandedSectionClosing : classes.ExpandedSectionClosed}>
                        <section className={classes.Expanded}>
                            <p className={classes.FilterOptionLabel}>Source Availability:</p>
                            {sourceAvailability.map(option => {
                                return <p key={option[0]} className={filters.indexOf(option[0]) >= 0 ? classes.FilterOptionOn : classes.FilterOptionOff}
                                          onClick={() => click(option[0])}>{option[1]}</p>
                            })}
                        </section>
                        <section className={classes.Expanded}>
                            <p className={classes.FilterOptionLabel}>Collaboration:</p>
                            {collaboration.map(option => {
                                return <p key={option[0]} className={filters.indexOf(option[0]) >= 0 ? classes.FilterOptionOn : classes.FilterOptionOff}
                                          onClick={() => click(option[0])}>{option[1]}</p>
                            })}
                        </section>
                        <section className={classes.Expanded}>
                            <p className={classes.FilterOptionLabel}>Project Type:</p>
                            {projectType.map(option => {
                                return <p key={option[0]} className={filters.indexOf(option[0]) >= 0 ? classes.FilterOptionOn : classes.FilterOptionOff}
                                          onClick={() => click(option[0])}>{option[1]}</p>
                            })}
                        </section>
                        <section className={classes.Expanded}>
                            <p className={classes.FilterOptionLabel}>Technologies:</p>
                            {technologies.map(option => {
                                return <p key={option[0]} className={filters.indexOf(option[0]) >= 0 ? classes.FilterOptionOn : classes.FilterOptionOff}
                                          onClick={() => click(option[0])}>{option[1]}</p>
                            })}
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}

export default (PortfolioFilter);