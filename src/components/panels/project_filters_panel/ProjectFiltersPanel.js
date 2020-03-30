import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import ActionButton from '../../helpers/ActionButton';
import StatsContainer from './area_stats_components/AreaStatsContainer';
import BackToLink from '../../helpers/BackToLink';
import { ProximitySlider, ZipLookUpField, CheckBoxRow, DateRangeSlider } from './filter_map_components/index';
import { Link } from 'react-router-dom';

const ProjectFiltersPanel = () => {
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
                        <SubHeader Text="Filter By Types"/>
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
                <br/>
                <div className="row">
                    <div className="col">
                        <Link to="/projects">
                            <ActionButton Text="See All Results" Class="primary-large"/>
                        </Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                            <ActionButton Text="Offer Help" Class="secondary"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectFiltersPanel;