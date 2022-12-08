import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rangePageCount: 0,
  timer: 0,
  subscriptionPopup: false,
  gender: "male",
  healthCollectData: [],
  userCollectData: { age: 0, height: 0, weight: 0, desiredWeight: 0 },
  selectedSubscription: [],
};

export const counterSlice = createSlice({
  name: "counter",
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
      state.healthCollectData = payload;
    },
    updateUserCollectData: (state, action) => {
      state.userCollectData = action.payload;
    },
    getGender: (state, action) => {
      state.gender = action.payload;
    },
    getTime: (state, action) => {
      // const [delay, setDelay] = useState(+delayResend);
      // let delay = action.payload;
      // let minutes = Math.floor(delay / 60);
      // let seconds = Math.floor(delay % 60);
      // const timer = setInterval(() => {
      // 	// setDelay(delay - 1);
      // 	delay = delay - 1;
      // 	minutes = Math.floor(delay / 60);
      // 	seconds = Math.floor(delay % 60);
      // }, 1000);
      // console.log(delay, minutes, seconds);
      // state.timer = { minutes, seconds };
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
