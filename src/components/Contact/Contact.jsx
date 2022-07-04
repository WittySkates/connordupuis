import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import {data} from "../../emailConfig";
import "./styles/contact.scss";


export const Contact = () => {

	const form = useRef();
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [toSend, setToSend] = useState({
		name: '',
		email: '',
		message: '',
	  });


	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	  };

	const sendEmail = (e) => {
		e.preventDefault();

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
			}, 5000)
		);;
  };

  return (    
	<form ref={form} onSubmit={sendEmail}>
		<div className='formContainer'>
			<div>
				Name
			<input
				type='text'
				name='name'
				placeholder='Enter your name'
				value={toSend.name}
				onChange={handleChange}
			/>
			</div>

			<div>
				Email
				<input
					type='text'
					name='email'
					placeholder='example_email@email.com'
					value={toSend.email}
					onChange={handleChange}
				/>
			</div>

			<div>
				Message
				<textarea
					rows={10}
					style={{width:"100%"}}
					type='text'
					name='message'
					placeholder='Your message'
					value={toSend.message}
					onChange={handleChange}
				/>
			</div>

			<div>
				<button type='submit'>Submit</button>
			</div>
			<div>
				<div className='messageStatus'>
				{(success && !error ) && (<div className='messageStatusSuccess'>Message sent successfully.</div>) }
				{(!success && error ) && (<div className='messageStatusFailure'>Message failed.</div>) }
				</div>
			</div>
			
		</div>

	</form>
  );
};

export default Contact