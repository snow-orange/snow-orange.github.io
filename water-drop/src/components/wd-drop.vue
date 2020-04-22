<template lang="html">
	<path d="M1.35 15 A 10 10, 0, 1, 0, 18.65 15 L 10 0 Z" fill="url(#rain-gradient)" fill-opacity="0.81" stroke-opacity="0.81" stroke="#18c0f2"
		:transform="rainDropTransform"/>
</template>

<script lang="js">
export default {
	name: 'wd-drop',
	props: {
		dropData: {
			type: Object,
			required: true
		},
		dropTimmer: {
			type: Number,
			required: true
		},
		gameConfigure: {
			type: Object,
			required: true
		}
	},
	mounted () {
	},
	watch: {
		dropTimmer (val, oldVal) {
			var duration = val - this.startTimer;
			this.y = -20 + (1 * duration) + (0.5 * 0.01 * duration * duration); // vt + 1/2 a *t *t

			if (this.dropData.x < this.gameConfigure.cupRight && this.dropData.x > this.gameConfigure.cupLeft - 18 && this.y > this.gameConfigure.cupTop - 10)
				this.$emit('self-distroyed', { inCup: true, id: this.dropData.id, size: this.dropData.size });
			if (this.y >= this.gameConfigure.groundLevel)
				this.$emit('self-distroyed', { inCup: false, id: this.dropData.id });
		}
	},
	data () {
		return {
			startTimer: this.dropTimmer,
			y: -20
		}
	},
	computed: {
		rainDropTransform () {
			return "translate(" + this.dropData.x + ", " + this.y + "), scale(" + this.dropData.size + ")";
		}
	},
	methods: {

	},
}
</script>

<style scoped></style>
