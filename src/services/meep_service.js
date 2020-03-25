const REMOTE_API = "http://www.meepmetroenergy.xyz:18773";
const GEODATA_API = "https://maps.googleapis.com/maps/api/geocode/json";
const STREET_VIEW_API = "https://maps.googleapis.com/maps/api/streetview";
import { GoogleMapsAPIKey } from "../../private/google_maps";
import axios from 'axios';

class MeepService {
    getLocations() {
        return new Promise((resolve, reject) => {
            axios.get(REMOTE_API + '/location-markers')
                .then((res) => { 
                    resolve(res.data.locationMarkers) })
                .catch((err) => { reject(err) });
        });
    }

    getLocationsById(id) {
        return new Promise((resolve, reject) => {
            axios.get(REMOTE_API + '/locations/' + id)
                .then((res) => { resolve(res.data) })
                .catch((err) => { reject(err) });
        });
    }

    getProjects() {
        return new Promise((resolve, reject) => {
            axios.get(REMOTE_API + '/projects')
            .then((res) => { resolve(res.data.projects) })
            .catch((err) => { reject(err) });
        });
    }

    getProjectSummaryById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${REMOTE_API}/projects/${id}/summary`)
            .then((res) => { resolve(res.data) })
            .catch((err) => { reject(err) });
        });
    }

    getProjectDetailsById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${REMOTE_API}/projects/${id}/detail`)
            .then((res) => { resolve(res.data) })
            .catch((err) => { reject(err) });
        });
    }

    getGeoDataByZipCode(zipcode) {
        return new Promise((resolve, reject) => {
            axios.get(`${GEODATA_API}?address=${zipcode}&key=${GoogleMapsAPIKey}`)
            .then((res) => {
                const location_data = (res.data.results.length && res.data.results[0].hasOwnProperty('geometry')) ? 
                      res.data.results[0].geometry.location :
                      {};

                resolve(location_data);
            })
            .catch((err) => { reject(err) });
        });
    }

    getGeoDataByLatLong(lat_lng) {
        return new Promise((resolve, reject) => {
            axios.get(`${GEODATA_API}?latlng==${lat_lng}&key=${GoogleMapsAPIKey}`)
            .then((res) => {
                const location_data_array = (res.data.results.length && res.data.results[0].hasOwnProperty("address_components")) ? 
                    res.data.results[0]["address_components"] :
                    null;

                if(location_data_array) {
                    const zipcode_props = location_data_array.find(data => {
                        return data["types"].includes("postal_code");
                    });
    
                    resolve(zipcode_props["long_name"]);
                }
                else {
                    reject('zipcode not found in successful geo data api call');
                }
            })
            .catch((err) => { reject(err) });
        });
    }

    getStreetViewImgUrlByGeoData(lat_lng) {
        return `${STREET_VIEW_API}?location=${lat_lng}&key=${GoogleMapsAPIKey}&size=400x200`;
    }
}

export const meep_service = new MeepService();
