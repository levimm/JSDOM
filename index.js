var jsdom = require("jsdom");

jsdom.env(
    "http://127.0.0.1:3000/test4.html",
    {
        features: {
      //      FetchExternalResources   : ['script'],
      //      ProcessExternalResources : ['script'],
      //      MutationEvents           : '2.0',
        }
    },
    function (err, window) {
        console.log(window.document.documentElement.outerHTML);
        console.log(window.document.querySelector('body').innerHTML);
    }

);
