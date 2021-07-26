sudo rm -r docs
npm run build
sudo mkdir docs
sudo cp -r dist/portafolio/* docs/
git add .
git commit -m "Deployment complete"
git push
