import React from 'react';
import LocationMarker from '../../../helpers/locationMarker';

const IconRow = ({ Text, IconType }) => (
    <div className="icon-container row">
        <div className="col-2">
            {(() => {
                switch (IconType) {
                    case 'filter':
                        return <img src="images/filter.svg" alt="filter icon"/>;
                    case 'map-marked':
                        return <img src="images/map-marked.svg" alt="map marked icon"/>;
                    default:
                        return <LocationMarker FillClass={IconType}/>;
                    }
            })()}
        </div>
        <div className="col-10 flush-left">
            <p>{Text}</p>
        </div>
    </div>
);

export default IconRow;