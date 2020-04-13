import React from 'react';
import SubHeader from '../../helpers/SubHeader';
import IconRow from './home_panel_components/IconRow';
import ActionButton from '../../helpers/ActionButton';
import { Link } from 'react-router-dom';

const WelcomePanel = () => (
    <div id="welcome_panel_content">
        <h1>Help Your Neighbors Affected By COVID-19</h1>
        <div className="block-text-container">
            <p><a href="https://forms.gle/fwSfqDd87EkQFHn78" target="_blank">Sign up</a> to help your neighbors in needs. If you are activately involved in COVID-19 relief efforts, recruit volunteers or financial assistance to <a href="https://forms.gle/hY6FHftouNUkiuyU8" target="_blank">aid your cause</a>.</p>
        </div>
        <SubHeader Text="Here's How It Works"/>
        <IconRow IconType="volunteer" Text="Volunteer to help based on your skill set or what you can give."/>
        <IconRow IconType="donation" Text="Post a donation for non-contact pickup or delivery in your area."/>
        <IconRow IconType="filter" Text="Search for help in your area by zipcode, promixity, date and type."/>
        <div className="btn-container">
            <a href="https://forms.gle/BzRNsaxVkRodG4vPA" target="_blank">
                <ActionButton Text="Volunteer To Help" Class="trinary-large"/>
            </a>
            <a href="https://forms.gle/s8CkMbssBupfsvxVA" target="_blank">
                <ActionButton Text="Donate" Class="primary-large"/>
            </a>
            <Link to="/filters">
                <ActionButton Text="Find Local Assistance" Class="secondary-large"/>
            </Link>
        </div>
  </div>
);

export default WelcomePanel;