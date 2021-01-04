<template>
	<div>
		<h1>I'm Jon Muller</h1>
		<p>
			I've been building user interfaces<br class="soft" />
			for over 20 years.
		</p>
		<p>
			I've been described as:<br />
			<strong>“a frontend development genius”</strong><br class="soft" />
			by a head of engineering,<br />
			<strong>“fantastic to work with”</strong><br class="soft" />
			by a client,<br />
			<strong>“great at simplifying complex problems”</strong><br class="soft" />
			by a manager, and<br />
			<strong>“the best manager I have worked for”</strong><br class="soft" />
			by a teammate.
		</p>
		<p>
			I'm in Sydney, Australia,<br class="soft" />
			and I'm looking for work.
		</p>
		<p>
			You can <a href="files/JonMuller-min.pdf" download>download my resume</a>,<br class="soft" />
			email me at <a href="mailto:jon.muller@gmail.com">jon.muller@gmail.com</a><br class="soft" />
			or <nuxt-link to="/about/">read more about me</nuxt-link>.
		</p>
	</div>
</template>

<style lang="scss">
@import '~$shared/sass/shared//variables.scss';
@import '~$shared/sass/shared//mixins.scss';
@import '~$shared/sass/shared//include-media.scss';
br.soft {
	@include media('>=tablet') {
		display: none;
	}
}
</style>