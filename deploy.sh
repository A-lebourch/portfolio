npm run build
git add dist -f
git commit -m "deploy update"
git subtree push --prefix dist origin gh-pages