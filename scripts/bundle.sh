#!/bin/bash

bun build ./index.js \
	--outfile ./dist/build.js \
	--minify \
	--watch
