import { Canvas } from './canvas.js';

import { Vector2D } from '../structures/vector.js';

export class Input {
	static #keys = new Set();
	static #input = new Vector2D(0, 0);

	static init() {
		document.addEventListener('keydown', this.#overwritePlatformBehaviors((evt) => {
			this.#keys.add(evt.code);
		}));

		document.addEventListener('keyup', this.#overwritePlatformBehaviors((evt) => {
			this.#keys.delete(evt.code);
		}));

		// focus the game upon load so that input automatically goes to game
		Canvas.element.focus();
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
		return this.#input.component;
	}

	/**
	 * @param {(evt: KeyboardEvent) => void} listen
	 *
	 * @returns {(evt: KeyboardEvent) => void}
	 * */
	static #overwritePlatformBehaviors(listen) {
		const KEYS_WITH_DEFAULT_BEHAVIOR = [
			'ArrowUp',
			'ArrowRight',
			'ArrowDown',
			'ArrowLeft',
		];

		return function (evt) {
			if (KEYS_WITH_DEFAULT_BEHAVIOR.includes(evt.code)) {
				evt.preventDefault();
			}

			listen(evt);
		}
	}
}
