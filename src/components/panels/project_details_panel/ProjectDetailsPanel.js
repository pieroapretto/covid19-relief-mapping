import React from 'react';
import BackToLink from '../.../../../helpers/BackToLink';
import Header from '../../helpers/Header';
import { connect } from 'react-redux';

const ProjectDetailsPanel = (props) => {
    const isRequest = () => {
        return props.project.type && props.project.type === 'Request';
    }

    return (
        <div className="project_details_container">
            <BackToLink Route="/projects" Text="Back to list"/>
            <div className="row">
                <div className="col">
                    <Header Text={isRequest() ? "Request Info" : "Donation Info" }/>
                </div>
            </div>
            {props.project.business_name && 
                <div className="row">
                    <div className="col">
                        <div className="project_details_label">Business / Organization</div>
                        <p>{props.project.business_name}</p>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col">
                    <div className="project_details_label">Contact Name</div>
                    <p>{props.project.name}</p>
                </div>
            </div>
            {!isRequest() &&
                <div className="row">
                    <div className="col">
                        <div className="project_details_label">Donation Type</div>
                        <p>{props.project.type}</p>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col">
                    <Header Text="Description"/>
                    <p>{props.project.description}</p>
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
                    <p>{props.project.contact_method}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="project_details_label">Contact</div>
                    <p>{props.project.contact_value}</p>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return { project: state.selected_project || {} }
};

export default connect(mapStateToProps)(ProjectDetailsPanel);