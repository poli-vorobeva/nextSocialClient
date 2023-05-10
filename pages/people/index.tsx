import React, {useEffect, useState} from 'react';
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import PeopleListItem from "../../components/PeopleListItem";
import List from "@mui/material/List";

const Index = () => {
	const [people,setPeople]=useState([])
	const userId=useSelector((state:AppState) => state.user._id)
	const friends=useSelector((state:AppState) => state.user.friends)
	useEffect(()=>{
		const p= axios.get('http://localhost:5000/people')
		p.then(d=>setPeople(d.data))
		//send friend
	},[])
	return (
		<MainLayout>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{
				people.map(man=>{
					if(man.id===userId)return
			 		return <PeopleListItem man={man}/>
				})
			}
			</List>
		</MainLayout>
	);
};

export default Index;