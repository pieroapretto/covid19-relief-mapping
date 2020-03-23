import withinProximity from "./promixity_selector";

export const selectProjectLocations = (locations, { types, range, lat_lng }) => {
    return locations.filter((location) => {
      
      //Project type value
      const locationTypeMatch = !types.length || types.includes(location.project_types[0]);

      //Proximity value
      const withinProximityMatch = typeof range !== 'number' || withinProximity(lat_lng, location.center, range);
      
      return startDateMatch && endDateMatch && locationTypeMatch && withinProximityMatch;
    })
};