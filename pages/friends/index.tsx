import React from 'react';
import MainLayout from "../../components/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/store";
import PeopleListItem from "../../components/PeopleListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Button, Typography} from "@mui/material";
import axios from "axios";
import {addFriend} from '../../store/actions'

const Index = () => {
	const dispatch = useDispatch()
	const friends = useSelector((state: AppState) => state.user.friends)
	const userId = useSelector((state: AppState) => state.user._id)
	const deleteFriend = (friendId) => {
		const p = axios.post('http://localhost:5000/people/' + userId + "/" + friendId)
		p.then(d => {
			dispatch(addFriend(d.data.friends))
		}).catch(e => console.log(e))
	}
	//todo create post modal cleanInput
	return (
		<MainLayout>
			<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
				{!!friends.length
					? <>{friends.map(friend => {
						return <ListItem key={friend.name} alignItems="flex-start">
							<ListItemAvatar>
								<Avatar alt={friend.name} src={'http://localhost:5000/' + friend.avatar}/>
							</ListItemAvatar>
							<ListItemText
								primary={friend.name}/>
							<Button onClick={() => deleteFriend(friend.friendId)}> Удалить из друзей</Button>
						</ListItem>
					})}</>
					:
					<Typography>У вас пока нет друзей</Typography>
				}
			</List>
		</MainLayout>
	);
};

export default Index;