sudo rm -r docs
yarn run build
sudo mkdir docs
sudo cp -r dist/portafolio/* docs/
git add .
git commit -m "Deployment complete"
git push
