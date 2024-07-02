#!/bin/bash

git tag -a v$1 -m "release version $1"
git push origin --tags
npm run build
git checkout gh-pages
git pull
rm *.js
cp -a dist/. .
git add -A
git commit -am "release $1"
git push
git checkout master
