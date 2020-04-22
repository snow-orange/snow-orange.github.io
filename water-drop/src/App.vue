<template>
	<div id="app">
		<WaterDropWorld v-if="isGaming" :player="player" @game-over="gameOver"/>
		<WaterDropWelcome v-show="!isGaming" :game-player="player" @start-game="restartGame"/>
		<audio ref="soundGoodJob">
			<source src="./assets/win.mp3" type="audio/mp3"/>
		</audio>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WaterDropWorld from './components/water-drop-world.vue'
import WaterDropWelcome from './components/water-drop-welcome.vue'

export default {
	name: 'App',
	props: {
		'a-text': {
			default: 1
		}
	},
	components: {
		WaterDropWorld: WaterDropWorld,
		WaterDropWelcome: WaterDropWelcome
	},
	data () {
		return {
			isGaming: false,
			player: {
				name: '',
				role: '',
				result: {
					cupDrops: 0,
					totalDrops: 0,
					totalSeconds: 0
				}
			}
		}
	},
	methods: {
		restartGame (name) {
			this.player.name = name;
			this.isGaming = true;
			this.player.role = '';
			this.player.cupDrops = 0;
			this.player.totalDrops = 0;
			this.player.totalSeconds = 0;
		},
		gameOver (result) {
			this.isGaming = false;
			this.player.role = result.role;
			this.player.result.cupDrops = result.cupDrops;
			this.player.result.totalDrops = result.totalDrops;
			this.player.result.totalSeconds = Math.round(result.totalSeconds);
			console.log(this.$refs.soundGoodJob);
			this.$refs.soundGoodJob.play();
		}
	}
}
</script>

<style>
html,body {
	margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
