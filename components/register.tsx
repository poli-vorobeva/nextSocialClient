import React, {useState} from 'react';
import {Button, FormControl, TextField} from "@mui/material";
import FormData from "form-data";
import axios from "axios";
import FileUpload from "./FileUpload";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {addToken} from '../store/actions'
import {fetchValues} from '../store/actions'
const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [age, setAge] = useState('')
	const [education, setEducation] = useState('')
	const [city, setCity] = useState('')
	const [picture, setPicture] = useState('')
	const fields = [
		{fieldName: 'Ваше имя', value: name, click: setName},
		{fieldName: 'Ваш e-mail', value: email, click: setEmail},
		{fieldName: 'Пароль', value: password, click: setPassword},
		{fieldName: 'Ваш возраст', value: age, click: setAge},
		{fieldName: 'Ваше образование', value: education, click: setEducation},
		{fieldName: 'Ваш город', value: city, click: setCity},

	]
	const [onSubmit,setOnSubmit]=useState(false)

	const router=useRouter()
	const dispatch=useDispatch()
	const createUser = () => {
		const formData=new FormData()
		formData.append('name',name)
		formData.append('email',email)
		formData.append('password',password)
		formData.append('age',age)
		formData.append('education',education)
		formData.append('city',city)
		formData.append('avatar',picture)
		 axios.post('http://localhost:5000/auth/registration',formData)
		 	 .then(resp=> {
		 	 dispatch(fetchValues(resp.data))
		 	 //	dispatch(addToken(resp.data.token))
		 	 	router.push('/')
			 })
		 	 .catch(e=>console.log(e))
	}
	return (
		<div>
			<form>
				{
					fields.map(field => {
						return <fieldset key={field.fieldName} style={{border: '1px solid gray'}}>
							<legend>{field.fieldName}</legend>
							<TextField onChange={(e) => field.click(e.target.value)} value={field.value} type="text"
												 variant='outlined'/>
						</fieldset>
					})

				}
				<FileUpload accept={'image/*'} setFile={setPicture}>
					<Button>Загрузить изображение</Button>
				</FileUpload>
				<Button onClick={createUser}>Создать</Button>
			</form>
		</div>
	);
};

export default Register;