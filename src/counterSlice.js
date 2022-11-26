import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rangePageCount: 0,
	subscriptionPopup: false,
	healthCollectData: [],
	userCollectData: [],
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incrementRangePageCount: (state, action) => {
			// console.log(action.payload);
			state.rangePageCount = action.payload;
		},
		subscriptionPopupOpen: (state) => {
			state.subscriptionPopup = true;
		},
		subscriptionPopupClose: (state) => {
			state.subscriptionPopup = false;
		},
		updateHealthCollectData: (state, action) => {
			state.healthCollectData = action.payload;
		},
		updateUserCollectData: (state, action) => {
			console.log(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	incrementRangePageCount,
	subscriptionPopupOpen,
	subscriptionPopupClose,
	updateHealthCollectData,
	updateUserCollectData,
} = counterSlice.actions;

export default counterSlice.reducer;
