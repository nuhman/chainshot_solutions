import Block from "./Block";

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }
}

export default Blockchain;
