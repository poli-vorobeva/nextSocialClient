import React, {useEffect} from "react";
import MainLayout from "../components/MainLayout";
import UserInfo from "../components/UserInfo";
import {AppState, wrapper} from "../store/store";
import axios from "axios";
import {fetchValues} from '../store/actions'
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

interface IUser {
	friends: { name: string, avatar:string, friendId:string }[]
	name: string
	age: string
	city: string
	education: string
	posts: { date: string, text: string }[]
}

export default function Index() {
	const router=useRouter()
	const dispatch=useDispatch()
	const user = useSelector((state: AppState) => state.user.name)
	useEffect(() => {
		if(!user)router.push('/login')
	}, [])
	return (
		<>
		{	user &&
		<MainLayout>
			<UserInfo/>
		</MainLayout>
		}
		</>
	)
}

// export const getServerSideProps = wrapper.getServerSideProps(
// 	(store) =>
// 		async ({params}) => {
// 			//6458b28131968cce7240b5ca
// //if token &&
// 			const response = await axios.get('http://localhost:5000/user/6458b28131968cce7240b5ca');
// 			const user: Promise<IUser[]> = await response.data
// 			console.log(user, '$$$')
// 			store.dispatch(fetchValues(await user));
// 			return {
// 				props: {
// 					tracks: [],
// 				},
// 			};
// 		});