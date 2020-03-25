import React, { Component } from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import BackToLink from '../../helpers/BackToLink';
import {ProximitySlider, ZipLookUpField, CheckBoxRow} from './filter_map_components/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class ProjectFiltersPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="project_filters_panel">
                <BackToLink Route="/" Text="Back to home"/>
                <div className="project-filters">
                    <Header Text="Filter The Map View"/>
                    <div className="row">
                        <div className="col">
                            <SubHeader Text="Zip Code"/>
                            <ZipLookUpField/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <SubHeader Text="Proximity"/>
                            <ProximitySlider/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <SubHeader Text="Project Type"/>
                            <div className="project-types-container">
                                <CheckBoxRow Label="Donation" ProjectType="donation"/>
                                <CheckBoxRow Label="Delivery" ProjectType="delivery"/>
                                <CheckBoxRow Label="Expertise" ProjectType="info"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Header Text="Stats For The Area"/>
                    <StatsContainer/>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <Link to="/projects">
                                <ActionButton Text="Search"/>
                            </Link>
                            <span onClick={(e) => this.props.dispatch(resetFilters())}>
                                <ActionButton Text="Clear Filters" Class="secondary"/>
                            </span>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <span className="pr-3">Would you like to report a issue?</span>
                            <a href="mailto: pieroprettojs.com">
                                <ActionButton Text="Report Issue" Class="secondary"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect()(ProjectFiltersPanel);