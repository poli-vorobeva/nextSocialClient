import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormData from "form-data";
import React from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {fetchValues} from '../store/actions'
export default function SignIn() {
	const dispatch=useDispatch()
	const router=useRouter()
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const login = axios.post('http://localhost:5000/auth/login',{
			email: data.get("email"),
			password: data.get("password"),
		})
		login.then(resp=> {
			dispatch(fetchValues(resp.data))
			router.push('/')

		}).catch(e=>console.log(e))
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Войти
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Войти
					</Button>
				</Box>
			</Box>
		</Container>
	);
}