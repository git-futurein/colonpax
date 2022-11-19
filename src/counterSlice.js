import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	rangePageCount: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incrementRangePageCount: (state, action) => {
			state.rangePageCount = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { incrementRangePageCount } = counterSlice.actions;

export default counterSlice.reducer;
