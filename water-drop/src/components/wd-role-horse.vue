<template lang="html">
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		preserveAspectRatio="xMidYMid meet" width="267" height="200">
		<defs>
			<circle cx="15" cy="15" r="10" id="hs-eye" fill="white"></circle>
			<circle cx="5" cy="5" r="4" id="hs-eye-ball">
				<animateTransform id="aniHorseEyeScale" attributeName="transform" type="scale" from="1 1" to="1.3 0.2"
					dur="0.1s" repeatCount="2" begin="1s;aniHorseEyeScale2.end+3s"/>
				<animateTransform id="aniHorseEyeScale2" attributeName="transform" type="scale" from="1 1" to="1.3 0.2"
					dur="0.1s" begin="aniHorseEyeScale.end+4s"/>
			</circle>

			<path d="M0 0 L7 12Z" id="hs-foot-back" stroke="#0f1010" stroke-width="1"></path>
			<path d="M0 0 L7 11Z" id="hs-foot-fore" stroke="#0f1010" stroke-width="1"></path>
			<path d="M147 136 C147 138 148 139 148 139 C150 146 150 152 148 159 C148 159 148 161 147 164 C146 163 144 163 144 163 C136 160 129 153 127 145 C127 145 127 145 127 145 L147 136Z" id="hs-leg-fore" fill="#296b1f"></path>
			<path d="M152 123C152 149 124 170 90 170C55 170 27 149 27 123C27 97 55 76 90 76C124 76 152 97 152 123Z" id="hs-body"></path>
			<path d="M60 107C57 105 56 104 55 104C52 101 47 99 42 98C41 98 43 99 41 98C39 98 37 99 35 100C32 103 33 102 32 103C26 109 22 117 22 126C21 128 22 120 22 122C21 131 23 139 27 147C28 149 31 153 34 160L45 160C46 160 47 160 47 160C54 161 60 157 64 152C66 148 63 154 64 152C71 140 71 126 64 114C64 114 64 114 64 114L60 107Z" id="hs-leg-back"></path>
			<linearGradient id="gradientb1HrPpTo7M" gradientUnits="userSpaceOnUse" x1="20" y1="20" x2="83" y2="34">
				<stop style="stop-color: #ffffff;stop-opacity: 1" offset="0%"></stop>
				<stop style="stop-color: #010000;stop-opacity: 1" offset="100%"></stop>
			</linearGradient>
		</defs>
		<g transform="translate(0,20)">
			<g class="hs-body">
				<animateTransform id="aniHsBodyScale" attributeName="transform" type="scale" from="1 1" :to="bodyScale"
					dur="0.08s" begin="1s;aniHsBodyScale2.end+0.14s"/>
				<animateTransform id="aniHsBodyScale2" attributeName="transform" type="scale" :from="bodyScale" to="1 1"
					dur="0.08s" begin="aniHsBodyScale.end"/>
				<path d="M34 106C32 104 31 103 30 102C27 99 22 98 18 100C17 100 16 101 14 102L8 113L2 92C3 91 3 90 3 90C6 85 11 81 16 80C17 80 12 81 13 81C17 80 21 81 24 84C26 87 31 92 40 101L34 106Z" id="hs-tail"></path>
				<use xlink:href="#hs-foot-back" transform="translate(56, 157)"></use>
				<use xlink:href="#hs-foot-back" transform="translate(35, 159)"></use>
				<use xlink:href="#hs-foot-fore" transform="translate(146, 162)"></use>
				<use xlink:href="#hs-foot-fore" transform="translate(126, 171)"></use>
				<use xlink:href="#hs-leg-fore"></use>
				<use xlink:href="#hs-body" opacity="1" fill="#308823" fill-opacity="1"></use>
				<use xlink:href="#hs-leg-fore" transform="translate(-20, 10)"></use>
				<use xlink:href="#hs-leg-back" opacity="1" fill="#296b1f" fill-opacity="1"></use>
				<path d="M101 81C94 83 89 85 87 86C85 87 82 87 80 86C78 85 84 87 84 87C76 84 67 82 58 82C58 82 63 82 61 82C57 82 53 81 49 80C47 79 42 78 35 75C36 74 37 74 38 74C42 72 45 70 48 68C49 68 49 67 50 67C42 63 38 61 36 61C31 58 26 54 24 49C23 48 23 47 21 44C22 44 22 44 22 44C31 48 40 48 49 46C49 46 51 45 54 44C50 43 47 42 46 41C38 38 31 32 28 24C27 21 24 15 20 6C30 8 36 10 38 11C48 13 58 13 68 10C71 9 65 11 68 10C78 7 90 11 95 21C97 23 100 30 106 40L101 81Z" id="hs-hair" fill="url(#gradientb1HrPpTo7M)" stroke="#959595" stroke-width="1"></path>
				<path d="M117 92L82 90L86 60L117 92Z" id="hs-neck" fill="#33a023"></path>
				<circle cx="100" cy="124" r="20" fill="#92da87" />
				<text font-family="Arial" x="88" y="132" font-size="24" fill="white">{{firstCharator}}</text>
			</g>
			<g class="hs-head" transform="translate(3,-3)">
				<path d="M125 45L109 24L109 42L125 45Z" id="hs-ear-left" fill="#3d65b7" stroke="#000000" stroke-width="1"></path>
				<path d="M135 111C133 110 131 109 131 109C129 107 127 106 126 104C125 102 127 105 127 105C122 98 115 93 106 93C103 93 108 93 105 93C96 93 88 87 85 79C84 78 84 77 83 76C83 71 83 69 83 67C83 61 86 54 91 49C92 48 94 46 97 42C104 41 108 40 109 40C116 39 122 41 127 46C129 49 127 47 128 49C135 57 140 66 145 75C147 78 147 80 150 85C153 90 152 97 148 101C148 102 146 104 143 108L135 111Z" id="hs-face" fill="#92da87" stroke="#33a023" stroke-width="1"></path>
				<path d="M86 56L86 30L98 50L86 56Z" id="hs-ear-right" fill="#3d65b7" stroke="#000000" stroke-width="1"></path>
				<use xlink:href="#hs-eye" transform="translate(90,50)"></use>
				<use xlink:href="#hs-eye-ball" transform="translate(103,57)"></use>
				<use xlink:href="#hs-eye" transform="translate(116,45),scale(0.9)"></use>
				<use xlink:href="#hs-eye-ball" transform="translate(125,51),scale(0.9)"></use>
			</g>
		</g>
		<g transform="translate(140,60)">
			<water-cup :cup-width="90" :cup-height="110" :water-percent="waterPercent" />
		</g>
	</svg>
</template>

<script lang="js">
import MxRole from '../mixin/wd-role.js'

export default {
	name: 'wd-role-horse',
	mixins: [MxRole],
	data () {
		return {
			cupSize: 20,
			cupTop: 60,
			cupLeft: 142,
			cupWidth: 86
		}
	},
	computed: {
	},
	methods: {
		checkPlayerName (name) {
			return name === '梅酱';
		}
	},
}
</script>

<style scoped>
</style>
