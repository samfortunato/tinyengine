export class Vector2D {
	// Initialize a private representation so that we only have to create the object once.
	#component = { x: 0, y: 0 };

	/** The vector in component form, e.g. (x, y). */
	get component() {
		this.#component.x = this.x;
		this.#component.y = this.y;

		return this.#component;
	}

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}

	add(x, y) {
		this.x += x;
		this.y += y;
	}

	normalize() {
		const magnitude = Math.hypot(this.x, this.y);

		if (magnitude > 0) {
			this.x /= magnitude;
			this.y /= magnitude;
		}
	}
}
