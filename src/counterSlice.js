import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rangePageCount: 0,
	subscriptionPopup: false,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incrementRangePageCount: (state, action) => {
			state.rangePageCount = action.payload;
		},
		subscriptionPopupOpen: (state) => {
			state.subscriptionPopup = true;
		},
		subscriptionPopupClose: (state) => {
			state.subscriptionPopup = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { incrementRangePageCount, subscriptionPopupOpen, subscriptionPopupClose } =
	counterSlice.actions;

export default counterSlice.reducer;
