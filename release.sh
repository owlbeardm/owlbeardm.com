#!/bin/bash

git tag -a v$1 -m "release version $1"
git push origin --tags

export GIT_USER=c7d5a6
export USE_SSH=true

yarn deploy