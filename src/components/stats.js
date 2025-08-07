import { Component } from '../engine/component.js';

export class Stats extends Component {
	constructor(options) {
		super();

		this.speed = options.speed;
	}
}
