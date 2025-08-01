import { Component } from '../engine/component.js';

export class Shape extends Component {
	constructor(options) {
		super();

		this.color = options.color;
	}
}
