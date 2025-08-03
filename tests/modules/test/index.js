import { JSDOM } from 'jsdom';

function init() {
	const DOM = new JSDOM();

	globalThis.document = DOM.window.document;

	Object.entries(Object.getOwnPropertyDescriptors(DOM.window))
		.forEach(([key, descriptor]) => {
			if (!(key in globalThis) && descriptor.writable) {
				globalThis[key] = DOM.window[key];
			}
		});
}

export function test(description, run) {
	try {
		run();
	} catch (error) {
		console.error(`X ${description}\n`);
		console.error(error);

		return;
	}

	console.log(`✓ ${description}`);
}

export class Assert {
	static run(result, opts) {
		if (!result) {
			const log = Object.entries(opts)
				.map(([key, value]) => `${key}: ${JSON.stringify(value, null, 2)}`)
				.join('\n');

			throw new Error(`test failed \n${log}`);
		}
	}

	static equal(expected, actual) {
		return this.run(expected === actual, { expected, actual });
	}

	static notEqual(expected, actual) {
		return this.run(expected !== actual, { expected, actual });
	}

	static truthy(actual) {
		return this.run(!!actual, { actual });
	}

	static has(actual, property) {
		return this.run(Object.hasOwn(actual, property), { actual, property });
	}
}

init();
