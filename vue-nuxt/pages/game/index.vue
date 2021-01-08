<template>
	<div>
		<h1>Game</h1>
		<p>
			Fun with reactive data, CSS custom properties, and transitions. Harder than it looks.
		</p>
		<div
			class="zwipe"
			:class="started ? 'zwipe--started' : ''"
			:style="{
				'--columns': this.columns,
				'--rows': this.rows
			}"
		>
			<template v-for="(row, i) in rows">
				<Tile
					v-for="(column, j) in columns"
					:key="'row-' + row + '-column-' + column"
					@click-tile="clickTile(tilesArray[i * rows + j])"
					:class="{ blank: tilesArray[i * rows + j].isBlank }"
					v-bind:styles="{
						currentRow: tilesArray[i * rows + j].currentRow,
						currentColumn: tilesArray[i * rows + j].currentColumn,
						startRow: tilesArray[i * rows + j].startRow,
						startColumn: tilesArray[i * rows + j].startColumn
					}"
				/>
			</template>
			<button v-on:click="start" v-if="!started" class="button zwipe__shuffle">Shuffle to Start</button>
		</div>
	</div>
</template>

<script>
import Tile from '@/components/tile.vue';

export default {
	components: {
		Tile
	},
	data() {
		return {
			columns: 4,
			rows: 4,
			blankColumn: 0,
			blankRow: 0,
			tilesArray: [],
			started: false
		};
	},
	created() {
		this.tilesArray = this.createTiles();
	},
	methods: {
		createTiles() {
			let tiles = [];
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.columns; j++) {
					let isBlank = i === 0 && j === this.columns - 1;
					tiles.push({
						currentRow: i,
						currentColumn: j,
						startRow: !isBlank ? i : -1,
						startColumn: !isBlank ? j : -1,
						isBlank: isBlank
					});
				}
			}
			this.blankRow = 0;
			this.blankColumn = this.columns - 1;
			return tiles;
		},
		clickTile(target) {
			let currentRow = target.currentRow;
			let currentColumn = target.currentColumn;
			let correctRow = currentRow === this.blankRow;
			let correctColumn = currentColumn === this.blankColumn;

			if (!correctRow && !correctColumn) {
				return false;
			} else if (correctRow && correctColumn) {
				alert('user is sus vote him out');
				return false;
			} else if (correctRow) {
				let blankTile = this.tilesArray.filter(function(el) {
					return el.startColumn < 0;
				});
				if (currentColumn > this.blankColumn) {
					let relevantTiles = this.tilesArray.filter(function(el) {
						return el.currentColumn > this.blankColumn && el.currentColumn <= currentColumn && el.currentRow === currentRow;
					}, this);
					relevantTiles.forEach(tile => {
						tile.currentColumn = tile.currentColumn - 1;
					});
				} else if (currentColumn < this.blankColumn) {
					let relevantTiles = this.tilesArray.filter(function(el) {
						return el.currentColumn < this.blankColumn && el.currentColumn >= currentColumn && el.currentRow === currentRow;
					}, this);
					relevantTiles.forEach(tile => {
						tile.currentColumn = tile.currentColumn + 1;
					});
				}
				blankTile[0].currentColumn = currentColumn;
			} else if (correctColumn) {
				let blankTile = this.tilesArray.filter(function(el) {
					return el.startRow < 0;
				});
				if (currentRow > this.blankRow) {
					let relevantTiles = this.tilesArray.filter(function(el) {
						return el.currentRow > this.blankRow && el.currentRow <= currentRow && el.currentColumn === currentColumn;
					}, this);
					relevantTiles.forEach(tile => {
						tile.currentRow = tile.currentRow - 1;
					});
				} else if (currentRow < this.blankRow) {
					let relevantTiles = this.tilesArray.filter(function(el) {
						return el.currentRow < this.blankRow && el.currentRow >= currentRow && el.currentColumn === currentColumn;
					}, this);
					relevantTiles.forEach(tile => {
						tile.currentRow = tile.currentRow + 1;
					});
				}
				blankTile[0].currentRow = currentRow;
			}

			this.blankRow = currentRow;
			this.blankColumn = currentColumn;
		},
		start() {
			let tiles = this.tilesArray;
			tiles.forEach((tile, index) => {
				let randomTile = tiles[Math.floor(Math.random() * this.rows * this.columns)];

				[tile.currentRow, randomTile.currentRow] = [randomTile.currentRow, tile.currentRow];
				[tile.currentColumn, randomTile.currentColumn] = [randomTile.currentColumn, tile.currentColumn];

				if (tile.isBlank) {
					this.blankRow = tile.currentRow;
					this.blankColumn = tile.currentColumn;
				} else if (randomTile.isBlank) {
					this.blankRow = randomTile.currentRow;
					this.blankColumn = randomTile.currentColumn;
				}
			});
			this.started = true;
		}
	}
};
</script>