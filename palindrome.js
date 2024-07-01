// Q. Given an integer x, return true if x is a palindrome, and false otherwise.

// An integer is a Palindrome when it reads the same forward as backward

const isPalindrome = function(x){
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

console.log(isPalindrome(121))

