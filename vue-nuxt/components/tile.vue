<template>
	<button
		type="button"
		class="tile"
		@mousedown="$emit('click-tile')"
		:style="{
			'--currentRow': styles.currentRow,
			'--currentColumn': styles.currentColumn,
			'--startRow': styles.startRow,
			'--startColumn': styles.startColumn
		}"
	/>
</template>

<script>
export default {
	props: {
		styles: {
			currentRow: Number,
			currentColumn: Number,
			startRow: Number,
			startColumn: Number
		}
	}
};
</script>

<style lang="scss">
@import '~$shared/sass/shared/mixins.scss';
@import '~$shared/sass/shared/include-media.scss';
.tile {
	border: 0;
	padding: 0;
	box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.75), inset -1px -1px 2px rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	width: calc(var(--square) / var(--columns));
	height: calc(var(--square) / var(--columns));
	cursor: pointer;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	outline: 0;
	--startColumn: 0;
	--startRow: 0;
	--currentColumn: 1.5;
	--currentRow: 1.5;
	background-position: calc(-1 * calc(var(--square) / var(--columns)) * var(--startColumn)) calc(-1 * calc(var(--square) / var(--columns)) * var(--startRow));
	transform: translate(calc(calc(var(--square) / var(--columns)) * var(--currentColumn)), calc(calc(var(--square) / var(--columns)) * var(--currentRow)));
	transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	background-image: url('~$shared/images/banksy.jpg?resize&size=320&format=webp');
	&,
	&:active,
	&:focus,
	&:hover {
		background-size: calc(var(--square));
	}
	@include media('retina2x') {
		background-image: url('~$shared/images/banksy.jpg?resize&size=640&format=webp');
	}
	@include media('>=tablet') {
		background-image: url('~$shared/images/banksy.jpg?resize&size=480&format=webp');
		@include media('retina2x') {
			background-image: url('~$shared/images/banksy.jpg?resize&size=960&format=webp');
		}
	}
	@include media('>=desktop') {
		background-image: url('~$shared/images/banksy.jpg?resize&size=560&format=webp');
		@include media('retina2x') {
			background-image: url('~$shared/images/banksy.jpg?resize&size=1120&format=webp');
		}
	}
	&.blank {
		background: transparent;
		box-shadow: none;
		pointer-events: none;
	}
}
</style>
