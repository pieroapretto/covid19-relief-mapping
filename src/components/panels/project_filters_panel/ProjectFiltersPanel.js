import React, { Component } from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import BackToLink from '../../helpers/BackToLink';
import { resetFilters } from '../../../actions/filters';
import { ProximitySlider, ZipLookUpField, CheckBoxRow, DateRangeSlider } from './filter_map_components/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const ProjectFiltersPanel = (props) => {
    return (
        <div id="project_filters_panel">
            <BackToLink Route="/" Text="Back to home"/>
            <div className="project-filters">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <SubHeader Text="Zip Code"/>
                        <ZipLookUpField/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <SubHeader Text="Proximity"/>
                        <ProximitySlider/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SubHeader Text="Date Posted"/>
                        <DateRangeSlider/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col">
                        <SubHeader Text="Types Of Donations &#38; Services"/>
                        <div className="project-types-container">
                            <CheckBoxRow Label="Household Goods" ProjectType="Household Goods"/>
                            <CheckBoxRow Label="Delivery" ProjectType="Delivery Volunteer"/>
                            <CheckBoxRow Label="Food" ProjectType="Food"/>
                            <CheckBoxRow Label="Services" ProjectType="Service"/>
                            <CheckBoxRow Label="Requests" ProjectType="Request"/>
                        </div>
                    </div>
                </div>
                <br/>
                <Header Text="Stats For This Area"/>
                <StatsContainer/>
                <br/>
                <div className="row">
                    <div className="col">
                        <Link to="/projects">
                            <ActionButton Text="Search"/>
                        </Link>
                        <span onClick={() => props.dispatch(resetFilters())}>
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
};

export default connect()(ProjectFiltersPanel);