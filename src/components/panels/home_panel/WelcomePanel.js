import React from 'react';
import Header from '../../helpers/Header';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';

const WelcomePanel = () => (
    <div id="welcome_panel_content">
        <h1>Donate Or Deliver Goods To People Impacted By COVID-19</h1>
        <div className="block-text-container">
            <p>Many people have been negatively impacted by COVID-19. If you have food, medicine, household goods or time to make a non-contact delivery, sign up to <a href="https://forms.gle/fwSfqDd87EkQFHn78" target="_blank">volunteer or donate</a>. If you are a member of the vunerable population or need assistance, sign up to <a href="https://forms.gle/cNHiYW5ep9Qx4r1x7" target="_blank">request relief</a>.</p>
        </div>
        <SubHeader Text="Here's How It Works"/>
        <IconRow IconType="filter" Text="Select a request for aid on the map to see more details on the service need and how you can help"/>
        <IconRow IconType="default" Text="Filter the map based on zipcode, area promixity and request type"/>
        <div className="btn-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Offer Help" Class="trinary"/>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Ask For Help"/>
            </a>
            <Link to="/filters">
                <ActionButton Text="See Map" Class="secondary"/>
            </Link>
        </div>
  </div>
);

export default WelcomePanel;