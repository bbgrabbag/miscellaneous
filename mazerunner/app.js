var Mazerunner = function (n, prob) {
    var id = [];
    var sz = [];
    var position = [];
    var checked = [];
    var start = Math.floor(Math.random() * n);
    var end = Math.floor(Math.random() * n);
    var queue = [start];
    for (let i = 0; i < (n * n); i++) {
        id[i] = i;
        sz[i] = 1;
        position[i] = prob < Math.random();
        checked[i] = false;
    };
    position[start] = true;
    position[end + (n * (n - 1))] = true;
    var root = function (p) {
        while (p !== id[p]) {
            p = id[p];
        };
        return p;
    };
    var union = function (p, q) {
        if (position[q]) {
            var pid = root(p);
            var jid = root(q);
            if (pid === jid) return id;
            if (sz[pid] <= sz[jid]) {
                id[pid] = jid;
                sz[jid] += sz[pid];
            } else {
                id[jid] = pid;
                sz[pid] += sz[jid];
            }
            return id;
        }
    };
    var connectTop = function (x) {
        union(x, x - n);
    };
    var connectLeft = function (x) {
        union(x, x - 1);
    };
    var connectBottom = function (x) {
        union(x, x + n);
    };
    var connectRight = function (x) {
        union(x, x + 1);
    };
    this.checkForPath = function () {
        while (queue.length) {
            nextUp = queue.shift();
            checked[nextUp] = true;
            if ((nextUp - n >= 0) && position[nextUp - n] && !checked[nextUp - n]) {
                connectTop(nextUp);
                queue.push(nextUp - n);
            };
            if (!(nextUp % n === 0) && position[nextUp - 1] && !checked[nextUp - 1]) {
                connectLeft(nextUp);
                queue.push(nextUp - 1);
            };
            if (!((nextUp + 1) % n === 0) && position[nextUp + 1] && !checked[nextUp + 1]) {
                connectRight(nextUp);
                queue.push(nextUp + 1);
            };
            if ((nextUp + n) < (n * n) && position[nextUp + n] && !checked[nextUp + n]) {
                connectBottom(nextUp);
                queue.push(nextUp + n);
            };
        };
        console.log("Root of start:" + id[start]);
        console.log("Root of finish: " + id[end + (n * (n - 1))]);
        if (id[start] === id[end + (n * (n - 1))]) return true;
        return false;
    }
    this.logId = function (x) {
        console.log(`id(${x}): ${id[x]}`);
    }
    this.logSz = function (x) {
        console.log(`sz(${x}): ${sz[x]}`);
    }
    this.logGrid = function () {
        let grid = [];
        for (let i = 0; i < n; i++) {
            grid.push([]);
            for (let j = 0; j < n; j++) {
                position[(n * i) + j] ? grid[i].push([" "]) : grid[i].push(["X"]);
            };
        }
        grid[0][start][0] = "S";
        grid[n - 1][end][0] = "F";
        console.log("");
        console.log(grid);
        console.log("");
    };
};

