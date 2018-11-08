import Block from "./Block";

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }
    addBlock(block){
        block.previousHash = this.chain[this.chain.length - 1].hash;
        this.chain.push(block);
    }
}

export default Blockchain;
