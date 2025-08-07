#!/bin/bash

bun build ./src/index.js \
	--outfile ./dist/build.js \
	--minify
