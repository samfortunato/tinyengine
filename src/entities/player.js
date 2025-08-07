import { Canvas } from '../engine/canvas.js';
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

	constructor(x, y) {
		super();

		this.transform.set(x, y);
	}

	update(dt) {
		this.transform.translate(
			Input.getAxis().x * this.stats.speed * dt,
			Input.getAxis().y * this.stats.speed * dt,
		);

		if ((this.transform.y + this.mesh.h) < 0) this.transform.translate(0, Canvas.height);
		if ((this.transform.x + this.mesh.w) < 0) this.transform.translate(Canvas.width, 0);
		if ((this.transform.y) > Canvas.height) this.transform.translate(0, -Canvas.height);
		if ((this.transform.x + this.mesh.w) > Canvas.width) this.transform.translate(-Canvas.width, 0);
	}

	draw(loopX, loopY) {
		Canvas.context.fillStyle = this.shape.color;

		Canvas.context.fillRect(
			this.transform.x + loopX,
			this.transform.y + loopY,
			this.mesh.w,
			this.mesh.h,
		);
	}
}
