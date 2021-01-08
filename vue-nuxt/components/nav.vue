<template>
	<nav class="nav__container" :class="navIsOpen ? 'nav__container--open' : ''" @click="$emit('toggle-nav-is-open')">
		<button class="nav__hamburger" :class="navIsOpen ? 'nav__hamburger--open' : ''" type="button" aria-label="Show navigation" ref="hamburger"></button>
		<ul class="nav__links" :class="navIsOpen ? 'nav__links--open' : ''" :style="{ '--children': links.length }">
			<li v-for="(link, i) in links" :key="'link-' + i" :style="{ '--child-n': i + 1 }">
				<nuxt-link :to="link.to">{{ link.title }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		navIsOpen: Boolean
	},
	data() {
		return {
			isOpen: false,
			links: [
				{
					title: 'Home',
					to: '/'
				},
				{
					title: 'About',
					to: '/about/'
				},
				{
					title: 'Experience',
					to: '/experience/'
				},
				{
					title: 'Recommendations',
					to: '/recommendations/'
				},
				{
					title: 'Contact',
					to: '/contact/'
				},
				{
					title: 'Game',
					to: '/game/'
				}
			]
		};
	}
};
</script>