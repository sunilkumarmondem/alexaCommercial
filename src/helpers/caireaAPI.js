var request = require('request-promise')
// require('../index.js')
// require('dotenv').config()
/* var dotenv = require('dotenv')
dotenv.config() */
require('dotenv').config()
var API_URL = process.env.API_URL
// var API_URL = 'https://devres.cairea.com'
/* require('dotenv').config() */
module.exports = {
  getPropertyInfo: (access_token) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/mock/property/`,
        method: 'GET',
        headers: headers(access_token)
      })
        .then((response) => {
          // Return User Details
          return resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          reject('Meetup API Error: ', error)
        })
    })
  },
  getAlexaDevice: (headers, device_id) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/users/alexa-device/${device_id}/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          console.log('API RESPONSE(getAlexaDevice):', response)
          return resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR(getAlexaDevice):', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  createAlexaDevice: (headers, device_id) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/users/create-alexa-device/`,
        method: 'POST',
        headers: headers,
        body: {
          'device_id': device_id
        },
        json: true
      })
        .then((response) => {
          console.log('API RESPONSE(createAlexaDevice):', response)
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR(createAlexaDevice):', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getConnectedProperty: (headers) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/mock/property/connected/?connected_with_alexa=1`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          console.log('API RESPONSE(getConnectedProperty):', response)
          return resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR(getConnectedProperty):', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getHotDeals: (headers) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/hot-deals/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          console.log('API RESPONSE(getHotDeals):', response)
          return resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR(getHotDeals):', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getHotDealsDetails: (headers, property_id) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/hot-deals/${property_id}/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          console.log('API RESPONSE(getHotDeals):', response)
          return resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR(getHotDeals):', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getHotDealsSectionDetails: (headers, property_id, section) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/hot-deals/${property_id}/${section}/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          // Return Meetup Group Details
          console.log('API RESPONSE(getPropertySectionDetails):', response)
          // console.log('response: %j', response)
          resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR:', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getPropertyDetails: (headers, property_id) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/mock/property/${property_id}/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          console.log('API RESPONSE(getPropertyDetails):', response)
          // Return Meetup Group Details
          // console.log("API RESP", response);
          // console.log('response: %j', response)
          resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR:', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getPropertySectionDetails: (headers, access_token, property_id, section) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/mock/property/${property_id}/${section}/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          // Return Meetup Group Details
          console.log('API RESPONSE(getPropertySectionDetails):', response)
          // console.log('response: %j', response)
          resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR:', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  getPropertyAddress: (headers, address) => {
    return new Promise((resolve, reject) => {
      request({
        url: `${API_URL}/api/get-property-id?address=${address}/`,
        method: 'GET',
        headers: headers
      })
        .then((response) => {
          console.log('API RESPONSE(getPropertyDetails):', response)
          // Return Meetup Group Details
          // console.log("API RESP", response);
          // console.log('response: %j', response)
          resolve(JSON.parse(response))
        })
        .catch((error) => {
          // API Error
          console.log('API ERROR:', error)
          reject('Meetup API Error: ', error)
        })
    })
  },
  changePropertyOnscreen: (access_token, property_id, item_to_change) => {
    var options = {
      method: 'PUT',
      uri: `${API_URL}/api/mock/property/display-on-device/${property_id}/`,
      // headers: {
      //   'test-header': 'cairea-lens',
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Bearer TqXqzhuowdYyv2jz7CIOv6pCoaIO4x'
      // },
      headers: headers(access_token),
      body: {
        'id': property_id,
        'display_on_device': item_to_change
      },
      json: true // Automatically stringifies the body to JSON
    }
    request(options)
      .then(function (parsedBody) {
        console.log('screen updated to ' + item_to_change)
      })
      .catch((error) => {
        console.log('damn steve ' + error)
        // API Error
        // reject('Meetup API Error: ', error);
      })
  }
}
