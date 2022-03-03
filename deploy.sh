!/usr/bin/zsh

yarn build
cd dist
git add .
git commit -m "deploy"

git push -f git@github.com:Lentanta/english-everyday.git main:gh-pages

cd ..
