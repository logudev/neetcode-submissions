class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    // Using recursion
    climbStairsRecursion(n) {
        // Define base cases
        if(n == 1) return 1; // If only one step to cover, only 1 way possible
        if(n == 2) return 2; // If two steps to cover, two ways possible. Either climb 1 step twice or directly climb 2 steps

        // Return the logic for us to reach nth step
        // Either jump from n-1 step or jump from n-1 step
        return this.climbStairs(n-1) + this.climbStairs(n-2);

    }

    // Using DP
    climbStairs(n) {
        // Base condition
        // Ways to reach step 1
        if(n === 1) return 1;
        if(n === 2) return 2; // Climbing 1 step twice or climbing 2 steps once

        // Lets compute two flags for climbing from step 2 to step 3
        let waysToCurrStep = 2; // Current is step 2, so 2 ways
        let waysToPrevStep = 1; // Prev is step 1, so 1 way

        // Lets compute from step 3 to step n
        for(let i=3;i<=n;i++) {
            // Eg: Ways for climbing step 3 = ways for step1(prev) + ways for step2(curr)
            // curr will be 2, prev will be 1
            let waysToNextStep = waysToPrevStep+waysToCurrStep;

            // Slide the window for waysToCurrStep and waysToPrevStep
            // Eg: climbing step 3 to step 4, curr will be 3, prev will be 2
            waysToPrevStep = waysToCurrStep;
            waysToCurrStep = waysToNextStep;

        }
        return waysToCurrStep;
    }
}
