import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useRef, useState} from "react";
import Textarea from '@mui/joy/Textarea';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/store";
import axios from "axios";
import {addPost} from '../store/actions'
import FileUpload from "./FileUpload";
import FormData from "form-data";
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function CreatePostModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [textArea, setTextArea] = useState('')
	const userId = useSelector((state: AppState) => state.user._id)
	const dispatch = useDispatch()
	const [picture, setPicture] = useState('')

	const onPostReady = () => {
		const formData=new FormData()
		formData.append('picture',picture)
		formData.append('date',`${Date.now()}`)
		formData.append('userId',userId)
		formData.append('text',textArea)
		handleClose()
	//	const dto = {userId, date: `${Date.now()}`, text: textArea}
		const postResp = axios.post('http://localhost:5000/user/post', formData)
		postResp.then(post => {
			const {date, text,picture} = post.data
			dispatch(addPost({date, text,picture}))
		})
		setTextArea('')
	}
	return (
		<div>
			<Button onClick={handleOpen}>Добавить пост</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Создать пост
					</Typography>
					<Textarea
						placeholder="Введите текст…"
						minRows={3}
						maxRows={3}
						value={textArea}
						onChange={(e) => {
							setTextArea(e.target.value)
						}}
					/>
					<FileUpload accept={'image/*'} setFile={setPicture}>
						<Button>Загрузить изображение</Button>
					</FileUpload>
					<Button onClick={onPostReady}>Готово</Button>
				</Box>
			</Modal>
		</div>
	);
}

export default CreatePostModal;