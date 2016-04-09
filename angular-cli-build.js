/* global require, module */

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: []
  });

    var myTree = new Funnel('bower_components', {
        files: [
            'bootstrap/dist/css/bootstrap.css'
        ],
        destDir: 'vendor'
    });
    var appTree = app.toTree();

    return mergeTrees([myTree, appTree], { overwrite: true });
}


