//Instructions

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

//     array_diff([1, 2], [1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1, 2, 2, 2, 3], [2]) == [1, 3]

function array_diff(a, b) {
    if ((a.length === 0) && (b.length === 0)) {
        return []
    }
    else {
        if (a.length === 0) {
            return []
        }
        else {
            if (b.length === 0) {
                return a
            }
            else {
                let uniqueValue = []
                for (let i = 0; i < a.length; i++) {
                    let breakOutofThis = false
                    for (let j = 0; j < b.length; j++) {
                        if (a[i] === b[j]) {
                            breakOutofThis = true
                        }
                        else {
                            console.log("a value", a[i], "b value", b[j])
                            uniqueValue.push(a[i])
                        }
                        if (breakOutofThis) {
                            break
                        }
                    }
                }
                console.log("uniqueValue", uniqueValue)
                return uniqueValue
            }
        }
    }
}

let theAnswerIs = array_diff([], [1, 2])
if (typeof theAnswerIs !== 'undefined' | theAnswerIs !== null) {
    console.log("The Answer for Scenario 1", theAnswerIs)
}

theAnswerIs = array_diff([1, 2], [])
if (typeof theAnswerIs !== 'undefined' | theAnswerIs !== null) {
    console.log("The Answer for Scenario 2", theAnswerIs)
}

theAnswerIs = array_diff([], [])
if (typeof theAnswerIs !== 'undefined' | theAnswerIs !== null) {
    console.log("The Answer for Scenario 3", theAnswerIs)
}

theAnswerIs = array_diff([1, 2, 3, 4], [1])
if (typeof theAnswerIs !== 'undefined' | theAnswerIs !== null) {
    console.log("The Answer for Scenario 4", theAnswerIs)
}

theAnswerIs = array_diff([1, 1, 2, 3, 4], [1])
if (typeof theAnswerIs !== 'undefined' | theAnswerIs !== null) {
    console.log("The Answer for Scenario 5", theAnswerIs)
}

theAnswerIs = array_diff([1, 2, 2, 2, 3], [2])
if (typeof theAnswerIs !== 'undefined' | theAnswerIs !== null) {
    console.log("The Answer for Scenario 6", theAnswerIs)
}