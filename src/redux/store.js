import { configureStore } from "@reduxjs/toolkit";
//import reducer from "redux/slice";
import currentData from "redux/currentData";

const store = configureStore({
	reducer: {
		//app: reducer,
		app:currentData
	},
});

export default store;
