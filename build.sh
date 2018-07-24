#!/usr/bin/env sh

set -e
npm run docs:build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/iiLsss/build_vuepress.git master:gh-pages

cd -