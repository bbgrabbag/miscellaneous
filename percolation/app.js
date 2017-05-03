var Percolation = function (n, prob) {
    var id = [];
    var sz = [];
    var position = [];
    for (let i = 0; i < (n * n); i++) {
        id[i] = i;
        sz[i] = 1;
        position[i] = prob < Math.random() ? true : false;
    };
    var root = function (p) {
        while (p !== id[p]) {
            p = id[id[p]];
        };
        return p;
    };
    var union = function (p, q) {
        if (position[q]) {
            var pid = root(p);
            var jid = root(q);
            if (pid === jid) return id;
            if (sz[pid] < sz[jid]) {
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
    this.checkPerc = function () {

        if (n === 1 && position[0]) return true;
        for (let i = 0; i < (n * n); i++) {
            if (!position[i]) continue;
            if ((i - n >= 0)) {
                connectTop(i);
            };
            if (!(i % n === 0)) {
                connectLeft(i);
            };
            if (!((i + 1) % n === 0)) {
                connectRight(i);
            };
            if ((i + n) < (n * n)) {
                connectBottom(i);
            };
            if ((i >= n * (n - 1)) && id[i] < n) return true;
        }
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
        console.log("");
        console.log(grid);
        console.log("");
    };
};

var simulation = new Percolation(7, .5);

simulation.logGrid();
console.log(simulation.checkPerc());
