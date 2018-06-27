const fs = require('fs-extra');
const path = require('path');
const log = require('npmlog');

module.exports = function cleanAssetsAndroid(files = [], _, { path: assetPath }) {
  const expLowQuality = '@[02-9]|,5|[.]otf|[.]ttf'
  const expHighQuality = '@3x'

  files = files.filter(asset => {
    return (new RegExp(expHighQuality, 'g').test(path.basename(asset)))
  })
  log.info('-------------- REMOVING FILES ---------------')
  return files.forEach(asset => {
    log.info(path.basename(asset))
    return fs.removeSync(path.join(assetPath, path.basename(asset).replace(new RegExp('-','g'), '_').replace(new RegExp(expHighQuality), '')))
  });
};