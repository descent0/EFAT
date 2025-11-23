const axios = require("axios");

const { calculateCarbonFootprint } = require("./climatiq");
async function callPythonAPI(req, res) {
    try {
      const dataInput = req.body;
      const {energyConsumption,...remaining}=dataInput;
      
      
  
      // **Awaiting the carbon footprint calculation**
      const carbonFootprint = await calculateCarbonFootprint(energyConsumption,"kWh","electricity-supply_grid-source_production_mix");
  
      const inputData = {
        "carbon_footprint": carbonFootprint.co2e,
        ...remaining
      };
      console.log(inputData);
      const response = await axios.post('http://127.0.0.1:5000/predict', inputData);
      return res.json(response.data);
    } catch (error) {
      console.error('Error calling Flask server:', error);
      return res.status(500).json({ error: 'Error communicating with AI model' });
    }
  }
  module.exports={
    callPythonAPI
  }