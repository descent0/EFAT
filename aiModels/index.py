from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
loaded_model = joblib.load('random_forest_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Check for missing keys
        required_keys = ['carbon_footprint', 'water_usage', 'energy_consumption', 'waste_generation', 'percentage_recycled', 'regulatory_compliance']
        for key in required_keys:
            if key not in data:
                return jsonify({'error': f'Missing required key: {key}'}), 400

        # Preprocess the input data
        features = {
            "Carbon Footprint (kg CO2e)": data.get('carbon_footprint', None),  # Use .get with default None
            "Water Usage (liters)": data.get('water_usage', None),
            "Energy Consumption (kWh)": data.get('energy_consumption', None),
            "Waste Generation (kg)": data.get('waste_generation', None),
            "Percentage Recycled (%)": data.get('percentage_recycled', None),
             "Regulatory Compliance (Yes/No)": 1 if data['regulatory_compliance'] == 'Yes' else 0
        }

        # Convert features to DataFrame for prediction
        input_data = pd.DataFrame([features])

        # Make prediction
        prediction = loaded_model.predict(input_data)

        # Map prediction to eco-safety categories
        eco_safe_categories = ['Not EcoSafe', 'Moderately EcoSafe', 'EcoSafe', 'Super EcoSafe']
        predicted_category = eco_safe_categories[prediction[0]]

        # Return the result as JSON
        return jsonify({'eco_safe': predicted_category})

    except Exception as e:
        # Handle unexpected errors
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)