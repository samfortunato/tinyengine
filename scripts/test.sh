#!/bin/bash

find ./tests \
	-name "*.js" ! \
	-path "*/modules/*" \
	-exec node {} \;
