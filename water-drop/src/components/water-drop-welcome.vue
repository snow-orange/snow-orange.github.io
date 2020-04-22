<template lang="html">
	<section class="water-drop-welcome">
		<h1>WELCOME</h1>
		<div>
			<input type="text" maxlength="10" v-model.trim="name">
			<button @click="startGame">START</button>
		</div>
		<div v-if="gamePlayer.result.totalSeconds>0" class="game-result">
			<h1>GOOD JOB</h1>
			<label><span>Time:</span><b>{{gamePlayer.result.totalSeconds}} seconds</b></label>
			<label><span>Catched:</span><b>{{gamePlayer.result.cupDrops}} rain drops</b></label>
			<label><span>Rate:</span><b>{{rate}}%</b></label>
		</div>
	</section>
</template>

<script lang="js">

export default {
	name: 'water-drop-welcome',
	props: {
		gamePlayer: {
			type: Object,
			required: true
		}
	},
	mounted () {

	},
	data () {
		return {
			name: this.gamePlayer.name
		}
	},
	watch: {
	},
	methods: {
		startGame () {
			this.$emit('start-game', this.name);
		}
	},
	computed: {
		rate () {
			return Math.round(this.gamePlayer.result.cupDrops / this.gamePlayer.result.totalDrops * 10000) / 100;
		}
	}
}

</script>

<style scoped>
	.water-drop-welcome {
	}
	.water-drop-welcome > h1 {
		text-align: center;
	}
	.water-drop-welcome > div {
		max-width: 640px;
		margin:1em auto;
	}
	.game-result > h1 {
		color: #ff4624;
	}
	label {
		display:flex;
		margin:1em 0;
	}
	label span {
		flex: 0 0 40%;
		text-align: right;
	}
	label b {
		flex: 1 1 auto;
	}
</style>
