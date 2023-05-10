import {HYDRATE} from 'next-redux-wrapper';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
	friends: { name: string, avatar:string,friendId:string }[]
	avatar: string,
	name: string
	age: string
	city: string
	education: string
	posts: {
		date: string, text: string, picture: string,
		userName: string,
		userId: string,
	}[]
	token: string,
	_id: string,
}

const initialState: IUserState = {
	friends: [],
	name: "admin3",
	age: "34",
	city: "",
	education: "",
	avatar: '',
	posts: [],
	token: '',
	_id: '645a9517f2ac096b415e2683'
};

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchValues(state: IUserState, action: PayloadAction<IUserState>) {
			state.friends = action.payload.friends
			state.age = action.payload.age
			state.city = action.payload.city
			state.education = action.payload.education
			state.name = action.payload.name
			state.posts = action.payload.posts
			state.avatar = action.payload.avatar
			state._id = action.payload._id
		},
		addToken(state: IUserState, action: PayloadAction<string>) {
			state.token = action.payload
		},
		addPost(state: IUserState, action: PayloadAction<{ text: string, date: string,picture:string,userName: string, userId: string }>) {
			state.posts.unshift(action.payload)
		},
		addFriend(state: IUserState, action: PayloadAction<{ name: string, friendId: string, avatar: string }[]>) {
			state.friends = action.payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export default UserSlice.reducer;