import { Board } from './board.js';
import { Input } from './input.js';
import { Time } from './time.js';

import { StartScene } from '../scenes/start.js';

export class Game {
	#currentScene = new StartScene();

	init() {
		Board.init();
		Input.init();
		Time.init();
	}

	update(dt) {
		Input.update();

		this.#currentScene.update(dt);
	}

	draw() {
		Board.clear();

		this.#currentScene.draw();
	}

	loop(currentTime = performance.now()) {
		this.update(Time.calculateDeltaTime(currentTime));
		this.draw();

		requestAnimationFrame(this.loop.bind(this));
	}

	debug() {
		document.querySelector('canvas')?.setAttribute('class', 'debug');

		document.addEventListener('keydown', (evt) => { console.log(evt.code) });
	}
}
