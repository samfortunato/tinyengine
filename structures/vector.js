export class Vector2D {
	get coordinates() {
		return { x: this.x, y: this.y };
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
