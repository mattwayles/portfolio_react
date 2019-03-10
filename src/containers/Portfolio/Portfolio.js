import React from 'react';
import Auxil from '../../components/Auxil';
import Projects from './Projects/Projects';
import PortfolioFilter from './PortfolioFilter/PortfolioFilter'

/**
 * Display a portfolio with fully-functional filter to use user
 */
class Portfolio extends React.Component {
    state = {
        filters: []
    };

    /**
     * When a filter is selected, apply the filter and only display matching projects
     * @param prop  The selected filter
     */
    displayFilteredProjects = (prop) => {
        //Copy state filters
        let filters = this.state.filters;

        //Toggle choices for Collaboration & Project Type
        filters = this.toggle(filters, prop);

        //Add the selected filter to the filter list
        let index = filters.indexOf(prop);
        if (index > -1) {
            filters.splice(index, 1);
        } else {
            filters.push(prop);
        }
        this.setState({ filters: filters });
    };

    /**
     * Toggle choices for collaboration and project type; only one filter may be selected per section
     * @param arr   The currently selected filter array
     * @param prop  The currently selected filter
     * @returns {*} The updated filter array
     */
    toggle = (arr, prop) => {
        this.cut(arr,
            prop === 'solo' ? ['team'] :
                prop === 'team' ? ['solo'] :
                    prop === 'educational' ? ['freelance', 'professional', 'recreational'] :
                        prop === 'freelance' ? ['educational', 'professional', 'recreational'] :
                            prop === 'professional' ? ['educational', 'freelance', 'recreational'] :
                                prop === 'recreational' ? ['educational', 'freelance', 'professional'] : null);
        return arr;
    };

    /**
     * Remove a property from the filter array
     * @param arr   The filter array
     * @param prop  The property to remove
     */
    cut = (arr, prop) => {
        for (let i in prop) {
            let index = arr.indexOf(prop[i]);
            if (index > -1) {
                arr.splice(index, 1);
            }
        }
    };


    /**
     * Render a filter drop-down, and a list of portfolio projects
     * @returns {XML}
     */
    render() {
        return (
            <Auxil>
                <PortfolioFilter filters={this.state.filters} click={this.displayFilteredProjects} />
                <Projects scrollPercent={this.props.scrollPercent} filters={this.state.filters} />
            </Auxil>
        );
    }
}

export default (Portfolio);