import WdCup from '../components/wd-cup.vue'

export default {
	components: {
		'water-cup': WdCup
	},
	props: {
		isMoving: {
			type: Boolean,
			default: true
		},
		waterAmount: {
			type: Number,
			required: true
		},
		playerName: {
			type: String,
			default: 'P'
		}
	},
	mounted () {
		this.$emit('report-cup', { top: this.cupTop, left: this.cupLeft, width: this.cupWidth, volume: this.cupSize })
	},
	data () {
		return {
			cupSize: 20,
			cupTop: 60,
			cupLeft: 142,
			cupWidth: 86
		}
	},
	computed: {
		waterPercent () {
			return this.waterAmount > this.cupSize ? 1 : this.waterAmount / this.cupSize;
		},
		bodyScale () {
			return this.isMoving ? "1 1.03" : "1 1";
		},
		firstCharator () {
			if (this.playerName.length === 1)
				return this.playerName;
			var n = this.playerName;
			if (encodeURI(n.substring(0, 1)) === '%E5%B0%8F')
				n = n.substring(1);
			return n.substring(0, 1);
		},
		cupTranslate () {
			return 'translate(' + this.cupLeft + ', ' + this.cupTop + ')';
		}
	},
	methods: {
	}
}
