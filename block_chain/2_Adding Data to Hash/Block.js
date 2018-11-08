import SHA256 from "crypto-js/sha256";

class Block {
    constructor(data) {
        this.data = data;
        this.hash = this.toHash(this.data);        
    }

    toHash(data) {
        return SHA256(data);
    }
}

export default Block;
