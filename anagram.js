// Q. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// 1st Solution
// const isAnagram = function(s, t){
//    s = s.split("").sort().join("");
//    t = t.split("").sort().join("");

//   return s === t;
// }

// console.log(isAnagram("anagram", "nagaram"))

// 2nd Solution

const isAnagram = function(s,t){
  if(s.length !== t.length){
    return false
  }

  obj1 = {}
  obj2 = {}

  for(let i = 0; i < s.length; i++){
    obj1[s[i]] = (obj1[s[i]] || 0) + 1
    obj2[t[i]] = (obj2[t[i]] || 0) + 1
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]){
      return false
    }
    }
    return true
  
}

console.log(isAnagram("anagram", "nagaram"))
