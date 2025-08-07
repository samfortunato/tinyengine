import { Canvas } from './canvas.js';
import { Input } from './input.js';
import { Time } from './time.js';

import { StartScene } from '../scenes/start.js';

export class Game {
	#currentScene = new StartScene();

	init() {
		Canvas.init();
		Input.init();
		Time.init();
	}

	update(dt) {
		Input.update();

		this.#currentScene.update(dt);
	}

	draw() {
		Canvas.clear();

		this.#currentScene.draw();
	}

	loop(currentTime = performance.now()) {
		// uncomment if you want to debug
		// debugger;

		this.update(Time.calculateDeltaTime(currentTime));
		this.draw();

		requestAnimationFrame(this.loop.bind(this));
	}

	transition(scene) {
		this.#currentScene = scene;
	}

	debug() {
		// Add whatever you need to debug things here
		document.querySelector('canvas')?.setAttribute('class', 'debug');

		document.addEventListener('keydown', (evt) => { console.log(evt.code) });
	}
}
