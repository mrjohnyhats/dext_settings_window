const dutils = require('dext-core-utils');

dutils.api.uninstall('dext-nova-theme', dutils.utils.paths.getPluginPath('dext-nova-theme')).then(() => {
    console.log('works!')
}, (err) => {
    console.log('err: '+err);
});
