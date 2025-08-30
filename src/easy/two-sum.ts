// Brute force
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === target - nums[i]) {
//         return [i, j];
//       }
//     }
//   }
//   // Return an empty array if no solution is found
//   return [];
// }

// Two-pass hash table
// function twoSum(nums: number[], target: number): number[] {
//     const map: Map<number, number> = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], i);
//     }
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement) && map.get(complement) !== i) {
//             return [i, map.get(complement)];
//         }
//     }
//     // If no valid pair is found, return an empty array
//     return [];
// }

// One-pass has table
// function twoSum(nums: number[], target: number): number[] {
//   const map: Map<number, number> = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [i, map.get(complement)];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }

// One-pass hash table with type safety
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const j = map.get(complement);
    if (j !== undefined) {
      return [j, i];
    }

    map.set(nums[i], i);
  }
  return [];
}

const result1 = twoSum([2, 7, 11, 15], 9);
console.log(result1);
const result2 = twoSum([3, 2, 4], 6);
console.log(result2);
const result3 = twoSum([3, 3], 6);
console.log(result3);
