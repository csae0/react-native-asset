const fs = require('fs-extra');
const path = require('path');
const log = require('npmlog');

module.exports = function copyAssetsAndroid(files = [], _, { path: assetPath }) {
  files = files.filter(asset => {
    return !(new RegExp('@[02-9]|,5|.otf|.ttf', 'g').test(path.basename(asset)))
  })
  files.forEach(asset => {
    log.info(path.basename(asset))
    return fs.copySync(asset, path.join(assetPath, path.basename(asset).replace(new RegExp('-','g'), '_').replace(new RegExp('@1x'), '')))
  })
}