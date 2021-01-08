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