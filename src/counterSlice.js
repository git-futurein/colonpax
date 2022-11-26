import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rangePageCount: 0,
	subscriptionPopup: false,
	gender: 'male',
	healthCollectData: [],
	userCollectData: { age: 0, height: 0, weight: 0, desiredWeight: 0 },
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
			const payload = action.payload;
			state.healthCollectData = payload;
		},
		updateUserCollectData: (state, action) => {
			state.userCollectData = action.payload;
		},
		getGender: (state, action) => {
			state.gender = action.payload;
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
	getGender,
} = counterSlice.actions;

export default counterSlice.reducer;
