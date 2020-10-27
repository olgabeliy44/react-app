const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  date: {
    type: String
  },
  confirmed: {
    type: Number
  },
  deaths: {
    type: Number
  },
  recovered: {
    type: Number
  },
  active: {
    type: Number
  },
  data: [
    {
      Province_State: {
        type: String
      },
      Country_Region: {
        type: String
      },
      Last_Update: {
        type: String
      },
      Lat: {
        type: Number
      },
      Long_: {
        type: Number
      },
      Confirmed: {
        type: Number
      },
      Deaths: {
        type: Number
      },
      Recovered: {
        type: Number
      },
      Active: {
        type: Number
      },
      FIPS: {
        type: Number
      },
      Incident_Rate: {
        type: Number
      },
      People_Tested: {
        type: Number
      },
      People_Hospitalized: {
        type: Number
      },
      Mortality_Rate: {
        type: Number
      },
      UID: {
        type: Number
      },
      ISO3: {
        type: String
      },
      Testing_Rate: {
        type: Number
      },
      Hospitalization_Rate: {
        type: Number
      }
    }
  ]
},{
    collection: 'data'
});

module.exports = mongoose.model('Business', Business);