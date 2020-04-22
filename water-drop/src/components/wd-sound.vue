<template lang="html">
	<section class="wd-sound">
		<audio id="soundRainDrop1" ref="soundRainDrop1">
			<source src="../assets/drop.mp3" type="audio/mp3"/>
		</audio>
		<audio id="soundRainDrop2" ref="soundRainDrop2">
			<source src="../assets/drop.mp3" type="audio/mp3"/>
		</audio>
		<audio id="soundRainDrop3" ref="soundRainDrop3">
			<source src="../assets/drop.mp3" type="audio/mp3"/>
		</audio>
	</section>
</template>

<script lang="js">

export default {
	name: 'wd-sound',
	props: {
		rainDropId: {
			type: Number,
			default: 0
		}
	},
	mounted () {
	},
	data () {
		return {
			rainDropSoundInd: 0
		}
	},
	watch: {
		rainDropId (v, oldV) {
			// when changed. play sound
			if (v > 0) {
				this.rainDropSoundInd ++;
				if (this.rainDropSoundInd > 3)
					this.rainDropSoundInd = 1;
				this.$refs['soundRainDrop' + this.rainDropSoundInd].play();
			}
		}
	},
	methods: {

	},
	computed: {

	}
}

</script>

<style scoped>
  .wd-sound {

  }
</style>
