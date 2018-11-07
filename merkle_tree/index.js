class MerkleTree {
  constructor(leaves, concatHashes){
      this.leaves = leaves;
      this.concatHashes = concatHashes;
  }

  getRoot(){
      for(let i=0;this.leaves.length > 1;i++){          
          const res = this.concatHashes(this.leaves[i], this.leaves[i+1]);
          this.leaves.splice(i, 1);
          this.leaves[i] = res;          
          if((this.leaves.length - (i+1)) == 1 || i == this.leaves.length-1) i = -1;
      }
      return this.leaves[0];
  }

}

module.exports = MerkleTree;
