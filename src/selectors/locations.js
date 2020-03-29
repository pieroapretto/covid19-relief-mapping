import withinProximity from "./promixity_selector";

export const selectProjectLocations = (locations, { types, range, lat, lng }) => {
    let filtered_locations = locations[0] ? locations[0] : locations;
    return filtered_locations.filter((location) => {
      //Project type value
      const locationTypeMatch = !types.length || !types.includes(location.type);

      //Proximity value
      const promixity_center = { lat, lng} ;
      const lat_lng = { lat: location.lat, lng: location.lng };
      const withinProximityMatch = typeof range !== 'number' || withinProximity(promixity_center, lat_lng, range);
      
      return locationTypeMatch && withinProximityMatch;
    })
};