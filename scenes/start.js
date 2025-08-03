import { Scene } from '../engine/scene.js';

import { Player } from '../entities/player.js';

export class StartScene extends Scene {
	entities = [
		new Player(0, 0),
	];
}
