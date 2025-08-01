import { Scene } from '../engine/scene.js';

import { Player } from '../entities/player.js';

export class StartScene extends Scene {
	_entities = [
		new Player(),
	];
}
