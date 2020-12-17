<template>
	<blockquote>
		<picture v-if="this.quote.pictures" class="blockquote__person">
			<source :srcset="this.quote.pictures.x1 + ' 1x, ' + this.quote.pictures.x2 + ' 2x'" type="image/webp" />
			<img :src="this.quote.pictures.jpg" alt="" width="114" height="114" />
		</picture>
		<cite>
			{{ this.quote.author }},<br />
			{{ this.quote.title }}
		</cite>
		<template v-for="(paragraph, i) in this.quote.content">
			<p :key="'ffs-' + i">{{ paragraph }}</p>
		</template>
	</blockquote>
</template>

<script>
export default {
	props: {
		quote: {
			pictures: {
				jpg: String,
				x1: String,
				x2: String
			},
			author: String,
			title: String,
			content: Array
		}
	}
};
</script>
