#!/bin/bash

sh ./meta/scripts/build.sh

zip ./dist/build.zip \
	./src/index.html \
	./src/index.css \
	./dist/build.js \
	./src/favicon.ico
