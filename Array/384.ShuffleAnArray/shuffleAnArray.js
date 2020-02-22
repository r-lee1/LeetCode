/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    const numsCopy = nums.slice();
    this.numsCopy = numsCopy;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.numsCopy = this.nums.slice();
    return this.numsCopy;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {

    for (let currentIdx = 0; currentIdx < this.numsCopy.length; currentIdx++) {

       let temp = this.numsCopy[currentIdx];
       let randomIdx = this.getRandom(currentIdx, this.numsCopy.length - 1);

       if (currentIdx !== randomIdx) {
        this.numsCopy[currentIdx] = this.numsCopy[randomIdx];
        this.numsCopy[randomIdx] = temp;
       }

   }

    return this.numsCopy;
};

Solution.prototype.getRandom = function(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
