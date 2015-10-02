'use strict';
/*
  Problem Statement:
  Verify a word as palindrome
 */
 function isPalindrome(string) {
 	var palindrome = false;
 	if(string && string.length > 0) {
 		for(var i = 0; i < (string.length)/2; i++) {
 			if(string[i] === string[string.length -1 -i]) {
 				continue;
 			} else {
 				return false;
 			}
 		}
 		palindrome = true;
 	}
 	return palindrome;
 }

 var check = isPalindrome('sivatvis');
 console.log(check);