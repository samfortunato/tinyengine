import { Component } from '../engine/component.js';

export class Transform extends Component {
	constructor(x, y) {
		super();

		this.x = x;
		this.y = y;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}

	translate(x, y) {
		this.x += x;
		this.y += y;
	}
}
