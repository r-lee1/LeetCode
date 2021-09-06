var minMeetingRooms = function(intervals) {
    if (intervals.length === 1) return 1;

    const latestTime = intervals.reduce((max, interval) => {
        return Math.max(max, interval[1]);
    }, 0);

    const meetingTracker = new Array(latestTime+1).fill(0);

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        for (let j = interval[0]; j < interval[1]; j++) {
            meetingTracker[j]++;
        }
    }

    return Math.max(...meetingTracker);
};

// Time: O(N^2), Space: O(M)