export class Point {
	#cartesian = { x: 0, y: 0 };

	/** Point represented in Cartesian coordinate — (x, y) — form. */
	get cartesian() {
		this.#cartesian.x = this.x;
		this.#cartesian.y = this.y;

		return this.#cartesian;
	}

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}
}
