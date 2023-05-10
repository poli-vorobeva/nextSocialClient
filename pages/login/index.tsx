import React, {useState} from 'react';
import {Button} from "@mui/material";
import SignIn from "../../components/signIn";
import Register from "../../components/register";
import signIn from "../../components/signIn";

const Index = () => {
	const [mode, setMode] = useState(null)
	return (
		<div>
			<Button onClick={() => setMode('signIn')}>Войти</Button>
			<Button onClick={() => setMode('register')}>Регистрация</Button>
			{mode === 'signIn' && <SignIn/>}
			{mode === 'register' && <Register/>}
		</div>
	);
};

export default Index;