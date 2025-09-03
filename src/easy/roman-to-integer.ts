{
  // Brute force
  // function romanToInt(s: string): number {
  //   let numStr = s;
  //   let total = 0;

  //   while (numStr.includes("IV")) {
  //     numStr = numStr.replace("IV", "");
  //     total = total + 4;
  //   }
  //   while (numStr.includes("IX")) {
  //     numStr = numStr.replace("IX", "");
  //     total = total + 9;
  //   }
  //   while (numStr.includes("XL")) {
  //     numStr = numStr.replace("XL", "");
  //     total = total + 40;
  //   }
  //   while (numStr.includes("XC")) {
  //     numStr = numStr.replace("XC", "");
  //     total = total + 90;
  //   }
  //   while (numStr.includes("CD")) {
  //     numStr = numStr.replace("CD", "");
  //     total = total + 400;
  //   }
  //   while (numStr.includes("CM")) {
  //     numStr = numStr.replace("CM", "");
  //     total = total + 900;
  //   }

  //   const numArr = numStr.split("");

  //   numArr.map((item) => {
  //     switch (item) {
  //       case "I":
  //         total = total + 1;
  //         break;
  //       case "V":
  //         total = total + 5;
  //         break;
  //       case "X":
  //         total = total + 10;
  //         break;
  //       case "L":
  //         total = total + 50;
  //         break;
  //       case "C":
  //         total = total + 100;
  //         break;
  //       case "D":
  //         total = total + 500;
  //         break;
  //       case "M":
  //         total = total + 1000;
  //         break;
  //     }
  //   });

  //   return total;
  // }

  // The idea is that if the current number is less than the next number then it should be subtracted otherwise added.
  function romanToInt(s: string): number {
    const map: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
      const curr = map[s[i]];
      const next = map[s[i + 1]];

      if (next && curr < next) {
        total -= curr;
      } else {
        total += curr;
      }
    }

    return total;
  }

  const result1 = romanToInt("III");
  const result2 = romanToInt("LVIII");
  const result3 = romanToInt("MCMXCIV");
  console.log(result1);
  console.log(result2);
  console.log(result3);
}
