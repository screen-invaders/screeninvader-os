# Deploy
cd build

pwd

git init
git add -A
git commit -m "deploy"
git push "git@github.com:screen-invaders/screeninvader-os.git" master:gh-pages
