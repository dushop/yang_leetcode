/*
 * @file: js版本 第一题目：https://leetcode.com/problems/two-sum/
 * @version: 1.0.0
 * @author: yangguoqiang01
 * @LastEditors: yangguoqiang01
 * @Description: 
 * @Date: 2019-04-28 15:09:00
 * @LastEditTime: 2019-05-01 15:36:13
 */


/*
    假设里面有且只有一个正确答案，不会出现没有解的情况，所以其他情况不考虑

    Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1]

    Source : https://leetcode.com/problems/two-sum/
*/

/**
 * @explain 根据位置从前到后一个个遍历,再进行第二次遍历 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // nums[i] + nums[j]  == target
    for (var i = 0, len = nums.length; i < len; i++) {
        var Other = target - nums[i];
        for (var j = i + 1; j < len; j++) {
            if (nums[j] == Other) {
                return [i, j];
            }
        }
    }
};


/**
 * @explain 利用对象键的唯一性，给值赋值
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i];
        if (a[tmp] !== undefined) return [a[tmp], i];
        a[nums[i]] = i;
    }
};

/**
 * @explain 根据对象findIndex方法 劣势：不能及时return；
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const arrCons = nums.map((item, index, arr) => {
        const res = target - item;
        const $index = arr.findIndex(one => one === res);
        if($index > -1) {
            return [index, $index];
        }
    });
    return [...new Set(arrCons.flat())].filter(item => typeof item !== 'undefined');
};

// test: twoSum([2, 15, 11, 7], 9)