import Block from "./Block";
import SHA256 from "crypto-js/sha256";

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }
    addBlock(block){
        block.previousHash = this.chain[this.chain.length - 1].hash;
        block.hash = SHA256(block.previousHash + block.data);
        this.chain.push(block);
    }

    isValid(){
        let valid = true;
        this.chain.forEach(function(block){
            //console.log(block.hash.toString() + "* " + SHA256(block.previousHash + block.data);
            if(block.hash.toString() !==  SHA256(block.previousHash + block.data).toString())
                valid = false;
        });
        return valid;
    }

}

export default Blockchain;
