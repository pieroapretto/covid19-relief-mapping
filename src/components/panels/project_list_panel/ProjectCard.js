import React from 'react';
import ProjectTypeMarker from '../../helpers/projectTypeMarker';
import SubHeader from '../../helpers/SubHeader';
import { getDateStringValue } from '../../../actions/project_details';

const ProjectCard = ({ Name, BusinessName, Type, TimeStamp, Description }) => {
    return (
        <div className="project-card">
            <div className="row">
                <div className="col">
                    <SubHeader Text={Type}/>
                </div>
                <div className="col-3 col-lg-2">
                    <div className="project-type-marker">
                        <ProjectTypeMarker FillClass={Type}/>
                    </div>
                </div>
                <div className="col-9 col-lg-10 flush-left">
                    <p>
                        <span className="project-card-label">Name:</span>&nbsp;{BusinessName ? BusinessName : Name}</p>
                    <p>
                        <span className="project-card-label">Description:</span>&nbsp;{Description.substring(0, 120) + "..."}
                    </p>
                    <p>
                        <em>Posted on {getDateStringValue(TimeStamp)}</em>
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    )
};

export default ProjectCard;