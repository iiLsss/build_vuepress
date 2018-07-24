#!/usr/bin/env sh

set -e
npm run docs:build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/iiLsss/bjapp_docs.git master:gh-pages

cd -