import React, { Component } from 'react';
import CheckBoxRow from '../filter_map_components/CheckBoxRow';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this);
        this.state = { checked: true };
    }

    toggleView = event => {
        this.setState({ checked: event.target.checked });
    }

    render() {
        return (
            <div>
                <label>
                    <CheckBoxRow 
                        Label={this.props.Label} 
                        ProjectType={this.props.ProjectType} 
                        checked={this.state.checked} 
                        toggleView={this.toggleView}
                    />
                </label>
            </div>
        );
    }
}

export default CheckBox;