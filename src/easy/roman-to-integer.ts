{
  // Brute force
  function romanToInt(s: string): number {
    let numStr = s;
    let total = 0;

    while (numStr.includes("IV")) {
      numStr = numStr.replace("IV", "");
      total = total + 4;
    }
    while (numStr.includes("IX")) {
      numStr = numStr.replace("IX", "");
      total = total + 9;
    }
    while (numStr.includes("XL")) {
      numStr = numStr.replace("XL", "");
      total = total + 40;
    }
    while (numStr.includes("XC")) {
      numStr = numStr.replace("XC", "");
      total = total + 90;
    }
    while (numStr.includes("CD")) {
      numStr = numStr.replace("CD", "");
      total = total + 400;
    }
    while (numStr.includes("CM")) {
      numStr = numStr.replace("CM", "");
      total = total + 900;
    }

    const numArr = numStr.split("");

    numArr.map((item) => {
      switch (item) {
        case "I":
          total = total + 1;
          break;
        case "V":
          total = total + 5;
          break;
        case "X":
          total = total + 10;
          break;
        case "L":
          total = total + 50;
          break;
        case "C":
          total = total + 100;
          break;
        case "D":
          total = total + 500;
          break;
        case "M":
          total = total + 1000;
          break;
        case ".":
          break;
      }
    });

    return total;
  }

  const result1 = romanToInt("III");
  const result2 = romanToInt("LVIII");
  const result3 = romanToInt("MCMXCIV");
  console.log(result1);
  console.log(result2);
  console.log(result3);
}
