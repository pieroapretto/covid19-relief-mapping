import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';
import { resetFilters } from '../../../actions/filters';

const WelcomePanel = (props) => {
    useEffect(() => {
        props.dispatch(resetFilters());
    });

    return (
        <div id="welcome_panel_content">
            <h1>Help Your Neighbors, Strengthen Your Community</h1>
            <div className="block-text-container">
                {/* TODO: Update these Google Form URLs with new neighborly-focused forms */}
                <p><a href="https://forms.gle/fwSfqDd87EkQFHn78" target="_blank">Sign up</a> to help your neighbors. Neighborly brings back the community spirit we enjoyed in the past, when neighbors looked out for each other. Whether you need help or have something to offer, connecting is easy. <a href="https://forms.gle/PuchtZrmHwCJ1GNs9" target="_blank">Join your community</a> today.</p>
            </div>
            <SubHeader Text="Here's How It Works"/>
            <IconRow IconType="volunteer" Text="Request help from neighbors for tasks, services, or resources you need."/>
            <IconRow IconType="donation" Text="Offer your services, skills, or extra resources to help neighbors for free."/>
            <IconRow IconType="filter" Text="Search for help in your area by zipcode, proximity, date and type."/>
            <div className="btn-container">
                {/* TODO: Update these Google Form URLs with new neighborly-focused forms */}
                <a href="https://forms.gle/PuchtZrmHwCJ1GNs9" target="_blank">
                    <ActionButton Text="Request Help" Class="trinary-large"/>
                </a>
                <a href="https://forms.gle/s8CkMbssBupfsvxVA" target="_blank">
                    <ActionButton Text="Offer Help" Class="primary-large"/>
                </a>
                <Link to="/filters">
                    <ActionButton Text="Find Local Assistance" Class="secondary-large"/>
                </Link>
            </div>
        </div>
    )
};

export default connect()(WelcomePanel);