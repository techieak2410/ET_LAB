const fs = require('fs')
class FileManager{
    constructor(filePath){
        this.filePath = filePath
    }

    writeFile(content){
        try{
            fs.writeFileSync(this.filePath, content)
            console.log("Written...");
            
        } catch(err){
            console.log(err);
            
        }
    }
    appendFile(content){
        try{
            fs.appendFileSync(this.filePath,content)
            console.log("Appended...");
            
        } catch(err){
            console.log(err);
            
        }
    }
    readFile(){
        try{
            let content=fs.readFileSync(this.filePath,"utf-8");
            return content;
        }catch(err){
            console.log(err)
        }
    }
    deleteFile(){
        try{
            fs.unlinkSync(this.filePath);
            console.log("deleted succesfully");
        }catch(err){

        }
    }
}

module.exports = FileManager

