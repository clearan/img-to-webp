const imagemin = require('imagemin');
const webp = require('imagemin-webp');

const GREEN = '\x1b[32m%s\x1b[0m';

class WebpPlugin {
    constructor({
        config = [
            {
                test: /\.(jpe?g|png)/,
                options: {
                    quality: 50
                }
            }
        ],
        overrideExtension = true,
        detailedLogs = false,
                } = {}) {
        this.config = config;
        this.overrideExtension = overrideExtension;
        this.detailedLogs = detailedLogs;
    }

    apply(compiler) {
        const onEmit = (compilation, cb) => {
            const assetNames = Object.keys(compilation.assets);
            Promise.all(
                assetNames.map(name => {
                    for (let i = 0; i < this.config.length; i++) {
                        if (this.config[i].test.test(name)) {
                            let outputName = name;
                            if (this.overrideExtension) {
                                outputName = outputName.split('.').slice(0, -1).join('.')
                            }
                            outputName = `${outputName}.webp`;
                            const currentAsset = compilation.assets[name];
                            return imagemin.buffer(currentAsset.source(), {
                                plugins: [webp(this.config[i].options)]
                            }).then(buffer => {
                                const savedKB = (currentAsset.size() - buffer.length) /1000;
                                console.log(GREEN, `${savedKB.toFixed(1)} KB saved from '${name}'`)
                                compilation.assets[outputName] = {
                                    source: () => buffer,
                                    size: () => buffer.length
                                }
                                return savedKB
                            }).catch(err => {
                                console.log('转换webp图片的error', err)
                            })
                        }
                    }
                    return Promise.resolve(0);
                })
            ).then(savedKBArr => {
                const totalKBSaved = savedKBArr.reduce((acc,cur) => acc + cur, 0);
                if (totalKBSaved < 100) {
                    console.log(GREEN, `${Math.floor(totalKBSaved)} kb saved`)
                } else {
                    console.log(GREEN, `${Math.floor(totalKBSaved /100) / 10} mb saved`)
                }
                cb();
            }).catch((err) => {
                console.log(err)})
        }
        compiler.hooks.emit.tapAsync('WebpPlugin', onEmit);
    }
}
module.exports = {
    WebpPlugin
}
