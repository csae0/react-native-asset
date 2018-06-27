const fs = require('fs-extra');
const path = require('path');

module.exports = function cleanAssetsAndroid(files = [], _, { path: assetPath }) {
  files = files.filter(asset => {
    return !(new RegExp('@[02-9]|,5|.otf|.ttf', 'g').test(path.basename(asset)))
  })
  return files.forEach(asset => (
    fs.removeSync(asset, path.join(assetPath, path.basename(asset).replace(new RegExp('-','g'), '_').replace(new RegExp('@1x'), '')))
  ));
};