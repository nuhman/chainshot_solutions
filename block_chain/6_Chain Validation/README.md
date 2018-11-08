##### Challenge Link: https://www.chainshot.com/lessons/5b3afd70d9f99763e5c4b4fe/stage/5b3bb51dd9f997b30859bb81  
  
> Since this blockchain is going to be used on a peer to peer network, we'll want to be able to run a function that will determine whether or not the blockchain is valid. Let's create that function isValid on the Blockchain class.
This function should be checking the integrity on all blocks in the chain. Each block's hash should be a valid hash of it's previousHash and data. Each block's previousHash should point to the current valid hash of the previous block.
