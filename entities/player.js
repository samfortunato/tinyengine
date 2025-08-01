import { Board } from '../engine/board.js';
import { Input } from '../engine/input.js';
import { Entity } from '../engine/entity.js';

import { Transform } from '../components/transform.js';
import { Mesh } from '../components/mesh.js';
import { Shape } from '../components/shape.js';
import { Stats } from '../components/stats.js';

export class Player extends Entity {
	transform = new Transform(0, 0);
	mesh = new Mesh(32, 32);
	shape = new Shape({ color: 'black' });
	stats = new Stats({ speed: 400 });

	update(dt) {
		this.transform.translate(
			Input.getAxis().x * this.stats.speed * dt,
			Input.getAxis().y * this.stats.speed * dt,
		);

		if ((this.transform.y + this.mesh.h) < 0) this.transform.translate(0, Board.canvas.height);
		if ((this.transform.x + this.mesh.w) < 0) this.transform.translate(Board.canvas.width, 0);
		if ((this.transform.y) > Board.canvas.height) this.transform.translate(0, -Board.canvas.height);
		if ((this.transform.x + this.mesh.w) > Board.canvas.width) this.transform.translate(-Board.canvas.width, 0);
	}

	draw(loopX, loopY) {
		Board.context.fillStyle = this.shape.color;

		Board.context.fillRect(
			this.transform.x + loopX,
			this.transform.y + loopY,
			this.mesh.w,
			this.mesh.h,
		);
	}
}
