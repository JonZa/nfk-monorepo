import { useState } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
	const router = useRouter();
	const [formValues, setFormValues] = useState({});
	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(new URLSearchParams(formValues).toString()).toString(),
		})
			.then(() => router.push('thanks'))
			.catch((error) => console.log(error));
	};
	return (
		<>
			<h1>Contact me</h1>
			<p>
				You can email me at <a href="mailto:jon.muller@gmail.com">jon.muller@gmail.com</a> or give me a call me on <a href="tel:0466213376">0466&nbsp;213&nbsp;376</a>.
			</p>
			<form name="contact" method="POST" onSubmit={handleSubmit}>
				<input type="hidden" name="form-name" value="contact" />
				<label>
					Name: <input type="text" onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} name="name" />
				</label>
				<label>
					Email: <input type="email" onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} name="email" />
				</label>
				<label>
					How can I help? <textarea name="formValues" onChange={(e) => setFormValues({ ...formValues, message: e.target.value })} rows="3"></textarea>
				</label>
				<button className="button" type="submit">
					Send
				</button>
			</form>
			<div id="potato"></div>
		</>
	);
};

export default Contact;
