import { Board } from './board.js';
import { Entity } from './entity.js';

export class Scene {
	/** @type {Entity[]} */
	_entities = [];

	init() { }

	update(dt) {
		for (const entity of this._entities) {
			entity.update(dt);
		}
	}

	draw() {
		for (const entity of this._entities) {
			for (const [loopX, loopY] of Board.offsets) {
 				entity.draw(loopX, loopY);
			}
		}
	}
}
