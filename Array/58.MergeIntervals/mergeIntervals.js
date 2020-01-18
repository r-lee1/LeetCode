// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:
//
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

function merge(intervals) {

  /*
  - Sort Intervals
  - Go through the list of Intervals:
    If the end time of the current interval is >==
    to the start time of the next, then the intervals need to be merged
  */
  if (intervals.length === 0) {
    return intervals;
  }

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const mergedIntervals = [];
  let startTime = intervals[0][0];
  let endTime = intervals[0][1];


  for (let i = 0; i < intervals.length; i++) {
    let nextStartTime = undefined;
    let nextEndTime = undefined;

    if (i !== intervals.length - 1) {
      nextStartTime = intervals[i+1][0];
      nextEndTime = intervals[i+1][1];
    }

//Check that current interval is not the last
//and end time greater than or equal to start time of next interval
    if (nextStartTime !== undefined && endTime >= nextStartTime) {
      endTime = Math.max(endTime, nextEndTime);
    } else {
      mergedIntervals.push([startTime, endTime]);
      startTime = nextStartTime;
      endTime = Math.max(endTime, nextEndTime);
    }
  }

  return mergedIntervals;
}
