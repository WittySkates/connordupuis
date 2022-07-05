import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import {data} from "../../emailConfig";
import "./styles/contact.scss";


export const Contact = () => {

	const form = useRef();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [noBody, setNoBody] = useState(false);
	const [toSend, setToSend] = useState({
		name: '',
		email: '',
		message: '',
	  });


	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
		document.getElementById(e.target.id).style.outline = "none"
	  	};

	const sendEmail = (e) => {
		e.preventDefault();

		if(toSend.name === ''){
			document.getElementById(e.target.name.id).style.outline = "2px #ff2121 solid"
		}
		if(toSend.email === ''){
			document.getElementById(e.target.email.id).style.outline = "2px #ff2121 solid"
		}
		if(toSend.message === ''){
			document.getElementById(e.target.message.id).style.outline = "2px #ff2121 solid"
		}
		if(toSend.email === '' || toSend.message === '' || toSend.name === '' ){
			return;
		}

		emailjs.sendForm(data.serviceId, 'template_opza1mc', form.current, data.publicKey)
		.then((result) => {
			setSuccess(true);
			setToSend({
				name: '',
				email: '',
				message: '',
			  });
			console.log(result.text);
		}, (error) => {
			setError(true);
			console.log(error.text);
		}).then(
			setTimeout(() => {
				setSuccess(false);
				setError(false);
				setNoBody(false);
			}, 5000)
		);
  };

  return (    
	<form ref={form} onSubmit={sendEmail}>
		<div className='formContainer'>
			<div>
				Name
			<input
				id='name'
				type='text'
				name='name'
				placeholder='Name'
				value={toSend.name}
				onChange={handleChange}
			/>
			</div>

			<div>
				Email
				<input
					id='input'
					type='text'
					name='email'
					placeholder='Email'
					value={toSend.email}
					onChange={handleChange}
				/>
			</div>

			<div>
				Message
				<textarea
					id='message'
					rows={10}
					style={{width:"100%"}}
					type='text'
					name='message'
					placeholder='Message'
					value={toSend.message}
					onChange={handleChange}
				/>
			</div>

			<button type='submit'>Submit</button>

			<div>
				<div className='messageStatus'>
				{(success && !error ) && (<div className='messageStatusSuccess'>Message sent successfully.</div>) }
				{(!success && error ) && (<div className='messageStatusFailure'>Message failed.</div>) }
				{(noBody) && (<div className='messageStatusFailure'>Must fill out form.</div>) }

				</div>
			</div>
			
		</div>

	</form>
  );
};

export default Contact