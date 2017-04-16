var application = require('application'),
    mainModule = 'navigation/navigation';

var tnsOAuthModule = require('nativescript-oauth');
var facebookInitOptions = {
    clientId: '1803946116538962',
    clientSecret: '9bc235ecfc1c4987b17531168a143de7',
    scope: ['email'] //whatever other scopes you need 
};
tnsOAuthModule.initFacebook(facebookInitOptions);


application.start({
    moduleName: mainModule
});