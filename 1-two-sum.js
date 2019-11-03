// let nums = [11, 7, 2, 15],
//   target = 9
// var twoSum = function(nums, target) {
//   let back = []
//   nums.some((v, i) => {
//     let arr = nums.slice(i + 1, nums.length)
//     return arr.some((m, j) => {
//       if (target - v === m) {
//         back = [i, j + i + 1]
//         return true
//       }
//     })
//   })
//   return back
// }
// var a = twoSum(nums, target)
// console.log(a)

// let nums = [11, 7, 2, 15],
//   target = 9

// var twoSum = function(numbers, target) {
//   var map = []
//   for (var i = 0; i < numbers.length; i++) {
//     let v = numbers[i]
//     var def = target - v
//     if (map[def] !== undefined) {
//       return [map[def], i]
//     }
//     map[v] = i
//   }
// }

// var twoSum = function(nums, target) {
//   var temp = []
//   for (var i = 0; i < nums.length; i++) {
//     var dif = target - nums[i]
//     if (temp[dif] != undefined) {
//       return [temp[dif], i]
//     }
//     temp[nums[i]] = i
//   }
// }

// console.log(twoSum2([2, 7, 11, 15], 9))
// 优雅的代码
let nums = [11, 7, 2, 15],
  target = 9
var twoSum = function(nums, target) {
  let back = []
  nums.some((v, i) => {
    let other = target - v
    if (back[other] != undefined) {
      back = [back[other], i]
      return true
    }
    back[v] = i
  })
  return back
}
var a = twoSum(nums, target)
console.log(a)
