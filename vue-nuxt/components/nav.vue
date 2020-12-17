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

<style lang="scss">
@import '@/assets/variables.scss';
@import '@/assets/mixins.scss';
@import '@/assets/include-media.scss';
.nav {
	&__container {
		@include media('<tablet') {
			&::before {
				display: block;
				pointer-events: none;
				content: '';
				position: fixed;
				right: 0;
				bottom: 0;
				width: 150px;
				height: 150px;
				transition: var(--transition);
				background-image: radial-gradient(circle at top left, transparent 70.5%, #39687f 100%);
				z-index: -1;
			}
			&--open {
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				&::before {
					background-image: radial-gradient(circle at top left, transparent 70.5%, rgba($carnation, 0.5) 100%);
				}
			}
		}
		@include media('>=tablet') {
			position: fixed;
			top: 0;
			width: 100%;
		}
	}
	&__links {
		list-style-type: none;
		padding: 0;
		@include media('<tablet') {
			position: fixed;
			left: 100%;
			top: 50%;
			text-transform: uppercase;
			text-align: right;
			transform: translateY(-50%);
			#{$a-tags-hover} {
				letter-spacing: 2px;
			}
			li {
				margin: 5px 0;
				transform: translatex(0);
				transition: var(--transition);
				transition-delay: calc((var(--children) - var(--child-n)) * 0.05s);
			}
			&--open {
				li {
					transform: translatex(-100%);
					transition-delay: calc(var(--child-n) * 0.05s);
				}
			}
			@include media('height<phoneHeight') {
				top: 5%;
				transform: none;
			}
		}
		@include media('>=tablet') {
			display: flex;
			justify-content: space-around;
			background: linear-gradient(to bottom, $shark, rgba($shark, 0.85) 45px, transparent);
			margin-bottom: 0;
			padding-bottom: 20px;
			li {
				transform: none;
			}
		}
		#{$a-tags} {
			color: #fff;
			font-family: 'Nunito';
			display: inline-block;
			font-size: 24px;
			line-height: 30px;
			transform: translateY(-4px);
			padding: 6px 50px 4px 15px;
			margin-bottom: 10px;
			text-decoration: none;
			transition: var(--transition);
			transition-duration: calc(var(--transition-duration) * 2);
			letter-spacing: 1px;
			text-rendering: optimizeLegibility;
			position: relative;
			@include media('height<phoneHeight') {
				margin-bottom: 0;
			}
			@include media('>=tablet') {
				padding: 15px 20px 20px 20px;
				margin: 0;
				font-size: 20px;
				text-transform: uppercase;
				transform: none;
				border-top: 5px solid transparent;
			}
			&::before,
			&::after {
				display: block;
				content: '';
				position: absolute;
				top: 50%;
				right: 20px;
				transform-origin: center;
				background: rgba(255, 255, 255, 0.5);
				width: 20px;
				height: 5px;
				border-radius: 10px;
				transform: translatey(-50%);
				transition: var(--transition);
				@include media('>=tablet') {
					top: auto;
					bottom: 5px;
					right: auto;
					left: 50%;
					transform: translatex(-50%) scale(0.75);
				}
			}
			&::before {
				transform: translatey(-50%) rotate(90deg);
				@include media('>=tablet') {
					transform: translatex(-50%) rotate(90deg) scale(0.75);
				}
			}
		}
		#{$a-tags-hover},
		a.nuxt-link-exact-active {
			color: $carnation;
			&::before,
			&::after {
				background: rgba($carnation, 0.5);
			}
			&::before {
				transform: translatey(-50%) rotate(135deg) scale(1.2);
			}
			&::after {
				transform: translatey(-50%) rotate(45deg) scale(1.2);
			}
			@include media('>=tablet') {
				border-color: $carnation;
				&::before {
					transform: translatex(-50%) rotate(135deg) scale(1);
				}
				&::after {
					transform: translatex(-50%) rotate(45deg) scale(1);
				}
			}
		}
	}
	&__hamburger {
		display: none;
		@include media('<tablet') {
			display: block;
			outline: 0;
			position: fixed;
			border: 0;
			background: #fff;
			width: 40px;
			height: 40px;
			border-radius: 100%;
			bottom: 15px;
			right: 15px;
			z-index: 0;
			&::before,
			&::after {
				display: block;
				content: '';
				position: absolute;
				left: 50%;
				transform-origin: center;
				background: transparent;
				width: 20px;
				height: 9px;
				transform: translate(-50%, calc(-50% + 3px));
				transition: var(--transition);
				border-top: 3px solid #38667e;
				border-bottom: 3px solid #38667e;
			}
			&::before {
				transform: translate(-50%, calc(-50% - 3px));
			}
			&--open {
				&::before,
				&::after {
					background: rgba($carnation, 0.5);
					border-radius: 10px;
					border-color: transparent;
					height: 5px;
				}
				&::before {
					transform: translate(-50%, -50%) rotate(135deg) scale(1.2);
				}
				&::after {
					transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
				}
			}
		}
	}
}
</style>
