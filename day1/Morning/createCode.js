/*
Q3:
Given an input file (a.txt) which has a bunch of paths
and contents of files, write a function createCode(filePath)
that reads the file and creates new files/folders and puts
the respective contents in them based on the input file.

Once all files have been written to, the callback should be called.

Sample a.txt:

[
  {
    path: "./code/package.json",
    contents: "{name: \"code-project\"}"
  },
  {
    path: "./code/index.js",
    contents: "console.log('hi there')"
  }
]
*/

function createCode(filePath, cb) {

}

createCode("a.txt", (err, data) => {
    console.log("all data has been written");
});