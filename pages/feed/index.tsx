import React, {useEffect} from 'react';
import MainLayout from "../../components/MainLayout";
import axios from "axios";
import {addFriend} from "../../store/actions";

const Index = () => {
	useEffect(()=>{
		const p = axios.get('http://localhost:5000/user/feed' )
		p.then(d => {
			console.log(d.data)
		}).catch(e => console.log(e))
	},[])
	return (
		<MainLayout>
			Feed
		</MainLayout>
	);
};

export default Index;