<template>
	<div class="contact">
		<h1>
			Contact me
		</h1>
		<p>
			You can email me at <a href="mailto:jon.muller@gmail.com">jon.muller@gmail.com</a> or give me a call me on <a href="tel:0466213376">0466&nbsp;213&nbsp;376</a>.
		</p>
		<!-- <form action="/" name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
			<input type="hidden" name="form-name" value="contact" />
			<label>Your Name: <input type="text" name="name"/></label>
			<label>Your Email: <input type="email" name="email"/></label>
			<label>Message: <textarea name="message"></textarea></label>
			<button type="submit">Send</button>
		</form> -->
	</div>
</template>

<script>
export default {
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
				.join('&');
		},
		handleSubmit(e) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: this.encode({
					...this.form
				})
			})
				.then(() => {
					console.log('ok good');
				})
				.catch(() => {
					console.log('oh no bad');
				});
		}
	}
};
</script>

<style lang="scss"></style>
