import React from "react";
import { connect } from 'react-redux';
import { selectProjectLocations } from '../../../../selectors/locations';

const StatsContainer = (props) => (
    <div className="stats-container text-center">
        <p><em>{props.number_of_projects} requests for aid in this area.</em></p>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return { 
        ...ownProps,
        number_of_projects: state.locations[0] ? selectProjectLocations(state.locations[0], state.filters).length : 0,
    }
};

export default connect(mapStateToProps)(StatsContainer);