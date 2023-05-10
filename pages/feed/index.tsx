import React, {useEffect} from 'react';
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import {addFriend} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/store";
//todo if in post no img!!
//after login no post
interface IFriendPost {
	date: string
	likes: string
	picture: string
	text: string
	userId: string
	userName: string
	__v: number
	_id: string
}
import {addFeedPosts} from '../../store/actions'
import {Box} from "@mui/material";

const Index = () => {
	const userId = useSelector((state: AppState) => state.user._id)
	const feedPosts = useSelector((state:AppState)=>state.user.feedPosts)
	const dispatch=useDispatch()
	useEffect(() => {
		const p = axios.get('http://localhost:5000/user/feed/' + userId)
		p.then(d => {
			dispatch(addFeedPosts(d.data.flat()))
		}).catch(e => console.log(e))
	}, [])
	return (
		<MainLayout>
			<>
			{
				feedPosts.map(post=>{
					return <Box>
						<p>{post.text}</p>
						<p>{post.userName}</p>
						<p>{post.date}</p>
					</Box>
				})
			}
			</>
		</MainLayout>
	);
};

export default Index;