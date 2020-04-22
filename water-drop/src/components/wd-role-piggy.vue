<template lang="html">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid meet" width="267" height="200">
		<defs>
			<circle cx="93" cy="77" r="15" id="pg-eye"></circle>
			<circle cx="0" cy="0" r="5" id="pg-eye-ball">
				<animateTransform id="aniPiggyEyeScale" attributeName="transform" type="scale" from="1 1" to="1.3 0.2"
					dur="0.1s" repeatCount="2" begin="1s;aniPiggyEyeScale2.end+3s"/>
				<animateTransform id="aniPiggyEyeScale2" attributeName="transform" type="scale" from="1 1" to="1.3 0.2"
					dur="0.1s" begin="aniPiggyEyeScale.end+4s"/>
			</circle>
			<path d="M164 95C167 105 158 117 144 121C130 125 116 120 113 110C110 100 119 88 133 84C148 80 161 85 164 95Z" id="pg-nose"></path>
			<path d="M46 52L66 31L20 24L46 52Z" id="pg-ear-right"></path>
			<path d="M117 28L106 2L92 26L117 28Z" id="pg-ear-left"></path>
			<path d="M136 101C137 104 136 108 134 108C131 109 129 107 128 104C127 100 128 97 130 96C133 95 135 98 136 101Z" id="pg-nose-hole"></path>
		</defs>
		<g>
			<g>
				<g>
					<animateTransform id="aniPiggyBodyScale" attributeName="transform" type="scale" from="1 1" :to="bodyScale"
						dur="0.08s" begin="1s;aniPiggyBodyScale2.end+0.14s"/>
					<animateTransform id="aniPiggyBodyScale2" attributeName="transform" type="scale" :from="bodyScale" to="1 1"
						dur="0.08s" begin="aniPiggyBodyScale.end"/>
					<path d="M18 113L2 99L20 105L18 113Z" fill="#4747a6" stroke="#91a3dc" stroke-width="1" stroke-opacity="1" id="pg-tail"></path>
					<use xlink:href="#pg-ear-left" fill="#afafee" stroke="#91a3dc" stroke-width="1" stroke-opacity="1"></use>
					<circle cx="103" cy="108" r="85" fill="#a4a8e5" id="pg-body"></circle>
					<circle cx="70" cy="125" r="25" fill="#f47885" />
					<text font-family="Arial" x="52" y="138" font-size="36" fill="white">{{firstCharator}}</text>
					<use xlink:href="#pg-ear-right" fill="#afafee"  stroke="#91a3dc" stroke-width="1" stroke-opacity="1"></use>
				</g>
				<g>
					<use xlink:href="#pg-eye" fill="#ffffff"></use>
					<use xlink:href="#pg-eye" transform="translate(54, -15)" fill="#ffffff"></use>
					<use xlink:href="#pg-eye-ball" fill="#000000" transform="translate(98, 70)"></use>
					<use xlink:href="#pg-eye-ball" transform="translate(150, 55)" fill="#000000"></use>
				</g>
				<g>
					<use xlink:href="#pg-nose" fill="#8e8e92"></use>
					<use xlink:href="#pg-nose-hole" fill="#424282"></use>
					<use xlink:href="#pg-nose-hole" transform="translate(15, -4)" fill="#424282"></use>
				</g>
			</g>
			<g transform="translate(173,70)">
				<water-cup :cup-width="90" :cup-height="110" :water-percent="waterPercent" />
			</g>
		</g>
	</svg>
</template>

<script lang="js">
import MxRole from '../mixin/wd-role.js'

export default {
	name: 'wd-role-piggy',
	mixins: [MxRole],
	data () {
		return {
			cupSize: 30,
			cupTop: 70,
			cupLeft: 175,
			cupWidth: 86
		}
	},
	computed: {
	},
	methods: {
		checkPlayerName () {
			return true;
		}
	},
}
</script>

<style scoped>
</style>
