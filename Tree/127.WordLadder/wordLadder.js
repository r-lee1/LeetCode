/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const ladderLength = (beginWord, endWord, wordList) => {
    const allPossibleTransformations = {};
    const L = beginWord.length;
    const queue = [];
    const visited = new Set();

    // Create dictionary of all possible single character transformations from the given word list as key
    // and the matching words from list as value O(NM)
    for (let word of wordList) {
        for (let i = 0; i < L; i++) {
            let transformation = word.slice(0,i) + "*" + word.slice(i+1, L);
            let matches;
            allPossibleTransformations[transformation] ? matches = allPossibleTransformations[transformation] : matches = [];
            matches.push(word);
            allPossibleTransformations[transformation] = matches;
        }
    }

    queue.push([beginWord, 1]);
    visited.add(beginWord);
    // O(M^2N)
    while(queue.length) {
        let currTuple = queue.shift();
        let currWord = currTuple[0];
        let currLevel = currTuple[1];

        // For current word, get all possible transformation
        for (let i = 0; i < L; i++) {
            let transformation = currWord.slice(0,i) + "*" + currWord.slice(i+1, L);
            let matches = [];
            // Get marching words from dictionary
            matches = allPossibleTransformations[transformation];
            // Return if a word matches endWord or else add to queue if word hasn't been visited
            if (matches !== undefined) {
                for (word of matches) {
                    if (word === endWord) return currLevel + 1;
                    if (!visited.has(word)) {
                        queue.push([word, currLevel + 1]);
                        visited.add(word);
                    }
                }
            }
        }
    }

    return 0;
};

/*

Time: O(M^2N) - M is word length, N is words in wordList
Space: O(M^2N) - Dictionary. For every word, store as M keys and each key stores the word. So it takes M^2 space for every word

- Create a dictionary of
    - key: possible word forms with single character transformation (represented by a wildcard) for each word in the word list
    - value: words from the list that matches the single character transformation
- Create a queue that holds tuple of [word, level], starting with beginWord and level at 1
- Create a visited list for words used from the wordList to prevent a cycle
    - For each word in the queue
        - Get all the possible single character transformations
            - Look in dictionary for each transformation to get all the words from the list that matches
                - Go through the matched words
                    - if it is the endWord then return level + 1
                    - or if the word has not been vistied, add it to the queue as [word, level + 1]
                        - add word to visited
- Return 0 if endWord is not found

*/

// Solution below had a very slow runtime, but doesn't require space for a dictionary

// var ladderLength = function(beginWord, endWord, wordList) {
//     let queue = [];
//     queue.push([beginWord, 1]);
//     let visited = new Set();

//     //O(N(M^2+M^2))
//     while (queue.length) {
//         let currTuple = queue.shift();
//         let currWord = currTuple[0];

//         if (currWord === endWord) return currTuple[1];

//         // Find all the generic transformation of current word
//         let genericTransformation = [];

//         for (let i = 0;  i < currWord.length; i++) {
//             let generic = currWord.split("");
//             generic[i] = "*";
//             genericTransformation.push(generic.join(""));
//         }

//         // Find words from wordList that can be transformed to match a generic transformation and add it to the queue;
//         for (let i = 0; i < genericTransformation.length; i++) {
//             for (let word of wordList) {
//                 // Make sure the word has not been used already to prevent a cycle
//                 if (!visited.has(word)) {
//                     let transformedWord = "";
//                     for (let j = 0; j < word.length; j++) {
//                         if (j === i) {
//                             transformedWord += "*"
//                         } else {
//                             transformedWord += word[j];
//                         }
//                     }
//                     // If there is a match, the word should be added with an incremented transformation count attached
//                     if (transformedWord === genericTransformation[i]) {
//                         queue.push([word, currTuple[1] + 1]);
//                         visited.add(word);
//                     }
//                 }
//             }
//         }
//     }

//     return 0;
// };

// /*
// Time: O(N(M^2+M^2)) - M is str length, N is wordList size
// Space: O(MN) - queue/visited

// - Start from beginWord at level 1 pushed to a queue
// - Get the currWord from queue
// - Get the forms of all generic one character transformations from currWord
// - Search wordList for words that match the generic forms and push it to the queue with level + 1
// - Continue until queue is empty or endWord is found. Return level if word is found, or else return 0.
// */
