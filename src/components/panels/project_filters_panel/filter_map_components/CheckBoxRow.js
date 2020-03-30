import React from 'react';
import ProjectTypeMarker from '../../../helpers/projectTypeMarker';
import { removeTypeFilter, addTypeFilter } from '../../../../actions/filters';
import { connect } from 'react-redux';

const CheckBoxRow = (props) => {
    const handleCheckedEvent = () => {
        (props.checked) ?
            props.dispatch(removeTypeFilter(props.ProjectType)) :
            props.dispatch(addTypeFilter(props.ProjectType));
    }

    return (
        <div className="checkbox-container" onClick={handleCheckedEvent}>
            <input className="hidden-checkbox" type="checkbox" defaultChecked={props.checked}/>
            <div className="styled-checkbox">
                <svg className={`icon ${props.checked ? "show-checked" : "hide-checked"}`}
                     viewBox="0 0 24 24" >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
            <span className="style-span">{props.Label}</span>
            <span className="project-type-marker">
                <ProjectTypeMarker FillClass={props.ProjectType}/> 
            </span>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {    
    return {
        ...ownProps,
        checked: state.filters.types.length && state.filters.types.includes(ownProps.ProjectType)
    }
}

export default connect(mapStateToProps)(CheckBoxRow);