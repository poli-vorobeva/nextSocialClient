import React from 'react';
import {Avatar} from "@mui/material";
import Grid from "@mui/material/Grid";
import UserContent from "./UserContent";
import InfoSection from "./InfoSection";
import {useSelector} from "react-redux";
import App from "next/app";
import {AppState} from "../store/store";
const UserInfo = () => {
	const avatar=useSelector((state:AppState) => state.user.avatar)
	return (
		<Grid container spacing={2}>
			<Grid item xs={2}>
				<Avatar
					alt="User Name"
					src={'http://localhost:5000/'+avatar}
					sx={{
						width: 56, height: 56, display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				/>
			</Grid>
			<Grid item xs={8}>
				<InfoSection/>
			</Grid>
			<Grid item xs={10}>
				<UserContent/>
			</Grid>
		</Grid>

	);
};

export default UserInfo;