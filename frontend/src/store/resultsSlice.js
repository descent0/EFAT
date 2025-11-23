import { createSlice } from "@reduxjs/toolkit";

const safetySlice = createSlice({
    name: 'safety',
    initialState: {
        safety: "NotPredicted", // This represents the initial value for 'safety'
    },
    reducers: {
        setSafety(state, action) {
            state.safety = action.payload; // Correctly modifying the 'safety' state
        },
    },
});

// Export the action to set the safety value
export const { setSafety } = safetySlice.actions;

// Export the reducer to be used in the store
export default safetySlice.reducer;
