class MerkleTree {
  constructor(leaves, concatHashes){
      this.leaves = leaves;
      this.concatHashes = concatHashes;
  }

  getRoot(){
      if(this.leaves.length <=1) return this.leaves[0];
      for(let i=0;this.leaves.length > 1;i++){
          console.log("time: ", i, "left: ", this.leaves[i], " | right: ", this.leaves[i + 1]);
          const res = this.concatHashes(this.leaves[i], this.leaves[i+1]);
          this.leaves.splice(i, 1);
          this.leaves[i] = res;
          if(i == this.leaves.length-1) i = -1;
      }
      return this.leaves[0];
  }

}

module.exports = MerkleTree;
