<template>
	<div class="what">
		Well fuck<br />
		<img src="~$shared/cat.jpg?resize&size=480&format=webp" />
		<div class="thefuck">
			<h1>bork image:</h1>
			<img :src="this.picture" />
		</div>
	</div>
</template>

<script>
import catImage from '$shared/cat.jpg?resize&size=480&format=webp';

export default {
	data() {
		return {
			picture: catImage
		};
	}
};
</script>

<style lang="scss">
.what {
	background: #00f;
	background-image: url('~$shared/cat.jpg?resize&size=320&format=webp');
	background-repeat: no-repeat;
	background-position: top right;
	color: #fff;
	padding: 10px;
}
.thefuck {
	background: #f00;
}
img {
	filter: grayscale(1);
}
</style>
