/**
 * @param {number[][]} intervals
 * @return {number}
 */

const minMeetingRooms = (intervals) => {

    intervals.sort((a,b) => a[0] - b[0]);
    const pq = [intervals[0][1]];

    for (let i = 1; i < intervals.length; i++) {
        const min = pq[0];
        const curr = intervals[i];

        if (curr[0] >= min) {
            pq.shift(); //
            pq.unshift(curr[1]);

            // bubble down
            let root = 0; // 0
            let left = root*2+1; // 1
            let right = root*2+2; // 2
            while(pq[left] < pq[root] || pq[right] < pq[root]) {
                if (pq[right] === undefined || pq[left] <= pq[right]) {
                    [pq[root], pq[left]] = [pq[left], pq[root]];
                    root = left;
                } else {

                   [pq[root], pq[right]] = [pq[right], pq[root]];
                    root = right;
                }
                left = root*2+1;
                right = root*2+2;
            }
        } else {
            pq.push(curr[1]);

            // bubble up
            let child = pq.length - 1;
            let parent = Math.floor((child - 1) / 2);
            while(pq[child] < pq[parent]) {
                [pq[child], pq[parent]] = [pq[parent], pq[child]];
                child = parent;
                parent = Math.floor((child - 1) / 2);
            }
        }
    }

    return pq.length;
};

// Using priority queue
// Time: O(NlogN) - sorting & N extract-min operations, Space: O(N) - min heap
// 1. Sort intervals by start time to get chronological order.
// 2. Create min heap with the meeting end time as key. Starting with intervals[0].
// 3. Loop through the intervals.
    // - If the start time is greater than or equal to the min end time. Pop the top value off and insert the end time of current meeting
    // - If not, then add the current meeting time to the min heap
// 4. Return min heap size as the number of meeting rooms needed.

//===========================

// const minMeetingRooms = (intervals) => {
//     const start = [];
//     const end = [];

//     for(let i = 0; i < intervals.length; i++) {
//         start.push(intervals[i][0]);
//         end.push(intervals[i][1]);
//     }

//     start.sort((a,b) => a-b);
//     end.sort((a,b) => a-b);

//     let p = 0;
//     let q = 0;
//     let rooms = 0;
//     let maxRooms = 0;

//     while (p < start.length) {
//         if (start[p] < end[q]) {
//             rooms++;
//             p++;
//         } else {
//             rooms--;
//             q++;
//         }
//         maxRooms = Math.max(rooms, maxRooms);
//     }

//     return maxRooms;
// }

// Time: O(NlogN) - sort, Space: O(N) - start times and end times array

// 1. Store all start times in a sorted array, this indicates when a meeting starts in chronological order
// 2. Store all end times in a sorted array, this indicates when a meeting ends in chronological order
// We can assume that when a meeting starts, a room is needed.
    // If there is a room that has freed up from a previous meeting ending then we can use the same room.
    // If there are no free rooms, then we need to add another room
// We know a room has freed up when a meeting has ended
// This means when a meeting start time >= a meeting end time, then a room has freed up
// 3. Have a start pointer i and end pointer j starting at idx 0 of their respective sorted array of times.
// 4. If start[i] < end[j] then add a room. increment i.
// 5. Else freed up a room. increment j.
// 6. Keep track of max rooms and return max rooms.

//=====================

// var minMeetingRooms = function(intervals) {
//     if (intervals.length === 1) return 1;

//     const latestTime = intervals.reduce((max, interval) => {
//         return Math.max(max, interval[1]);
//     }, 0)

//     const meetingTracker = new Array(latestTime+1).fill(0);

//     for (let i = 0; i < intervals.length; i++) {
//         const interval = intervals[i];
//         for (let j = interval[0]; j < interval[1]; j++) {
//             meetingTracker[j]++;
//         }
//     }

//     return Math.max(...meetingTracker);
// };

// // Time: O(N^2), Space: O(M)