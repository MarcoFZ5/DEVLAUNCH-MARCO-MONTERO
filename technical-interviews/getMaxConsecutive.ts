
function getMaxConsecutive(nums: number[]): number {
    let consecutiveDigits = 0
    let tempValues = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            tempValues += 1
        }
        if (tempValues >= consecutiveDigits) {
            consecutiveDigits = tempValues
        }
        if (nums[i] == 0) {
            tempValues = 0
        }
    }
    return consecutiveDigits
}

const nums = [1, 1, 0, 0, 1, 1, 1]
const nums1 = [1, 1, 0, 1, 1, 1, 1]
const nums2 = [1, 0, 0, 0, 0, 0, 1]
const nums3 = [1, 1, 1, 1, 1, 1, 1, 0]

console.log(getMaxConsecutive(nums))
console.log(getMaxConsecutive(nums1))
console.log(getMaxConsecutive(nums2))
console.log(getMaxConsecutive(nums3))
