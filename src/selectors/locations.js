import withinProximity from "./promixity_selector";

// search text filter value
const hasSearchTextMatch = (location, searchText) => {
  return !searchText || location.name.toLowerCase().includes(searchText) || location.description.toLowerCase().includes(searchText);
};

// date range slider value: start date
const hasStartDateMatch = (location, startDate) => {
  return typeof startDate !== 'number' || location.timestamp >= startDate
};

// date range slider value: end date
const hasEndDateMatch = (location, startDate) => {
  return typeof startDate !== 'number' || location.timestamp >= startDate
};

// project type value
const hasProjectTypeMatch = (location, types) => {
  return !types.length || types.includes(location.type);
};

// within proximity value
const hasWithinProximityMatch = (location, lat_lng, range) => {
  const location_lat_lng = { lat: location.lat, lng: location.lng };
  return typeof range !== 'number' || withinProximity(lat_lng, location_lat_lng, range);
};


export const selectProjectLocations = (locations, { types, range, lat_lng, startDate, endDate, searchText }) => {
    let filtered_locations = locations[0] ? locations[0] : locations;

    return filtered_locations.filter((location) => {
      return hasSearchTextMatch(location, searchText) &&
             hasStartDateMatch(location, startDate) &&
             hasEndDateMatch(location, endDate) &&
             hasProjectTypeMatch(location, types) && 
             hasWithinProximityMatch(location, lat_lng, range);
    });
};