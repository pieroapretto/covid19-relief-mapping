import React, { Component } from 'react';
import LocationMarker from '../../helpers/locationMarker';

const ProjectCard = ({ Name, BusinessName, Type, DateString, ContactMethod, ContactValue, Description }) => (
    <div className="project-card">
        <div className="row">
            <div className="col-12">
                <p className="project-card-header">{Name}</p>
            </div>
            <div className="col-2">
                <div className="project-card-marker">
                    <LocationMarker FillClass={Type}/>
                </div>
            </div>
            <div className="col-10 flush-left">
                <p>{Description}</p>
                <p><em>{DateString}</em></p>
            </div>
        </div>
        <hr/>
    </div>
);

export default ProjectCard;