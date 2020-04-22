<template lang="html">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<rect class="cup-water"
			x="4" :y="waterTop" :width="cupWidth-4" :height="waterHeight"
			stroke-opacity="0" fill-opacity="0.81" fill="#18c0f2" stroke-width="0"/>
		<rect class="cup-glass"
			x="2" y="2" rx="7" ry="7"
			:width="cupWidth" :height="cupHeight"
			fill-opacity="0.51" fill="#f5f5f5" stroke="#6f7ca4" stroke-width="4"/>
	</svg>
</template>

<script lang="js">

export default {
	name: 'wd-cup',
	props: {
		cupWidth: {
			type: Number,
			default: 86
		},
		cupHeight: {
			type: Number,
			default: 110
		},
		waterPercent: {
			type: Number,
			default: 10
		}
	},
	mounted () {

	},
	data () {
		return {
		}
	},
	computed: {
		waterTop () {
			return this.cupHeight - this.waterHeight;
		},
		waterHeight () {
			return (this.cupHeight - 4) * this.waterPercent;
		}
	},
	methods: {

	},
}

</script>

<style scoped>
  .wd-cup {

  }
</style>
