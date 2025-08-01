import { Component } from '../engine/component.js';

export class Mesh extends Component {
	constructor(w, h) {
		super();

		this.w = w;
		this.h = h;
	}
}
