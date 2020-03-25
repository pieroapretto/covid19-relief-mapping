const getCookieParams = () => {
    return document.cookie.split(';').reduce((cookieObject, cookieString) => {
        let splitCookie = cookieString.split('=')
        try {
        cookieObject[splitCookie[0].trim()] = decodeURIComponent(splitCookie[1])
        } catch (error) {
        cookieObject[splitCookie[0].trim()] = splitCookie[1]
        }
        return cookieObject
    }, []);
};

const setCookieParams = (geo_data) => {
    if(geo_data) {
      // cookies to write if available in response data
      let cookie_params = ['zipcode', 'latitude', 'longitude'];

      cookie_params.forEach(value => {
        if(geo_data[value]) {
          document.cookie = `user_${value}=${geo_data[value]}`;
        }
      });
    }
};

const configGeoData = (geo_data) => {
    let geo_data_props = {};

    if (geo_data) {
      if(geo_data.coords && geo_data.coords.latitude && geo_data.coords.longitude) {
        geo_data_props.latitude = geo_data.coords.latitude;
        geo_data_props.longitude = geo_data.coords.longitude;

      } 
      else if(geo_data.user_zipcode) {
        geo_data_props.zipcode = geo_data.user_zipcode;
      } 
      else if (geo_data.user_latitude && geo_data.longitude) {
        geo_data_props.latitude  = geo_data.user_latitude;
        geo_data_props.state = geo_data.longitude;
      }
      geo_data_props = JSON.stringify(geo_data_props);
    }
    return geo_data_props;
  }

const setGeoData = (geo_data=null) => {
    const geo_data_props = configGeoData(geo_data);
    setCookieParams(geo_data_props);
};

const getGeoData = () => {
    let geo_data = null;

    // query cookies for geo data
    const cookie_values = getCookieParams();

     if(cookie_values.user_zipcode && cookie_values.user_latitude && cookie_values.user_longitude) {
      geo_data = cookie_values;
    }
    
    if (geo_data) {
      // call weather lambda with geo data geo_data_props
      setGeoData(geo_data);

    } else if("geolocation" in navigator) {
      // query user for location data

      navigator.geolocation.getCurrentPosition(setGeoData, handleGeoError);
    } else {
      console.warn('Geolocation API not supported in this browser.');
    }
}