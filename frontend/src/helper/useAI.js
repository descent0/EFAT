import axios from 'axios';

const sendEnvironmentalData = async (formData) => {
    try {
        // Validate and convert form data values to numbers where necessary
        const data = {
            water_usage: Number(formData.waterUsage),
            energy_consumption: Number(formData.energyConsumption),
            energyConsumption: Number(formData.energyConsumption),
            waste_generation: Number(formData.wasteGeneration),
            percentage_recycled: Number(formData.percentageRecycled),
            regulatory_compliance: formData.regulatoryCompliance, // Keep this as a string or whatever format it should be
        };

        const response = await axios.post('http://localhost:4000/predict', data);

      
        console.log('Data submitted successfully:', response.data);
        return response.data;
    } catch (error) {
        // Handle errors
        console.error('Error submitting data:', error.response?.data || error.message);
        throw error;
    }
};

export default sendEnvironmentalData;
