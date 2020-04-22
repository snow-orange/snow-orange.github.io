<template lang="html">
	<section class="water-drop-world">
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			:viewBox="viewBoxString" width="100%" preserveAspectRatio="xMinYMin meet">
			<defs>
				<radialGradient id="rain-gradient" cx="0.5" cy="0.7" r="0.7" fx="0.5" fy="0.7">
					<stop offset="0%" stop-color="#18c0f2"/>
					<stop offset="20%" stop-color="#18c0f2"/>
					<stop offset="100%" stop-color="white"/>
				</radialGradient>
			</defs>
			<g :transform="piggyTransform">
				<components :is="choosedRoleName" :player-name="player.name" :is-moving="piggyPos.direction!==0" :water-amount="gameConfigure.waterAmount"
					@report-cup="initCup"/>
			</g>
			<rain-drop v-for="(d,i) in allRainDrops" :key="d.id" :drop-data="d" :drop-timmer="dropTimmer" :game-configure="gameStatus"
				@self-distroyed="distroyRainDrop(i, d.id, $event)"/>
			<rect x="0" y="600" width="640" height="50" fill="#611f1f" stroke-width="0"/>
		</svg>
		<div class="buttons">
			<button @mousedown="moveRole(-1)" @mouseup="moveRole(0)" @touchstart="moveRole(-1)" @touchend="moveRole(0, -1)"> &lt; </button>
			<span>{{player.name}}</span>
			<button @mousedown="moveRole(1)" @mouseup="moveRole(0)" @touchstart="moveRole(1)" @touchend="moveRole(0, 1)"> &gt; </button>
		</div>
		<wd-sound :rain-drop-id="gameConfigure.lastDropId"/>
	</section>
</template>

<script lang="js">
import WdDrop from './wd-drop.vue'
import WdSound from './wd-sound.vue'

import WdRolePiggy from './wd-role-piggy.vue'
import WdRoleHorse from './wd-role-horse.vue'
import WdRoleRabbit from './wd-role-rabbit.vue'
import WdRoleFox from './wd-role-fox.vue'

const ALL_ROLES = [
	{ comp: WdRoleHorse, tag: 'role-horse' },
	{ comp: WdRoleRabbit, tag: 'role-rabbit' },
	{ comp: WdRoleFox, tag: 'role-fox' },
	{ comp: WdRolePiggy, tag: 'role-piggy' }
]; // WdRolePiggy must be end

const GAME_CONFIG = {
	minDrops: 0,
	maxDrops: 20,
	rainProbability: 1.1,
	speed: 4,
	worldSize: {
		w: 640,
		h: 640
	}
};

export default {
	name: 'water-drop-world',
	props: {
		player: {
			type: Object,
			default: function () {
				return { name: '' }
			}
		}
	},
	components: {
		'wd-sound': WdSound,
		'rain-drop': WdDrop,
		'role-piggy': WdRolePiggy,
		'role-horse': WdRoleHorse,
		'role-rabbit': WdRoleRabbit,
		'role-fox': WdRoleFox,
	},
	mounted () {
		this.createRandomDrop();
		this.interval = setInterval(this.gameInterval, 12);
		window.addEventListener('keyup', this.handlerKey);
		window.addEventListener('keydown', this.handlerKey);
		this.gameConfigure.startTime = Date.now();
		this.gameConfigure.dropCounter.total = 0;
		this.gameConfigure.dropCounter.cup = 0;
	},
	beforeDestroy () {
		window.removeEventListener('keyup', this.handlerKey);
		window.removeEventListener('keydown', this.handlerKey);
	},
	data () {
		return {
			counter: 0,
			allRainDrops: [],
			piggyPos: {
				x: 0,
				direction: 0
			},
			dropTimmer: 0,
			interval: null,
			gameConfigure: {
				cupTop: 470,
				cupInitLeft: 0,
				cupWidth: 86,
				cupVolume: 100,

				waterAmount: 0,

				groundLevel: 600,
				roleTop: 400,
				lastDropId: 0,

				startTime: 0,
				dropCounter: {
					total: 0,
					cup: 0
				}
			}
		};
	},
	computed: {
		choosedRoleName () {
			var compName = '';
			ALL_ROLES.some(r => {
				if (r.comp.methods.checkPlayerName(this.player.name)) {
					compName = r.tag;
					return true;
				}
				return false;
			});
			return compName;
		},
		gameStatus () {
			return {
				cupLeft: this.piggyPos.x + this.gameConfigure.cupInitLeft,
				cupRight: this.piggyPos.x + this.gameConfigure.cupInitLeft + this.gameConfigure.cupWidth,
				cupTop: this.gameConfigure.cupTop,
				groundLevel: this.gameConfigure.groundLevel
			};
		},
		viewBoxString () {
			return "0 0 " + GAME_CONFIG.worldSize.w + ' ' + GAME_CONFIG.worldSize.h;
		},
		piggyTransform () {
			return 'translate(' + this.piggyPos.x + ', ' + this.gameConfigure.roleTop + ')';
		},
	},
	methods: {
		initCup (cup) {
			this.gameConfigure.cupLeft = cup.left;
			this.gameConfigure.cupWidth = cup.width;

			this.gameConfigure.cupInitLeft = this.gameConfigure.cupLeft;
			this.gameConfigure.cupRight = cup.width + this.gameConfigure.cupLeft;

			this.gameConfigure.cupTop = cup.top + this.gameConfigure.roleTop;
			this.gameConfigure.cupVolume = cup.volume;
		},
		gameInterval () {
			this.dropTimmer ++;
			this.gameActionRain();
			this.gameActionMoveRole();
		},
		gameActionMoveRole () {
			if (this.piggyPos.direction === 0)
				return;
			var limit;
			if (this.piggyPos.direction > 0) {
				this.piggyPos.x += GAME_CONFIG.speed;
				limit = GAME_CONFIG.worldSize.w - this.gameConfigure.cupWidth;
				if (this.piggyPos.x > limit)
					this.piggyPos.x = limit;
			} else {
				this.piggyPos.x -= GAME_CONFIG.speed;
				limit = - this.gameConfigure.cupInitLeft;
				if (this.piggyPos.x < limit)
					this.piggyPos.x = limit;
			}
		},
		gameActionRain () {
			if (this.allRainDrops.length > GAME_CONFIG.maxDrops)
				return; // rain too heavy
			this.dropTimmer ++;
			var rand = Math.floor(Math.random() * 100);
			if (this.allRainDrops.length > GAME_CONFIG.minDrops && rand > GAME_CONFIG.rainProbability)
				return;
			// not heavy enough. create random amount of rain drops
			rand = Math.floor(rand / GAME_CONFIG.rainProbability);
			if (rand < 0.8)
				rand = 1;
			else if (rand < 0.95)
				rand = 2;
			else
				rand = 3;
			for (var i = 0; i < rand; i ++)
				this.createRandomDrop();
		},
		createRandomDrop () {
			this.counter ++;
			var drop = {
				id: this.counter,
				size: 1,
				x: 50
			};
			var rand = Math.random();
			drop.x += Math.floor(rand * 540);
			rand *= 1000;
			rand -= Math.floor(rand);
			drop.size -= Math.floor(rand * 30) / 100;

			this.allRainDrops.push(drop);
		},
		distroyRainDrop (i, dropId, event) {
			var d = this.allRainDrops.length > i ? this.allRainDrops[i] : null;
			if (d === null) {
				i = this.allRainDrops.length - 1;
				if (i < 0)
					return;
				d = this.allRainDrops[i];
			}
			while (d.id !== dropId) {
				i --;
				if (i < 0)
					return;
				d = this.allRainDrops[i];
			}
			this.allRainDrops.splice(i, 1);
			this.gotWater(event);
		},

		gotWater (waterDrop) {
			this.gameConfigure.dropCounter.total ++;
			if (!waterDrop.inCup)
				return;
			this.gameConfigure.dropCounter.cup ++;
			this.gameConfigure.waterAmount += waterDrop.size;
			this.gameConfigure.lastDropId = waterDrop.id;
			if (this.gameConfigure.waterAmount >= this.gameConfigure.cupVolume)
				this.finishGame();
		},

		moveRole (direction, btnDirection) {
			btnDirection = btnDirection || 0;
			if (direction === 0 && btnDirection !== 0 && this.piggyPos.direction !== btnDirection)
				return;
			this.piggyPos.direction = direction;
		},
		handlerKey (e) {
			if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')
				return;
			if (e.type === 'keyup') {
				this.moveRole(0);
				return;
			}
			if (e.key === 'ArrowLeft')
				this.moveRole(-1);
			else
				this.moveRole(1);
			e.stopPropagation();
		},
		finishGame () {
			this.$emit('game-over', {
				role: this.choosedRoleName,
				totalDrops: this.gameConfigure.dropCounter.total,
				cupDrops: this.gameConfigure.dropCounter.cup,
				totalSeconds: (Date.now() - this.gameConfigure.startTime) / 1000
			});
		}
	}
};

</script>

<style scoped>
.water-drop-world {
	margin:0 auto;
	max-width: 640px;
}
.water-drop-world > svg {
	box-shadow:1px 1px 1px 0 #00000054, 1px 1px 1px 0 #00000022 inset;
}
.buttons {
	display:flex;
}
.buttons button {
	flex:1 0 20%;
	moz-user-select: -moz-none;
	-moz-user-select: none;
	-o-user-select:none;
	-khtml-user-select:none;
	-webkit-user-select:none;
	-ms-user-select:none;
	user-select:none;
}
.buttons span {
	flex:1 1 auto;
	padding:1em 0;
}
</style>
