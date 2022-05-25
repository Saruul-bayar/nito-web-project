// const fs = require("fs");
// module.exports = async function (context, req) {
//   fs.readFile("../src/views/aboutUs.html", "utf8", (err, data) => {
//     let readableData = String(data);
//     return (context.res = {
//       body: "asdadsd",
//     });
//   });
//   //   console.log(readableData);
//   //   context.res = {
//   //     body: readableData,
//   //   };
// };
const fs = require("fs");
const path = require("path");

module.exports = function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  var res = {
    body: "",
    headers: {
      "Content-Type": "text/html",
    },
  };

  // Just return some HTML
  context.res = {
    body: "dadada",
  };

  //   } else {
  //     // Read an HTML file in the directory and return the contents
  //     fs.readFile(
  //       path.resolve(__dirname, "index.html"),
  //       "UTF-8",
  //       (err, htmlContent) => {
  //         res.body = htmlContent;
  //         context.done(null, res);
  //       }
  //     );
  //   }
};
