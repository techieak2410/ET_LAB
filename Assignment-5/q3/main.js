const FileManager = require('./FileOp.js')

let ob = new FileManager("mytext.txt")

ob.writeFile("Some Text")
ob.appendFile("adding some content");
let content=ob.readFile();
console.log(content);
ob.deleteFile();