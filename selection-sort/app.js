let SelectionSort = function (arr) {
    let sorted = [];
    this.sortDescending = function () {
        let copy = arr;
        for (let j = 0; j < copy.length; j++) {
            let indexOfHighestSoFar = 0;
            let highestSoFar = copy[0];
            for (let i = 0; i < copy.length; i++) {
                if (copy[i] > highestSoFar) {
                    highestSoFar = copy[i];
                    indexOfHighestSoFar = i;
                };
            };
            sorted.push(highestSoFar);
            copy.splice(indexOfHighestSoFar, 1);
            j--;
        };
    };
    this.sortAscending = function(){
        let copy = arr;
        for (let j = 0; j < copy.length; j++) {
            let indexOfLowestSoFar = 0;
            let lowestSoFar = copy[0];
            for (let i = 0; i < copy.length; i++) {
                if (copy[i] < lowestSoFar) {
                    lowestSoFar = copy[i];
                    indexOfLowestSoFar = i;
                };
            };
            sorted.push(lowestSoFar);
            copy.splice(indexOfLowestSoFar, 1);
            j--;
        };
    }
    this.log = function () {
        console.log(sorted);
    }
};