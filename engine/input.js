import { Vector2D } from '../structures/vector.js';

export class Input {
	static #keys = new Set();
	static #input = new Vector2D(0, 0);

	static init() {
		document.addEventListener('keydown', evt => this.#keys.add(evt.code));
		document.addEventListener('keyup', evt => this.#keys.delete(evt.code));
	}

	static update() {
		this.#input.set(0, 0);

		if (this.#keys.has('ArrowUp')) this.#input.add(0, -1);
		if (this.#keys.has('ArrowRight')) this.#input.add(1, 0);
		if (this.#keys.has('ArrowDown')) this.#input.add(0, 1);
		if (this.#keys.has('ArrowLeft')) this.#input.add(-1, 0);

		this.#input.normalize();
	}

	static isPressed(code) {
		return this.#keys.has(code);
	}

	static getAxis() {
		return this.#input.coordinates;
	}
}
