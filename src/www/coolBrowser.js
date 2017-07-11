import exec from 'cordova/exec';

exports.show = (config, success, error) => {
  exec(success, error, 'coolBrowser',  'show', [ config ]);
};
