// hello world
// # Problem - The Snail
//
// Given an n x n array, write a method that returns the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// A good way to visualize this is to picture the spiral shell of a snail!
//
// ## JS Example
// ```js
// const arrayMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
//
// snail(arrayMatrix) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]
// ```
//
// ## Ruby Example
// ```rb
// arrayMatrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
//
// snail(arrayMatrix) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]
// ```

// The end result will be a returned array, will call it result
// declare an array that elements will be added to
// declare an n variable that will be the length of the arrays.
// If n > 0, add the first index of the first array to the result array
// If n > 1, add the second index of the first array to the result array
// If n > 2, add the third index of the first array to the result array
// We'll keep it same for now.
// If n > 1, add the last index of the second array
// If n > 2, add the last index of the third array
//
// etc. but I think I already see a better way.
//
// If n > 0, add all the elements of the first array
// If n > 0, add the last elements of arrays 2 through the the length of the parent array
// If n > 0, add all of the last array but in reverse order
// If n > 0, add the first element of the remaining arrays but in reverse order
// The outermost layer is now complete. Repeat until there is no inner element remaining.
// Return the result array.

const arrayMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// snailify = (grid) => {
//   let result = []
//   const n = grid.length
//   if (n > 0) {
//     grid[0].forEach(number => {
//       result.push(number)
//     })
//   }
//   if (n > 1) {
//     result.push(grid[1][n - 1])
//   }
//   if (n === 3) {
//     const lastArrayReversed = grid[n - 1].reverse() // n - 1 = 2
//     lastArrayReversed.forEach(number => {
//       result.push(number)
//     })
//     result.push(grid[1][0])
//     result.push(grid[1][1])
//   }
//   return result
// }
//
// console.log(snailify(arrayMatrix))

snailify = (grid) => {
  const n = grid.length
  const gridShells = {}
  const gridShellKeys = grid.splice(2).forEach((array, i) => {
    gridShells[i] = []
  })
  // create an array for the keys, take the indices of grid and then splice out the top half

  grid.forEach((array, i) => {
    gridShells[i] = []
  })


  return gridShells
}

console.log(snailify(arrayMatrix))

// do a commit once gridShells is completed

// 5 x 5
// {
//   1: [
//     [1, 2, 3, 4, 5],
//     [6, null, null, null, 10],
//     [11, null, null, null, 15],
//     [16, null, null, null, 20],
//     [21, 22, 23, 24, 25]
//   ],
//   2: [
//     [7, 8, 9],
//     [12, null, 14],
//     [17, 18, 19]
//   ],
//   3: [
//     13
//   ]
// }
//
// // 4 x 4
// {
//   1: [
//     [1, 2, 3, 4],
//     [5, null, null, 8],
//     [9, null, null, 12]
//     [13, 14, 15, 16]
//   ],
//   2: [
//     [6, 7],
//     [10, 11]
//   ],
// }
//
// // 3 x 3
// {
//   1: [
//     [1, 2, 3],
//     [4, null, 6],
//     [7, 8, 9]
//   ],
//   2: [
//     [5]
//   ]
// }
//
// // 2 x 2
// {
//   1: [
//     [1,2],
//     [3,4]
//   ]
// }
//
// // 1 x 1
// {
//   1: [1]
// }
