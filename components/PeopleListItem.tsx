import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/store";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import {addFriend} from '../store/actions'

interface IPeopleListProps {
	man: { id: string, name: string, avatar: string },

}

export default function PeopleListItem({man}: IPeopleListProps) {
	const dispatch = useDispatch()
	const userFriends = useSelector((state: AppState) => state.user.friends)
	const userId = useSelector((state: AppState) => state.user._id)
	const [isFriend, setIsFriend] = useState(false)

	useEffect(() => {
		setIsFriend(!!userFriends.find(e => e.friendId == man.id))
	}, [userFriends])

	const addFriendClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!userId || !man.id) return
		const p = axios.post('http://localhost:5000/people/' + userId, {friendId: man.id})
		p.then(d => {
			dispatch(addFriend(d.data.friends))
		}).catch(e => console.log(e))
	}
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt={man.name} src={'http://localhost:5000/' + man.avatar}/>
				</ListItemAvatar>
				<ListItemText
					primary={man.name}
				/>
				{!isFriend && <Button onClick={addFriendClick}>Добавить в друзья</Button>

				}
			</ListItem>
			<Divider variant="inset" component="li"/>
		</>
	);
}