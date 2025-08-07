import { Component } from '../engine/component.js';

/** An entity's bounds. */
export class Mesh extends Component {
	constructor(w, h) {
		super();

		this.w = w;
		this.h = h;
	}
}
