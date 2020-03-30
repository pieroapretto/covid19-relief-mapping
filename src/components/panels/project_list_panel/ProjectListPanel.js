import React, { Component } from 'react';
import Header from '../../helpers/Header';
import BackToLink from '../../helpers/BackToLink';
import ProjectCard from './ProjectCard';
import { connect } from 'react-redux';
import { selectProject } from '../../../actions/project_details';
import { selectProjectLocations } from '../../../selectors/locations';
import { setSearchText } from '../../../actions/filters';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

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
                <div className="row">
                    <div className="col">
                        <InputGroup size="sm" className="my-2">
                            <FormControl 
                                aria-label="search text"
                                placeholder="search results.." 
                                value={this.props.search_text}
                                onChange={(e) => this.props.dispatch(setSearchText(e.target.value))}/>
                        </InputGroup>
                    </div>
                </div>
                {Array.isArray(this.props.locations) && this.props.locations.length ?
                    <div className="project-list">
                        {this.props.locations.map(project => {
                            return (
                                <div onClick={() => this.dispatchProjectSummary(project)} key={project.key}>
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
                    <div>
                        <br/>
                        <p><em>No projects matched your search</em></p>
                    </div>
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { 
        locations: state.donation_locations ? selectProjectLocations(state.donation_locations, state.filters) : [],
        selected_project: state.selected_project || {},
        search_text: state.filters.search_text
    }
};

export default connect(mapStateToProps)(ProjectListPanel);