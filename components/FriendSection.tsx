import React from 'react';
import {Avatar, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useSelector} from "react-redux";
import {AppState} from "../store/store";

const FriendSection = () => {
	const user=useSelector((state:AppState) => state.user)
	console.log(user.avatar,'$%')
	return (
		<>
			<Typography variant={'h6'}>Друзья</Typography>
			<Grid container sx={{justifyContent: 'spaceAround'}} spacing={1}>
				{user.friends && user.friends.map(friend => <Grid item key={friend.name}
																				 sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1}}>
						<Avatar
							alt={friend.name}
							src={friend.image}//"/static/images/avatar/1.jpg"
							sx={{
								width: 24, height: 24, display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						/>
						<Typography>{friend.name}</Typography>
					</Grid>
				)
				}
			</Grid>
		</>
	);
};

export default FriendSection;