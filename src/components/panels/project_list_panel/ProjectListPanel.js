import React from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { meep_service } from '../../../services/meep_service';
import { addProjects } from '../../../actions/projects';
import { Link } from 'react-router-dom';
import { selectProject } from '../../../actions/project_details';
import { selectProjectLocations } from '../../../selectors/locations';

class ProjectListPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    dispatchProjectSummary (project_id) {
        meep_service.getProjectDetailsById(project_id).then(data => {
            this.props.dispatch(selectProject(data));
        });
    }
    render() {
        if(Array.isArray(this.props.locations) && this.props.locations.length) {
            return (
                <div id="project_list_container">
                    <BackToLink Route="/filters" Text="Back to filters"/>
                    <Header Text="Project That Match Your Search"/>
                    <div className="project-list">
                        {this.props.locations.map(project => {
                            return <Link to="/details" key={project.key}>
                                        <ProjectCard
                                            onClick={() => this.dispatchProjectSummary(project.project_id)}
                                            key={project.key}
                                            Name={project.name} 
                                            StartYear={project.year}
                                            Type={project.type}
                                            Rank={project.project_id}/>
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
        locations: state.locations[0] ? selectProjectLocations(state.locations[0], state.filters) : [],
        selected_project: state.selected_project || {}
    }
};

export default connect(mapStateToProps)(ProjectListPanel);