# Deploy
cd build
git init
git add -A
git commit -m "deploy"
git push -f "git@github.com:Zaturrby/scr-inv-os.git" master:gh-pages
