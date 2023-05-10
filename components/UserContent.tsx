import React from 'react';
import Grid from "@mui/material/Grid";
import CreatePostModal from "./CreatePostModal";
import FriendSection from "./FriendSection";
import {useSelector} from "react-redux";
import {AppState} from "../store/store";
import {Image} from "@mui/icons-material";

//todo change singlequotes
//todo if lenght>5 add button showFriends
const UserContent = () => {
	const posts = useSelector((state: AppState) => state.user.posts)
	return (
		<>
			<FriendSection/>
			<Grid container>
				<>
					<Grid item xs={12}>Посты</Grid>
					<Grid item xs={12}>
						<CreatePostModal/>
					</Grid>
					{
						posts && posts.map(post => {
							return (<React.Fragment key={post.date}>
									<img
										src={'http://localhost:5000/'+post.picture}
										alt='picture'
										loading="lazy"
									/>
									<Grid item xs={2}>
										{post.date}
									</Grid>
									<Grid item xs={10}>
										{post.text}
									</Grid>
								</React.Fragment>
							)
						})}
				</>
			</Grid>
		</>
	);
};

export default UserContent;