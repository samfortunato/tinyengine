export class Board {
	/** @type {HTMLCanvasElement} */
	static canvas;
	/** @type {CanvasRenderingContext2D} */
	static context;
	static offsets;

	static init() {
		const canvas = document.createElement('canvas');
		canvas.width = 800;
		canvas.height = 600;
		this.canvas = canvas;

		const ctx = canvas.getContext('2d');
		this.context = ctx;

		document.body.append(canvas);

		this.offsets = this.calculateOffsets();
	}

	static clear() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	static calculateOffsets() {
		const poles = [-1, 0, 1];
		const offsets = [];

		for (const dx of poles) {
			for (const dy of poles) {
				const loopX = (dx * this.canvas.width);
				const loopY = (dy * this.canvas.height);

				offsets.push([loopX, loopY]);
			}
		}

		return offsets;
	}
}
