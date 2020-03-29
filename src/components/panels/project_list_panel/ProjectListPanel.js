import React, { Component } from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProject } from '../../../actions/project_details';
import { selectProjectLocations } from '../../../selectors/locations';

class ProjectListPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(Array.isArray(this.props.locations) && this.props.locations.length) {
            return (
                <div id="project_list_container">
                    <BackToLink Route="/filters" Text="Back to filters"/>
                    <Header Text="Projects That Match Your Search"/>
                    <div className="project-list">
                        {this.props.locations.map(project => {
                            return <Link to="/details" key={project.key}>
                                        <ProjectCard
                                            onClick={() => this.props.dispatch(selectProject(project))}
                                            key={project.key}
                                            Name={project.name} 
                                            Type={project.type}
                                            BusinessName={project.business_name}
                                            DateString={project.date_string}
                                            ContactMethod={project.contact_method}
                                            ContactValue={project.contact_value}
                                            Description={project.description}/>
                                   </Link>
                        })}
                    </div>
                </div>
            );
        } else {
            return <p>Loading</p>
        }
    }
};

const mapStateToProps = (state) => {
    return { 
        locations: state.donation_locations ? selectProjectLocations(state.donation_locations, state.filters) : [],
        selected_project: state.selected_project || {}
    }
};

export default connect(mapStateToProps)(ProjectListPanel);