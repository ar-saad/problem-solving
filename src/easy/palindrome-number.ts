{
  // Brute force
  // function isPalindrome(x: number): boolean {
  //     const numString = String(Math.abs(x));
  //     const reversed = numString.split("").reverse().join("");
  //     const reversedNum = parseInt(reversed);

  //     if(x === reversedNum){
  //         return true;
  //     } else {
  //         return false;
  //     }
  // };

  //

  // Brute force optimized
  // function isPalindrome(x: number): boolean {
  //     if (x < 0) return false;
  //     const str = String(x);
  //     return str === str.split("").reverse().join("");
  // };

  //

  // Without converting to string
  // function isPalindrome(x: number): boolean {
  //   if (x < 0) return false; // negatives are not palindromes

  //   let original = x;
  //   let reversed = 0;

  //   while (x > 0) {
  //     const digit = x % 10; // get last digit
  //     reversed = reversed * 10 + digit; // build reversed number
  //     x = Math.floor(x / 10); // remove last digit
  //   }

  //   return original === reversed;
  // }

  //

  // further optimized to check only half the numbers
  function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;

    while (x > reversedHalf) {
      reversedHalf = reversedHalf * 10 + (x % 10);
      x = Math.floor(x / 10);
    }

    // Even length or odd length (drop middle digit with Math.floor)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
  }

  const result1 = isPalindrome(121);
  console.log(result1);
  const result2 = isPalindrome(-121);
  console.log(result2);
  const result3 = isPalindrome(10);
  console.log(result3);
}
