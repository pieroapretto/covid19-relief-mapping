import React from 'react';
import BackToLink from '../.../../../helpers/BackToLink';
import Header from '../../helpers/Header';
import ActionButton from '../../helpers/ActionButton';
import { connect } from 'react-redux';
import { ProjectTypePropsMap } from '../../../utilities/project_types';

const ProjectDetailsPanel = ({ project }) => {
    const { type, business_name, street_address, display_address, name, description, contact_method, contact_value  } = project;
    const isRequest = (type && type === 'request');
    const hasBusinessName = (business_name && business_name.length);
    const canDisplayAddress = (street_address && display_address === "Yes");

    return (
        <div className="project_details_container">
            <BackToLink Route="/projects" Text="Back to list"/>
            <div className="row">
                <div className="col">
                    <Header Text={isRequest ? "Request Info" : "Donation Info" }/>
                </div>
            </div>
            {hasBusinessName && 
                <div className="row">
                    <div className="col">
                        <div className="project_details_label">Business / Organization</div>
                        <p>{business_name}</p>
                    </div>
                </div>
            }
            {!hasBusinessName && <div className="row">
                <div className="col">
                        <div className="project_details_label">Contact Name</div>
                        <p>{name}</p>
                    </div>
                </div>
            }
            {canDisplayAddress &&
                <div className="row">
                    <div className="col">
                        <div className="project_details_label">Street Address</div>
                        <p>{street_address}</p>
                    </div>
                </div>
            }
            {!isRequest &&
                <div className="row">
                    <div className="col">
                        <div className="project_details_label">Donation Type</div>
                        <p>{ProjectTypePropsMap[type].label}</p>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col">
                    <Header Text="Description"/>
                    <p>{description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Header Text="Contact Info"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="project_details_label">Preferred Method Of Contact</div>
                    <p>{contact_method}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="project_details_label">Contact</div>
                    <p>{contact_value}</p>
                </div>
            </div>
            <div className="row">
                <div className="col my-5">
                    <span className="pr-3">Would you like to report an issue?</span>
                    <a href="mailto:pieroprettojs@gmail.com">
                        <ActionButton Text="Report Issue" Class="secondary"/>
                    </a>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return { project: state.selected_project || {} }
};

export default connect(mapStateToProps)(ProjectDetailsPanel);