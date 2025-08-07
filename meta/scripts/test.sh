#!/bin/bash

find ./src/tests \
	-name "*.js" ! \
	-path "*/modules/*" \
	-exec node {} \;
