'use strict';
/*
  Problem Statement:
  https://projecteuler.net/problem=14
  
  The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

  Which starting number, under one million, produces the longest chain?

  NOTE: Once the chain starts the terms are allowed to go above one million.
*/
function collatz(start, chain = []) {
  chain.push(start);
  if(start === 1) {
    return chain;
  }
  let num = (start % 2) ? ((3 * start) + 1): (start/2);
  return collatz(num, chain);
}
function longestChain(max) {
  let start = 0, chain, currentChainLength = 0;
  for(let i = max; i > 0; i--) {
    chain = collatz(i);
    if(chain.length > currentChainLength) {
      currentChainLength = chain.length;
      start = i;
    }
  }
  return start;
}
console.log(longestChain(1000000));
