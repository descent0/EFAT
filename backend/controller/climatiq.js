const { default: axios } = require("axios");
const apiKey = "XG0Q5AKHBS0HSDT6ET3YX7E0VG";

async function calculateCarbonFootprint(energyConsumption, energyUnit, activity) {
    if (!energyConsumption || !energyUnit) {
      throw new Error('Energy consumption and unit are required.');
    }
  
    if (energyConsumption <= 0) {
      throw new Error('Energy consumption must be a positive number.');
    }
  
    // Validate energyUnit based on your requirements (e.g., using a whitelist)
  
    try {
      const response = await axios.post('https://api.climatiq.io/data/v1/estimate', {
        emission_factor: {
          activity_id: activity,
          data_version: '^6',
        },
        parameters: {
          energy: energyConsumption,
          energy_unit: energyUnit
        }
      }, {
        headers: { Authorization: `Bearer ${apiKey}` }
      });
       
      return response.data;
    } catch (error) {
      console.error('Error fetching data from Climatiq API:', error.message);
  
      // Handle specific error types (e.g., network errors, API errors)
      if (error.response) {
        // Handle API-specific errors (e.g., status codes, error messages)
        console.error('API error:', error.response.data);
        return new Error('Error communicating with Climatiq API'); // More specific message
      } else if (error.request) {
        // Network error
        console.error('Network error:', error.request);
        return new Error('Error contacting Climatiq API');
      } else {
        // Other errors
        console.error('Other error:', error.message);
        return new Error('Error calculating carbon footprint');
      }
    }
  }
  
  module.exports = {
    calculateCarbonFootprint
  };
