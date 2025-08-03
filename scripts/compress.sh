#!/bin/bash

sh ./scripts/build.sh

zip ./dist/build.zip \
	./index.html \
	./dist/build.js \
	./index.css \
	./favicon.ico
