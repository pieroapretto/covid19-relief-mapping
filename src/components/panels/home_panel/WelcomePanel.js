import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';

const WelcomePanel = () => (
    <div id="welcome_panel_content">
        <h1>Help Your Neighbors Affected By COVID-19</h1>
        <div className="block-text-container">
            <p>Many people have been negatively impacted by COVID-19. If you have food, household goods, services or time to make a non-contact delivery, sign up to <a href="https://forms.gle/fwSfqDd87EkQFHn78" target="_blank">donate</a>. If you are a member of the vunerable population or need assistance, sign up to <a href="https://forms.gle/cNHiYW5ep9Qx4r1x7" target="_blank">request aid</a>.</p>
        </div>
        <SubHeader Text="Here's How It Works"/>
        <IconRow IconType="donation" Text="Post a donation for non-contact pickup in your area."/>
        <IconRow IconType="map-marked" Text="Avoid stores by looking for donations in your proximity."/>
        <IconRow IconType="filter" Text="Filter donations and services by zipcode, promixity, date and type."/>
        <div className="btn-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Offer Help" Class="trinary"/>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Ask For Help"/>
            </a>
            <Link to="/filters">
                <ActionButton Text="See Who's Helping" Class="secondary"/>
            </Link>
        </div>
  </div>
);

export default WelcomePanel;