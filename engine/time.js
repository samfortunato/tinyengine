export class Time {
	static #lastTime = 0;

	static init() {
		this.#lastTime = performance.now();
	}

	/** In seconds. */
	static calculateDeltaTime(currentTime) {
		const delta = currentTime - this.#lastTime;
		const seconds = delta / 1000;

		this.#lastTime = currentTime;

		return seconds;
	}
}
