var jsdom = require("jsdom");
var fs = require("fs");
var angular = fs.readFileSync("./public/vendor/angular/angular.js", "utf-8");
var textAngularSanitize = fs.readFileSync("./public/vendor/textAngular/dist/textAngular-sanitize.js", "utf-8");
var textAngular = fs.readFileSync("./public/vendor/textAngular/dist/textAngular.js", "utf-8");
var textAngularSetup = fs.readFileSync("./public/vendor/textAngular/dist/textAngularSetup.js", "utf-8");
var rangyCore = fs.readFileSync("./public/js/rangy-core.js", "utf-8");
var rangySelection = fs.readFileSync("./public/js/rangy-selectionsaverestore.js", "utf-8");
var script = fs.readFileSync("./public/js/script.js", "utf-8");

jsdom.env({
  file: 'C:/Users/lma5/Documents/Work Related/JsdomLearn-master/JsdomLearn-master/public/test4.html',
  src: [angular, textAngularSanitize, textAngular, textAngularSetup, rangyCore, rangySelection, script],
  features: {
    FetchExternalResources   : ['script'],
    ProcessExternalResources : ['script'],
    // MutationEvents           : '2.0',
  },
  done: function (err, window) {
    console.log(err);
    console.log(window.document.documentElement.outerHTML);
    // console.log(window.document.querySelector('body').innerHTML);
  }
});
