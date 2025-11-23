import React, { useEffect, useState } from "react";
import sendEnvironmentalData from "../helper/useAI";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSafety } from "../store/resultsSlice";

const FormInput = () => {
  const [formData, setFormData] = useState({
    ideaDescription: "",
    waterUsage: 0,
    energyConsumption: 0,
    wasteGeneration: 0,
    percentageRecycled: 0,
    regulatoryCompliance: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate("/user/signin");
  //   }
  // }, [isLogin, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "ideaDescription" && name !== "regulatoryCompliance") {
      if (!isNaN(value) || value === "") {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await sendEnvironmentalData(formData);
    console.log(result);
    dispatch(setSafety(result.eco_safe));
    navigate("/result");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1675135581467-93cb5f018b96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full max-w-lg p-6 bg-white bg-opacity-90 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Environmental Impact Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="ideaDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Idea Description
            </label>
            <textarea
              id="ideaDescription"
              name="ideaDescription"
              value={formData.ideaDescription}
              onChange={handleChange}
              rows={2}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="waterUsage"
                className="block text-sm font-medium text-gray-700"
              >
                Water Usage (liters/day)
              </label>
              <input
                type="number"
                id="waterUsage"
                name="waterUsage"
                value={formData.waterUsage}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="energyConsumption"
                className="block text-sm font-medium text-gray-700"
              >
                Energy Consumption (kWh)
              </label>
              <input
                type="number"
                id="energyConsumption"
                name="energyConsumption"
                value={formData.energyConsumption}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="wasteGeneration"
                className="block text-sm font-medium text-gray-700"
              >
                Waste Generation (kg/day)
              </label>
              <input
                type="number"
                id="wasteGeneration"
                name="wasteGeneration"
                value={formData.wasteGeneration}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="percentageRecycled"
                className="block text-sm font-medium text-gray-700"
              >
                Percentage Recycled (%)
              </label>
              <input
                type="number"
                id="percentageRecycled"
                name="percentageRecycled"
                value={formData.percentageRecycled}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="regulatoryCompliance"
              className="block text-sm font-medium text-gray-700"
            >
              Regulatory Compliance
            </label>
            <select
              id="regulatoryCompliance"
              name="regulatoryCompliance"
              value={formData.regulatoryCompliance}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-6 w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormInput;
