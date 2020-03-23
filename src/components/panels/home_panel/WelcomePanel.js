import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';
import LocationMarker from '../../helpers/locationMarker';

const WelcomePanel = () => (
    <div id="welcome_panel_content">
        <Header Text="Find People Impacted By COVID-19 In Your Area"/>
        <div className="block-text-container">
            <p>Many people have been negatively impacted by COVID-19</p>
        </div>
        <SubHeader Text="Here's How It Works"/>
        <IconRow IconType="filter" Text="Select a request for aid on the map to see more details on the service need and how you can help"/>
        <IconRow IconType="default" Text="Filter the map based on zipcode, area promixity and request type"/>
        <div className="btn-container">
            <Link to="/filters">
                <ActionButton Text="Find Those In Need"/>
            </Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Ask For Help" Class="secondary" />
            </a>
        </div>
  </div>
);

export default WelcomePanel;