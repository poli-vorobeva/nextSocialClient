import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useSelector} from "react-redux";
import {AppState} from "../store/store";


const Item = styled(Paper)(({theme}) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const InfoSection = () => {
	const {age,city,education,name}=useSelector((state:AppState)=>state.user)
	return (
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Item>{name}</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>{age}</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>{city}</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>{education}</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default InfoSection;