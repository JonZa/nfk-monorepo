<template>
	<div>
		<h1>
			Contact me
		</h1>
		<p>You can email me at <a href="mailto:jon.muller@gmail.com">jon.muller@gmail.com</a> or give me a call me on <a href="tel:0466213376">0466&nbsp;213&nbsp;376</a>.</p>
		<form name="contact" method="POST" @submit.prevent="handleSubmit">
			<input type="hidden" name="form-name" value="contact" />
			<label>Name: <input type="text" v-model="formValues.name" name="name"/></label>
			<label>Email: <input type="email" v-model="formValues.email" name="email"/></label>
			<label>How can I help? <textarea name="message" v-model="formValues.message" rows="3"></textarea></label>
			<button class="button" type="submit">Send</button>
		</form>
		<div id="potato"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			formValues: {
				'form-name': '',
				name: '',
				email: '',
				message: ''
			}
		};
	},
	methods: {
		encode(data) {
			const formData = new FormData();
			for (const key of Object.keys(data)) {
				formData.append(key, data[key]);
			}
			return formData;
		},
		handleSubmit() {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(this.encode(this.formValues)).toString()
			})
				.then(() => this.$router.push('../thanks'))
				.catch(error => console.log(error));
		}
	}
};
</script>
