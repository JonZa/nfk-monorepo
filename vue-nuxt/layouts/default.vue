<template>
	<div class="container" :class="navIsOpen ? 'container--nav-is-open' : ''">
		<nuxt class="content" />
		<app-nav :navIsOpen="this.navIsOpen" @toggle-nav-is-open="toggleNavIsOpen" ref="nav" />
	</div>
</template>

<script>
import AppNav from '~/components/nav.vue';

export default {
	data() {
		return {
			navIsOpen: false
		};
	},
	mounted() {
		function testWebPSupport() {
			return new Promise(resolve => {
				const webp = 'data:image/webp;base64,UklGRkAAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAIAAAAAAFZQOCAYAAAAMAEAnQEqAQABAAFAJiWkAANwAP79NmgA';
				const test_img = new Image();
				test_img.src = webp;
				test_img.onerror = e => resolve(false);
				test_img.onload = e => resolve(true);
			});
		}
		(async () => {
			const supports_webp = await testWebPSupport();
			// for stylesheets
			if (supports_webp) {
				document.body.classList.add('webp');
			}
		})();
	},
	components: {
		AppNav
	},
	methods: {
		toggleNavIsOpen() {
			if (getComputedStyle(this.$refs.nav.$refs.hamburger).display === 'block') {
				this.navIsOpen = !this.navIsOpen;
			} else {
				this.navIsOpen = false;
			}
		}
	}
};
</script>
<style lang="scss">
@import '~$shared/sass/styles.scss';
</style>