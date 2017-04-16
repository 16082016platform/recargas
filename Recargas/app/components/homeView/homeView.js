'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model');
var tnsOAuthModule = require('nativescript-oauth');
// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}
exports.pageLoaded = pageLoaded;

exports.tapFacebook = function (args) {
    tnsOAuthModule.ensureValidToken()
        .then(function (token) {
            alert('token: ' + token);
        })
        .catch(function (er) {
            alert(JSON.stringify(er));
        });

    // tnsOAuthModule.login()
    //     .then(function () {
    //         alert("accessToken " + tnsOAuthModule.accessToken());
    //     })
    //     .catch(function (er) {
    //         alert(JSON.stringify(er));
    //     });

}