/**
 * FIXME: All tests are broken, as testing framework doesn't support a `canvas` element
 *
 * need to fix this so that these tests work.
 */

import { Assert, test } from '../modules/test/index.js';

import { Input } from '../../engine/input.js';

test.skip('on init, adds event listeners for key press and key release events', () => {
	Input.init();

	document.dispatchEvent(new KeyboardEvent('keydown', { code: 'a' }));
	const wasPressed = Input.isPressed('a');

	document.dispatchEvent(new KeyboardEvent('keyup', { code: 'a' }));
	const wasReleased = Input.isPressed('a');

	Assert.truthy(wasPressed);
	Assert.truthy(wasReleased);
});

test.skip('on update, updates the input axis', () => {
	Input.init();

	const before = { ...Input.getAxis() };

	document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
	Input.update();

	const after = { ...Input.getAxis() };

	Assert.notEqual(before.y, after.y);
	Assert.equal(-1, after.y);
});

test.skip('using \`isPressed\`, tracks key presses if key is pressed', () => {
	Input.init();

	document.dispatchEvent(new KeyboardEvent('keydown', { code: 'a' }));

	Assert.equal(true, Input.isPressed('a'));
});

test.skip('using \`getAxis\`, returns the input access', () => {
	Input.init();

	const actual = Input.getAxis();

	Assert.truthy(actual);
	Assert.has(actual, 'x');
	Assert.has(actual, 'y');
});
