import React from 'react';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';

const WelcomePanel = () => (
    <div id="welcome_panel_content">
        <h1>Help Your Neighbors Affected By COVID-19</h1>
        <div className="block-text-container">
            <p><a href="https://forms.gle/fwSfqDd87EkQFHn78" target="_blank">Sign up</a> to help your neighbors in quarantine if you have extra food, household goods, services or time to make a non-contact delivery. If you are a member of the vulnerable population or need assistance, sign up to <a href="https://forms.gle/cNHiYW5ep9Qx4r1x7" target="_blank">request aid</a>.</p>
        </div>
        <SubHeader Text="Here's How It Works"/>
        <IconRow IconType="donation" Text="Post a donation for non-contact pickup or delivery in your area."/>
        <IconRow IconType="map-marked" Text="Avoid stores by looking for donations and services in your proximity."/>
        <IconRow IconType="filter" Text="Filter donations by zipcode, promixity, date and type."/>
        <div className="btn-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRil3UuoVP7W7UtdolmLYDDKX55Q71hnyegOuuqlqcvKq9fw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Help Out" Class="trinary"/>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScWAksnaPL5l744YVroZl1MwkOc7htodFq2HPIrSfVYaIjyyw/viewform?usp=sf_link" target="_blank">
                <ActionButton Text="Request Help"/>
            </a>
            <Link to="/filters">
                <ActionButton Text="See Requests &#38; Donations" Class="secondary"/>
            </Link>
        </div>
  </div>
);

export default WelcomePanel;