import { Canvas } from './canvas.js';
import { Entity } from './entity.js';

export class Scene {
	/** @type {Entity[]} */
	entities = [];

	init() { }

	update(dt) {
		for (const entity of this.entities) {
			entity.update(dt);
		}
	}

	draw() {
		for (const entity of this.entities) {
			for (const [loopX, loopY] of Canvas.offsets) {
 				entity.draw(loopX, loopY);
			}
		}
	}
}
