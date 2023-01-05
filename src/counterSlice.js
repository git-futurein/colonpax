import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rangePageCount: 0,
	timer: 0,
	subscriptionPopup: false,
	gender: 'male',
	healthCollectData: [],
	userCollectData: { age: 0, height: 0, weight: 0, desiredWeight: 0 },
	selectedSubscription: [],
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incrementRangePageCount: (state, action) => {
			// console.log(action.payload);
			state.rangePageCount = action.payload;
		},
		subscriptionPopupOpen: (state, action) => {
			state.subscriptionPopup = true;
			state.selectedSubscription = action.payload;
		},
		subscriptionPopupClose: (state) => {
			state.subscriptionPopup = false;
		},
		updateHealthCollectData: (state, action) => {
			const payload = action.payload;
			// console.log(payload);
			localStorage.removeItem('healthCollectData');
			localStorage.setItem('healthCollectData', JSON.stringify(payload));
			// state.healthCollectData = payload;
		},
		updateUserCollectData: (state, action) => {
			localStorage.removeItem('userCollectData');
			localStorage.setItem('userCollectData', JSON.stringify(action.payload));
			// state.userCollectData = action.payload;
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
	getTime,
} = counterSlice.actions;

export default counterSlice.reducer;
