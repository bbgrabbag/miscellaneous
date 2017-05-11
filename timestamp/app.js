let TimeStampProb = function (n, t) {

    //callbacks and variables
    let members = [];
    let size = [];
    let timestamps = [];
    let sizeOfNodeAtTimestamps = [];
    let root = function (m) {
        while (members[m] !== m) {
            m = members[members[m]];
        }
        return m;
    };
    let connect = function (m, k) {
        let rootm = root(m);
        let rootk = root(k);
        if (rootm === rootk) {
            sizeOfNodeAtTimestamps.push(size[rootm]);
            return;
        };
        if (size[rootm] < size[rootk]) {
            members[rootm] = rootk;
            size[rootk] += size[rootm];
            sizeOfNodeAtTimestamps.push(size[rootk]);
        } else {
            members[rootk] = rootm;
            size[rootm] += size[rootk];
            sizeOfNodeAtTimestamps.push(size[rootm]);
        };
    };
    let generateRandomM = function () {
        return Math.floor(Math.random() * n);
    };
    let generateRandomK = function (m) {
        let k = Math.floor(Math.random() * n);
        while (m === k) {
            k = Math.floor(Math.random() * n);
        }
        return k;
    };
    let generateRandomDate = function () {
        return Math.floor(Math.random() * 10000);
    };
    let addTimestamp = function () {
        let m = generateRandomM();
        let k = generateRandomK(m);
        timestamps.push({
            index: timestamps.length,
            m: m,
            k: k
        });
    };

    //bootstrap methods
    this.generateMembers = function () {
        for (let i = 0; i < n; i++) {
            members.push(i);
            size.push(1);
        };
    };
    this.generateTimestamps = function () {
        for (let i = 0; i < t; i++) {
            addTimestamp();
        };
    };
    this.connectAll = function () {
        for (let i = 0; i < timestamps.length; i++) {
            let m = timestamps[i].m;
            let k = timestamps[i].k;
            let rootm = root(m);
            let rootk = root(k);
            connect(m, k);
        };
    };

    //display methods
    this.displayMembers = function () {
        console.log(`Members: ${members}`);
    };
    this.displayTimes = function () {
        for (let i = 0; i < timestamps.length; i++) {
            console.log(`\nIndex: ${timestamps[i].index}\nm: ${timestamps[i].m}\nk: ${timestamps[i].k}\n`
            );
        };
    }
    this.displaySizes = function () {
        console.log(`Sizes: ${size}`);
    };
    this.displaySizeOfNodeAtTime = function () {
        console.log(`Node Sizes at Timestamp: ${sizeOfNodeAtTimestamps}`);
    };

    //query methods
    this.findEarliestTime = function () {
        let largestGroup = 0;
        for (let i = 0; i < timestamps.length; i++) {
            let m = timestamps[i].m;
            let k = timestamps[i].k;
            let rootm = root(m);
            let rootk = root(k);
            connect(m, k);
            largestGroup = Math.max(size[rootm], size[rootk]);
            if (largestGroup === n) {
                console.log(`Network reached full connectivity at timestamp index ${i}\n`);
                return;
            };
        };
        console.log("Network has not reached full connectivity.\n");
    };
    this.findLargestMember = function (index) {
        if (index >= n) {
            console.log("That member does not exist.\n");
            return;
        };
        let largest = index;
        let rootIndex = root(index);
        for (let i = 0; i < members.length; i++) {
            if (root(i) === rootIndex && i > index) largest = i;
        };
        console.log(`Index of largest member belonging to group containing input index(${index}): ${largest}\n`);
        return;
    };
};





