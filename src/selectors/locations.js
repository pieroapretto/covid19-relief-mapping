import withinProximity from "./promixity_selector";

export const selectProjectLocations = (locations, { types, range, lat_lng, startDate, endDate }) => {
    let filtered_locations = locations[0] ? locations[0] : locations;

    return filtered_locations.filter((location) => {

      //DateRangeSlider value
      const startDateMatch = typeof startDate !== 'number' || location.timestamp >= startDate;
      const endDateMatch = typeof endDate !== 'number' || location.timestamp <= endDate;

      //Project type value
      const locationTypeMatch = !types.length || !types.includes(location.type);

      //Proximity value
      const location_lat_lng = { lat: location.lat, lng: location.lng };
      const withinProximityMatch = typeof range !== 'number' || withinProximity(lat_lng, location_lat_lng, range);
      
      return startDateMatch && endDateMatch && locationTypeMatch && withinProximityMatch;
    })
};