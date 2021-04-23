/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [];
    queue.push([beginWord, 1]);
    let visited = new Set();

    // O(N)
    while (queue.length) {
        let currTuple = queue.shift();
        let currWord = currTuple[0];

        if (currWord === endWord) return currTuple[1];

        // Find all the generic transformation of current word; O(M)
        let genericTransformation = [];

        for (let i = 0;  i < currWord.length; i++) {
            let generic = currWord.split("");
            generic[i] = "*";
            genericTransformation.push(generic.join(""));
        }

        // Find words from wordList that can be transformed to match a generic transformation and add it to the queue; O(M^2N)
        for (let i = 0; i < genericTransformation.length; i++) {
            for (let word of wordList) {
                // Make sure the word has not been used already to prevent a cycle
                if (!visited.has(word)) {
                    let transformedWord = "";
                    for (let j = 0; j < word.length; j++) {
                        if (j === i) {
                            transformedWord += "*";
                        } else {
                            transformedWord += word[j];
                        }
                    }
                    // If there is a match, the word should be added with an incremented transformation count attached
                    if (transformedWord === genericTransformation[i]) {
                        queue.push([word, currTuple[1] + 1]);
                        visited.add(word);
                    }
                }
            }
        }
    }

    return 0;
};

/*
Time: O(M^2N^2) - M is str length, N is wordList size
Space: O(MN) - queue/visited

- Start from beginWord at level 1 pushed to a queue
- Get the currWord from queue
- Get the forms of all generic one character transformations from currWord
- Search wordList for words that match the generic forms and push it to the queue with level + 1
- Continue until queue is empty or endWord is found. Return level if word is found, or else return 0.
*/
