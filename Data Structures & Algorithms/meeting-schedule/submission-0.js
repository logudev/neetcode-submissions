/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    // Brute force - O(n^2)
    canAttendMeetingsBF(intervals) {
        for(let i=0;i<intervals.length;i++){
            const firstMeet = intervals[i];
            const {start: firstMeetStart, end: firstMeetEnd} = firstMeet;
            for(let j=i+1;j<intervals.length;j++){
                const secondMeet = intervals[j];
                const {start: secondMeetStart, end: secondMeetEnd} = secondMeet;

                // Compute max of start and min of end time and compare
                if(Math.max(firstMeetStart, secondMeetStart) < Math.min(firstMeetEnd, secondMeetEnd)){
                    return false;
                }
            }
        }
        return true;
    }
    // Sort and check the intervals array. Sort O(nlogn), Loop: O(n) => O(nlogn)+O(n)
    canAttendMeetings(intervals) {
        // Sort the intervals 
        intervals = intervals.sort((a,b) => a.start - b.start);

        // Iterate through and check if prev meeting end time is greater than current meeting start time
        for(let i=1;i<intervals.length;i++){
            let curr = intervals[i], prev=intervals[i-1];
            if(curr.start < prev.end){
                return false;
            }
        }
        return true;
    }
}
