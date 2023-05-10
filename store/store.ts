import {configureStore} from '@reduxjs/toolkit';
import {UserSlice} from './reducer/userReducer';
import {createWrapper} from 'next-redux-wrapper';

const makeStore = () =>
	configureStore({
		reducer: {
			'user': UserSlice.reducer,

		},
		devTools: true,
	});
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
