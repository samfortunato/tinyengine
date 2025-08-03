/** @typedef {'dim' | 'clear'} CanvasEffectType */

export class Canvas {
	/** @type {HTMLCanvasElement} */
	static element;
	/** @type {CanvasRenderingContext2D} */
	static context;
	/** Offsets to duplicate drawing of things to get looping around edges of map effect. */
	static offsets;

	static get width() {
		return this.element.width;
	}

	static get height() {
		return this.element.height;
	}

	static init() {
		this.element = document.createElement('canvas');
		this.element.width = 800;
		this.element.height = 600;

		this.context = this.element.getContext('2d');

		document.body.append(this.element);

		this.offsets = this.calculateOffsets();
	}

	static clear() {
		this.context.clearRect(0, 0, this.element.width, this.element.height);
	}

	/** @param {CanvasEffectType} type */
	static effect(type, params = {}) {
		switch (type) {
			case 'dim': {
				this.context.globalCompositeOperation = 'darken';

				break;
			}

			case 'clear': {
				this.context.globalCompositeOperation = 'source-in';

				break;
			}

			default: break;
		}
	}

	static calculateOffsets() {
		const poles = [-1, 0, 1];
		const offsets = [];

		for (const dx of poles) {
			for (const dy of poles) {
				const loopX = (dx * this.element.width);
				const loopY = (dy * this.element.height);

				offsets.push([loopX, loopY]);
			}
		}

		return offsets;
	}
}
