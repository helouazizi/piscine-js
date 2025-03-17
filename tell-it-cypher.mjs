import {readFile,writeFile} from "fs/promises"
import { buffer } from "stream/consumers";

async function main() {
    const [file , action , output] = process.argv.slice(2)
    console.log(file,action,output);
    
    try {
        let res , out ;
        const data = await readFile(file)
        if  (action === "encode") {
            res = data.toString('base64')
            out = output || "cypher.txt"
        }else{
            res = buffer.from(data.toString(), 'base64').toString()
            out = output || "clear.txt"
        }

        await writeFile(res,out)
    }catch(err){
        console.log(err);
        process.exit(1)
    }

}

main()