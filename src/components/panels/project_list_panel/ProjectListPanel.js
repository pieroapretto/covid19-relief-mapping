import React, { Component } from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { selectProject } from '../../../actions/project_details';
import { selectProjectLocations } from '../../../selectors/locations';

class ProjectListPanel extends Component {
    constructor(props) {
        super(props);
    }

    dispatchProjectSummary = (project) => {
        this.props.dispatch(selectProject(project));
        this.props.history.push("/details");
    }

    render() {
        return (
            <div id="project_list_container">
                <BackToLink Route="/filters" Text="Back to filters"/>
                <Header Text="Projects That Match Your Search"/>
                {Array.isArray(this.props.locations) && this.props.locations.length ?
                    <div className="project-list">
                        {this.props.locations.map(project => {
                            return (
                                <div onClick={() => this.dispatchProjectSummary(project)}>
                                    <ProjectCard
                                            key={project.key}
                                            Name={project.name} 
                                            Type={project.type}
                                            BusinessName={project.business_name}
                                            TimeStamp={project.timestamp}
                                            Description={project.description}/>
                                </div>
                            );
                        })}
                    </div>
                    :
                    <p><em>No projects matched your search</em></p>
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { 
        locations: state.donation_locations ? selectProjectLocations(state.donation_locations, state.filters) : [],
        selected_project: state.selected_project || {}
    }
};

export default connect(mapStateToProps)(ProjectListPanel);