npm run build
git add dist -f
git commit -m "deploy update"
git subtree push --prefix dist origin gh-pages

# si pb avec la branch gh-pages on la supprime 
# git push origin --delete gh-pages