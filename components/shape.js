import { Component } from '../engine/component.js';

/** An entity's visual form. */
export class Shape extends Component {
	constructor(options) {
		super();

		this.color = options.color;
	}
}
